import { ArrowRight } from 'lucide-react';

export default function AdBannerHeader() {
  return (
    <div className="relative overflow-hidden w-full h-full flex items-center">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="w-full">
        <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-lg border border-pink-500/10 backdrop-blur-sm scale-120 md:scale-120 lg:scale-100">
          <div className="absolute top-0 right-0 w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="relative flex items-center justify-between px-5 lg:px-8 py-4 lg:py-6">
            <div className="text-left">
              <h2 className="text-base lg:text-xl font-bold uppercase tracking-wider">
                <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                  Ads Banner Mieten
                </span>
              </h2>
              <p className="text-sm lg:text-base text-pink-200/80 uppercase tracking-wider mt-1 lg:mt-2">
                Werbe hier für dein Produkt
              </p>
            </div>
            
            <button className="group relative flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <span className="relative z-10 text-white font-medium uppercase tracking-wider text-sm lg:text-base">
                Mieten
              </span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 