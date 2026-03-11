import { defineConfig } from 'vite';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  root: path.resolve(__dirname, "docs"),
  build: {
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: false,
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: true
  }
});
