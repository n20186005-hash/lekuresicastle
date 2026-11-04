import { HUB_PATH, topicUi } from '@/data/topics';
import { localeUrl, MAPS_URL, type Locale } from '@/lib/site';

/** Two prominent mobile-first actions near the top of the homepage. */
export default function QuickActions({ locale }: { locale: Locale }) {
  if (locale !== 'en' && locale !== 'sq') return null;
  const ui = topicUi(locale);

  return (
    <div className="px-4 sm:px-6 py-7" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-3">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-center rounded-xl px-3 py-4 text-sm sm:text-base font-semibold text-white"
          style={{ background: 'var(--accent)' }}
        >
          {ui.mapCta}
        </a>
        <a
          href={localeUrl(locale, HUB_PATH)}
          className="flex items-center justify-center text-center rounded-xl px-3 py-4 text-sm sm:text-base font-semibold"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
        >
          {ui.allGuides}
        </a>
      </div>
    </div>
  );
}
