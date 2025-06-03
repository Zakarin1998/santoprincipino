import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Suddividi i moduli di node_modules in chunk più piccoli
            if (id.includes('@mui')) return 'vendor-mui';
            if (id.includes('react-')) return 'vendor-react';
            if (id.includes('axios')) return 'vendor-axios';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      '@mui/material', 
      '@emotion/react', 
      '@emotion/styled', 
      'axios'
    ]
  },
  server: {
    port: 5174,
    open: true,
    hmr: {
      overlay: false
    }
  }
})