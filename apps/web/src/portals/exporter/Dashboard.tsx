import { useState, useEffect } from 'react';
import { 
  BuildingOfficeIcon, 
  MagnifyingGlassIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  PlusIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../lib/api';

interface DashboardStats {
  totalSuppliers: number;
  activeMatches: number;
  unreadMessages: number;
  opportunities: number;
}

export default function ExporterDashboard() {
  const { userProfile } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalSuppliers: 0,
    activeMatches: 0,
    unreadMessages: 0,
    opportunities: 0
  });
  const [recentMatches, setRecentMatches] = useState([]);
  const [businessProfile, setBusinessProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      setLoading(true);
      
      // Load business profile
      try {
        const profileResponse = await api.getOwnBusinessProfile();
        setBusinessProfile(profileResponse.profile);
      } catch (error) {
        // No business profile yet
        console.log('No business profile found');
      }

      // Load suppliers (business profiles)
      const suppliersResponse = await api.getBusinessProfiles({ limit: 5 });
      
      // Load matches
      const matchesResponse = await api.findMatches({ type: 'businesses', limit: 5 });
      setRecentMatches(matchesResponse.matches || []);

      // Load opportunities
      const opportunitiesResponse = await api.getMyOpportunities();

      setStats({
        totalSuppliers: suppliersResponse.total || 0,
        activeMatches: matchesResponse.total || 0,
        unreadMessages: 0, // TODO: Get from messaging API
        opportunities: opportunitiesResponse.opportunities?.length || 0
      });
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏭</span>
              <h1 className="text-xl font-semibold text-gray-900">
                Exporter Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <BellIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {userProfile?.displayName?.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-gray-700">{userProfile?.displayName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {userProfile?.displayName}!
          </h2>
          <p className="text-gray-600">
            Find suppliers, manage opportunities, and grow your export business.
          </p>
        </div>

        {/* Business Profile CTA */}
        {!businessProfile && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-blue-900 mb-2">
                  Complete Your Business Profile
                </h3>
                <p className="text-blue-700">
                  Create your business profile to start finding suppliers and opportunities.
                </p>
              </div>
              <button className="btn-primary">
                <PlusIcon className="w-5 h-5 mr-2" />
                Create Profile
              </button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Suppliers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSuppliers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <ChartBarIcon className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Matches</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeMatches}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">{stats.unreadMessages}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <MagnifyingGlassIcon className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Opportunities</p>
                <p className="text-2xl font-bold text-gray-900">{stats.opportunities}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Find Suppliers
            </h3>
            <p className="text-gray-600 mb-4">
              Search and connect with verified suppliers in Madagascar.
            </p>
            <button className="btn-primary w-full">
              <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
              Search Suppliers
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              AI Recommendations
            </h3>
            <p className="text-gray-600 mb-4">
              Get AI-powered supplier matches based on your needs.
            </p>
            <button className="btn-secondary w-full">
              <ChartBarIcon className="w-5 h-5 mr-2" />
              View Matches
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Messages
            </h3>
            <p className="text-gray-600 mb-4">
              Communicate with suppliers and partners.
            </p>
            <button className="btn-secondary w-full">
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              View Messages
            </button>
          </div>
        </div>

        {/* Recent Matches */}
        {recentMatches.length > 0 && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Recent AI Matches
              </h3>
              <p className="text-gray-600">
                Suppliers that match your business needs
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentMatches.slice(0, 5).map((match: any, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <BuildingOfficeIcon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {match.name || 'Supplier Name'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Match Score: {match.score || 0}%
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-sm">
                        View Profile
                      </button>
                      <button className="btn-primary text-sm">
                        Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}