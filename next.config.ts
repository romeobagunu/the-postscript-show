import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.transistor.fm'
      }
    ]
  }
};

export default nextConfig;
