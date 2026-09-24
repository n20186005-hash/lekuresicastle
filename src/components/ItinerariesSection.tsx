'use client';

import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

const audienceIcons: Record<string, ReactNode> = {
  family: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  photo: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  accessible: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="4" r="2" />
      <path d="M19 13v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" />
      <path d="M12 7v6" />
      <path d="M8 21l4-5 4 5" />
      <circle cx="12" cy="17" r="1.5" />
    </svg>
  ),
};

export default function ItinerariesSection() {
  const t = useTranslations('itineraries');
  const messages = useMessages() as any;
  const audiences = (messages?.itineraries?.audiences || []) as Array<{
    id: string;
    title: string;
    description: string;
    items: string[];
  }>;
  const halfDay = (messages?.itineraries?.halfDay || []) as string[];
  const fullDay = (messages?.itineraries?.fullDay || []) as string[];

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

        {/* 按人群定制的游览方案 */}
        <h3
          className="font-display text-2xl font-semibold mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('audienceTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {audiences.map((a) => (
            <div
              key={a.id}
              className="rounded-xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {audienceIcons[a.id] || audienceIcons.family}
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {a.title}
              </h4>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {a.description}
              </p>
              <ul className="space-y-2">
                {a.items.map((item, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 推荐通用游览路线（半日 / 全日） */}
        <h3
          className="font-display text-2xl font-semibold mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('genericTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlanCard title={t('halfDayTitle')} steps={halfDay} />
          <PlanCard title={t('fullDayTitle')} steps={fullDay} />
        </div>
      </div>
    </section>
  );
}

function PlanCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
      <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
