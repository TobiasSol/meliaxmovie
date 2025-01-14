import { ArrowRight } from 'lucide-react';

export default function AdBannerFooter() {
  return (
    <div className="w-full bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
          <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-lg border border-pink-500/10 backdrop-blur-sm">
            {/* Große Blur-Effekte */}
            <div className="absolute -top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between px-8 lg:px-16 py-12 lg:py-16">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider">
                  <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                    Werbe auf MeliaX-porn
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-pink-200/80 uppercase tracking-wider mt-4">
                  Erreiche tausende Besucher täglich
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="text-center md:text-right">
                  <p className="text-pink-200/80 font-medium text-lg">
                    Ab <span className="text-3xl font-bold text-pink-400">49€</span> / Monat
                  </p>
                  <p className="text-pink-200/60 text-base mt-2">
                    Flexible Laufzeiten verfügbar
                  </p>
                </div>
                
                <button className="group relative flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                  <span className="relative z-10 text-white font-medium uppercase tracking-wider text-lg">
                    Jetzt Werben
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-white" />
                  
                  {/* Glanz-Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine-slow"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 