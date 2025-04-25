// next.config.js

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  metadata: {
    metadataBase: new URL('https://www.raniagrofood.com'),
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  images: {
    domains: ['www.raniagrofood.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },

  async redirects() {
    return [
      {
        source: '/products',
        destination: '/#products',
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
