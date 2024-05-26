import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // site: process.env.NODE_ENV === 'development' ? 'http://localhost:4321' : 'https://ascheucher-shopify-partner.github.io',
  site: 'https://ascheucher-shopify-partner.github.io',
  base: '/astro-blog-tutorial',
  trailingSlash: "never",
  integrations: [preact()]
});