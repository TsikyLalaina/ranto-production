import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute, PublicRoute } from './lib/router';

// Pages
import EnhancedLandingPage from './pages/EnhancedLandingPage';
import LoginPage from './pages/auth/LoginPage';
import ExporterDashboard from './portals/exporter/Dashboard';

import './styles/index.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<EnhancedLandingPage />} />
              <Route 
                path="/login" 
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                } 
              />
              
              {/* Exporter Portal */}
              <Route 
                path="/export/dashboard" 
                element={
                  <ProtectedRoute portal="exporter">
                    <ExporterDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback for unmatched routes */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-gray-600 mb-8">Page not found</p>
                    <a href="/" className="btn-primary">Go Home</a>
                  </div>
                </div>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
