// Changes to  the languages and also defaultLang has to be also done in the sitemap configuration in /astro.config.mjs
export const languages = {
  en: 'English',
  de: 'Deutsch',
};

// See comment above.
export const defaultLang = 'en';

import enTranslations from './en.json';
import deTranslations from './de.json';

export const ui = {
  en: enTranslations,
  de: deTranslations,
} as const;