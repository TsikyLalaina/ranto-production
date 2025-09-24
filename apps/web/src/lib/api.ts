import { auth } from './firebase';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async getAuthToken(): Promise<string | null> {
    const user = auth.currentUser;
    if (user) {
      return await user.getIdToken();
    }
    return null;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = await this.getAuthToken();
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        'Accept-Language': this.getPreferredLanguage(),
        'X-User-Language': this.getPreferredLanguage(),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    return await response.json();
  }

  private getPreferredLanguage(): string {
    return localStorage.getItem('preferred-language') || 'fr';
  }

  // Auth endpoints
  async login(idToken: string) {
    return this.request<{user: any}>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ idToken }),
    });
  }

  async getProfile() {
    return this.request<{user: any}>('/auth/me');
  }

  async updateProfile(data: any) {
    return this.request<{user: any}>('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Business Profiles
  async getBusinessProfiles(params?: {
    page?: number;
    limit?: number;
    businessType?: string;
    region?: string;
    search?: string;
  }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return this.request<{profiles: any[], total: number, hasMore: boolean}>(
      `/business-profiles${query ? `?${query}` : ''}`
    );
  }

  async getBusinessProfile(id: string) {
    return this.request<{profile: any}>(`/business-profiles/${id}`);
  }

  async createBusinessProfile(data: any) {
    return this.request<{profile: any}>('/business-profiles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateBusinessProfile(id: string, data: any) {
    return this.request<{profile: any}>(`/business-profiles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async getOwnBusinessProfile() {
    return this.request<{profile: any}>('/business-profiles/user/me');
  }

  // Opportunities
  async getOpportunities(params?: {
    page?: number;
    limit?: number;
    type?: string;
    sectors?: string;
    countries?: string;
    minAmount?: number;
    maxAmount?: number;
    search?: string;
  }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return this.request<{opportunities: any[], total: number, hasMore: boolean}>(
      `/opportunities${query ? `?${query}` : ''}`
    );
  }

  async createOpportunity(data: any) {
    return this.request<{opportunity: any}>('/opportunities', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getMyOpportunities() {
    return this.request<{opportunities: any[]}>('/opportunities/user/me');
  }

  // Matching
  async findMatches(params?: {
    type?: 'businesses' | 'opportunities';
    limit?: number;
    sectors?: string;
  }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const query = searchParams.toString();
    return this.request<{matches: any[], total: number}>(
      `/matches/find${query ? `?${query}` : ''}`
    );
  }

  async createMatch(data: { targetUserId: string; opportunityId?: string; matchScore?: number; matchReasons?: string[] }) {
    return this.request<{match: any}>('/matches', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateMatchStatus(matchId: string, status: 'accepted' | 'rejected') {
    return this.request<{match: any}>(`/matches/${matchId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Messages
  async sendMessage(data: { receiverId: string; content: string; messageType?: string; fileUrl?: string }) {
    return this.request<{message: any}>('/messages', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getMessages(userId: string, page: number = 1, limit: number = 50) {
    return this.request<{messages: any[], total: number}>(
      `/messages?userId=${userId}&page=${page}&limit=${limit}`
    );
  }

  async getConversations() {
    return this.request<{conversations: any[]}>('/conversations');
  }

  // Uploads
  async uploadFile(file: File, type: 'profile' | 'business' | 'opportunity' | 'document', businessId?: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    if (businessId) {
      formData.append('businessId', businessId);
    }

    const token = await this.getAuthToken();
    const response = await fetch(`${this.baseUrl}/upload`, {
      method: 'POST',
      headers: {
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Upload failed' }));
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    return await response.json();
  }
}

export const api = new ApiClient();
export default api;