import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const subpath = env.GITHUB_PAGES_SUBPATH; // e.g., 'ug2'
  const base = subpath ? `/${subpath}/` : '/';

  // "generate docs folder for GitHub pages" -> subpath build
  // "and arc folder for the live website" -> root build
  const outDir = subpath
    ? path.resolve("docs")
    : path.resolve("arc");

  return {
    base,
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve("client", "src"),
        "@shared": path.resolve("shared"),
      },
    },
    root: path.resolve("client"),
    build: {
      outDir,
      emptyOutDir: true,
    },
  };
});
