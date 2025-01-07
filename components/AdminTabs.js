import { useState } from 'react';
import Link from 'next/link';
import { Video, Image, Radio, LayoutDashboard } from 'lucide-react';

export default function AdminTabs({ activeTab }) {
  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      href: '/admin'
    },
    {
      id: 'videos',
      label: 'Videos',
      icon: <Video size={20} />,
      href: '/admin/videos'
    },
    {
      id: 'nudes',
      label: 'Nudes',
      icon: <Image size={20} />,
      href: '/admin/nudes'
    },
    {
      id: 'livecams',
      label: 'Livecams',
      icon: <Radio size={20} />,
      href: '/admin/livecams'
    }
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg mb-8">
      <div className="flex space-x-2 overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`flex items-center px-4 py-2 rounded-md transition-colors
              ${activeTab === tab.id 
                ? 'bg-[#d0b48f] text-black' 
                : 'text-[#d0b48f] hover:bg-gray-800'}`}
          >
            {tab.icon}
            <span className="ml-2">{tab.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 