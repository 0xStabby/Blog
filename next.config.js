/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/setup.sh',
        destination: '/api/setup.sh',
      },
    ];
  },
};

module.exports = nextConfig;
