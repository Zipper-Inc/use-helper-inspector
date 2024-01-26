import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development'

  return {
    optimizeDeps: {
      exclude: ['@zipper-inc/use-inspector-guide'],
    },
    plugins: [react()],
    server: {
      port: 3000,
      watch: {
        ignored: ['!**/dist/**'],
      },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './src/infrastructure/tests.setup.ts',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@zipper-inc/use-inspector-guide': path.resolve(__dirname, '../dist'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
  }
})
