import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

export default function AdBannerHeader({ className = "" }) {
  const { setShowOffer } = usePopup();

  return (
    <div 
      className={`relative w-full ${className} cursor-pointer`}    
      onClick={() => setShowOffer(true)}
    >
   <Image
          src="/Banner/3.jpg"
          alt="Ad Banner"
          fill
          className="object-cover border-2 border-white mt-2"
          priority
        />
      
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="relative rounded-xl lg:rounded-3xl">
          <div className="h-20 sm:h-28 md:h-28 lg:h-30"></div>
        </div>
      </div>
    </div>
  );
}