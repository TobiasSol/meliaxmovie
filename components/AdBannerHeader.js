import Image from 'next/image';

export default function AdBannerHeader() {
  return (
    <div className="relative w-full h-[120px] lg:h-[160px] bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-lg border border-pink-500/10">
      <div className="absolute bottom-2 left-4 w-[100px] h-[100px] lg:w-[280px] lg:h-[140px]">
        <Image
          src="/Banner/meliaquer1.png"
          alt="Banner Image"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      
      <div className="absolute bottom-2 right-4 flex flex-col gap-2">
        <button className="px-4 py-1.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all">
          Button 1
        </button>
        <button className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
          Button 2
        </button>
      </div>
    </div>
  );
} 