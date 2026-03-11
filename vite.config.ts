import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
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
    outDir: path.resolve("docs"),
    emptyOutDir: true,
  },
});
