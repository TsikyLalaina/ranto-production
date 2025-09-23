import { Request, Response } from 'express';
import { dbManager } from '../config/database';
import { NotificationService } from '../services/notificationService';

interface AuthRequest extends Request {
  user?: {
    uid: string;
    email: string;
  };
}

export class MessagingController {
  private notificationService: NotificationService;

  constructor() {
    this.notificationService = NotificationService.getInstance();
  }

  public async sendMessage(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userUid = req.user?.uid;
      const { receiverId, content } = req.body;

      if (!userUid) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      if (!receiverId || !content) {
        res.status(400).json({ error: 'Receiver ID and content are required' });
        return;
      }

      const client = await dbManager.getClient();
      try {
        const senderQuery = 'SELECT user_id FROM users WHERE firebase_uid = $1';
        const senderResult = await client.query(senderQuery, [userUid]);

        if (senderResult.rows.length === 0) {
          res.status(404).json({ error: 'Sender user not found' });
          return;
        }

        const senderId = senderResult.rows[0].user_id;

        const receiverQuery = 'SELECT user_id FROM users WHERE user_id = $1';
        const receiverResult = await client.query(receiverQuery, [receiverId]);

        if (receiverResult.rows.length === 0) {
          res.status(404).json({ error: 'Receiver user not found' });
          return;
        }

        // Best-effort conversation handling (table may not exist in current schema)
        let conversationId: string | null = null;
        try {
          const conversationQuery = `
            SELECT id FROM conversations 
            WHERE (user1_id = $1 AND user2_id = $2) OR (user1_id = $2 AND user2_id = $1)
          `;
          const conversationResult = await client.query(conversationQuery, [senderId, receiverId]);

          if (conversationResult.rows.length === 0) {
            const createConversationQuery = `
              INSERT INTO conversations (user1_id, user2_id, created_at, updated_at)
              VALUES ($1, $2, NOW(), NOW())
              RETURNING id
            `;
            const newConversation = await client.query(createConversationQuery, [senderId, receiverId]);
            conversationId = newConversation.rows[0].id;
          } else {
            conversationId = conversationResult.rows[0].id;
          }
        } catch (e) {
          console.warn('Conversations table not available or query failed. Skipping conversation updates.');
        }

        const insertMessageQuery = `
          INSERT INTO messages (
            sender_id, receiver_id, content, is_read, created_at, updated_at, created_by
          ) VALUES ($1, $2, $3, false, NOW(), NOW(), $1)
          RETURNING *
        `;

        const messageResult = await client.query(insertMessageQuery, [
          senderId,
          receiverId,
          content
        ]);

        const message = messageResult.rows[0];

        if (conversationId) {
          try {
            const updateConversationQuery = `
              UPDATE conversations 
              SET last_message = $1, last_message_at = NOW(), updated_at = NOW()
              WHERE id = $2
            `;
            await client.query(updateConversationQuery, [content.substring(0, 100), conversationId]);
          } catch (e) {
            console.warn('Failed to update conversation metadata.');
          }
        }

        await this.notificationService.createMessageNotification(
          message.message_id,
          receiverId,
          senderId,
          content.substring(0, 50)
        );

        res.status(201).json({
          success: true,
          message: {
            id: message.message_id,
            senderId: message.sender_id,
            receiverId: message.receiver_id,
            content: message.content,
            // messageType and fileUrl are not present in schema; omitted
            isRead: message.is_read,
            createdAt: message.created_at,
            updatedAt: message.updated_at
          }
        });
      } finally {
        client.release();
      }
    } catch (error: any) {
      console.error('❌ Send message error:', error);
      res.status(500).json({ error: 'Failed to send message', details: error.message });
    }
  }

  public async getMessages(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userUid = req.user?.uid;
      const { userId: otherUserId, page = 1, limit = 50 } = req.query;

      if (!userUid) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      if (!otherUserId) {
        res.status(400).json({ error: 'User ID is required' });
        return;
      }

      const offset = (Number(page) - 1) * Number(limit);
      const client = await dbManager.getClient();

      try {
        const userQuery = 'SELECT user_id FROM users WHERE firebase_uid = $1';
        const userResult = await client.query(userQuery, [userUid]);

        if (userResult.rows.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
        }

        const currentUserId = userResult.rows[0].user_id;

        const messagesQuery = `
          SELECT 
            m.*,
            sender.firebase_uid as sender_firebase_uid,
            receiver.firebase_uid as receiver_firebase_uid
          FROM messages m
          JOIN users sender ON m.sender_id = sender.user_id
          JOIN users receiver ON m.receiver_id = receiver.user_id
          WHERE (
            (m.sender_id = $1 AND m.receiver_id = $2) OR 
            (m.sender_id = $2 AND m.receiver_id = $1)
          )
          ORDER BY m.created_at DESC
          LIMIT $3 OFFSET $4
        `;

        const result = await client.query(messagesQuery, [
          currentUserId,
          otherUserId,
          Number(limit),
          offset
        ]);

        const markReadQuery = `
          UPDATE messages 
          SET is_read = true, updated_at = NOW()
          WHERE receiver_id = $1 AND sender_id = $2 AND is_read = false
        `;
        await client.query(markReadQuery, [currentUserId, otherUserId]);

        res.json({
          success: true,
          messages: result.rows.map((row: any) => ({
            id: row.message_id,
            senderId: row.sender_id,
            receiverId: row.receiver_id,
            senderFirebaseUid: row.sender_firebase_uid,
            receiverFirebaseUid: row.receiver_firebase_uid,
            content: row.content,
            isRead: row.is_read,
            createdAt: row.created_at,
            updatedAt: row.updated_at
          }))
        });
      } finally {
        client.release();
      }
    } catch (error: any) {
      console.error('❌ Get messages error:', error);
      res.status(500).json({ error: 'Failed to get messages', details: error.message });
    }
  }

  public async getConversations(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userUid = req.user?.uid;
      if (!userUid) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      const client = await dbManager.getClient();
      try {
        const userQuery = 'SELECT user_id FROM users WHERE firebase_uid = $1';
        const userResult = await client.query(userQuery, [userUid]);

        if (userResult.rows.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
        }

        const userId = userResult.rows[0].user_id;

        const conversationsQuery = `
          SELECT 
            c.id,
            c.user1_id,
            c.user2_id,
            c.last_message,
            c.last_message_at,
            c.created_at,
            c.updated_at,
            CASE 
              WHEN c.user1_id = $1 THEN u2.firebase_uid
              ELSE u1.firebase_uid
            END as other_user_firebase_uid,
            CASE 
              WHEN c.user1_id = $1 THEN bp2.business_name
              ELSE bp1.business_name
            END as other_user_business_name,
            CASE 
              WHEN c.user1_id = $1 THEN bp2.logo_url
              ELSE bp1.logo_url
            END as other_user_logo_url,
            COUNT(CASE WHEN m.receiver_id = $1 AND m.is_read = false THEN 1 END) as unread_count
          FROM conversations c
          JOIN users u1 ON c.user1_id = u1.user_id
          JOIN users u2 ON c.user2_id = u2.user_id
          JOIN business_profiles bp1 ON c.user1_id = bp1.user_id
          JOIN business_profiles bp2 ON c.user2_id = bp2.user_id
          LEFT JOIN messages m ON (
            (m.sender_id = c.user1_id AND m.receiver_id = c.user2_id) OR
            (m.sender_id = c.user2_id AND m.receiver_id = c.user1_id)
          )
          WHERE c.user1_id = $1 OR c.user2_id = $1
          GROUP BY c.id, c.user1_id, c.user2_id, c.last_message, c.last_message_at, 
                   c.created_at, c.updated_at, u1.firebase_uid, u2.firebase_uid,
                   bp1.business_name, bp2.business_name, bp1.logo_url, bp2.logo_url
          ORDER BY c.last_message_at DESC NULLS LAST
        `;

        const result = await client.query(conversationsQuery, [userId]);

        res.json({
          success: true,
          conversations: result.rows.map((row: any) => ({
            id: row.id,
            otherUserFirebaseUid: row.other_user_firebase_uid,
            otherUserBusinessName: row.other_user_business_name,
            otherUserLogoUrl: row.other_user_logo_url,
            lastMessage: row.last_message,
            lastMessageAt: row.last_message_at,
            unreadCount: parseInt(row.unread_count) || 0,
            createdAt: row.created_at,
            updatedAt: row.updated_at
          }))
        });
      } finally {
        client.release();
      }
    } catch (error: any) {
      console.error('❌ Get conversations error:', error);
      res.status(500).json({ error: 'Failed to get conversations', details: error.message });
    }
  }

  public async markMessagesAsRead(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userUid = req.user?.uid;
      const { senderId } = req.body;

      if (!userUid) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      if (!senderId) {
        res.status(400).json({ error: 'Sender ID is required' });
        return;
      }

      const client = await dbManager.getClient();
      try {
        const userQuery = 'SELECT user_id FROM users WHERE firebase_uid = $1';
        const userResult = await client.query(userQuery, [userUid]);

        if (userResult.rows.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
        }

        const receiverId = userResult.rows[0].user_id;

        const countsQuery = `
          SELECT 
            COUNT(*)::int AS total,
            SUM(CASE WHEN is_read = false THEN 1 ELSE 0 END)::int AS unread
          FROM messages
          WHERE sender_id = $1 AND receiver_id = $2
        `;

        const before = await client.query(countsQuery, [senderId, receiverId]);
        const totalBefore = before.rows[0]?.total ?? 0;
        const unreadBefore = before.rows[0]?.unread ?? 0;

        const updateQuery = `
          UPDATE messages 
          SET is_read = true, updated_at = NOW()
          WHERE sender_id = $1 AND receiver_id = $2 AND is_read = false
        `;
        const result = await client.query(updateQuery, [senderId, receiverId]);

        const after = await client.query(countsQuery, [senderId, receiverId]);
        const totalAfter = after.rows[0]?.total ?? 0;
        const unreadAfter = after.rows[0]?.unread ?? 0;

        res.json({
          success: true,
          updatedCount: result.rowCount || 0,
          diagnostics: {
            senderId,
            receiverId,
            totalBefore,
            unreadBefore,
            totalAfter,
            unreadAfter
          }
        });
      } finally {
        client.release();
      }
    } catch (error: any) {
      console.error('❌ Mark messages as read error:', error);
      res.status(500).json({ error: 'Failed to mark messages as read', details: error.message });
    }
  }

  public async deleteMessage(req: AuthRequest, res: Response): Promise<void> {
    try {
      const userUid = req.user?.uid;
      const { id } = req.params;

      if (!userUid) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      const client = await dbManager.getClient();
      try {
        const userQuery = 'SELECT user_id FROM users WHERE firebase_uid = $1';
        const userResult = await client.query(userQuery, [userUid]);

        if (userResult.rows.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
        }

        const userId = userResult.rows[0].user_id;

        const deleteQuery = `
          DELETE FROM messages 
          WHERE message_id = $1 AND (sender_id = $2 OR receiver_id = $2)
          RETURNING message_id
        `;

        const result = await client.query(deleteQuery, [id, userId]);

        if (result.rows.length === 0) {
          res.status(404).json({ error: 'Message not found' });
          return;
        }

        res.json({ success: true, message: 'Message deleted successfully' });
      } finally {
        client.release();
      }
    } catch (error: any) {
      console.error('❌ Delete message error:', error);
      res.status(500).json({ error: 'Failed to delete message', details: error.message });
    }
  }
}
