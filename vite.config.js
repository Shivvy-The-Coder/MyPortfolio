import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'],
    },
  },
}
