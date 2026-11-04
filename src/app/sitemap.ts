import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { allTopicRoutes, getTopic, HUB_PATH, publishedLocales } from '@/data/topics';
import {
  CHECKED_DATE,
  localeUrl,
  sharedPathLanguages,
  topicLanguages,
  type Locale,
} from '@/lib/site';

/** Only canonical, actually published URLs are listed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CHECKED_DATE);
  const entries: MetadataRoute.Sitemap = [];

  const sharedPages = [
    { path: '', priority: 1 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms-of-service', priority: 0.3 },
    { path: '/cookie-settings', priority: 0.3 },
  ];

  for (const locale of routing.locales) {
    for (const page of sharedPages) {
      entries.push({
        url: localeUrl(locale as Locale, page.path),
        lastModified,
        changeFrequency: page.path === '' ? 'weekly' : 'yearly',
        priority: page.priority,
        alternates: { languages: sharedPathLanguages(page.path) },
      });
    }
  }

  for (const locale of ['en', 'sq'] as Locale[]) {
    entries.push({
      url: localeUrl(locale, HUB_PATH),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: topicLanguages(HUB_PATH, ['en', 'sq']) },
    });
  }

  for (const { locale, slug } of allTopicRoutes()) {
    const topic = getTopic(slug);
    if (!topic) continue;
    const priority = topic.priority === 'P0' ? 0.8 : topic.priority === 'P1' ? 0.7 : 0.6;
    const path = `/${slug}`;
    entries.push({
      url: localeUrl(locale, path),
      lastModified,
      changeFrequency: 'monthly',
      priority,
      alternates: { languages: topicLanguages(path, publishedLocales(slug)) },
    });
  }

  return entries;
}
