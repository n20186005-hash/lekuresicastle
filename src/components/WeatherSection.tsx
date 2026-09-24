import { getLocale, getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';

// Lëkurësi Castle 坐标（与 Google Maps 嵌入 & JSON-LD geo 一致）
const LAT = 39.86587795;
const LON = 20.0257742;
// 服务器端取数并缓存 30 分钟（游客只需知道“天气准不准、要不要带伞”）
const REVALIDATE_SECONDS = 1800;

// 天气接口地址在代码层使用，不在前端页面展示任何来源/密钥字样
const API_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max` +
  `&timezone=Europe%2FTirane&forecast_days=7`;

type WeatherResponse = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    precipitation: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    precipitation_probability_max: number[];
  };
};

type ConditionKey =
  | 'clear'
  | 'mainlyClear'
  | 'partlyCloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'freezingRain'
  | 'snow'
  | 'showers'
  | 'snowShowers'
  | 'thunderstorm';

type IconKey =
  | 'sun'
  | 'partlyCloudy'
  | 'cloud'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'thunderstorm';

const iconMap: Record<IconKey, ReactNode> = {
  sun: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  partlyCloudy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  fog: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <line x1="16" y1="16" x2="7" y2="16" />
      <line x1="17" y1="20" x2="9" y2="20" />
    </svg>
  ),
  drizzle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <line x1="8" y1="14" x2="8" y2="16" />
      <line x1="12" y1="17" x2="12" y2="19" />
      <line x1="16" y1="14" x2="16" y2="16" />
    </svg>
  ),
  rain: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  ),
  snow: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="16" cy="16" r="1" />
    </svg>
  ),
  thunderstorm: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  ),
};

const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86, 95, 96, 99]);

function weatherInfo(code: number): { icon: IconKey; labelKey: ConditionKey } {
  if (code === 0) return { icon: 'sun', labelKey: 'clear' };
  if (code === 1) return { icon: 'sun', labelKey: 'mainlyClear' };
  if (code === 2) return { icon: 'partlyCloudy', labelKey: 'partlyCloudy' };
  if (code === 3) return { icon: 'cloud', labelKey: 'overcast' };
  if (code === 45 || code === 48) return { icon: 'fog', labelKey: 'fog' };
  if (code >= 51 && code <= 57)
    return { icon: 'drizzle', labelKey: code >= 56 ? 'freezingRain' : 'drizzle' };
  if (code === 61 || code === 63 || code === 65) return { icon: 'rain', labelKey: 'rain' };
  if (code === 66 || code === 67) return { icon: 'rain', labelKey: 'freezingRain' };
  if (code >= 71 && code <= 77) return { icon: 'snow', labelKey: 'snow' };
  if (code >= 80 && code <= 82) return { icon: 'rain', labelKey: 'showers' };
  if (code === 85 || code === 86) return { icon: 'snow', labelKey: 'snowShowers' };
  return { icon: 'thunderstorm', labelKey: 'thunderstorm' };
}

const localeBcpMap: Record<string, string> = { en: 'en-US', zh: 'zh-CN', sq: 'sq-AL' };

function formatWeekday(iso: string, bcp: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(bcp, { weekday: 'short', month: 'short', day: 'numeric' }).format(
    new Date(y, m - 1, d)
  );
}

function toHHMM(iso: string) {
  return iso.slice(11, 16);
}

async function getWeather(): Promise<WeatherResponse> {
  const res = await fetch(API_URL, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error('weather fetch failed');
  return (await res.json()) as WeatherResponse;
}

export default async function WeatherSection() {
  const t = await getTranslations('weather');
  const locale = await getLocale();
  const bcp = localeBcpMap[locale] || locale;

  let data: WeatherResponse | null = null;
  let error = false;
  try {
    data = await getWeather();
  } catch {
    error = true;
  }

  const todayCode = data ? data.daily.weather_code[0] : 0;
  const todayPrecip = data ? data.daily.precipitation_probability_max[0] : 0;
  const needsUmbrella = !!data && (RAIN_CODES.has(todayCode) || todayPrecip >= 40);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-3" style={{ background: 'var(--accent)' }} />
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        {error ? (
          <div
            className="rounded-xl p-6 text-sm"
            style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
          >
            {t('error')}
          </div>
        ) : !data ? (
          <div
            className="rounded-xl p-6 text-sm"
            style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
          >
            {t('loading')}
          </div>
        ) : (
          <>
            {/* 带伞提示：游客只关心“出门要不要带伞” */}
            <div
              className="rounded-xl p-4 mb-4 text-sm flex items-center gap-3"
              style={{
                background: needsUmbrella ? 'var(--bg-primary)' : 'var(--bg-primary)',
                border: `1px solid ${needsUmbrella ? 'var(--accent)' : 'var(--border-color)'}`,
                color: 'var(--text-secondary)',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>
                {needsUmbrella ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M16 14v6" />
                    <path d="M8 14v6" />
                    <path d="M12 16v6" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                  </svg>
                )}
              </span>
              <span>{needsUmbrella ? t('umbrellaYes') : t('umbrellaNo')}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              {/* 当前天气 */}
              <div
                className="lg:col-span-2 rounded-xl p-6"
                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t('current')}
                </p>
                {(() => {
                  const info = weatherInfo(data.current.weather_code);
                  return (
                    <div className="flex items-center gap-5">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--accent)', color: 'white' }}
                      >
                        {iconMap[info.icon]}
                      </div>
                      <div>
                        <p
                          className="font-display text-5xl font-semibold"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {Math.round(data.current.temperature_2m)}°C
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                          {t(`conditions.${info.labelKey}`)}
                        </p>
                      </div>
                    </div>
                  );
                })()}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Metric label={t('feelsLike')} value={`${Math.round(data.current.apparent_temperature)}°C`} />
                  <Metric label={t('wind')} value={`${Math.round(data.current.wind_speed_10m)} km/h`} />
                  <Metric label={t('humidity')} value={`${Math.round(data.current.relative_humidity_2m)}%`} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Metric
                    label={t('precip')}
                    value={
                      data.current.precipitation > 0
                        ? `${Math.round(data.current.precipitation * 10) / 10} mm`
                        : t('precipNone')
                    }
                  />
                  <Metric label={t('rainChance')} value={`${data.daily.precipitation_probability_max[0]}%`} />
                </div>
              </div>

              {/* 日出日落 */}
              <div
                className="rounded-xl p-6 flex flex-col justify-between"
                style={{ background: 'var(--bg-primary)', border: '1px solid var(--accent)' }}
              >
                <div className="flex items-center justify-around mb-4">
                  <div className="text-center">
                    <p
                      className="text-xs uppercase font-semibold mb-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {t('sunrise')}
                    </p>
                    <p
                      className="text-2xl font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {toHHMM(data.daily.sunrise[0])}
                    </p>
                  </div>
                  <div className="w-px h-10" style={{ background: 'var(--border-color)' }} />
                  <div className="text-center">
                    <p
                      className="text-xs uppercase font-semibold mb-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {t('sunset')}
                    </p>
                    <p className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>
                      {toHHMM(data.daily.sunset[0])}
                    </p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {t('sunsetTip')}
                </p>
              </div>
            </div>

            {/* 7 天预报 */}
            <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
              {t('forecast')}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-3">
              {data.daily.time.slice(0, 7).map((day, i) => {
                const info = weatherInfo(data.daily.weather_code[i]);
                return (
                  <div
                    key={day}
                    className="rounded-xl p-4 text-center"
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
                  >
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      {formatWeekday(day, bcp)}
                    </p>
                    <div className="flex justify-center mb-2" style={{ color: 'var(--accent)' }}>
                      {iconMap[info.icon]}
                    </div>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                      {t(`conditions.${info.labelKey}`)}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {Math.round(data.daily.temperature_2m_max[i])}° /{' '}
                      {Math.round(data.daily.temperature_2m_min[i])}°
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                      {t('rainChance')} {data.daily.precipitation_probability_max[i]}%
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {t('updated')}
            </p>
          </>
        )}
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-lg p-3"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
        {value}
      </p>
    </div>
  );
}
