/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
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