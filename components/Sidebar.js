import { Home, Flame, Clock, ThumbsUp, PlaySquare, History, Heart, ShoppingBag, Gift, Settings, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { icon: <Flame size={20} />, label: 'Trending', href: '/' },
    { icon: <Clock size={20} />, label: 'Newest', href: '/' },
    { icon: <ThumbsUp size={20} />, label: 'Most Liked', href: '/' },
    { icon: <PlaySquare size={20} />, label: 'My Videos', href: '/' },
    { icon: <History size={20} />, label: 'History', href: '/' },
  ];

  const subscriptionItems = [
    { icon: <Heart size={20} />, label: 'Premium', href: '/' },
    { icon: <ShoppingBag size={20} />, label: 'Shop', href: '/' },
    { icon: <Gift size={20} />, label: 'Wishlist', href: '/' },
  ];

  const sidebarContent = (
    <>
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-2 px-6">Menu</h3>
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

      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-2 px-6">Premium Content</h3>
        {subscriptionItems.map((item, index) => (
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
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-4 rounded-full shadow-lg md:hidden"
        >
          <Menu size={24} />
        </button>

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