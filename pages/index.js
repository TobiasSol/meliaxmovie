import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All', 'Latest', 'Popular', 'Custom', 'Exclusive', 'Premium'
  ];

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/admin/videos', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Fehler beim Laden der Videos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Porn - Exklusive Pornos & Premium XXX Videos | Offizielle Seite</title>
        <meta name="description" content="Genieße MeliaX Porn mit den heißesten Pornos und XXX Videos. Täglich neue exklusive Inhalte, Premium Adult Content und private Shows. Jetzt kostenlos ansehen!" />
        <meta name="keywords" content="meliax porn, meliax pornos, meliax xxx, meliax adult videos, meliax premium porn, meliax exklusive pornos" />
        <meta property="og:title" content="MeliaX Porn - Exklusive Pornos & Premium XXX Videos" />
        <meta property="og:description" content="Entdecke MeliaX Porn mit exklusiven Pornos und XXX Videos. Die heißesten Adult Videos und Premium Content." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Porn Official" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax.com" />
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