import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';
import { useEffect } from 'react';
import Head from 'next/head';

export default function AdBannerHeader({ className = "" }) {
 const { setShowOffer } = usePopup();

 useEffect(() => {
   const preloadVideo = new Audio('/Banner/sexchatbannerpn.mp4');
   preloadVideo.preload = 'auto';
 }, []);

 return (
   <>
     <Head>
       <link 
         rel="preload" 
         as="video" 
         href="/Banner/sexchatbannerpn.mp4" 
         type="video/mp4" 
       />
     </Head>
     
     <div 
       className={`relative w-full ${className} cursor-pointer`}
       onClick={() => setShowOffer(true)}
     >
       <video
         className="absolute inset-0 w-full object-cover border-2 border-white"
         autoPlay
         muted
         loop
         playsInline
         preload="auto"
         fetchpriority="high"
       >
         <source src="/Banner/sexchatbannerpn.mp4" type="video/mp4" />
       </video>
       
       <div className="w-full max-w-[2000px] mx-auto">
         <div className="relative rounded-xl lg:rounded-3xl">
           <div className="h-16 sm:h-28 md:h-28 lg:h-30"></div>
         </div>
       </div>
     </div>
   </>
 );
}