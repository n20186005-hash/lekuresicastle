import { NextResponse } from 'next/server';

// Lëkurësi Castle 坐标（与 Google Maps 嵌入 & JSON-LD geo 一致）
const LAT = 39.86587795;
const LON = 20.0257742;

// 天气接口地址仅在服务端使用；前端通过本路由取数，不暴露任何来源/密钥字样
const API_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max` +
  `&timezone=Europe%2FTirane&forecast_days=7`;

export async function GET() {
  try {
    const res = await fetch(API_URL, { cache: 'no-store' });
    if (!res.ok) {
      return NextResponse.json({ error: 'weather fetch failed' }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=1800',
      },
    });
  } catch {
    return NextResponse.json({ error: 'weather fetch failed' }, { status: 502 });
  }
}
