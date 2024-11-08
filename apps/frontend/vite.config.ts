import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../backend/public'
  },
  plugins: [
    TanStackRouterVite(),
    react()
  ],
})
