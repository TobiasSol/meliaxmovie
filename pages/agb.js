import Head from 'next/head';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function AGB() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black mt-12">
      <Head>
        <title>AGB | MeliaX-porn</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="md:ml-64 pt-32 px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="space-y-6 text-pink-200/80">
            <section className="bg-gradient-to-r from-pink-600/5 via-purple-600/5 to-pink-500/5 rounded-lg border border-pink-500/10 p-6">
              <h2 className="text-xl font-semibold mb-4 text-pink-200">§1 Geltungsbereich</h2>
              {/* AGB Inhalt */}
            </section>

            {/* Weitere Sektionen im gleichen Stil */}
          </div>
        </div>
      </main>
    </div>
  );
} 