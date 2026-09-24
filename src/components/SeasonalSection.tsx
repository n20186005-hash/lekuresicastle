'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function SeasonalSection() {
  const t = useTranslations('seasonal');
  const te = useTranslations('ecological');
  const messages = useMessages() as any;
  const rows = (messages?.seasonal?.rows || []) as Array<{
    season: string;
    climate: string;
    bestFor: string;
    tip: string;
  }>;
  const ecoPoints = (messages?.ecological?.points || []) as string[];

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
        <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        {/* 季度游览策略表 */}
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border-color)' }}>
          <table className="w-full text-sm border-collapse" style={{ background: 'var(--bg-tertiary)' }}>
            <thead>
              <tr style={{ background: 'var(--bg-primary)' }}>
                <th className="text-left p-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('cols.season')}
                </th>
                <th className="text-left p-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('cols.climate')}
                </th>
                <th className="text-left p-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('cols.bestFor')}
                </th>
                <th className="text-left p-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('cols.tip')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.season} style={{ borderTop: '1px solid var(--border-color)' }}>
                  <td className="p-4 align-top font-semibold" style={{ color: 'var(--accent)' }}>
                    {row.season}
                  </td>
                  <td className="p-4 align-top leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {row.climate}
                  </td>
                  <td className="p-4 align-top leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {row.bestFor}
                  </td>
                  <td className="p-4 align-top leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {row.tip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 气象、海域与生态综合分析 */}
        <h3
          className="font-display text-2xl font-semibold mt-12 mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {te('title')}
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {te('subtitle')}
        </p>
        <ul className="space-y-3">
          {ecoPoints.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 items-start rounded-lg p-4"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
