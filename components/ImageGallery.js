import Image from 'next/image';

export default function ImageGallery() {
  const images = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/leaks/meliax leak (${i + 1}).jpg`,
    alt: `MeliaX Nacktbild ${i + 1}`
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative aspect-[3/4] rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={image.id <= 4}
          />
        </div>
      ))}
    </div>
  );
}