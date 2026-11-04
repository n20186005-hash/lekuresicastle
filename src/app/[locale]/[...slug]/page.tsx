import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import TopicPage from '@/components/TopicPage';
import { allTopicRoutes, getTopic, getTopicContent, publishedLocales } from '@/data/topics';
import {
  HERO_IMAGE_URL,
  isLocale,
  localeUrl,
  OG_LOCALE,
  topicLanguages,
  type Locale,
} from '@/lib/site';

export const dynamicParams = false;

type Params = Promise<{ locale: string; slug: string[] }>;

export function generateStaticParams() {
  return allTopicRoutes().map(({ locale, slug }) => ({
    locale,
    slug: slug.split('/'),
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = Array.isArray(slug) ? slug.join('/') : '';
  if (!isLocale(locale)) return {};

  const content = getTopicContent(key, locale);
  if (!content) return {};

  const path = `/${key}`;
  const url = localeUrl(locale, path);

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: url,
      languages: topicLanguages(path, publishedLocales(key)),
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      siteName: 'Lëkurësi Castle',
      locale: OG_LOCALE[locale],
      type: 'article',
      images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: 'Lëkurësi Castle above Sarandë, Albania' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
      images: [HERO_IMAGE_URL],
    },
  };
}

export default async function TopicRoute({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const key = Array.isArray(slug) ? slug.join('/') : '';

  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const topic = getTopic(key);
  const content = getTopicContent(key, locale);
  if (!topic || !content) notFound();

  return <TopicPage topic={topic} content={content} locale={locale as Locale} />;
}
