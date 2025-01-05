/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hjqnxclthodvqehslnlh.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Content Security Policy
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; media-src 'self' blob: https:; connect-src 'self' https: wss:;"
          }
        ],
      },
    ];
  },
  // Konfiguration für große Dateiuploads
  api: {
    bodyParser: {
      sizeLimit: '500mb'
    },
    responseLimit: '500mb'
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  // Erhöhen der Timeout-Werte
  serverRuntimeConfig: {
    // Will only be available on the server side
    timeoutSeconds: 300, // 5 Minuten Timeout
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiTimeout: 300000, // 5 Minuten in Millisekunden
  },
}

export default nextConfig;