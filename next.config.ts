import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    browsersListQueries: ["Chrome >= 90", "Safari >= 15", "Firefox >= 90", "Edge >= 90"],
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
