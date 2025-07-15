import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  // 🧼 Remove base since you're deploying to the root
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    hmr: {
      path: '/hmr',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
