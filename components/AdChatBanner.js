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

  const toggleBanner = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Pfeil-Button mit OnlyFans Logo */}
      <button
        onClick={toggleBanner}
        className={`fixed md:right-[3%] md:top-[40%] right-0 top-[180px] md:-translate-y-1/3 z-50 bg-black border-2 border-[#e3cbaa] text-[#e3cbaa] rounded-l-lg hover:bg-[#e3cbaa] hover:text-black transition-all duration-300 flex items-center gap-3 pl-4 pr-3 py-3 ${
          isVisible ? 'hidden' : 'block'
        }`}
      >
        {/* OnlyFans Logo */}
        <div className="relative w-24 md:w-32 h-8 md:h-10">
          <Image
            src="/Banner/OnlyFans_logo.png"
            alt="OnlyFans Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
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
      </button>

      {/* Banner */}
      <div
        className={`fixed right-[3%] top-[40%] max-[460px]:top-[50%] -translate-y-1/3 z-50 transition-transform duration-700 ease-out ${
          isVisible ? 'translate-x-0' : 'translate-x-[105%]'
        }`}
      >
        <div className="relative">
          {/* Schließen Button */}
          <button 
            onClick={toggleBanner}
            className={`absolute -left-10 -top-10 max-[460px]:left-[80px] max-[460px]:top-[0px] w-10 h-10 max-[460px]:w-8 max-[460px]:h-8 rounded-full bg-black border-2 border-[#e3cbaa] text-[#e3cbaa] flex items-center justify-center hover:bg-[#e3cbaa] hover:text-black transition-all duration-300 group z-50 shadow-lg ${
              !isVisible ? 'opacity-0 pointer-events-none' : ''
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 max-[460px]:w-5 max-[460px]:h-5 transform group-hover:rotate-180 transition-all duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Desktop Neon-Rahmen */}
          <div className="max-[460px]:hidden">
            <div className="absolute -inset-1 rounded-l-xl bg-blue-500 opacity-75 blur-md animate-neonBorder" />
            <div className="absolute -inset-1.5 rounded-l-xl bg-blue-400 opacity-50 blur-lg animate-neonBorder" />
            <div className="absolute -inset-2 rounded-l-xl bg-blue-300 opacity-25 blur-xl animate-neonBorder" />
            
            {/* Spiegeleffekt */}
            <div className="absolute -bottom-32 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-xl opacity-50 transform scale-y-[-1]" />
          </div>

          {/* Mobile Container mit Neon-Effekt (nur unter 460px) */}
          <div className="min-[461px]:hidden relative scale-75 origin-top-right">
            <div className="absolute inset-0 rounded-l-xl bg-blue-500 opacity-75 blur-md animate-neonBorder" />
            <div className="absolute inset-0 rounded-l-xl bg-blue-400 opacity-50 blur-lg animate-neonBorder" />
            <div className="absolute inset-0 rounded-l-xl bg-blue-300 opacity-25 blur-xl animate-neonBorder" />
            
            <div className="relative w-[400px] h-[650px] bg-gradient-to-b from-black via-black to-[#111] rounded-l-xl border-2 border-[#e3cbaa] shadow-2xl p-8 overflow-hidden">
              {/* Neue Glanzanimation über den gesamten Banner */}
              <div className="absolute inset-0 animate-shine-banner pointer-events-none overflow-hidden">
                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-[rgba(227,203,170,0.1)] to-transparent" />
              </div>

              {/* Dekorative Ecken */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#e3cbaa]" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#e3cbaa]" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#e3cbaa]" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#e3cbaa]" />
              
              {/* Zentrierter oberer Content */}
              <div className="relative z-10 flex flex-col items-center mb-8">
                {/* Oberer Text */}
                <h3 className="text-[#e3cbaa] text-2xl font-bold text-center tracking-wider">
                  JETZT GEILEN SEXCHAT MIT MIR !
                </h3>

                {/* OF Logo mit Glanz-Effekt */}
                <div className="relative w-48 h-16 transform hover:scale-105 transition-transform duration-300 -mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e3cbaa20] to-transparent animate-shine" />
                  <Image
                    src="/Banner/OnlyFans_logo.png"
                    alt="OnlyFans Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Melia Foto - links positioniert */}
              <div className="absolute left-0 bottom-0 w-[250px] h-[80%]">
                <Image
                  src="/Banner/melia.png"
                  alt="Melia"
                  fill
                  className="object-contain object-left-bottom"
                  priority
                />
              </div>
              
              {/* Rechter Content - aufgeteilt in zwei Bereiche */}
              <div className="absolute right-8 top-[35%] w-[180px]">
                {/* Name, Alter und Online Status - alles linksbündig */}
                <div className="flex flex-col items-start gap-2 mb-16">
                  {/* Name und Alter in einer Reihe */}
                  <div className="flex items-baseline gap-1">
                    <h4 className="text-[#e3cbaa] text-2xl font-bold font-playfair tracking-wider m-0"
                        style={{
                          textShadow: '0 0 10px rgba(227, 203, 170, 0.5)'
                        }}>
                      MELIAX
                    </h4>
                    <span className="text-[#e3cbaa] text-2xl font-bold leading-none">,</span>
                    <span className="text-[#e3cbaa] text-2xl font-bold leading-none">23</span>
                  </div>

                  {/* Online Status */}
                  <div className="flex items-center gap-2">
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

                {/* Rabatt Text mit Zusatzinfo - noch mehr Abstand nach oben */}
                <div className="transform rotate-[-5deg] relative mt-8">
                  <div className="absolute inset-0 bg-[#e3cbaa] blur-md opacity-20" />
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-r from-[#e3cbaa] via-[#d0b48f] to-[#e3cbaa] text-black py-2 px-4 rounded-lg text-lg font-bold shadow-xl whitespace-nowrap mb-2">
                      Jetzt 60% günstiger!
                    </div>
                    <span className="text-[#e3cbaa] text-sm font-semibold tracking-wide">
                      Nur Kreditkarte
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Button mit Glanz-Animation */}
              <div className="absolute left-[47%] bottom-20 w-[260px]">
                <a 
                  href="https://onlyfans.com/meliax/c21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-transparent border-2 border-[#e3cbaa] text-[#e3cbaa] hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-base group inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-[#e3cbaa] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="relative z-10">JETZT CHATTEN</span>
                  {/* Glanz-Animation */}
                  <div className="absolute inset-0 animate-shine-button">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-45deg] translate-x-[-100%]" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Banner (nur über 460px) */}
          <div className="max-[460px]:hidden relative w-[400px] h-[650px] bg-gradient-to-b from-black via-black to-[#111] rounded-l-xl border-2 border-[#e3cbaa] shadow-2xl p-8 overflow-hidden group">
            {/* Verbesserte Glanzanimation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-shine-banner">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e3cbaa30] to-transparent transform -skew-x-12" />
              </div>
            </div>

            {/* Zusätzlicher Hover-Glanzeffekt */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-shine-slow">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e3cbaa20] to-transparent transform -skew-x-12" />
              </div>
            </div>

            {/* Dekorative Ecken */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#e3cbaa]" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#e3cbaa]" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#e3cbaa]" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#e3cbaa]" />
            
            {/* Zentrierter oberer Content */}
            <div className="relative z-10 flex flex-col items-center mb-8">
              {/* Oberer Text */}
              <h3 className="text-[#e3cbaa] text-2xl font-bold text-center tracking-wider">
                JETZT GEILEN SEXCHAT MIT MIR !
              </h3>

              {/* OF Logo mit Glanz-Effekt */}
              <div className="relative w-48 h-16 transform hover:scale-105 transition-transform duration-300 -mt-3">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e3cbaa20] to-transparent animate-shine" />
                <Image
                  src="/Banner/OnlyFans_logo.png"
                  alt="OnlyFans Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Melia Foto - links positioniert */}
            <div className="absolute left-0 bottom-0 w-[250px] h-[80%]">
              <Image
                src="/Banner/melia.png"
                alt="Melia"
                fill
                className="object-contain object-left-bottom"
                priority
              />
            </div>
            
            {/* Rechter Content - aufgeteilt in zwei Bereiche */}
            <div className="absolute right-8 top-[35%] w-[180px]">
              {/* Name, Alter und Online Status - alles linksbündig */}
              <div className="flex flex-col items-start gap-2 mb-16">
                {/* Name und Alter in einer Reihe */}
                <div className="flex items-baseline gap-1">
                  <h4 className="text-[#e3cbaa] text-2xl font-bold font-playfair tracking-wider m-0"
                      style={{
                        textShadow: '0 0 10px rgba(227, 203, 170, 0.5)'
                      }}>
                    MELIAX
                  </h4>
                  <span className="text-[#e3cbaa] text-2xl font-bold leading-none">,</span>
                  <span className="text-[#e3cbaa] text-2xl font-bold leading-none">23</span>
                </div>

                {/* Online Status */}
                <div className="flex items-center gap-2">
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

              {/* Rabatt Text mit Zusatzinfo - noch mehr Abstand nach oben */}
              <div className="transform rotate-[-5deg] relative mt-8">
                <div className="absolute inset-0 bg-[#e3cbaa] blur-md opacity-20" />
                <div className="flex flex-col items-center">
                  <div className="relative bg-gradient-to-r from-[#e3cbaa] via-[#d0b48f] to-[#e3cbaa] text-black py-2 px-4 rounded-lg text-lg font-bold shadow-xl whitespace-nowrap mb-2">
                    Jetzt 60% günstiger!
                  </div>
                  <span className="text-[#e3cbaa] text-sm font-semibold tracking-wide">
                    Nur Kreditkarte
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Button mit Glanz-Animation */}
            <div className="absolute left-[47%] bottom-20 w-[260px]">
              <a 
                href="https://onlyfans.com/meliax/c21"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-transparent border-2 border-[#e3cbaa] text-[#e3cbaa] hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-base group inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#e3cbaa] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10">JETZT CHATTEN</span>
                {/* Glanz-Animation */}
                <div className="absolute inset-0 animate-shine-button">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-45deg] translate-x-[-100%]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 