import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";
import ImageGallery from "../components/ImageGallery";

export default function LeaksPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All', 'Latest', 'Popular', 'Exclusive', 'Premium'
  ];

  const images = [
    {
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX exklusive Leaks und private Aufnahmen - Premium Content'
    },
    {
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Premium Leaks und unveröffentlichte Bilder - Exklusiv Material'
    },
    {
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX private Sammlung - Leaked Content'
    },
    {
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX unveröffentlichte Premium Fotos - Exclusive Collection'
    },
    {
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX private Leaks - Neue Aufnahmen'
    },
    {
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX exklusive Sammlung - Premium Leaks'
    },
    {
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX private Galerie - Exklusive Einblicke'
    },
    {
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Premium Content - Neue Leaks'
    },
    {
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX unveröffentlichte Leaks - Private Collection'
    },
    {
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX exklusive Updates - Premium Galerie'
    },
    {
      src: '/leaks/meliax leak (11).jpg',
      alt: 'MeliaX private Premium Leaks - Neue Bilder'
    },
    {
      src: '/leaks/meliax leak (12).jpg',
      alt: 'MeliaX Leak Collection - Exklusive Aufnahmen'
    },
    {
      src: '/leaks/meliax leak (13).jpg',
      alt: 'MeliaX Premium Bildergalerie - Private Leaks'
    },
    {
      src: '/leaks/meliax leak (14).jpg',
      alt: 'MeliaX exklusive Premium Leaks - Neue Updates'
    }
  ];

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/admin/videos');
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Leaks - Exklusive Inhalte & Private Videos | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Leaks mit exklusiven Inhalten und privaten Videos. Täglich neue Updates, Premium-Material und unveröffentlichte Aufnahmen. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax leaks, meliax exklusiv, meliax private videos, meliax premium content, meliax leaked content, meliax unveröffentlicht" />
        <meta property="og:title" content="MeliaX Leaks - Exclusive Leaked Content & Private Videos" />
        <meta property="og:description" content="Watch exclusive MeliaX leaked content and private videos. Premium leaked material." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Leaks" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-porn.de/meliax-leaks" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="md:ml-64 pt-24 px-4 md:px-8 py-6">
        {/* Categories */}
        <div className="mb-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap
                ${selectedCategory === category.toLowerCase()
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-red-600/20'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ad Banner */}
        <AdBanner />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Videos Section */}
          <div className="col-span-12 mb-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              </div>
            ) : (
              <VideoGrid videos={videos} />
            )}
          </div>

          {/* Images Section */}
          <div className="col-span-12">
            <ImageGallery images={images} />
          </div>
        </div>
      </main>
    </div>
  );
} 