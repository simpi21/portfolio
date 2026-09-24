import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into `out/` — no server needed.
  output: "export",
  // The default image optimizer needs a server; images are pre-optimized instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
