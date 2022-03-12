/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/blog/:slug',
        destination: 'https://blog.vancation.com/:slug',
      },
    ]
  },
}

module.exports = nextConfig
