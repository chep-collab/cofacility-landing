import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/cofacility-landing/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    hmr: {
      path: '/hmr', // Ensures correct WebSocket routing with custom base
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
