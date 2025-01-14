import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";
import ImageGallery from "../components/ImageGallery";

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
        <link rel="canonical" href="https://meliax-porn.de/meliax-nackt" />
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
       

        {/* Bilder Galerie */}
        <div className="mb-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">MeliaX Nacktbilder</h2>
          <ImageGallery />
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-12">
            <h2 className="text-2xl font-bold mb-4">MeliaX Nacktvideos</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              </div>
            ) : (
              <VideoGrid videos={videos} />
            )}
          </div>
        </div>

        {/* SEO Artikel */}
        <article className="mt-16 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX Nackt: Exklusive Einblicke in intime Momente</h1>
          
          <p className="mb-4">
            MeliaX präsentiert sich in ihrer Nacktgalerie von ihrer authentischsten und intimsten Seite. Die aufstrebende 
            Content-Creatorin bietet ihren Fans exklusive Einblicke in private Momente und professionell produzierte 
            Nacktaufnahmen, die durch ihre künstlerische Qualität und natürliche Ausstrahlung begeistern.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Vielfältige Nacktaufnahmen von MeliaX</h2>
          <p className="mb-4">
            Die Nacktbilder von MeliaX zeichnen sich durch ihre Vielfältigkeit aus. Von kunstvollen Aktaufnahmen bis hin 
            zu spontanen Behind-the-Scenes Momenten bietet die Galerie:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Professionelle Studiofotografie mit künstlerischem Anspruch</li>
            <li>Natürliche Aufnahmen in authentischer Umgebung</li>
            <li>Exklusive Einblicke in private Fotoshootings</li>
            <li>Regelmäßig aktualisierte Bildergalerie mit neuen Motiven</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Premium Qualität und künstlerischer Anspruch</h2>
          <p className="mb-4">
            MeliaX legt besonderen Wert auf die Qualität ihrer Nacktaufnahmen. Jedes Bild wird sorgfältig ausgewählt und 
            professionell nachbearbeitet. Die Zusammenarbeit mit erfahrenen Fotografen garantiert:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Hochauflösende Bildqualität in 4K</li>
            <li>Perfekte Ausleuchtung und Bildkomposition</li>
            <li>Stimmungsvolle Settings und Locations</li>
            <li>Regelmäßige Updates mit neuem Material</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive Vorteile für Premium-Mitglieder</h2>
          <p className="mb-4">
            Premium-Mitglieder genießen bei MeliaX besondere Privilegien und erhalten Zugang zu:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Unveröffentlichte Nacktbilder aus privaten Shootings</li>
            <li>High-Resolution Downloads in voller Auflösung</li>
            <li>Vorabzugang zu neuen Bildserien</li>
            <li>Persönliche Wunsch-Shootings und Custom Content</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Regelmäßige Updates und neue Inhalte</h2>
          <p className="mb-6">
            Die Nacktgalerie von MeliaX wird kontinuierlich erweitert. Fans können sich freuen auf:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Wöchentliche Updates mit neuen Nacktbildern</li>
            <li>Saisonale Specials und Themen-Shootings</li>
            <li>Behind-the-Scenes Material von Fotoshootings</li>
            <li>Exklusive Serien mit limitierter Verfügbarkeit</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Hinweis: Alle Inhalte sind ausschließlich für Erwachsene bestimmt (18+). Die Bilder sind urheberrechtlich 
            geschützt und dürfen nicht ohne Genehmigung verwendet oder verbreitet werden.
          </p>
        </article>
      </main>
    </div>
  );
} 