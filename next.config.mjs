/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'api.meliax-porn.de',
      'meliax-porn.de'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Diese Regel gilt für alle Routen
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data:; " +
              "media-src 'self' data:; " + // Erlaubt das Laden von Medien (Videos) von 'self' und data-URIs
              "frame-src 'self'; " +
              "connect-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;