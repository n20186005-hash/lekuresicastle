import {
  getTopicContent,
  groupLabel,
  HUB_CARDS,
  HUB_PATH,
  priorityOrder,
  topicIsPublished,
  topicUi,
  TOPICS,
  TOPIC_GROUPS,
  type HubCard,
} from '@/data/topics';
import { localeUrl, MAPS_URL, type Locale } from '@/lib/site';

function cardTitle(card: HubCard, locale: Locale) {
  return locale === 'sq' ? card.sq.title : card.en.title;
}

function cardText(card: HubCard, locale: Locale) {
  return locale === 'sq' ? card.sq.text : card.en.text;
}

function HubCards({ locale, hrefPrefix }: { locale: Locale; hrefPrefix: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
      {HUB_CARDS.map((card) => (
        <a
          key={card.id}
          href={`${hrefPrefix}#${card.id}`}
          className="block rounded-xl p-6 transition-colors"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            {cardTitle(card, locale)}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {cardText(card, locale)}
          </p>
        </a>
      ))}
    </div>
  );
}

/** Grouped, hierarchical directory. Only links to guides published in this locale. */
function GuideDirectory({ locale }: { locale: Locale }) {
  return (
    <>
      {HUB_CARDS.map((card) => {
        const groups = card.groups
          .map((groupId) => ({
            id: groupId,
            meta: TOPIC_GROUPS.find((item) => item.id === groupId),
            topics: TOPICS.filter(
              (topic) => topic.group === groupId && topicIsPublished(topic.slug, locale)
            ).sort((a, b) => priorityOrder(a.priority) - priorityOrder(b.priority)),
          }))
          .filter((group) => group.topics.length > 0);

        if (groups.length === 0) return null;

        return (
          <section key={card.id} id={card.id} className="mb-12 scroll-mt-24">
            <h3
              className="font-display text-2xl font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {cardTitle(card, locale)}
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              {cardText(card, locale)}
            </p>
            {groups.map((group) => (
              <div key={group.id} className="mb-7">
                <h4 className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: 'var(--accent)' }}>
                  {groupLabel(group.id, locale)}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.topics.map((topic) => {
                    const content = getTopicContent(topic.slug, locale);
                    return (
                      <li key={topic.slug}>
                        <a
                          href={localeUrl(locale, `/${topic.slug}`)}
                          className="block h-full rounded-lg p-4 transition-colors"
                          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                        >
                          <span className="block font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                            {content?.cardTitle ?? topic.en.cardTitle}
                          </span>
                          <span className="block text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {content?.cardText ?? topic.en.cardText}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>
        );
      })}
    </>
  );
}

function CtaRow({ locale }: { locale: Locale }) {
  const ui = topicUi(locale);
  return (
    <div className="flex flex-wrap gap-3 mb-12">
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
        href={localeUrl(locale, HUB_PATH)}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
        style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
      >
        {ui.allGuides}
      </a>
    </div>
  );
}

function EnglishNote({ locale }: { locale: Locale }) {
  if (locale !== 'sq') return null;
  const ui = topicUi(locale);
  return (
    <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
      {ui.moreInEnglish}{' '}
      <a href={localeUrl('en', HUB_PATH)} className="underline" style={{ color: 'var(--accent)' }}>
        English
      </a>
    </p>
  );
}

function Disclaimer({ locale }: { locale: Locale }) {
  return (
    <div
      className="rounded-xl p-5 text-sm leading-relaxed"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
    >
      {topicUi(locale).disclaimer}
    </div>
  );
}

/** Homepage block: four top-level entrances plus the full hierarchical directory. */
export default function TopicLinks({ locale }: { locale: Locale }) {
  if (locale !== 'en' && locale !== 'sq') return null;
  const ui = topicUi(locale);
  const hubUrl = localeUrl(locale, HUB_PATH);

  return (
    <section id="guides" className="py-16 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {ui.guides}
        </h2>
        <div className="w-12 h-0.5 mb-5" style={{ background: 'var(--accent)' }} />
        <p className="leading-relaxed mb-7 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          {ui.guidesIntro}
        </p>
        <CtaRow locale={locale} />
        <HubCards locale={locale} hrefPrefix={hubUrl} />
        <GuideDirectory locale={locale} />
        <EnglishNote locale={locale} />
        <div className="mb-8">
          <Disclaimer locale={locale} />
        </div>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{ui.verified}</p>
      </div>
    </section>
  );
}

/** Standalone topic centre at /{locale}/guides. */
export function TopicHub({ locale }: { locale: Locale }) {
  const ui = topicUi(locale);
  const homeUrl = localeUrl(locale);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <header
        className="sticky top-0 z-40"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href={homeUrl} className="font-display text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Lëkurësi Castle
          </a>
          <a href={homeUrl} className="text-sm hover:underline" style={{ color: 'var(--accent)' }}>
            {ui.backHome}
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm mb-8 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
          <a href={homeUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>{ui.home}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{ui.breadcrumbGuides}</span>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {ui.guides}
        </h1>
        <p className="text-lg leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          {ui.guidesIntro}
        </p>
        <p className="text-xs mb-9" style={{ color: 'var(--text-muted)' }}>{ui.verified}</p>

        <CtaRow locale={locale} />
        <HubCards locale={locale} hrefPrefix="" />
        <GuideDirectory locale={locale} />
        <EnglishNote locale={locale} />
        <Disclaimer locale={locale} />
      </main>

      <footer
        className="py-8 px-4 text-center text-xs"
        style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
      >
        <p>{ui.verified}</p>
      </footer>
    </div>
  );
}
