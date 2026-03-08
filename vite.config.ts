import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Other plugins can remain here
  ],
  build: {
    outDir: 'docs', // Changed output directory to docs
  },
});