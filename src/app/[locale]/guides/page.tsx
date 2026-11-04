import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { TopicHub } from '@/components/TopicLinks';
import { HUB_PATH, topicUi } from '@/data/topics';
import {
  breadcrumbSchema,
  HERO_IMAGE_URL,
  isLocale,
  localeUrl,
  OG_LOCALE,
  topicLanguages,
  webPageSchema,
  type Locale,
} from '@/lib/site';

export const dynamicParams = false;

type Params = Promise<{ locale: string }>;

/** The topic centre exists where guides are actually published. */
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'sq' }];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = topicUi(locale);
  const title = `${ui.guides} | Lëkurësi Castle, Sarandë`;
  const description = ui.guidesIntro;
  const url = localeUrl(locale, HUB_PATH);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: topicLanguages(HUB_PATH, ['en', 'sq']),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Lëkurësi Castle',
      locale: OG_LOCALE[locale],
      type: 'website',
      images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: 'Lëkurësi Castle above Sarandë, Albania' }],
    },
  };
}

export default async function GuidesPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale) || (locale !== 'en' && locale !== 'sq')) notFound();
  setRequestLocale(locale);

  const ui = topicUi(locale as Locale);
  const url = localeUrl(locale as Locale, HUB_PATH);
  const jsonLd = [
    webPageSchema({ url, name: `${ui.guides} | Lëkurësi Castle`, description: ui.guidesIntro, locale: locale as Locale }),
    breadcrumbSchema([
      { name: ui.home, url: localeUrl(locale as Locale) },
      { name: ui.breadcrumbGuides, url },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <TopicHub locale={locale as Locale} />
    </>
  );
}
