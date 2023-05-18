/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mdbcdn.b-cdn.net'],
  },
  reactStrictMode: true,
  output: 'standalone',
};

module.exports = nextConfig;
