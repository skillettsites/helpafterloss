import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A package.json in the parent directory makes Next infer the wrong workspace
  // root and warn about competing lockfiles. Pin it to this project.
  outputFileTracingRoot: path.join(__dirname),
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
      { source: "/will-search", destination: "https://probatecheck.co.uk", permanent: false },
      { source: "/will-search/:path*", destination: "https://probatecheck.co.uk", permanent: false },
      { source: "/how-we-work", destination: "/about", permanent: true },
      { source: "/before-you-go", destination: "/checklist", permanent: true },
      { source: "/blog/death-without-will-uk", destination: "/blog/inheritance-tax-guide-after-death", permanent: true },
    ];
  },
};

export default nextConfig;
