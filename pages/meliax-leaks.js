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
      
      <main className="md:ml-64 pt-4 px-4 md:px-8 py-6">
        {/* Categories */}
       

        {/* Ad Banner */}
 

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

        {/* SEO Artikel */}
        <article className="mt-16 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX Leaks: Exklusive Einblicke und private Momente</h1>
          
          <p className="mb-4">
            Die MeliaX Leaks Sammlung bietet authentische und unbearbeitete Einblicke in private Momente. 
            Als eine der meistgesuchten Content-Creatorinnen Deutschlands gewährt MeliaX hier ausgewählte 
            Blicke hinter die Kulissen ihrer Produktionen.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Authentische Behind-the-Scenes Einblicke</h2>
          <p className="mb-4">
            Die Leaks-Sammlung umfasst verschiedene Kategorien von Insider-Content:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Unveröffentlichte Aufnahmen aus Fotoshootings</li>
            <li>Spontane Handy-Aufnahmen</li>
            <li>Private Schnappschüsse</li>
            <li>Unbearbeitetes Rohmaterial</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive Sammler-Editionen</h2>
          <p className="mb-4">
            Premium-Mitglieder erhalten Zugang zu besonderen Leak-Kollektionen:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Rare Behind-the-Scenes Footage</li>
            <li>Unveröffentlichte Serien</li>
            <li>Alternative Takes</li>
            <li>Verworfene Szenen</li>
            <li>Making-of Material</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Authentizität und Qualität</h2>
          <p className="mb-4">
            Jeder Leak wird sorgfältig kuratiert und geprüft:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>100% authentisches Material</li>
            <li>Unbearbeitete Originalaufnahmen</li>
            <li>Hochauflösende Qualität</li>
            <li>Zeitlich eingeordnete Inhalte</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Regelmäßige Leak-Drops</h2>
          <p className="mb-6">
            Die Leak-Sammlung wird kontinuierlich erweitert:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Wöchentliche neue Leaks</li>
            <li>Überraschungs-Drops</li>
            <li>Thematische Leak-Wochen</li>
            <li>Seltene Archiv-Funde</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive Mitgliedervorteile</h2>
          <p className="mb-4">
            VIP-Mitglieder genießen besondere Privilegien:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Frühzeitiger Zugang zu neuen Leaks</li>
            <li>Zugriff auf das komplette Leak-Archiv</li>
            <li>Download in Originalqualität</li>
            <li>Exklusive Sammlerstücke</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Sicherheit und Vertraulichkeit</h2>
          <p className="mb-4">
            Höchste Sicherheitsstandards für alle Mitglieder:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Verschlüsselte Übertragung</li>
            <li>Geschützter Memberbereich</li>
            <li>Diskrete Zahlungsabwicklung</li>
            <li>Anonymer Zugang</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Wichtiger Hinweis: Der Zugang zu MeliaX Leaks ist ausschließlich für Erwachsene (18+) gestattet. 
            Alle Inhalte sind urheberrechtlich geschützt und dürfen nicht ohne ausdrückliche Genehmigung 
            weiterverbreitet werden. Bei Missbrauch behält sich MeliaX rechtliche Schritte vor.
          </p>
        </article>
      </main>
    </div>
  );
} 