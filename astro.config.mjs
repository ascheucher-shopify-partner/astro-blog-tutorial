import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://ascheucher-shopify-partner.github.io',
  base: '/astro-blog-tutorial',
  trailingSlash: "never",
  integrations: [preact()]
});