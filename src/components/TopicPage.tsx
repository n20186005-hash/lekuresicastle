import JsonLd from './JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  localeUrl,
  MAPS_URL,
  SOURCES,
  webPageSchema,
} from '@/lib/site';
import type { Locale } from '@/lib/site';
import {
  groupLabel,
  publishedLocales,
  relatedTopics,
  topicUi,
  HUB_PATH,
  type Topic,
  type TopicTranslation,
} from '@/data/topics';

type Props = {
  topic: Topic;
  content: TopicTranslation;
  locale: Locale;
};

export default function TopicPage({ topic, content, locale }: Props) {
  const ui = topicUi(locale);
  const path = `/${topic.slug}`;
  const url = localeUrl(locale, path);
  const homeUrl = localeUrl(locale);
  const hubUrl = localeUrl(locale, HUB_PATH);
  const related = relatedTopics(topic);
  const published = publishedLocales(topic.slug);

  const jsonLd = [
    webPageSchema({ url, name: content.metaTitle, description: content.metaDescription, locale }),
    breadcrumbSchema([
      { name: ui.home, url: homeUrl },
      { name: ui.breadcrumbGuides, url: hubUrl },
      { name: content.h1, url },
    ]),
    faqSchema(content.faqs),
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <JsonLd data={jsonLd} />

      <header
        className="sticky top-0 z-40"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <a href={homeUrl} className="font-display text-base sm:text-lg font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
            Lëkurësi Castle
          </a>
          <div className="flex items-center gap-3 sm:gap-5 text-sm shrink-0">
            <a href={hubUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>
              {ui.breadcrumbGuides}
            </a>
            <a href={`${homeUrl}#map`} className="hidden sm:inline hover:underline" style={{ color: 'var(--text-secondary)' }}>
              {ui.home}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm mb-8 flex flex-wrap items-center gap-2" style={{ color: 'var(--text-muted)' }}>
          <a href={homeUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>{ui.home}</a>
          <span aria-hidden="true">/</span>
          <a href={hubUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>{ui.breadcrumbGuides}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{content.h1}</span>
        </nav>

        <article>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
            >
              {groupLabel(topic.group, locale)}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {ui.verified}
            </span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            {content.h1}
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-7" style={{ color: 'var(--text-secondary)' }}>
            {content.lead}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ background: 'var(--accent)' }}
            >
              {ui.mapCta}
            </a>
            <a
              href={hubUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
            >
              {ui.allGuides}
            </a>
          </div>

          {content.sections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2
                className="font-display text-2xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph, pIndex) => (
                <p key={pIndex} className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 mb-2">
                  {section.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex gap-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span aria-hidden="true" style={{ color: 'var(--accent)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mb-12" id="faq">
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {ui.faqTitle}
            </h2>
            <div className="space-y-3">
              {content.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="rounded-xl p-5"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <summary className="font-semibold cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                    {faq.q}
                  </summary>
                  <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </article>

        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {ui.relatedTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((item) => {
                const itemLocales = publishedLocales(item.slug);
                const itemLocale: Locale = itemLocales.includes(locale) ? locale : 'en';
                return (
                  <a
                    key={item.slug}
                    href={localeUrl(itemLocale, `/${item.slug}`)}
                    className="block rounded-xl p-5 transition-colors"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                  >
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {item.en.cardTitle}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.en.cardText}
                    </p>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {ui.sourcesTitle}
          </h2>
          <ul className="space-y-2 mb-5">
            {topic.sources.map((key) => {
              const source = SOURCES[key as keyof typeof SOURCES];
              if (!source) return null;
              return (
                <li key={key}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    {source.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{ui.verified}</p>
        </section>

        <div
          className="rounded-xl p-5 mb-8"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {ui.disclaimer}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href={homeUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>
            {ui.backHome}
          </a>
          <a href={hubUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>
            {ui.allGuides}
          </a>
          {published.length > 1 && (
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {ui.languageLabel}:{' '}
              {published.map((loc, index) => (
                <span key={loc}>
                  {index > 0 && ', '}
                  <a href={localeUrl(loc, path)} className="hover:underline" style={{ color: 'var(--accent)' }}>
                    {loc === 'en' ? 'English' : 'Shqip'}
                  </a>
                </span>
              ))}
            </span>
          )}
        </div>
      </main>

      <footer
        className="py-8 px-4 sm:px-6 text-center text-xs leading-relaxed"
        style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p>{ui.disclaimer}</p>
          <p className="mt-3">{ui.verified}</p>
        </div>
      </footer>
    </div>
  );
}
