import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
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
  
  // Add webpack configuration to ensure images are included
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
