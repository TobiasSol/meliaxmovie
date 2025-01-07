import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";

export default function NacktPage() {
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
        <title>MeliaX Nackt - Exklusive Nacktbilder & Videos | Offizielle Seite</title>
        <meta name="description" content="Sieh dir MeliaX Nackt an mit exklusiven Nacktbildern und Videos. Tägliche Updates, private Einblicke und intime Momente. Jetzt Premium-Zugang sichern!" />
        <meta name="keywords" content="meliax nackt, meliax nacktbilder, meliax nacktvideos, meliax nude, meliax nacktfotos, meliax intim" />
        <meta property="og:title" content="MeliaX Nackt - Exklusive Nacktbilder & Videos" />
        <meta property="og:description" content="Exklusive MeliaX Nacktbilder und Videos. Die heißesten Aufnahmen und private Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Nackt" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax.com/meliax-nackt" />
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