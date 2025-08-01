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
  
  // Image optimization settings - DISABLE for static images
  images: {
    unoptimized: true, // This is crucial for static images in Vercel
  },
  
  // Static asset handling
  assetPrefix: '',
  
  // Ensure proper static file serving
  trailingSlash: false,
  
  // Output configuration for static export if needed
  output: 'standalone',
};

export default nextConfig;
