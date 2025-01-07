import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";

export default function NudesPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All', 'Latest', 'Popular', 'Exclusive', 'Premium'
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
        <title>MeliaX Nudes - Premium Nacktbilder & Videos | Offizielle Seite</title>
        <meta name="description" content="Genieße MeliaX Nudes mit exklusiven Nacktbildern und Videos. Premium-Content, private Aufnahmen und intime Einblicke. Täglich neue Updates!" />
        <meta name="keywords" content="meliax nudes, meliax nude pics, meliax nude content, meliax nude videos, meliax premium nudes, meliax exclusive nudes" />
        <meta property="og:title" content="MeliaX Nudes - Exclusive Nude Pictures & Videos" />
        <meta property="og:description" content="Watch exclusive MeliaX nudes and private content. The hottest nude pictures and videos." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Nudes" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax.com/meliax-nudes" />
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
          {/* Videos */}
          <div className="col-span-12">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              </div>
            ) : (
              <VideoGrid videos={videos} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 