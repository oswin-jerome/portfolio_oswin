/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images:{
    domains:[
      'images.unsplash.com',
      'www.notion.so'
    ]
  }
}

module.exports = nextConfig
