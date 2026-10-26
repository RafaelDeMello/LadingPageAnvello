import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// CSP estrita (sem 'unsafe-inline'): nada de CSS/JS inline no build.
export default defineConfig({
  site: 'https://anvello.com.br',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'never' },
  vite: {
    plugins: [tailwindcss()],
    build: { assetsInlineLimit: 0 },
  },
});
