import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: isGitHubPages,
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/portfolio",
        assetPrefix: "/portfolio",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
