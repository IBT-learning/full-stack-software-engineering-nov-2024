import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // To use `describe`, `it`, `expect` without importing them
    environment: 'jsdom',     // simulate the DOM
    setupFiles: './src/setupTests.js', 
  },
})
