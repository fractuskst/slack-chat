/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      '/': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
