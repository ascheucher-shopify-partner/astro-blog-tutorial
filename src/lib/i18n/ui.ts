// Changes to  the languages and also defaultLang has to be also done in the sitemap configuration in /astro.config.mjs
export const languages = {
  en: 'English',
  de: 'Deutsch',
};

// See comment above.
export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.shopify-insights': 'Shopify Insights',
    'nav.twitter': 'Twitter',
    'nav.tags': 'Tags'
  },
  de: {
    'nav.home': 'Home',
    'nav.about': 'Über',
    'nav.shopify-insights': 'Shopify Nuggets',
  },
} as const;