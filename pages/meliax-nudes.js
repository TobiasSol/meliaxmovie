import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const CustomImageGallery = ({ images, selectedCategory }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category?.toLowerCase() === selectedCategory);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length]);
  };

  return (
    <div className="col-span-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-900"
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(filteredImages.indexOf(image));
              setIsLightboxOpen(true);
            }}
          >
            <img
              src={image.thumbnail_url}
              alt={image.title}
              className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-0 p-4 w-full">
                <h3 className="text-white text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
                {image.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {image.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-red-600/50 text-white px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center px-4 md:px-12">
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors z-10"
              onClick={handlePrevious}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={selectedImage.thumbnail_url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-200 mb-2">{selectedImage.description}</p>
                {selectedImage.tags && (
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-red-600/50 text-white px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors z-10"
              onClick={handleNext}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button 
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function NudesPage() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [images, setImages] = useState([]);

  const categories = [
    'All', 'Latest', 'Popular', 'Exclusive', 'Premium'
  ];

  useEffect(() => {
    fetchImages();
  }, []);
  
  const fetchImages = async () => {
    const localImages = [
      {
        id: 1,
        title: "MeliaX Exklusiver Premium Content",
        description: "Intime Einblicke von MeliaX",
        thumbnail_url: "/nudes/meliax nudes (1).jpeg",
        category: "premium",
        tags: ["meliax nackt", "meliax onlyfans leak", "premium"]
      },
      {
        id: 2,
        title: "MeliaX Private Aufnahmen",
        description: "Exklusive private Aufnahmen",
        thumbnail_url: "/nudes/meliax nudes (2).jpeg",
        category: "exclusive",
        tags: ["meliax naked", "meliax free", "exclusive"]
      },
      {
        id: 3,
        title: "MeliaX Intime Momente",
        description: "Persönliche Einblicke von MeliaX",
        thumbnail_url: "/nudes/meliax nudes (3).jpeg",
        category: "premium",
        tags: ["meliax porno", "meliax onlyfans leaks", "premium"]
      },
      {
        id: 4,
        title: "MeliaX Heiße Show",
        description: "Aufregende Momente mit MeliaX",
        thumbnail_url: "/nudes/meliax nudes (4).jpeg",
        category: "latest",
        tags: ["meliax camwhores", "meliax dildo", "latest"]
      },
      {
        id: 5,
        title: "MeliaX Exklusiv",
        description: "Neue exklusive Aufnahmen",
        thumbnail_url: "/nudes/meliax nudes (5).jpeg",
        category: "exclusive",
        tags: ["meliax fuck", "meliax nackt", "exclusive"]
      },
      {
        id: 6,
        title: "MeliaX Premium Show",
        description: "Premium Content von MeliaX",
        thumbnail_url: "/nudes/meliax nudes (6).jpeg",
        category: "premium",
        tags: ["meliax onlyfans leak", "meliax naked", "premium"]
      },
      {
        id: 7,
        title: "MeliaX Heißer Content",
        description: "Brandneue Aufnahmen",
        thumbnail_url: "/nudes/meliax nudes (7).jpeg",
        category: "latest",
        tags: ["meliax porno", "meliax free", "latest"]
      },
      {
        id: 8,
        title: "MeliaX VIP Content",
        description: "Exklusive VIP Einblicke",
        thumbnail_url: "/nudes/meliax nudes (8).jpeg",
        category: "premium",
        tags: ["meliax dildo", "meliax onlyfans leaks", "premium"]
      },
      {
        id: 9,
        title: "MeliaX Private Show",
        description: "Private Momente mit MeliaX",
        thumbnail_url: "/nudes/meliax nudes (9).jpeg",
        category: "exclusive",
        tags: ["meliax camwhores", "meliax nackt", "exclusive"]
      },
      {
        id: 10,
        title: "MeliaX Unzensiert",
        description: "Unzensierte Aufnahmen",
        thumbnail_url: "/nudes/meliax nudes (10).jpeg",
        category: "premium",
        tags: ["meliax fuck", "meliax naked", "premium"]
      },
      {
        id: 11,
        title: "MeliaX Intim",
        description: "Intime Momente",
        thumbnail_url: "/nudes/meliax nudes (11).jpeg",
        category: "exclusive",
        tags: ["meliax onlyfans leak", "meliax porno", "exclusive"]
      },
      {
        id: 12,
        title: "MeliaX Hot Content",
        description: "Heiße neue Aufnahmen",
        thumbnail_url: "/nudes/meliax nudes (12).jpeg",
        category: "latest",
        tags: ["meliax free", "meliax nackt", "latest"]
      },
      {
        id: 13,
        title: "MeliaX Premium Exclusive",
        description: "Premium Exklusiv Content",
        thumbnail_url: "/nudes/meliax nudes (13).jpeg",
        category: "premium",
        tags: ["meliax onlyfans leaks", "meliax naked", "premium"]
      },
      {
        id: 14,
        title: "MeliaX Special Content",
        description: "Spezieller VIP Content",
        thumbnail_url: "/nudes/meliax nudes (14).jpeg",
        category: "exclusive",
        tags: ["meliax dildo", "meliax camwhores", "exclusive"]
      }
    ];

    try {
      setImages(localImages);
    } catch (error) {
      console.error('Fehler beim Laden der Bilder:', error);
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
        <link rel="canonical" href="https://meliax-porn.de/meliax-nudes" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="md:ml-64 pt-8 px-4 md:px-8 py-6">
        {/* Categories */}
     

       
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {loading ? (
            <div className="col-span-12 text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
            </div>
          ) : (
            <CustomImageGallery images={images} selectedCategory={selectedCategory} />
          )}
        </div>

        {/* Videos */}
       

        {/* SEO Artikel */}
        <article className="mt-16 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX Nudes: Premium Adult Content von Deutschlands aufstrebendem Star</h1>
          
          <p className="mb-4">
            Die MeliaX Nudes Collection repräsentiert eine perfekte Symbiose aus künstlerischer Fotografie und 
            authentischem Adult Content. Als eine der gefragtesten Content Creatorinnen Deutschlands setzt MeliaX 
            neue Maßstäbe in der Qualität und Präsentation ihrer Nude-Inhalte.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Die Evolution von MeliaX Nudes</h2>
          <p className="mb-4">
            Seit ihrem Debüt hat sich MeliaX kontinuierlich weiterentwickelt und ihren eigenen, unverwechselbaren 
            Stil gefunden. Ihre Nude-Content-Strategie umfasst:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Tägliche Updates mit exklusiven Nude-Inhalten</li>
            <li>Kreative Themen-Shootings mit wechselnden Settings</li>
            <li>Interaktive Live-Sessions mit Zuschauerbeteiligung</li>
            <li>Persönliche Einblicke in ihr Leben als Content Creator</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technische Perfektion trifft natürliche Authentizität</h2>
          <p className="mb-4">
            Die technische Umsetzung der MeliaX Nudes setzt neue Standards in der Branche. Jeder Content wird mit 
            modernster Ausrüstung produziert:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Professionelle Kameraausrüstung für gestochen scharfe Aufnahmen</li>
            <li>Modernste Beleuchtungstechnik für perfekte Ausleuchtung</li>
            <li>High-End Post-Production für optimale Bildqualität</li>
            <li>8K-Auflösung für maximale Detailgenauigkeit</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive MeliaX Nude Membership Vorteile</h2>
          <p className="mb-4">
            Als Premium-Mitglied der MeliaX Nude Community genießen Sie zahlreiche exklusive Vorteile:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Unbegrenzter Zugang zu allen Nude-Inhalten</li>
            <li>Priorisierter Zugriff auf neue Releases</li>
            <li>Exklusive Behind-the-Scenes Einblicke</li>
            <li>Persönliche Interaktionsmöglichkeiten</li>
            <li>Zugang zum privaten Discord-Server</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Innovative Content-Formate</h2>
          <p className="mb-4">
            MeliaX revolutioniert die Art und Weise, wie Nude Content präsentiert wird:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>360° Virtual Reality Experiences</li>
            <li>Interaktive Foto-Stories</li>
            <li>Cinematic-Style Videoproduktionen</li>
            <li>Experimentelle Kunstfotografie</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Community und Interaktion</h2>
          <p className="mb-6">
            Die MeliaX Nude Community zeichnet sich durch aktive Beteiligung und engen Austausch aus:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Regelmäßige Live-Events und Q&A Sessions</li>
            <li>Abstimmungen über zukünftige Content-Richtungen</li>
            <li>Persönliche Nachrichten und Feedback-Möglichkeiten</li>
            <li>Exklusive Community-Events</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Qualitätsversprechen und Datenschutz</h2>
          <p className="mb-4">
            Bei MeliaX Nudes stehen Qualität und Sicherheit an erster Stelle:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Verschlüsselte Übertragung aller Inhalte</li>
            <li>Regelmäßige Qualitätskontrollen</li>
            <li>Strenge Datenschutzrichtlinien</li>
            <li>24/7 Support für Premium-Mitglieder</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Wichtiger Hinweis: Der Zugang zu MeliaX Nudes ist ausschließlich für volljährige Personen (18+) gestattet. 
            Alle Inhalte sind urheberrechtlich geschützt und dürfen nicht ohne ausdrückliche Genehmigung 
            weiterverbreitet werden. MeliaX behält sich rechtliche Schritte bei Missbrauch vor.
          </p>
        </article>
      </main>
    </div>
  );
}