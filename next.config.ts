import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/trekking/everest-base-camp', destination: '/treks/everest-base-camp', permanent: true },
      { source: '/blog/best-season-nepal', destination: '/journal', permanent: true },
      { source: '/old-contact', destination: '/contact', permanent: false },
    ]
  },
}

export default nextConfig
