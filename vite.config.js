var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    // Load env file based on mode
    var env = loadEnv(mode, process.cwd(), '');
    // Set base path for GitHub Pages deployment
    // For GitHub Pages, we need the repository name as the base path
    var isGitHubPages = mode === 'prod' && env.GITHUB_PAGES === 'true';
    var base = isGitHubPages ? '/fe-react-avatar-maker/' : '/';
    console.log("Using base path: ".concat(base, " (GitHub Pages: ").concat(isGitHubPages, ")")); // Debug output
    return {
        // Set base path (important for GitHub Pages deployment)
        base: base,
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
        define: __assign({ 
            // Expose env variables to client, filtering out those with invalid JS identifier characters
            'import.meta.env.MODE': JSON.stringify(mode) }, Object.keys(env).reduce(function (acc, key) {
            // Skip env vars with invalid identifier characters (like parentheses)
            if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
                acc["import.meta.env.".concat(key)] = JSON.stringify(env[key]);
            }
            return acc;
        }, {})),
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
