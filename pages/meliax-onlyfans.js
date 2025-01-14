import { useState } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Heart, ExternalLink, Instagram, Twitter, Facebook, Globe } from 'lucide-react';

export default function OnlyFansPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: 'Posts', value: '500+' },
    { label: 'Photos', value: '2.5K' },
    { label: 'Videos', value: '180+' },
    { label: 'Likes', value: '15K' }
  ];

  return (
    <div className="min-h-screen bg-[#00AFF0]/5 text-white">
      <Head>
        <title>MeliaX OnlyFans - Exklusive Inhalte & Shows | Offizielle Seite</title>
        <meta name="description" content="Folge MeliaX auf OnlyFans für exklusive Inhalte, private Shows und persönliche Interaktion. Premium-Content, exklusive Fotos und Videos. Jetzt Subscriber werden!" />
        <meta name="keywords" content="meliax onlyfans, meliax of, meliax premium, meliax exclusive content, meliax onlyfans model, meliax subscriber content" />
        <meta property="og:title" content="MeliaX OnlyFans - Exclusive Adult Content & Private Shows" />
        <meta property="og:description" content="Join MeliaX's Official OnlyFans for exclusive content and private shows. Premium adult entertainment." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX OnlyFans" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-porn.de/meliax-onlyfans" />
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
          {/* Profile Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#00AFF0]/20">
            {/* Banner Image */}
            <div className="h-48 bg-gradient-to-r from-[#00AFF0] to-[#0095CC]"></div>
            
            {/* Profile Info */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full bg-[#00AFF0]/20 -mt-16 border-4 border-black/40"></div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-2">MeliaX Official</h1>
                  <p className="text-[#00AFF0] mb-4">@meliax • Content Creator</p>
                  
                  {/* OnlyFans Button */}
                  <a 
                    href="https://onlyfans.com/meliax" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00AFF0] text-white rounded-full hover:bg-[#0095CC] transition-colors shadow-lg shadow-[#00AFF0]/20"
                  >
                    <Heart size={20} />
                    <span className="font-semibold">Subscribe to OnlyFans</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-center border border-[#00AFF0]/20">
                <div className="text-2xl font-bold text-[#00AFF0]">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
              { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
              { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
              { icon: <Globe size={20} />, label: 'Website', href: '#' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full hover:bg-[#00AFF0]/20 text-sm border border-[#00AFF0]/20"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Content Preview */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[#00AFF0]/20">
            <h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-square bg-[#00AFF0]/10 rounded-lg relative overflow-hidden border border-[#00AFF0]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="text-[#00AFF0]/40" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Artikel */}
        <article className="mt-16 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">MeliaX OnlyFans: Exklusiver Premium Content und VIP Erlebnisse</h1>
          
          <p className="mb-4">
            Der offizielle OnlyFans-Account von MeliaX bietet Fans einen exklusiven Einblick in ihr Leben und 
            ihre kreative Arbeit. Als eine der erfolgreichsten deutschen Content-Creatorinnen auf OnlyFans 
            überzeugt MeliaX durch hochwertige Produktionen und persönliche Interaktion mit ihrer Community.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Premium OnlyFans Content von MeliaX</h2>
          <p className="mb-4">
            Subscriber des MeliaX OnlyFans-Accounts erhalten Zugang zu exklusiven Inhalten:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Tägliche Updates mit exklusiven Fotos und Videos</li>
            <li>Behind-the-Scenes Material von Shootings</li>
            <li>Persönliche Einblicke und private Momente</li>
            <li>Exklusive Serien und thematische Specials</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">VIP OnlyFans Erlebnis</h2>
          <p className="mb-4">
            Als VIP-Subscriber genießen Sie besondere Privilegien:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Direkter Chat mit MeliaX</li>
            <li>Custom Content nach individuellen Wünschen</li>
            <li>Vorabzugang zu neuen Releases</li>
            <li>Exklusive VIP-Only Streams</li>
            <li>Persönliche Widmungen und Grüße</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Professionelle Content-Produktion</h2>
          <p className="mb-4">
            MeliaX setzt auf höchste Qualitätsstandards bei der Content-Erstellung:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Professionelles Equipment für beste Bildqualität</li>
            <li>Kreative Setups und Locations</li>
            <li>Aufwändige Post-Produktion</li>
            <li>Regelmäßige Content-Updates</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Interaktive Community-Features</h2>
          <p className="mb-4">
            Die OnlyFans-Community von MeliaX bietet vielfältige Interaktionsmöglichkeiten:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Regelmäßige Umfragen zur Content-Gestaltung</li>
            <li>Live-Chats und Q&A Sessions</li>
            <li>Feedback-Möglichkeiten und Wunsch-Themen</li>
            <li>Community-Events und Gewinnspiele</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exklusive OnlyFans Specials</h2>
          <p className="mb-6">
            MeliaX überrascht ihre Fans regelmäßig mit besonderen Aktionen:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Saisonale Themen-Wochen</li>
            <li>Limitierte Serien und Kollektionen</li>
            <li>Überraschungs-Drops für Subscriber</li>
            <li>Exklusive Kooperationen und Crossover-Content</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Subscription-Vorteile im Überblick</h2>
          <p className="mb-4">
            Eine OnlyFans-Subscription bei MeliaX bietet zahlreiche Vorteile:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Unbegrenzter Zugriff auf die komplette Mediathek</li>
            <li>Exklusive Einblicke und private Updates</li>
            <li>Persönliche Interaktionsmöglichkeiten</li>
            <li>Priorisierter Support und Wunscherfüllung</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Datenschutz und Sicherheit</h2>
          <p className="mb-4">
            MeliaX legt größten Wert auf die Sicherheit ihrer Community:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Sichere Zahlungsabwicklung über OnlyFans</li>
            <li>Diskrete Abrechnung garantiert</li>
            <li>Geschützter Zugang zu allen Inhalten</li>
            <li>Strenge Privatsphäre-Einstellungen</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Hinweis: Der Zugang zum OnlyFans-Account von MeliaX ist ausschließlich für Erwachsene (18+) bestimmt. 
            Alle Inhalte sind urheberrechtlich geschützt und dürfen nicht ohne ausdrückliche Genehmigung 
            weiterverbreitet werden.
          </p>
        </article>
      </main>
    </div>
  );
} 