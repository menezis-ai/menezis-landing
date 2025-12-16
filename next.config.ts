import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static HTML export - no server required
  // Deployed to Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
