/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'http://supabasekong-gk88gkscso84o4sc408kkkog.145.223.103.147.sslip.io/',
      'meliax.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
}

export default nextConfig;