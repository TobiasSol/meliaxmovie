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
            "script-src 'self' https://a.exdynsrv.com 'unsafe-eval'; " +
            "style-src 'self' 'unsafe-inline'; " +
            "img-src 'self' data:; " +
            "media-src 'self' https://www.meliax-porn.de; " + // Erlaubt das Laden von Videos von deiner Domain
            "frame-src 'self'; " +
            "connect-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;