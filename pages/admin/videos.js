import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminTabs from '../../components/AdminTabs';
import VideoManagement from '../../components/VideoManagement';

export default function AdminVideos() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      try {
        // Validiere den Token mit einem API-Call
        const response = await fetch('/api/admin/verify-token', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Token ungültig');
        }

        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth error:', error);
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#e3cbaa]">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Router wird uns zur Login-Seite weiterleiten
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#e3cbaa]">Video Verwaltung</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <AdminTabs activeTab="videos" />
        <VideoManagement />
      </div>
    </div>
  );
}