import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/infinisynapse/plan",
        destination: "/work/infinisynapse/plan/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
