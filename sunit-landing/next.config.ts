import type { NextConfig } from "next";

// Allow hosting under a subpath (e.g., GitHub Pages project site)
// Set NEXT_BASE_PATH to "/<repo-name>" during CI when needed.
const basePath = process.env.NEXT_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Generate a fully static export in `out/`
  output: 'export',
  // Required for next/image when exporting static HTML
  images: { unoptimized: true },
  // Support subpath hosting on Pages; omit if empty
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Trailing slash avoids 404s on static hosting
  trailingSlash: true,
};

export default nextConfig;
