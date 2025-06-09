/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // Existing domains for Azerbaijan circuit images
      {
        protocol: 'https',
        hostname: 'static.tickets-platform.com',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'd2xpg1khvwxlf1.cloudfront.net',
        pathname: '/production/images/**',
      },
      {
        protocol: 'https',
        hostname: 'gpticketstore.vshcdn.net',
        pathname: '/uploads/images/**',
      },
      // GitHub + jsDelivr CDN for our images
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/**',
      },
      // Fallback for direct GitHub raw (if needed)
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configure any environmental variables needed
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },
  // Handle redirects from www to non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.f1spot.com',
          },
        ],
        destination: 'https://f1spot.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 