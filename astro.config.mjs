import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'development' ? 'http://localhost:4321' : 'https://ascheucher-shopify-partner.github.io',
  base: 'astro-blog-tutorial',
  trailingSlash: "always"
});
