import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com',
      },
    ],
  },
};

export default nextConfig;
