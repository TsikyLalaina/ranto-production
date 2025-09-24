import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { api } from '../lib/api';

export interface UserProfile {
  id: string;
  firebaseUid: string;
  email: string;
  displayName: string;
  phone?: string;
  role: 'entrepreneur' | 'admin' | 'partner';
  preferredLanguage: 'fr' | 'mg' | 'en';
  avatarUrl?: string;
  createdAt: string;
  lastLoginAt?: string;
}

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, displayName: string) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName });
    
    // Get ID token and register with backend
    const idToken = await user.getIdToken();
    await api.login(idToken);
    
    await refreshProfile();
  }

  async function login(email: string, password: string) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    
    // Send ID token to backend
    const idToken = await user.getIdToken();
    await api.login(idToken);
    
    await refreshProfile();
  }

  async function logout() {
    await signOut(auth);
    setUserProfile(null);
  }

  async function updateUserProfile(data: Partial<UserProfile>) {
    if (!currentUser) return;
    
    await api.updateProfile(data);
    await refreshProfile();
  }

  async function refreshProfile() {
    if (!currentUser) return;
    
    try {
      const response = await api.getProfile();
      setUserProfile(response.user);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // User is signed in, get profile from backend
        try {
          const idToken = await user.getIdToken();
          await api.login(idToken);
          await refreshProfile();
        } catch (error) {
          console.error('Failed to sync with backend:', error);
        }
      } else {
        // User is signed out
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    userProfile,
    loading,
    signup,
    login,
    logout,
    updateUserProfile,
    refreshProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook for checking if user has specific role
export function useRequireRole(allowedRoles: string[]) {
  const { userProfile } = useAuth();
  
  return userProfile && allowedRoles.includes(userProfile.role);
}

// Hook for portal-specific access
export function usePortalAccess() {
  const { userProfile } = useAuth();
  
  const canAccessExporter = userProfile?.role === 'entrepreneur' || userProfile?.role === 'admin';
  const canAccessBuyer = userProfile?.role === 'partner' || userProfile?.role === 'admin';
  const canAccessBank = userProfile?.role === 'partner' || userProfile?.role === 'admin';
  const canAccessAdmin = userProfile?.role === 'admin';
  
  return {
    canAccessExporter,
    canAccessBuyer,
    canAccessBank,
    canAccessAdmin,
  };
}