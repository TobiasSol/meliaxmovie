/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'https://meliaxmovie.vercel.app',
      'meliax-porn.de'
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
            value: "default-src 'self'; media-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:;"
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