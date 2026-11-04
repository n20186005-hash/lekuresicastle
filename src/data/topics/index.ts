import type { Locale } from '@/lib/site';
import type { GroupId, Priority, Topic, TopicTranslation } from './types';
import { TOPIC_GROUPS } from './types';
import { VISIT_TOPICS } from './visit';
import { SUNSET_TOPICS } from './sunset';
import { HISTORY_TOPICS } from './history';
import { DINING_TOPICS } from './dining';
import { NEARBY_TOPICS } from './nearby';
import { AUDIENCE_TOPICS } from './audiences';
import { COMPARE_TOPICS } from './compare';
import { SQ_CONTENT } from './sq';

/** The 36 long-tail guides. Add an entry here and the routes, hub, sitemap and
 *  homepage links pick it up automatically. */
export const TOPICS: Topic[] = [
  ...VISIT_TOPICS,
  ...SUNSET_TOPICS,
  ...HISTORY_TOPICS,
  ...DINING_TOPICS,
  ...NEARBY_TOPICS,
  ...AUDIENCE_TOPICS,
  ...COMPARE_TOPICS,
];

export const TOPIC_SLUGS: string[] = TOPICS.map((topic) => topic.slug);
export const HUB_PATH = '/guides';
export const SQ_SLUGS: ReadonlySet<string> = new Set(Object.keys(SQ_CONTENT));

const TOPIC_MAP = new Map(TOPICS.map((topic) => [topic.slug, topic]));

export function getTopic(slug: string): Topic | undefined {
  return TOPIC_MAP.get(slug);
}

/** Locales that actually have a full translation for this topic. */
export function publishedLocales(slug: string): Locale[] {
  const topic = TOPIC_MAP.get(slug);
  if (!topic) return [];
  const result: Locale[] = ['en'];
  if (SQ_SLUGS.has(slug)) result.push('sq');
  return result;
}

/** Strict: never falls back to English on a non-published locale. */
export function getTopicContent(slug: string, locale: Locale): TopicTranslation | null {
  const topic = TOPIC_MAP.get(slug);
  if (!topic) return null;
  if (locale === 'en') return topic.en;
  if (locale === 'sq') return SQ_CONTENT[slug] ?? null;
  return null;
}

export function topicIsPublished(slug: string, locale: Locale): boolean {
  return getTopicContent(slug, locale) !== null;
}

export function topicsByGroup(group: GroupId): Topic[] {
  return TOPICS.filter((topic) => topic.group === group);
}

/** All (locale, slug) combinations that should be statically generated. */
export function allTopicRoutes(): Array<{ locale: Locale; slug: string }> {
  const routes: Array<{ locale: Locale; slug: string }> = [];
  for (const topic of TOPICS) {
    for (const locale of publishedLocales(topic.slug)) {
      routes.push({ locale, slug: topic.slug });
    }
  }
  return routes;
}

const PRIORITY_ORDER: Record<Priority, number> = { P0: 0, P1: 1, P2: 2 };

export function priorityOrder(priority: Priority): number {
  return PRIORITY_ORDER[priority];
}

export function relatedTopics(topic: Topic): Topic[] {
  return topic.related
    .map((slug) => TOPIC_MAP.get(slug))
    .filter((item): item is Topic => Boolean(item));
}

export { TOPIC_GROUPS };
export type { Topic, TopicTranslation, GroupId, Priority, TopicSection, TopicFaq } from './types';
export { HUB_CARDS, groupLabel, groupDescription, topicUi } from './types';
