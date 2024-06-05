import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

  categories: {
    necessary: {
      enabled: true,  // this category is enabled by default
      readOnly: true  // this category cannot be disabled
    },
    analytics: {}
  },

  language: {
    default: 'de',
    autoDetect: 'document',
    translations: {
      // TODO bessere Beschreibung für consentModal.description EN & DE
      en: async () => {
        const res = await fetch('cookie-en.json');
        return await res.json();
      },
      // FIXME settings dialog in german is broken. Filed a bug: https://github.com/orestbida/cookieconsent/issues/693
      de: async () => {
        const res = await fetch('cookie-de.json');
        return await res.json();
      }
    }
  }
});