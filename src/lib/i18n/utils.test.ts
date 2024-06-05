import { getCollection } from "astro:content";
import { languages } from "@lib/i18n/ui";
import { getRelativeLocaleUrl } from "astro:i18n";
import {
  filterPostsForLang,
  otherLanguage,
  getPostsByIdAndLang,
  getHrefLangLinks,
  type PostsByLang,
} from "@lib/i18n/utils";
import type { Post } from "@content/config";
import { expect, test } from "vitest";

// VITEST Documentation https://vitest.dev/guide/

test('gets all supported languages', () => {
  expect(Object.keys(languages).toString()).toBe(['en', 'de'].toString());
})

test('to be able to run getRelativeLocaleUrl()', () => {
  expect(getRelativeLocaleUrl('de', 'blub')).toBe('/de/blub');
})

test('test hreflang creation - empty', () => {
  expect(getHrefLangLinks(false, 'en', 'ecommerce-insights/learning-astro', 'de', 'ecommerce-insights/lerne-astro'))
    .toEqual([])
})

test.skip('test hreflang creation - populated and match the expecte URLs', () => {
  expect(getHrefLangLinks(true, 'en', 'ecommerce-insights/learning-astro', 'de', 'ecommerce-insights/lerne-astro'))
    .toEqual([
      { lang: 'en', href: 'https://ascheucher-shopify-partner.github.io/astro-blog-tutorial/en/ecommerce-insights/learning-astro' },
      { lang: 'de', href: 'https://ascheucher-shopify-partner.github.io/astro-blog-tutorial/de/ecommerce-insights/lerne-astro' }
    ])

  // FIXME: created a bug report: https://github.com/withastro/astro/issues/11175
})
