import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/how-we-work", destination: "/about", permanent: true },
      { source: "/before-you-go", destination: "/checklist", permanent: true },
      { source: "/blog/death-without-will-uk", destination: "/blog/inheritance-tax-guide-after-death", permanent: true },
    ];
  },
};

export default nextConfig;
