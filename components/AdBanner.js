import Image from 'next/image';

export default function AdBanner() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
      <div className="relative h-32 w-full">
        <Image
          src="/api/placeholder/1920/320" // Verwende einen Placeholder statt banner.jpg
          alt="Advertisement"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent flex items-center px-6">
          <div>
            <h3 className="text-white text-xl font-bold">Custom Content Available!</h3>
            <p className="text-white/80 mt-1">Get your personalized video today</p>
            <button className="mt-2 bg-white text-red-600 px-4 py-1 rounded hover:bg-red-100 transition-colors text-sm font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}