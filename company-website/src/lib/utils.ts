export function cn(...inputs: (string | undefined)[]) {
  return inputs.filter(Boolean).join(' ')
}

export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // For development, use the path as is
  if (import.meta.env.DEV) {
    return '/' + cleanPath
  }
  // For production (GitHub Pages), prefix with /react-demo/
  return '/react-demo/' + cleanPath
}
