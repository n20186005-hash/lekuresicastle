import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { CANONICAL_HOST } from './lib/site';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',
  localeDetection: false,
});

/**
 * Host / protocol normalisation. Only the two production hostnames are
 * affected, so local development and preview deployments keep working.
 * GSC currently shows far more clicks and impressions on the apex host, and
 * all existing canonicals already use it, so www is redirected to apex.
 * To switch the canonical to www, change CANONICAL_HOST in src/lib/site.ts
 * and invert the two host checks below.
 */
export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto');

  const isApex = hostname === CANONICAL_HOST;
  const isWww = hostname === `www.${CANONICAL_HOST}`;

  if (isWww || (isApex && forwardedProto === 'http')) {
    const canonical = new URL(request.url);
    canonical.protocol = 'https:';
    canonical.hostname = CANONICAL_HOST;
    canonical.port = '';
    return NextResponse.redirect(canonical, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
