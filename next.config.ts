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
    unoptimized: false, // Enable optimization to prevent flickering
    domains: [],
    remotePatterns: [],
    minimumCacheTTL: 31536000, // 1 year cache
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Static asset handling
  assetPrefix: '',
  
  // Ensure proper static file serving
  trailingSlash: false,
  
  // Output configuration for static export if needed
  output: 'standalone',
  
  // Add headers for better caching
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
