import { Home, PlaySquare, Heart, Video, Lock, Camera, Film } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    { icon: <PlaySquare size={20} />, label: 'Live Cams', href: '/meliax-cam' },
    { icon: <Heart size={20} />, label: 'OnlyFans', href: '/meliax-onlyfans' },
    { icon: <Video size={20} />, label: 'Stripchat', href: '/meliax-stripchat' },
    { icon: <Lock size={20} />, label: 'Leaks', href: '/meliax-leaks' },
    { icon: <Camera size={20} />, label: 'Nudes', href: '/meliax-nudes' },
    { icon: <Film size={20} />, label: 'Sex', href: '/meliax-sex' },
    { icon: <Camera size={20} />, label: 'Nackt', href: '/meliax-nackt' },
  ];

  const sidebarContent = (
    <>
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-24 px-6">Menu</h3>
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="flex items-center gap-4 px-6 py-3 hover:bg-red-900/20 text-gray-300 hover:text-red-500 transition-colors"
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
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
            {sidebarContent}
          </div>
        )}
      </>
    );
  }

  return (
    <aside className="hidden md:block w-64 bg-black border-r border-gray-800 h-screen fixed left-0 top-16 pt-4 overflow-y-auto pb-20">
      {sidebarContent}
    </aside>
  );
}