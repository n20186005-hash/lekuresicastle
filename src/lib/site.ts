/**
 * Single source of truth for canonical URLs, language metadata and entity facts.
 *
 * Canonical host decision (2026-11-04): the GSC page report shows
 * https://lekuresicastle.com/en with 623 clicks / 57,109 impressions versus
 * https://www.lekuresicastle.com/en with 145 clicks / 12,889 impressions, and
 * every existing canonical / sitemap / robots entry already uses the apex host.
 * To avoid an unnecessary site-wide migration we keep the apex host canonical
 * and redirect the www host to it. If the domain strategy is changed later,
 * only CANONICAL_HOST below needs to be edited.
 */
export const CANONICAL_HOST = 'lekuresicastle.com';
export const SITE_URL = `https://${CANONICAL_HOST}`;

export const locales = ['en', 'sq', 'it', 'fr', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const HREFLANG: Record<Locale, string> = {
  en: 'en',
  sq: 'sq-AL',
  it: 'it-IT',
  fr: 'fr-FR',
  zh: 'zh-CN',
};

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  sq: 'sq-AL',
  it: 'it-IT',
  fr: 'fr-FR',
  zh: 'zh-CN',
};

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  sq: 'sq_AL',
  it: 'it_IT',
  fr: 'fr_FR',
  zh: 'zh_CN',
};

export const IN_LANGUAGE: Record<Locale, string> = {
  en: 'en',
  sq: 'sq-AL',
  it: 'it-IT',
  fr: 'fr-FR',
  zh: 'zh-CN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Absolute URL for a locale-prefixed path. `path` must start with "/" or be empty. */
export function localeUrl(locale: Locale, path = ''): string {
  return `${SITE_URL}/${locale}${path}`;
}

/** hreflang map for the homepage (all five completed translations). */
export function homeLanguages(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of locales) result[HREFLANG[locale]] = localeUrl(locale);
  result['x-default'] = localeUrl('en');
  return result;
}

/** hreflang map for a shared sub-page that exists in every locale. */
export function sharedPathLanguages(path: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of locales) result[HREFLANG[locale]] = localeUrl(locale, path);
  result['x-default'] = localeUrl('en', path);
  return result;
}

/** hreflang map for a topic page, restricted to locales that actually published it. */
export function topicLanguages(path: string, published: readonly Locale[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of published) result[HREFLANG[locale]] = localeUrl(locale, path);
  result['x-default'] = localeUrl('en', path);
  return result;
}

export const HERO_IMAGE_URL = `${SITE_URL}/gallery/lekuresi-castle-02.jpg`;
export const MAPS_URL = 'https://maps.app.goo.gl/Vh8wMe2L3UsdvpAC8';
export const ATTRACTION_ID = `${SITE_URL}/#attraction`;

export const ATTRACTION = {
  name: 'Lëkurësi Castle',
  localName: 'Kalaja e Lëkurësit',
  alternateNames: ['Lekuresi Castle', 'Lekursi Castle', 'Kalaja e Lëkurësit', 'Saranda Castle'],
  locality: 'Sarandë',
  region: 'Vlorë County',
  postalCode: '9701',
  country: 'AL',
  latitude: 39.86587795,
  longitude: 20.0257742,
};

/** Date on which operational facts and source links were last reviewed. */
export const CHECKED_DATE = '2026-11-04';

/** Google Business Profile snapshot (2026-11-04): 4.3/5 across 8,567 reviews. */
export const RATING = { value: 4.3, count: 8567 } as const;
/** Google Plus Code for the hilltop site, handy for map search and drop-off. */
export const PLUS_CODE = 'V28G+97 Sarandë, Albania';

/** Authoritative / first-party sources used across the guide pages. */
export const SOURCES = {
  aktAttraction: {
    label: 'National Tourism Agency of Albania — Lëkurësi Castle',
    url: 'https://akt.gov.al/en/atraksionet/kalaja-e-lekuresit-lekuresi-castle/',
  },
  aktCastle: {
    label: 'National Tourism Agency of Albania — Castle profile',
    url: 'https://akt.gov.al/en/kala/kalaja-e-lekuresit/',
  },
  aktSarande: {
    label: 'National Tourism Agency of Albania — Sarandë',
    url: 'https://www.akt.gov.al/en/cities/sarande/',
  },
  sarandaInfo: {
    label: 'Sarandë Tourist Information',
    url: 'https://saranda.al/tourist_info',
  },
  sarandaExplore: {
    label: 'Saranda Explore — Castle of Lëkurës',
    url: 'https://saranda-explore.al/en/castle-of-lekures/',
  },
  restaurant: {
    label: 'Restorant Kalaja e Lëkurësit — operator website',
    url: 'https://www.lekursi-castle.al/',
  },
  municipality: {
    label: 'Municipality of Sarandë',
    url: 'https://bashkiasarande.gov.al/',
  },
  heritage: {
    label: 'National Institute of Cultural Heritage of Albania',
    url: 'https://iktk.gov.al/',
  },
  butrint: {
    label: 'UNESCO — Butrint World Heritage Site',
    url: 'https://whc.unesco.org/en/list/570/',
  },
  maps: {
    label: 'Lëkurësi Castle on Google Maps',
    url: MAPS_URL,
  },
  googleBusiness: {
    label: 'Google Business Profile — Lëkurësi Castle',
    url: MAPS_URL,
  },
} as const;

export type SourceKey = keyof typeof SOURCES;

export function attractionRef() {
  return { '@id': ATTRACTION_ID };
}

/** BreadcrumbList schema shared by all topic pages. */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function webPageSchema(args: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${args.url}#webpage`,
    url: args.url,
    name: args.name,
    description: args.description,
    inLanguage: IN_LANGUAGE[args.locale],
    dateModified: CHECKED_DATE,
    about: attractionRef(),
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}
