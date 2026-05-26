const basePath = process.env.NODE_ENV === "production" ? "/Pekers" : "";

export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
