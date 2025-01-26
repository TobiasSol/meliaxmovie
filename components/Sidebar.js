import { Home, PlaySquare, Heart, Video, Lock, Camera, Film } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AdBannerSidebar from './AdBannerSidebar';

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', href: '/' },
    { icon: <Camera size={20} />, label: 'Nackt', href: '/meliax-nackt' },
    { icon: <Film size={20} />, label: 'Sex', href: '/meliax-sex' },
    { icon: <Camera size={20} />, label: 'Nudes', href: '/meliax-nudes' },
    { icon: <Lock size={20} />, label: 'Leaks', href: '/meliax-leaks' },
    { icon: <PlaySquare size={20} />, label: 'Live Cams', href: '/meliax-cam' },
    { icon: <Heart size={20} />, label: 'OnlyFans', href: '/meliax-onlyfans' },
    { icon: <Video size={20} />, label: 'Stripchat', href: '/meliax-stripchat' },


    
  ];

  const sidebarContent = (
    <>
      <div className="mb-8">
        <h3 className="text-gray-400 text-xl font-medium mb-20 md:mt-20 xl:mt-8 px-6 text-red-600">MELIAX PORN</h3>
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="flex items-center gap-4 px-6 py-3 hover:bg-red-900/20 text-gray-300 hover:text-red-500 transition-colors"
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            {item.icon}
            <span className="text-md">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 md:hidden overflow-y-auto pt-16">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                {sidebarContent}
              </div>
              {/* Banner am Ende des mobilen Menüs */}
              <AdBannerSidebar />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0`}>
      <div className="flex flex-col h-full px-3 py-4 bg-black border-r border-gray-800">
        <div className="flex-grow">
          {sidebarContent}
        </div>
        <AdBannerSidebar />
      </div>
    </aside>
  );
}