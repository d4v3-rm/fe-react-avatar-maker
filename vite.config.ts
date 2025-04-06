import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');
  
  // Set base path for GitHub Pages deployment
  const base = mode === 'prod' && env.GITHUB_PAGES === 'true' ? '/fe-react-avatar-maker/' : '/';
  
  return {
    // Set base path (important for GitHub Pages deployment)
    base,
    plugins: [
      react(),
      tsconfigPaths(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      open: true,
      cors: true,
    },
    define: {
      // Expose env variables to client, filtering out those with invalid JS identifier characters
      'import.meta.env.MODE': JSON.stringify(mode),
      ...Object.keys(env).reduce((acc, key) => {
        // Skip env vars with invalid identifier characters (like parentheses)
        if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
          acc[`import.meta.env.${key}`] = JSON.stringify(env[key]);
        }
        return acc;
      }, {}),
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'prod',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
            redux: ['@reduxjs/toolkit', 'react-redux'],
          },
        },
      },
    },
  };
});
