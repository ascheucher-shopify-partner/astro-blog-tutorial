import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://docs.astro.build/en/reference/configuration-reference/
// https://astro.build/config
export default defineConfig({
  site: 'https://ascheucher-shopify-partner.github.io', // TODO change this to the real domain for the sitemap
  base: '/astro-blog-tutorial',
  trailingSlash: "never",
  integrations: [
    preact(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          'en': 'en',
          'de': 'de'
        },
      }
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  }
});