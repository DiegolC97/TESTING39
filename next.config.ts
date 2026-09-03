import type { NextConfig } from "next";
import { site } from "./src/lib/site";

/*
 * Static export for GitHub Pages. The project is served from
 * https://diegolc97.github.io/TESTING39/, so every asset needs the basePath.
 * Set NEXT_PUBLIC_NO_BASE_PATH=1 to build for a root-served host (e.g. Vercel).
 */
const useBasePath = process.env.NEXT_PUBLIC_NO_BASE_PATH !== "1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: useBasePath ? site.basePath : "",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
