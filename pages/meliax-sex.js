import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";
import ImageGallery from "../components/ImageGallery";

export default function SexPage() {
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All', 'Latest', 'Popular', 'Exclusive', 'Premium'
  ];

  const sexImages = Array.from({length: 15}, (_, i) => ({
    id: i + 1,
    src: `/leaks/meliax leak (${i + 1}).jpg`,
    alt: `MeliaX Sex Bild ${i + 1}`,
    title: `MeliaX Sex ${i + 1}`
  }));

  useEffect(() => {
    fetchVideos();
    setImages(sexImages);
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
        <title>MeliaX Sex - Exklusive Videos & Private Shows | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Sex mit exklusiven Videos und privaten Shows. Premium-Content, intime Einblicke und tägliche Updates. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax sex, meliax sex videos, meliax private shows, meliax adult content, meliax explicit, meliax xxx" />
        <meta property="og:title" content="MeliaX Sex Videos - Exklusive Sex Clips & Private Shows" />
        <meta property="og:description" content="Exklusive MeliaX Sex Videos und private Shows. Die heißesten Clips und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Sex" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-porn.de/meliax-sex" />
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
    


        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          <div className="col-span-12 mb-8">
            <h2 className="text-2xl font-bold mb-4">MeliaX Sex Bilder</h2>
            <ImageGallery images={images} />
          </div>
          
          <div className="col-span-12">
            <h2 className="text-2xl font-bold mb-4">MeliaX Sex Videos</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              </div>
            ) : (
              <VideoGrid videos={videos} />
            )}
          </div>
        </div>

        <article className="mt-16 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX Sex: Premium Adult Entertainment der Extraklasse</h1>
          
          <p className="mb-4">
            MeliaX präsentiert eine exklusive Sammlung hochwertiger Adult-Inhalte, die neue Maßstäbe in der 
            Branche setzt. Mit ihrer einzigartigen Kombination aus Professionalität und authentischer Leidenschaft 
            schafft sie unvergessliche Unterhaltungsmomente für ihre Premium-Mitglieder.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Hochwertige Adult-Produktionen</h2>
          <p className="mb-4">
            Die professionellen Produktionen von MeliaX zeichnen sich durch besondere Qualitätsmerkmale aus:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Cineastische 4K-Videoqualität</li>
            <li>Professionelle Beleuchtung und Kameraführung</li>
            <li>Kreative Szenarien und Settings</li>
            <li>Hochwertige Post-Produktion</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive Premium-Inhalte</h2>
          <p className="mb-4">
            Als Premium-Mitglied erhalten Sie Zugang zu exklusiven Inhalten:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Unveröffentlichte Szenen und Extended Cuts</li>
            <li>Behind-the-Scenes Material</li>
            <li>Exklusive Fotoserien</li>
            <li>Private Einblicke und Outtakes</li>
            <li>VIP-Only Bonus-Content</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Vielfältige Content-Kategorien</h2>
          <p className="mb-4">
            MeliaX bietet eine breite Palette an verschiedenen Content-Kategorien:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Solo-Performances</li>
            <li>Partnerszenen</li>
            <li>Thematische Specials</li>
            <li>Experimentelle Formate</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technische Qualitätsstandards</h2>
          <p className="mb-4">
            Höchste technische Standards garantieren beste Wiedergabequalität:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>4K/8K-Auflösung für gestochen scharfe Details</li>
            <li>HDR-Farbwiedergabe</li>
            <li>Professioneller Soundmix</li>
            <li>Optimierte Streaming-Technologie</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Regelmäßige Updates</h2>
          <p className="mb-6">
            Premium-Mitglieder profitieren von kontinuierlichen Content-Updates:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Wöchentliche neue Releases</li>
            <li>Monatliche Themen-Specials</li>
            <li>Saisonale Highlights</li>
            <li>Exklusive Event-Produktionen</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Interaktive Features</h2>
          <p className="mb-4">
            Die Premium-Mitgliedschaft bietet interaktive Möglichkeiten:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Content-Wünsche und Feedback</li>
            <li>Abstimmungen über künftige Produktionen</li>
            <li>Community-Diskussionen</li>
            <li>Direkter Austausch mit MeliaX</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Sicherheit und Diskretion</h2>
          <p className="mb-4">
            Höchste Sicherheitsstandards für alle Mitglieder:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Verschlüsselte Datenübertragung</li>
            <li>Anonyme Zahlungsoptionen</li>
            <li>Diskrete Abrechnung</li>
            <li>Geschützter Memberbereich</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Wichtiger Hinweis: Der Zugang zu MeliaX Sex-Content ist ausschließlich für Erwachsene (18+) gestattet. 
            Alle Inhalte sind urheberrechtlich geschützt und dürfen nicht ohne ausdrückliche Genehmigung 
            weiterverbreitet werden. MeliaX behält sich rechtliche Schritte bei Missbrauch vor.
          </p>
        </article>
      </main>
    </div>
  );
} 