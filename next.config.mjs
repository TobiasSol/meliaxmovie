/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'https://meliaxmovie.vercel.app',
      'meliax-porn.de',
      'meliax-porn.de/Banner',  
      'meliax-porn.de/Banner/sexchatbannerporn.mp4',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src *; media-src * 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
}

export { nextConfig as default };