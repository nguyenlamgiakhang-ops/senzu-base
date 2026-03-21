import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    browsersListForSwc: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "senzu-base.vn",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
