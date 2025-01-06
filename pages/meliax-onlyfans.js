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
        <title>MeliaX OnlyFans - Exclusive Adult Content & Private Shows | Official OF</title>
        <meta name="description" content="Join MeliaX's Official OnlyFans for exclusive adult content, private shows, and personal interaction. Get access to premium photos, videos, and live streams." />
        <meta name="keywords" content="meliax onlyfans, adult content creator, exclusive content, premium adult content, onlyfans model, meliax of" />
        <meta property="og:title" content="MeliaX OnlyFans - Exclusive Adult Content & Private Shows" />
        <meta property="og:description" content="Join MeliaX's Official OnlyFans for exclusive content and private shows. Premium adult entertainment." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX OnlyFans" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax.com/meliax-onlyfans" />
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
      </main>
    </div>
  );
} 