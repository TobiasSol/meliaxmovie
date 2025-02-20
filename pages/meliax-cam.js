import { useState } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Heart, ExternalLink, MessageCircle, DollarSign, Gift } from 'lucide-react';

export default function CamPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const streamStats = [
    { label: 'Viewers', value: '1.2K' },
    { label: 'Followers', value: '45K' },
    { label: 'Tips', value: '12.5K' },
    { label: 'Rating', value: '4.9★' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Cam - Live Webcam Shows & Private Chats | Offizielle Seite</title>
        <meta name="description" content="Erlebe MeliaX Cam mit exklusiven Live-Webcam-Shows und privaten Chat-Sessions. Tägliche Live-Streams, interaktive Shows und intime Einblicke. Jetzt kostenlos dabei sein!" />
        <meta name="keywords" content="meliax cam, meliax webcam, meliax live shows, meliax private chat, meliax cam model, meliax live streams" />
        <meta property="og:title" content="MeliaX Live Cams - Watch Hot Live Cam Shows & Adult Webcams" />
        <meta property="og:description" content="Join live adult webcam shows on MeliaX Cams. Watch hot cam models perform live and chat in real-time." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Cams" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-porn.de/meliax-cam" />
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
        <div className="max-w-4xl mx-auto">
          {/* Stream Window */}
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div className="aspect-video bg-black relative">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                playsInline
                poster="/videos/thumbnail.jpg" // Optional: Ein Vorschaubild
              >
                <source src="https://mfxauhtydxmrtelqdpia.supabase.co/storage/v1/object/public/videos//0218.mp4" type="video/mp4" />
                Dein Browser unterstützt keine Videos.
              </video>
              
              {/* Fallback für den Ladezustand */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0">
                <p className="text-gray-500 text-lg">Stream wird geladen...</p>
              </div>
            </div>

            {/* Stream Info Bar */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800"></div>
                  <div>
                    <h1 className="font-bold">MeliaX</h1>
                    <p className="text-red-500 text-sm">Live Now</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700">
                    <Heart size={20} />
                    <span>Follow</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                    <MessageCircle size={20} />
                    <span>Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {streamStats.map((stat, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Chat Rules */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle size={20} className="text-red-500" />
                Chat Rules
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Be respectful and friendly</li>
                <li>• No spam or harassment</li>
                <li>• Follow room topic</li>
                <li>• Have fun!</li>
              </ul>
            </div>

            {/* Tip Menu */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <DollarSign size={20} className="text-red-500" />
                Tip Menu
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-300">
                  <span>Special Request</span>
                  <span className="text-red-500">50 tokens</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Private Show</span>
                  <span className="text-red-500">100 tokens</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Exclusive Show</span>
                  <span className="text-red-500">500 tokens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Room Goals */}
          <div className="mt-6 bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gift size={20} className="text-red-500" />
              Room Goals
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Special Show</span>
                  <span className="text-red-500">1500/2000 tokens</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* ... Video Grid Code ... */}
          </div>

          {/* SEO Artikel */}
          <article className="mt-16 prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-6">MeliaX Cam: Live Entertainment der Extraklasse</h1>
            
            <p className="mb-4">
              Die MeliaX Cam Experience bietet ein einzigartiges Live-Streaming-Erlebnis, das die Grenzen zwischen 
              Unterhaltung und persönlicher Interaktion neu definiert. Als eine der erfolgreichsten deutschen 
              Cam-Performerinnen setzt MeliaX neue Maßstäbe in Qualität, Interaktivität und Entertainment.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Premium Live-Cam Shows mit MeliaX</h2>
            <p className="mb-4">
              Die Live-Cam Shows von MeliaX zeichnen sich durch höchste Professionalität und innovative 
              Unterhaltungselemente aus. Jede Show bietet:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Full-HD Streaming-Qualität mit kristallklarem Sound</li>
              <li>Interaktive Elemente und Zuschauer-Feedback in Echtzeit</li>
              <li>Vielfältige Show-Formate und thematische Specials</li>
              <li>Persönliche Interaktion mit der Community</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Technische Innovation und Streaming-Qualität</h2>
            <p className="mb-4">
              MeliaX investiert in modernste Streaming-Technologie für ein optimales Zuschauererlebnis:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>4K-fähige Streaming-Setup für gestochen scharfe Übertragung</li>
              <li>Mehrere Kameraperspektiven für dynamische Shows</li>
              <li>Professionelle Beleuchtung und Soundausstattung</li>
              <li>Stabile Hochgeschwindigkeits-Internetverbindung</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">VIP Cam-Membership Vorteile</h2>
            <p className="mb-4">
              Als VIP-Mitglied der MeliaX Cam-Community genießen Sie exklusive Privilegien:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Private Shows und exklusive One-on-One Sessions</li>
              <li>Priorisierte Chatfunktion während Live-Shows</li>
              <li>Zugang zu aufgezeichneten Premium-Shows</li>
              <li>Spezielle VIP-Events und Member-Specials</li>
              <li>Persönliche Wunsch-Shows nach Absprache</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Interaktive Show-Formate</h2>
            <p className="mb-4">
              MeliaX bietet verschiedene innovative Show-Formate:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Thematische Kostüm-Shows und Rollenspiele</li>
              <li>Interaktive Gaming-Sessions mit Zuschauerbeteiligung</li>
              <li>Q&A und Talk-Formate für persönlichen Austausch</li>
              <li>Spontane Überraschungs-Shows für VIP-Member</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Community-Features und Interaktion</h2>
            <p className="mb-6">
              Die MeliaX Cam-Community bietet zahlreiche Interaktionsmöglichkeiten:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Live-Chat mit Emoji-Reaktionen und GIF-Support</li>
              <li>Tipping-System mit speziellen Belohnungen</li>
              <li>Community-Abstimmungen über Show-Inhalte</li>
              <li>Exklusive Member-Events und Gewinnspiele</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Show-Zeitplan und Verfügbarkeit</h2>
            <p className="mb-4">
              MeliaX bietet einen regelmäßigen Streaming-Zeitplan:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Feste Showzeiten für optimale Planbarkeit</li>
              <li>Flexible Zusatz-Shows nach Ankündigung</li>
              <li>24/7 Zugang zu aufgezeichneten Shows für VIP-Member</li>
              <li>Spontane Late-Night-Specials am Wochenende</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sicherheit und Privatsphäre</h2>
            <p className="mb-4">
              Höchste Sicherheitsstandards für alle Mitglieder:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Verschlüsselte Übertragung aller Live-Streams</li>
              <li>Sichere Zahlungsabwicklung</li>
              <li>Strenge Datenschutzrichtlinien</li>
              <li>Moderierter Chat für eine respektvolle Atmosphäre</li>
            </ul>

            <p className="text-sm text-gray-400 mt-8">
              Wichtiger Hinweis: Der Zugang zu MeliaX Cam ist ausschließlich für volljährige Personen (18+) gestattet. 
              Alle Shows und Inhalte sind urheberrechtlich geschützt. Das Aufzeichnen oder Weiterverbreiten von 
              Streams ist strengstens untersagt und wird rechtlich verfolgt.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
} 