import { defineConfig } from 'vite'
import * as path from 'path'
import pages from 'vite-plugin-react-pages'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),
    pages({ 
      pagesDir: path.join(__dirname, 'pages'),
    }),]
})
