import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";

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
        <link rel="canonical" href="https://meliax-porn.de" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="md:ml-64  px-4 md:px-8 py-6">
        {/* Categories */}
      

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

        

        {/* Bildergalerie */}
        <section className="">
          <h2 className="text-2xl font-bold mb-6">MeliaX Porn Exklusive Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Foto 05.01.25, 14 53 54 (1).jpg',
              'Foto 12.10.24, 14 43 00.jpg',
              'Foto 12.10.24, 14 46 58.jpg',
              'Foto 13.10.24, 17 43 47.jpg',
              'Foto 13.10.24, 17 45 05.jpg',
              'Foto 13.10.24, 17 50 05.jpg',
              'Foto 17.10.24, 22 57 39.jpg',
              'Foto 19.10.24, 10 17 38.jpg',
              'Foto 23.10.24, 17 29 09.jpg',
              'Foto 23.10.24, 17 30 02.jpg',
         
              'Foto 26.10.24, 11 43 25.jpg',
              'Foto 27.10.24, 21 03 36.jpg',
              'Foto 27.10.24, 21 04 01.jpg',
              'Foto 27.10.24, 21 04 22.jpg',
              'Foto 28.10.24, 16 44 11.jpg',
              'Foto 30.10.24, 16 23 05.jpg',
              'Foto 30.10.24, 21 21 32.jpg'
            ].map((foto, index) => (
              <div key={index} className="relative group aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/meliaxporn/${foto}`}
                  alt={`MeliaX Porn Sex Cam Bild ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white text-sm">
                    <p>MeliaX Porn</p>
                    <p className="text-xs opacity-75">Exklusiver Content</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* SEO Artikel */}
        <article className="mt-12 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX: Aufstrebender Star der deutschen Adult-Entertainment-Szene</h1>
          
          <p className="mb-4">
            MeliaX hat sich in der deutschen Adult-Entertainment-Branche als eine der faszinierendsten Newcomerinnen etabliert. 
            Die charismatische Content-Creatorin begeistert ihr Publikum durch authentische Performances und hochwertige Produktionen.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Vielfältiges Content-Portfolio</h2>
          <p className="mb-4">Die Künstlerin bietet ihren Fans verschiedene Möglichkeiten, exklusive Inhalte zu genießen:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Premium Videos: Professionell produzierte Filme in höchster Qualität</li>
            <li>Live-Streaming: Regelmäßige Cam-Shows mit persönlicher Interaktion</li>
            <li>Exklusive Fotogalerien: Künstlerische und erotische Fotoserien</li>
            <li>Private Snapchat: Einblicke in den Alltag der Künstlerin</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Erfolg auf verschiedenen Plattformen</h2>
          <p className="mb-4">MeliaX ist auf allen relevanten Adult-Plattformen vertreten:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>OnlyFans (Premium-Content)</li>
            <li>Stripchat (Live-Performances)</li>
            <li>Instagram (SFW-Content)</li>
            <li>Twitter (Updates und Ankündigungen)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Auszeichnungen und Erfolge</h2>
          <p className="mb-4">Die steigende Popularität von MeliaX spiegelt sich in verschiedenen Erfolgen wider:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Top 1% der Creator auf OnlyFans</li>
            <li>Mehrfache Auszeichnung als "Cam Model des Monats"</li>
            <li>Wachsende internationale Fanbase</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Persönlicher Touch</h2>
          <p className="mb-6">
            Was MeliaX besonders auszeichnet, ist ihre authentische Art und der direkte Kontakt zu ihren Fans. 
            Regelmäßige Meet & Greets und persönliche Nachrichten schaffen eine einzigartige Bindung zur Community.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Zukunftspläne</h2>
          <p className="mb-4">Für die Zukunft plant MeliaX:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Eigene Premium-Website mit exklusiven Inhalten</li>
            <li>Internationale Kooperationen</li>
            <li>Expansion in neue Content-Formate</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Künstlerische Entwicklung</h2>
          <p className="mb-4">
            MeliaX hat sich seit ihrem Debüt 2021 kontinuierlich weiterentwickelt. Ihr Fokus liegt auf:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Professionelle Videoproduktionen in Studio-Qualität</li>
            <li>Kreative Regie bei eigenen Projekten</li>
            <li>Innovative Content-Konzepte</li>
            <li>Zusammenarbeit mit renommierten Produktionsteams</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Community und Fanbase</h2>
          <p className="mb-6">
            Die stetig wachsende Community schätzt besonders:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Regelmäßige Fan-Events und Meet & Greets</li>
            <li>Persönliche Interaktion in Live-Streams</li>
            <li>Exklusive Behind-the-Scenes Einblicke</li>
            <li>VIP-Mitgliedschaften mit Zusatzinhalten</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Hinweis: Alle Inhalte sind ausschließlich für Erwachsene bestimmt (18+)
          </p>
        </article>
      </main>
    </div>
  );
}