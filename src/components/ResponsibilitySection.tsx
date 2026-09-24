'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function ResponsibilitySection() {
  const t = useTranslations('responsibility');
  const messages = useMessages() as any;
  const science = (messages?.responsibility?.science || []) as string[];
  const rules = (messages?.responsibility?.rules || []) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        {/* 科普：为何重要 */}
        <h3
          className="font-display text-2xl font-semibold mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('scienceTitle')}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {science.map((point, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex gap-3 items-start"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* 访客责任 */}
        <h3
          className="font-display text-2xl font-semibold mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('rulesTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h4 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                {rule.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
