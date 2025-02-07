import Link from 'next/link';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import AdBannerFooter from './AdBannerFooter';
import AdBannerHeader from './AdBannerHeader';

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 mt-16">
      <div className="main-content ">
      
        <AdBannerHeader />
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo und Social Links */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <span className="text-xl font-bold text-red-600">MeliaX-porn</span>
              </Link>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/lia.the.real"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@me.lia.x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FaTiktok size={24} />
                </a>
                <a 
                  href="https://twitter.com/me_lia_x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/impressum" className="text-gray-400 hover:text-red-500 transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-400 hover:text-red-500 transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-gray-400 hover:text-red-500 transition-colors">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MeliaX-porn. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 