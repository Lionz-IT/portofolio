import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rafif.dev',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three'],
            gsap: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText'],
          },
        },
      },
    },
  },
});
