import React from 'react';
import { X, Heart, CreditCard, DollarSign, MessageCircle } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const SpecialOfferPopup = () => {
  const { showOffer, setShowOffer } = usePopup();

  if (!showOffer) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg mx-auto mt-20 sm:mt-28 md:mt-20 mb-36">
        {/* Animierter Neon-Rand */}
        <div className="absolute -inset-[3px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-75 blur-lg animate-pulse-slow group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-xl"></div>
        
        {/* Hauptcontainer mit schwarzem Hintergrund */}
        <div className="relative bg-black rounded-xl ">
          <button 
            onClick={() => setShowOffer(false)}
            className="absolute -top-4 -right-4 z-10 p-2 bg-black/80 rounded-full hover:bg-black/90 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Content Container mit Padding */}
          <div className="p-6">
            {/* Header mit Hover-Effekt */}
            <div className="text-center mb-6 relative">
              {/* Glow Effekt im Hintergrund */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-lg blur-xl animate-pulse-slow"></div>
              
              {/* Schwebender Text mit Animation */}
              <div className="relative animate-float">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  LIVE CHATTEN MIT MELIAX
                </h2>
                <p className="text-gray-300 animate-pulse">
                  Wähle aus auf welchem Portal du mit mir chatten möchtest
                </p>
              </div>
            </div>

            {/* OnlyFans Sektion */}
            <div className="relative mb-4 group">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-[2px]"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <div className="absolute -inset-[1000%] animate-shine pointer-events-none" />
                
                <div className="p-6 flex flex-col items-center text-center relative">
                  <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-4">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-bold uppercase text-sm tracking-wider">OnlyFans Chat</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    OnlyFans VIP Chat
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    Private Chats, Bilder & Video Calls
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 mb-6">
                    <CreditCard className="w-5 h-5" />
                    <span className="text-sm">Nur Kreditkarte akzeptiert</span>
                  </div>

                  <a 
                    href="https://onlyfans.com/meliax/c21"  
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    Jetzt chatten
                  </a>
                </div>
              </div>
            </div>

            {/* Matoum Sektion */}
            <div className="relative group">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-[2px]"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <div className="absolute -inset-[1000%] animate-shine pointer-events-none" />
                
                <div className="p-6 flex flex-col items-center text-center relative">
                  <div className="flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-4">
                    <MessageCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 font-bold uppercase text-sm tracking-wider">Maloum Chat</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Maloum Special Chat
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                  Private Chats, Bilder & Video Calls
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 mb-6">
                    <span className="px-3 py-1.5 bg-blue-600 text-white rounded font-bold text-sm tracking-wide">PayPal</span>
                    <span className="text-blue-400 font-medium">direkt bezahlen</span>
                  </div>

                  <a 
                    href="https://tinyurl.com/maliaxprn" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
                  >
                    Für nur 2€ chatten
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .animate-shine {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shine 5s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 0.5; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpecialOfferPopup;