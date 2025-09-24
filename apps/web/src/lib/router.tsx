import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, usePortalAccess } from '../contexts/AuthContext';

// Portal routing logic based on subdomain or path
export function usePortalRouting() {
  const location = useLocation();
  const hostname = window.location.hostname;
  
  // Determine current portal based on subdomain or path
  const getPortalFromDomain = () => {
    if (hostname.includes('export.')) return 'exporter';
    if (hostname.includes('buy.')) return 'buyer';
    if (hostname.includes('finance.')) return 'bank';
    if (hostname.includes('admin.')) return 'admin';
    if (hostname.includes('m.')) return 'farmer';
    return 'public';
  };

  const getPortalFromPath = () => {
    const path = location.pathname;
    if (path.startsWith('/export')) return 'exporter';
    if (path.startsWith('/buyer')) return 'buyer';
    if (path.startsWith('/bank')) return 'bank';
    if (path.startsWith('/admin')) return 'admin';
    if (path.startsWith('/farmer')) return 'farmer';
    return 'public';
  };

  // Use subdomain first, fallback to path
  const currentPortal = getPortalFromDomain() !== 'public' 
    ? getPortalFromDomain() 
    : getPortalFromPath();

  return {
    currentPortal,
    isPublicPortal: currentPortal === 'public',
    isExporterPortal: currentPortal === 'exporter',
    isBuyerPortal: currentPortal === 'buyer',
    isBankPortal: currentPortal === 'bank',
    isAdminPortal: currentPortal === 'admin',
    isFarmerPortal: currentPortal === 'farmer',
  };
}

// Protected route wrapper
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
  portal?: 'exporter' | 'buyer' | 'bank' | 'admin';
}

export function ProtectedRoute({ children, requiredRoles, portal }: ProtectedRouteProps) {
  const { currentUser, userProfile } = useAuth();
  const { canAccessExporter, canAccessBuyer, canAccessBank, canAccessAdmin } = usePortalAccess();
  const location = useLocation();

  if (!currentUser) {
    // Redirect to login with return path
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  if (!userProfile) {
    // Still loading profile
    return <div>Loading...</div>;
  }

  // Check role requirements
  if (requiredRoles && !requiredRoles.includes(userProfile.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Check portal access
  if (portal === 'exporter' && !canAccessExporter) {
    return <Navigate to="/unauthorized" replace />;
  }
  if (portal === 'buyer' && !canAccessBuyer) {
    return <Navigate to="/unauthorized" replace />;
  }
  if (portal === 'bank' && !canAccessBank) {
    return <Navigate to="/unauthorized" replace />;
  }
  if (portal === 'admin' && !canAccessAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}

// Public route that redirects authenticated users to their dashboard
interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { currentUser, userProfile } = useAuth();
  const location = useLocation();

  if (currentUser && userProfile && location.pathname === '/login') {
    // Redirect to appropriate dashboard based on role
    switch (userProfile.role) {
      case 'admin':
        return <Navigate to="/admin/dashboard" replace />;
      case 'partner':
        return <Navigate to="/buyer/dashboard" replace />;
      case 'entrepreneur':
        return <Navigate to="/export/dashboard" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}

// Portal theme provider
export function getPortalTheme(portal: string) {
  const themes = {
    exporter: {
      primary: 'blue',
      accent: 'green',
      className: 'exporter-theme',
    },
    buyer: {
      primary: 'navy',
      accent: 'gold',
      className: 'buyer-theme',
    },
    bank: {
      primary: 'gray',
      accent: 'green',
      className: 'bank-theme',
    },
    admin: {
      primary: 'red',
      accent: 'gray',
      className: 'admin-theme',
    },
    farmer: {
      primary: 'green',
      accent: 'yellow',
      className: 'farmer-theme',
    },
    public: {
      primary: 'blue',
      accent: 'green',
      className: 'public-theme',
    },
  };

  return themes[portal as keyof typeof themes] || themes.public;
}