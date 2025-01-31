import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "img.icons8.com"],
  },
};

export default nextConfig;
