/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'], // Add any external domains for images if needed
    // This option is for placeholders while images load
    unoptimized: process.env.NODE_ENV === 'development',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Configure any environmental variables needed
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig; 