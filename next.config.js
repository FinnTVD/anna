/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'i.dummyjson.com',
        hostname: '*',
      },
      {
        protocol: 'https',
        // hostname: 'res.cloudinary.com',
        hostname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
