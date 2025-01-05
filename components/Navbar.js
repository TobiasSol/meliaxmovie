import { Search, Bell, User, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-black border-b border-gray-800 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center h-full px-4">
        <div className="flex items-center gap-4">
          <Menu className="text-gray-400 cursor-pointer hover:text-red-500" />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-600">MeliaX-porn</span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-auto">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full bg-gray-900 border border-gray-700 rounded-l px-4 py-2 text-gray-200 focus:outline-none focus:border-red-500"
            />
            <button className="bg-gray-800 px-6 py-2 rounded-r border-y border-r border-gray-700 text-gray-400 hover:text-red-500">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell className="text-gray-400 cursor-pointer hover:text-red-500" />
          <User className="text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-2">
          <Menu className="text-gray-400 cursor-pointer hover:text-red-500" />
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-red-600">MeliaX</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-400 hover:text-red-500"
          >
            <Search size={20} />
          </button>
          <User className="text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black p-4 border-b border-gray-800">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full bg-gray-900 border border-gray-700 rounded-l px-4 py-2 text-gray-200 focus:outline-none focus:border-red-500"
              autoFocus
            />
            <button className="bg-gray-800 px-4 py-2 rounded-r border-y border-r border-gray-700 text-gray-400 hover:text-red-500">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}