import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://lionz.my.id',
  output: 'static',
  integrations: [sitemap(), icon()],
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
    // We remove the explicit manualChunks for three.js and gsap.
    // Astro 4.x/5.x/6.x + Rollup 4 has stricter chunking behavior. 
    // Three.js and GSAP will automatically be chunked properly by Vite's defaults.
  },
});
