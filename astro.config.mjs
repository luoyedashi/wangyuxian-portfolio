import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luoyedashi.github.io/wangyuxian-portfolio/',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
