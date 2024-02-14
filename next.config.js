/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "www.notion.so",
        protocol: "https",
      },
      {
        hostname: "i0.wp.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
