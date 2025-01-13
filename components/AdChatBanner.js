import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AdChatBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Pfeil-Button */}
      <button
        onClick={() => setIsVisible(true)}
        className={`fixed right-0 md:right-[3%] md:top-[40%] -translate-y-1/3 z-50 bg-black border-2 border-[#e3cbaa] text-[#e3cbaa] rounded-l-lg hover:bg-[#e3cbaa] hover:text-black transition-all duration-300 flex items-center gap-3 pl-4 pr-3 py-3 ${
          isVisible ? 'hidden' : 'block'
        }`}
      >
        {/* Pfeil Icon - nach links zeigend */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-10 md:w-10 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="text-lg font-bold">Chat</span>
      </button>

      {/* Banner mit seitlicher Animation */}
      <div
        className={`fixed right-[3%] top-[40%] -translate-y-1/3 z-50 transition-all duration-700 ease-out ${
          isVisible ? 'translate-x-0' : 'translate-x-[105%]'
        }`}
      >
        <div className="relative">
          {/* Schließen Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -left-10 -top-10 w-8 h-8 rounded-full bg-black border-2 border-[#e3cbaa] text-[#e3cbaa] flex items-center justify-center hover:bg-[#e3cbaa] hover:text-black transition-all duration-300 group z-50"
          >
            <span className="transform group-hover:rotate-180 transition-transform duration-300 text-2xl">×</span>
          </button>

          {/* Blaue Neon-Hintergrundbeleuchtung */}
          <div className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-xl" />
          
          {/* Desktop Neon-Rahmen */}
          <div className="max-[460px]:hidden">
            <div className="absolute -inset-1 rounded-xl bg-blue-500 opacity-75 blur-md animate-neonBorder" />
            <div className="absolute -inset-1.5 rounded-xl bg-blue-400 opacity-50 blur-lg animate-neonBorder" />
            <div className="absolute -inset-2 rounded-xl bg-blue-300 opacity-25 blur-xl animate-neonBorder" />
          </div>

          {/* Spiegeleffekt */}
          <div className="absolute -bottom-32 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-xl opacity-50 transform scale-y-[-1]" />
          
          {/* Hauptbanner */}
          <div className="relative w-full max-w-lg h-[630px] bg-gradient-to-b from-black via-black to-[#111] rounded-xl border-2 border-[#e3cbaa] shadow-2xl overflow-hidden">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 w-6 h-6 rounded-full bg-black border-2 border-[#e3cbaa] text-[#e3cbaa] flex items-center justify-center hover:bg-[#e3cbaa] hover:text-black transition-all duration-300 group z-10"
            >
              <span className="transform group-hover:rotate-180 transition-transform duration-300 text-xl">×</span>
            </button>

            <div className="absolute inset-0 animate-shine-banner pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(227,203,170,0.1)] to-transparent skew-x-[-45deg] translate-x-[-100%]" />
            </div>

            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#e3cbaa]" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#e3cbaa]" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#e3cbaa]" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#e3cbaa]" />

            <div className="flex h-full">
              {/* Linke Seite - Bild */}
              <div className="w-1/2 h-full relative">
                <Image
                  src="/Banner/melia.png"
                  alt="Melia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Rechte Seite - Content */}
              <div className="w-1/2 p-6 flex flex-col justify-center space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#e3cbaa] mb-3">JETZT CHATTEN!</h2>
                  <p className="text-[#e3cbaa] text-lg">Wähle deine bevorzugte Zahlungsmethode</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://onlyfans.com/meliax/c19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black border-2 border-[#e3cbaa] rounded-xl p-4 hover:bg-[#e3cbaa] group transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-36 h-12">
                        <Image
                          src="/Banner/OnlyFans_logo.png"
                          alt="OnlyFans"
                          fill
                          className="object-contain group-hover:brightness-0"
                        />
                      </div>
                      <span className="text-[#e3cbaa] group-hover:text-black font-bold text-lg">
                        Kreditkarte
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://tinyurl.com/3zht9dfw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black border-2 border-[#e3cbaa] rounded-xl p-4 hover:bg-[#e3cbaa] group transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-36 h-12">
                        <Image
                          src="/Banner/maloum.png"
                          alt="Maloum"
                          fill
                          className="object-contain group-hover:brightness-0"
                        />
                      </div>
                      <span className="text-[#e3cbaa] group-hover:text-black font-bold text-lg">
                        PayPal
                      </span>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-2 mb-6 justify-start pl-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -inset-1 bg-green-400 rounded-full blur-sm animate-pulse"></div>
                  </div>
                  <span className="text-green-500 font-bold text-lg tracking-wider" 
                        style={{
                          textShadow: `
                            0 0 7px #22c55e,
                            0 0 10px #22c55e,
                            0 0 21px #22c55e,
                            0 0 42px #22c55e
                          `
                        }}>
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 transform -rotate-12">
              <div className="bg-gradient-to-r from-[#e3cbaa] via-[#d0b48f] to-[#e3cbaa] text-black py-2 px-4 rounded-lg font-bold text-lg shadow-xl">
                60% RABATT!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 