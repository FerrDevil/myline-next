const dictionaries = {
    en: () => import('./en.json').then((module) => module.default),
    ru: () => import('./ru.json').then((module) => module.default),
  };

export const getPartnersDictionary = async (locale) => dictionaries[locale]();