/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'api.meliax-porn.de',
      'meliax-porn.de',
      'mfxauhtydxmrtelqdpia.supabase.co'
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
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://a.exdynsrv.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "font-src 'self' https://fonts.gstatic.com; " +
              "img-src 'self' data: https://www.meliax-porn.de https://mfxauhtydxmrtelqdpia.supabase.co; " +
              "media-src 'self' https://www.meliax-porn.de https://mfxauhtydxmrtelqdpia.supabase.co; " +
              "connect-src 'self' https://mfxauhtydxmrtelqdpia.supabase.co; " +
              "frame-src 'self';"
          },
        ],
      },
    ];
  },
};

export default nextConfig;