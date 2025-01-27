import { Menu } from 'lucide-react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import AdBannerHeader from './AdBannerHeader';

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50 relative overflow-hidden pb-8">
      {/* Glanzeffekt Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-shine-navbar">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent transform -skew-x-12" />
        </div>
      </div>

      {/* Desktop Navigation (lg) */}
      <div className="hidden xl:flex items-center px-4 z-50 py-1 ">
        <div className="flex items-center gap-4 2xl:ml-6">
          <Menu 
            className="text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={32}
          />
          <Link href="/" className="flex items-center gap-2 ">
            <span className="text-2xl font-bold text-red-600">MeliaX-porn</span>
          </Link>
        </div>

        <div className="flex-1 max-w-5xl mx-auto ">
          <AdBannerHeader />
        </div>

        <div className="w-[200px] ">
          <div className="flex flex-col items-center xl:mr-2 2xl:mr-10">
            <div className="text-center mb-2">
              <span className="flex flex-col	 items-center gap-2">
                <span className="text-sm  xl:text-md font-semi animate-colorChange whitespace-nowrap">
                  FOLG MIR 
                </span>
                <span className="text-sm  xl:text-md font-semi animate-colorChange whitespace-nowrap">
                  FÜR SEXY CONTENT ❤️
                </span>
              
          
              </span>
            </div>
            <div className="flex items-center gap-6 justify-center ">
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
        </div>
      </div>

      {/* Tablet Navigation (md) */}
      <div className="hidden md:flex xl:hidden flex-col z-10">
        <div className="flex items-center justify-between px-4 py-2 border-gray-800">
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

          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="flex items-center gap-2">
                <span className="text-sm font-semi animate-colorChange whitespace-nowrap">
                  FOLG MIR FÜR SEXY CONTENT
                </span>
                <span className="text-red-500 animate-pulse">❤️</span>
              </span>
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
        </div>
        <div className="flex items-center justify-center px-4 -mt-1 ">
          <div className="w-full max-w-3xl ">
            <AdBannerHeader />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col  relative pt-2 pb-4">
        <div className="flex items-center justify-between px-4 ">
          <div className="flex items-center gap-4 py-2">
            <Menu 
              className="text-gray-400 cursor-pointer hover:text-red-500" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              size={24}
            />
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-red-600">MeliaX-porn</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 py-2">
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

        <div className="">
          <div className="w-full ">
            <AdBannerHeader />
          </div>
        </div>
      </div>
    </nav>
  );
}