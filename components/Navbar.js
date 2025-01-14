import { Menu } from 'lucide-react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import AdBannerHeader from './AdBannerHeader';

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50 relative overflow-hidden">
      {/* Glanzeffekt Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-shine-navbar">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent transform -skew-x-12" />
        </div>
      </div>

      {/* Desktop Navigation (lg) */}
      <div className="hidden lg:flex items-center justify-between h-32 px-4 z-10">
        <div className="flex items-center gap-4">
          <Menu 
            className="text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={32}
          />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-600">MeliaX-porn</span>
          </Link>
        </div>

        <div className="flex-1 max-w-5xl mx-auto px-8 py-2">
          <AdBannerHeader />
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/me.lia.x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <FaInstagram size={32} />
          </a>
          <a 
            href="https://www.tiktok.com/@me.lia.x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <FaTiktok size={32} />
          </a>
          <a 
            href="https://twitter.com/me_lia_x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </div>

      {/* Tablet Navigation (md) */}
      <div className="hidden md:flex lg:hidden flex-col h-40 z-10">
        <div className="flex items-center justify-between px-4 h-12  border-gray-800">
          <div className="flex items-center gap-4">
            <Menu 
              className="text-gray-400 cursor-pointer hover:text-red-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              size={28}
            />
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-red-600">MeliaX-porn</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/me.lia.x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaInstagram size={28} />
            </a>
            <a 
              href="https://www.tiktok.com/@me.lia.x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaTiktok size={28} />
            </a>
            <a 
              href="https://twitter.com/me_lia_x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            <AdBannerHeader />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col h-36 relative">
        <div className="flex items-center justify-between px-4 h-12">
          <div className="flex items-center gap-4">
            <Menu 
              className="text-gray-400 cursor-pointer hover:text-red-500" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              size={24}
            />
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-red-600">MeliaX-porn</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/me.lia.x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://twitter.com/me_lia_x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@me.lia.x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaTiktok size={28} />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-2">
          <div className="w-full">
            <AdBannerHeader />
          </div>
        </div>
      </div>
    </nav>
  );
}