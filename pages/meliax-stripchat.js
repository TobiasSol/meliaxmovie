import { useState } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Heart, ExternalLink, Star, MessageCircle, DollarSign, Gift } from 'lucide-react';

export default function StripchatPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const streamStats = [
    { label: 'Viewers', value: '1.2K' },
    { label: 'Followers', value: '45K' },
    { label: 'Tips', value: '12.5K' },
    { label: 'Rating', value: '4.9★' }
  ];

  return (
    <div className="min-h-screen bg-[#E72C4B]/5 text-white">
      <Head>
        <title>MeliaX Stripchat - Live Cam Shows & Private Chats | Offizielle Seite</title>
        <meta name="description" content="Besuche MeliaX auf Stripchat für exklusive Live-Cam-Shows und private Chats. Erlebe heiße Live-Unterhaltung, interaktive Shows und intime Momente. Jetzt kostenlos beitreten!" />
        <meta name="keywords" content="meliax stripchat, stripchat meliax, meliax live cam, stripchat live shows, meliax private chat, stripchat model meliax" />
        <meta property="og:title" content="MeliaX Stripchat - Watch Live Adult Cam Shows" />
        <meta property="og:description" content="Join MeliaX's official Stripchat room for exclusive live adult cam shows and real-time interaction." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Stripchat" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-porn.de/meliax-stripchat" />
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
          <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#E72C4B]/20 mb-6">
            <div className="aspect-video bg-black relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Stream wird geladen...</p>
              </div>
            </div>

            {/* Stream Info Bar */}
            <div className="p-4 border-t border-[#E72C4B]/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E72C4B]/20"></div>
                  <div>
                    <h1 className="font-bold">MeliaX</h1>
                    <p className="text-[#E72C4B] text-sm">Live Now</p>
                  </div>
                </div>
                
                <a 
                  href="https://stripchat.com/Meliazz/follow-me" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-2 bg-[#E72C4B] text-white rounded-full hover:bg-[#D41E3C] transition-colors shadow-lg shadow-[#E72C4B]/20"
                >
                  <Heart size={20} />
                  <span className="font-semibold">Watch Live on Stripchat</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {streamStats.map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-center border border-[#E72C4B]/20">
                <div className="text-2xl font-bold text-[#E72C4B]">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Chat Rules */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#E72C4B]/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#E72C4B]">
                <MessageCircle size={20} />
                Chat Rules
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li>• Be respectful and friendly</li>
                <li>• No spam or harassment</li>
                <li>• Follow room topic</li>
                <li>• Have fun!</li>
              </ul>
            </div>

            {/* Tip Menu */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#E72C4B]/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#E72C4B]">
                <DollarSign size={20} />
                Tip Menu
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-200">
                  <span>Special Request</span>
                  <span className="text-[#E72C4B]">50 tokens</span>
                </li>
                <li className="flex justify-between text-gray-200">
                  <span>Private Show</span>
                  <span className="text-[#E72C4B]">100 tokens</span>
                </li>
                <li className="flex justify-between text-gray-200">
                  <span>Exclusive Show</span>
                  <span className="text-[#E72C4B]">500 tokens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Room Goals */}
          <div className="mt-6 bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#E72C4B]/20">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#E72C4B]">
              <Gift size={20} />
              Room Goals
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-200">Special Show</span>
                  <span className="text-[#E72C4B]">1500/2000 tokens</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E72C4B] w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Artikel */}
        <article className="mt-16 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX Stripchat: Premium Live Entertainment und interaktive Shows</h1>
          
          <p className="mb-4">
            Der offizielle Stripchat-Channel von MeliaX bietet ein einzigartiges Live-Entertainment-Erlebnis. 
            Als eine der beliebtesten deutschen Performerinnen auf Stripchat verbindet MeliaX professionelle 
            Shows mit persönlicher Interaktion und schafft damit unvergessliche Streaming-Momente.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Premium Stripchat Shows</h2>
          <p className="mb-4">
            Die Live-Shows von MeliaX auf Stripchat zeichnen sich durch besondere Qualitätsmerkmale aus:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Hochwertige Full-HD Übertragung</li>
            <li>Professionelles Streaming-Setup</li>
            <li>Kreative Show-Konzepte</li>
            <li>Interaktive Zuschauer-Einbindung</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive VIP-Vorteile</h2>
          <p className="mb-4">
            Als VIP-Member auf MeliaX's Stripchat genießen Sie besondere Privilegien:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Private Shows nach individuellen Wünschen</li>
            <li>Priorisierte Chat-Nachrichten</li>
            <li>Exklusive VIP-Only Streams</li>
            <li>Spezielle Aktionen für VIP-Mitglieder</li>
            <li>Persönliche Wunscherfüllung</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Innovative Show-Formate</h2>
          <p className="mb-4">
            MeliaX bietet auf Stripchat verschiedene kreative Show-Konzepte:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Thematische Kostüm-Shows</li>
            <li>Interaktive Spiele und Challenges</li>
            <li>Musikalische Performances</li>
            <li>Spontane Überraschungs-Shows</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technische Ausstattung</h2>
          <p className="mb-4">
            Für optimale Streaming-Qualität nutzt MeliaX modernste Technik:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>4K-fähige Streaming-Kameras</li>
            <li>Professionelle Beleuchtungssysteme</li>
            <li>Hochleistungs-Internetverbindung</li>
            <li>Qualitativ hochwertiges Audio-Equipment</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Community und Interaktion</h2>
          <p className="mb-6">
            Die Stripchat-Community von MeliaX bietet vielfältige Interaktionsmöglichkeiten:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Aktiver Live-Chat während der Shows</li>
            <li>Tipping-System mit speziellen Aktionen</li>
            <li>Community-Votings für Show-Inhalte</li>
            <li>Regelmäßige Fan-Events</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Show-Zeitplan</h2>
          <p className="mb-4">
            MeliaX bietet regelmäßige Live-Shows auf Stripchat:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Feste wöchentliche Showzeiten</li>
            <li>Spontane Bonus-Streams</li>
            <li>Late-Night-Specials am Wochenende</li>
            <li>Flexible VIP-Show-Termine</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Sicherheit und Diskretion</h2>
          <p className="mb-4">
            Höchste Sicherheitsstandards für alle Zuschauer:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Verschlüsselte Übertragung</li>
            <li>Anonyme Zahlungsmöglichkeiten</li>
            <li>Diskrete Abrechnung</li>
            <li>Geschützter Chatbereich</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Wichtiger Hinweis: Der Zugang zu MeliaX Stripchat ist ausschließlich für Erwachsene (18+) gestattet. 
            Alle Shows und Streams sind urheberrechtlich geschützt. Das Aufzeichnen oder Weiterverbreiten von 
            Streams ist nicht gestattet und wird rechtlich verfolgt.
          </p>
        </article>
      </main>
    </div>
  );
} 