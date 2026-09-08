import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/book", destination: "/#book", permanent: false }];
  },
};

export default nextConfig;
