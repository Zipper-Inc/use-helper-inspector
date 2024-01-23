/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  define: {
    'import.meta.vitest': true,
  },
  test: {
    css: true,
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.js',
    testTimeout: 10000,
  },
})
