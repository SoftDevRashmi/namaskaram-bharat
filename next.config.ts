import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['react-slick'],
  },
  // Optimize static assets
  compress: true,
  // Enable gzip compression
  poweredByHeader: false,
  // Security: remove X-Powered-By header
};

export default nextConfig;
