import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminTabs from '../../components/AdminTabs';
import VideoManagement from '../../components/VideoManagement';

export default function AdminVideos() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#e3cbaa]">Video Verwaltung</h1>
        </div>

        <AdminTabs activeTab="videos" />
        <VideoManagement />
      </div>
    </div>
  );
} 