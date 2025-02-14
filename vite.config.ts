import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SiteVitrineAdamaLassana/',  // 🔥 Important pour GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // 🔥 Garde les fichiers organisés
  },
  server: {
    open: true,
  },
})
