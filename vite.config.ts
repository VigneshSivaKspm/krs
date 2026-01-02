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
    host: true, // listen on all addresses (useful for devices on LAN)
    port: 3000,
    open: true,
    // Disable HMR websocket on your request to avoid websocket errors during development
    // Note: this disables hot module replacement; you'll need to refresh to see changes.
    hmr: false,
  },
  // Preview server configuration (for production testing)
  preview: {
    port: 4173,
  },
})
