// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({

  site: 'https://sangsongthong-hexterika.github.io/',  // Replace with your GitHub Pages URL
  base: '/hexterika-breaks-free/',  // Path to your GitHub repository

  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname, // Alias for the src directory
      },
    },
  },

  integrations: [react()],
});