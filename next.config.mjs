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
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://a.exdynsrv.com; " +
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
            "font-src 'self' https://fonts.gstatic.com; " +
            "img-src 'self' data: https://www.meliax-porn.de; " +
            "media-src 'self' https://www.meliax-porn.de; " +
            "connect-src 'self'; " +
            "frame-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;