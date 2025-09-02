// Utility for basePath-aware public asset URLs (e.g., GitHub Pages project subpaths)
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

