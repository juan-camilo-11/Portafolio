import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://juan-camilo-11.github.io',
  integrations: [tailwind()],
});