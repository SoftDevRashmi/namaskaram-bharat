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
  
  // Image optimization settings
  images: {
    unoptimized: true, // Disable optimization for static images to ensure they load properly
    domains: [],
    remotePatterns: [],
    loader: 'default',
    disableStaticImages: false,
  },
  
  // Static asset handling
  assetPrefix: '',
  
  // Ensure proper static file serving
  trailingSlash: false,
  
  // Output configuration for static export if needed
  output: 'standalone',
};

export default nextConfig;
