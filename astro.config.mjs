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
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three'],
            gsap: ['gsap'],
          },
        },
      },
    },
  },
});
