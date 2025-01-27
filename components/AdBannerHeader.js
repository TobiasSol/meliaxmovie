import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

export default function AdBannerHeader({ className = "" }) {
  const { setShowOffer } = usePopup();

  return (
    <div 
      className={`relative w-full ${className} cursor-pointer h-32`}    
      onClick={() => setShowOffer(true)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="relative w-full h-32">
          <video
            className="absolute inset-0 w-full h-full object-cover border-2 border-white rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Banner/sexchatbannerporn.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative w-full h-32">
          <div className="relative w-full h-full">
            <Image
              src="/Banner/OnlyFans_logo.png"
              alt="OnlyFans Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}