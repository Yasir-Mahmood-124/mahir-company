import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.mrmahir.com",
        pathname: "/**", // ✅ allow all image paths
      },
    ],
  },
};

export default nextConfig;
