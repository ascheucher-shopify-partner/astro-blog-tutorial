/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { getViteConfig } from 'astro/config';

// https://docs.astro.build/en/guides/testing/

export default getViteConfig(
  defineConfig({
    test: {
      // Vitest configuration options
    },
  })
);