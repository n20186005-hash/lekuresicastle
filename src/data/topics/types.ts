import type { Locale, SourceKey } from '@/lib/site';

export type Priority = 'P0' | 'P1' | 'P2';

export type GroupId =
  | 'visit'
  | 'sunset'
  | 'history'
  | 'dining'
  | 'nearby'
  | 'audiences'
  | 'compare';

export type TopicSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TopicFaq = { q: string; a: string };

export type TopicContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
};

export type TopicTranslation = TopicContent & {
  cardTitle: string;
  cardText: string;
};

export type Topic = {
  /** Full path below the locale prefix, e.g. "guides/entrance-fee". */
  slug: string;
  group: GroupId;
  priority: Priority;
  keyword: string;
  intent: string;
  related: string[];
  sources: SourceKey[];
  en: TopicTranslation;
};

export type TopicGroup = {
  id: GroupId;
  en: { label: string; description: string };
  sq: { label: string; description: string };
};

export const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: 'visit',
    en: { label: 'Plan your visit', description: 'Tickets, hours, access, parking and on-site facilities.' },
    sq: { label: 'Planifikoni vizitën', description: 'Biletat, orari, qasja, parkimi dhe shërbimet në vend.' },
  },
  {
    id: 'sunset',
    en: { label: 'Sunset & photography', description: 'Viewpoints, light, camera angles and evening visits.' },
    sq: { label: 'Perëndimi i diellit & fotografia', description: 'Pikat e shikimit, drita, këndet e fotografimit dhe vizitat në mbrëmje.' },
  },
  {
    id: 'history',
    en: { label: 'History & architecture', description: 'Ottoman background, the building and the Lëkurës area.' },
    sq: { label: 'Historia & arkitektura', description: 'Sfondi osman, ndërtesa dhe zona e Lëkurësit.' },
  },
  {
    id: 'dining',
    en: { label: 'Restaurant & reservations', description: 'How the on-site restaurant differs from visiting the ruins.' },
    sq: { label: 'Restoranti & rezervimet', description: 'Si ndryshon restoranti brenda kalasë nga vizita e rrënojave.' },
  },
  {
    id: 'nearby',
    en: { label: 'Nearby & itineraries', description: 'Sarandë, the Forty Saints, Ksamil and Butrint routes.' },
    sq: { label: 'Afërsi & itinerare', description: 'Saranda, Manastiri i Dyzet Shenjtorëve, Ksamili dhe Butrinti.' },
  },
  {
    id: 'audiences',
    en: { label: 'Visitor needs', description: 'Families, seniors, accessibility, budget and weather.' },
    sq: { label: 'Nevojat e vizitorëve', description: 'Familjet, të moshuarit, aksesueshmëria, buxheti dhe moti.' },
  },
  {
    id: 'compare',
    en: { label: 'Decisions & comparisons', description: 'Whether to go, and how the castle compares with other viewpoints.' },
    sq: { label: 'Vendime & krahasime', description: 'Nëse ia vlen të shkoni dhe si krahasohet me pika të tjera shikimi.' },
  },
];

export type HubCard = {
  id: string;
  groups: GroupId[];
  en: { title: string; text: string };
  sq: { title: string; text: string };
};

/** Four top-level entry points required by the report (instead of 36 flat footer links). */
export const HUB_CARDS: HubCard[] = [
  {
    id: 'plan-your-visit',
    groups: ['visit', 'audiences'],
    en: { title: 'Plan Your Visit', text: 'Tickets, hours, parking, access and practical questions.' },
    sq: { title: 'Planifikoni Vizitën', text: 'Biletat, orari, parkimi, qasja dhe pyetjet praktike.' },
  },
  {
    id: 'history-and-architecture',
    groups: ['history'],
    en: { title: 'History & Architecture', text: 'The Ottoman fortress, its masonry and the Lëkurës hill.' },
    sq: { title: 'Historia & Arkitektura', text: 'Kalaja osmane, muret e saj dhe kodra e Lëkurësit.' },
  },
  {
    id: 'sunset-and-dining',
    groups: ['sunset', 'dining'],
    en: { title: 'Sunset & Dining', text: 'Viewpoints, photography, the restaurant and booking questions.' },
    sq: { title: 'Perëndimi & Restoranti', text: 'Pikat e shikimit, fotografia, restoranti dhe rezervimet.' },
  },
  {
    id: 'nearby-and-itineraries',
    groups: ['nearby', 'compare'],
    en: { title: 'Nearby Attractions & Itineraries', text: 'Walks, day trips and how the castle compares.' },
    sq: { title: 'Atraksione Afër & Itinerare', text: 'Shëtitje, udhëtime ditore dhe krahasime.' },
  },
];

export type TopicUi = {
  home: string;
  guides: string;
  guidesIntro: string;
  breadcrumbGuides: string;
  backHome: string;
  allGuides: string;
  mapCta: string;
  faqTitle: string;
  relatedTitle: string;
  sourcesTitle: string;
  verified: string;
  disclaimer: string;
  groupLabel: string;
  readGuide: string;
  languageLabel: string;
  priorityLabel: string;
  checked: string;
  moreInEnglish: string;
};

const EN_UI: TopicUi = {
  home: 'Home',
  guides: 'Visitor guides',
  guidesIntro:
    'In-depth, independently written guides to Lëkurësi Castle and Sarandë. Each page answers one specific question.',
  breadcrumbGuides: 'Guides',
  backHome: 'Back to the Lëkurësi Castle guide',
  allGuides: 'Browse all guides',
  mapCta: 'Open in Google Maps',
  faqTitle: 'Frequently asked questions',
  relatedTitle: 'Related guides',
  sourcesTitle: 'Sources & verification',
  verified: 'Facts checked 4 November 2026',
  disclaimer:
    'This is an independent, non-official visitor guide. It is not the castle administration, the restaurant or a booking service. Entry rules, prices, opening times and facilities can change; always confirm with the site or the operator before travelling.',
  groupLabel: 'Section',
  readGuide: 'Read guide',
  languageLabel: 'Also available in',
  priorityLabel: 'Guide',
  checked: 'Checked',
  moreInEnglish: 'More in-depth guides are currently published in English.',
};

const SQ_UI: TopicUi = {
  home: 'Kreu',
  guides: 'Udhëzues për vizitorët',
  guidesIntro:
    'Udhëzues të pavarur dhe të hollësishëm për Kalaja e Lëkurësit dhe Sarandën. Çdo faqe i përgjigjet një pyetjeje të veçantë.',
  breadcrumbGuides: 'Udhëzues',
  backHome: 'Kthehu te udhëzuesi i Kalasë së Lëkurësit',
  allGuides: 'Shiko të gjithë udhëzuesit',
  mapCta: 'Hape në Google Maps',
  faqTitle: 'Pyetje të shpeshta',
  relatedTitle: 'Udhëzues të lidhur',
  sourcesTitle: 'Burimet & verifikimi',
  verified: 'Faktet e kontrolluara më 4 Nëntor 2026',
  disclaimer:
    'Ky është një udhëzues i pavarur, jozyrtar. Nuk është administrata e kalasë, restoranti apo një shërbim rezervimesh. Rregullat e hyrjes, çmimet, oraret dhe shërbimet mund të ndryshojnë; konfirmojini gjithmonë në vend ose te operatori përpara udhëtimit.',
  groupLabel: 'Seksioni',
  readGuide: 'Lexo udhëzuesin',
  languageLabel: 'Gjendet edhe në',
  priorityLabel: 'Udhëzues',
  checked: 'Kontrolluar',
  moreInEnglish: 'Udhëzuesit e tjerë të hollësishëm botohen për momentin në anglisht.',
};

export const TOPIC_UI: Partial<Record<Locale, TopicUi>> = {
  en: EN_UI,
  sq: SQ_UI,
};

export function topicUi(locale: Locale): TopicUi {
  return TOPIC_UI[locale] ?? EN_UI;
}

export function groupLabel(group: GroupId, locale: Locale): string {
  const found = TOPIC_GROUPS.find((item) => item.id === group);
  if (!found) return '';
  return locale === 'sq' ? found.sq.label : found.en.label;
}

export function groupDescription(group: GroupId, locale: Locale): string {
  const found = TOPIC_GROUPS.find((item) => item.id === group);
  if (!found) return '';
  return locale === 'sq' ? found.sq.description : found.en.description;
}
