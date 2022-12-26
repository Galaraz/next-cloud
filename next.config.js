/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  runtime: "experimental-edge",
  },
  appDir: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-dev.infoimoveis.com.br',
      },
    ],
  },
}

module.exports = nextConfig
