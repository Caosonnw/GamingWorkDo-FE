import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**'
      }
    ]
  },
  devIndicators: {
    appIsrStatus: false
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
