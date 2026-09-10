import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    open: true
  },
  build: {
    rolldownOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  plugins: [glsl()]
});
