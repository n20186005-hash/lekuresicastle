import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // English is the primary language: /en carries the large majority of GSC
  // clicks and is also the x-default target and the root redirect destination.
  locales: ['en', 'zh', 'sq', 'it', 'fr'],
  defaultLocale: 'en',
  localeDetection: false,
  localePrefix: {
    mode: 'always',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
