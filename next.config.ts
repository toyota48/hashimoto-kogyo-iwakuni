import type { NextConfig } from "next";

const rawBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBasePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : "";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: normalizedBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: normalizedBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
