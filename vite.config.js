import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si estás usando React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});