import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Allow dev resources (HMR, fast refresh) to be served to phones / tablets
   * on the same LAN. Without this, Next.js 16 blocks the React hydration
   * bundle as a cross-origin request, leaving the page as plain SSR HTML.
   */
  allowedDevOrigins: [
    "192.168.0.146",
    "192.168.0.0/24",
    "192.168.1.0/24",
    "10.0.0.0/8",
    "*.local",
  ],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
