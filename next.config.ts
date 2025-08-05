import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  trailingSlash: true, // Ensure all routes end with trailing slash

  experimental: {
    optimizePackageImports: ['react-slick'], // Reduces bundle size
  },

  compress: true, // Enable gzip compression
  poweredByHeader: false, // Hide "X-Powered-By" header for security

  images: {
    unoptimized: true, // Must be true for static export
  },

  assetPrefix: '', // Set if serving assets from a CDN

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Prevent bundling Node's 'fs' module
      };
    }
    return config;
  },
};

export default nextConfig;
