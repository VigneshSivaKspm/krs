import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// K.R. Saravanakumar Official Website - krsaravanakumar.in
// SEO Optimized Vite Configuration

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize for SEO and performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Development server configuration
  server: {
    // Listen on all interfaces so other devices can reach the dev server if needed
    host: true,
    // Fixed dev port to avoid random port assignments
    port: 3000,
    strictPort: true,
    open: true,
    // Robust HMR settings. If you're developing locally, this will use ws://localhost:3000.
    // If you're inside Docker/WSL or accessing from another device, set `host` to your machine IP.
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 3000,
    },
    // If your environment (Docker/WSL) doesn't support file system events, enable polling:
    // watch: { usePolling: true },
  },
  // Preview server configuration (for production testing)
  preview: {
    port: 4173,
  },
})
