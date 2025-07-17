import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "private-user-images.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh7-us.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
