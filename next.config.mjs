/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. ADD THIS LINE for Static HTML Export
  output: 'export', 
  
  // Existing Configurations:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/projects/:slug*',
  //       destination: '/projects',
  //     },
  //   ]
  // },
};

export default nextConfig;