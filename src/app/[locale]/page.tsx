import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickFacts from '@/components/QuickFacts';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import WeatherSection from '@/components/WeatherSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import HistorySection from '@/components/HistorySection';
import InfoSection from '@/components/InfoSection';
import LegendsSection from '@/components/LegendsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import SeasonalSection from '@/components/SeasonalSection';
import ItinerariesSection from '@/components/ItinerariesSection';
import ResponsibilitySection from '@/components/ResponsibilitySection';
import RouteSection from '@/components/RouteSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import FAQSection from '@/components/FAQSection';
import SourcesSection from '@/components/SourcesSection';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import TopicLinks from '@/components/TopicLinks';
import QuickActions from '@/components/QuickActions';
import {
  ATTRACTION,
  ATTRACTION_ID,
  CHECKED_DATE,
  HERO_IMAGE_URL,
  homeLanguages,
  IN_LANGUAGE,
  isLocale,
  localeUrl,
  locales,
  MAPS_URL,
  PLUS_CODE,
  RATING,
  SITE_URL,
  type Locale,
} from '@/lib/site';

const baseUrl = SITE_URL;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    alternates: {
      canonical: localeUrl(locale as Locale),
      languages: homeLanguages(),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = (await getMessages()) as any;
  const url = localeUrl(locale as Locale);
  const mapsLink = messages?.hero?.mapsLink || MAPS_URL;
  const faqItems = (messages?.faq?.items || []) as Array<{
    question: string;
    answer: string;
  }>;
  const galleryCaptions = (messages?.gallery?.captions || []) as string[];
  const inLanguage = IN_LANGUAGE[locale as Locale] ?? 'en';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      '@id': ATTRACTION_ID,
      name: 'Lëkurësi Castle',
      alternateName: [
        'Lekuresi Castle',
        'Lekursi Castle',
        'Kalaja e Lëkurësit',
        'Saranda Castle',
      ],
      description: messages?.meta?.description || '',
      url,
      image: HERO_IMAGE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: ATTRACTION.locality,
        addressRegion: ATTRACTION.region,
        postalCode: ATTRACTION.postalCode,
        addressCountry: ATTRACTION.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: ATTRACTION.latitude,
        longitude: ATTRACTION.longitude,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: RATING.value,
        reviewCount: RATING.count,
      },
      hasMap: mapsLink,
      sameAs: [mapsLink, 'https://albania.al/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: messages?.meta?.title || '',
      description: messages?.meta?.description || '',
      inLanguage,
      datePublished: '2026-01-15',
      dateModified: CHECKED_DATE,
      isPartOf: { '@id': `${baseUrl}/#website` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'Lëkurësi Castle Sarandë — Travel Guide',
      description: messages?.meta?.description || '',
      inLanguage: [...locales],
      publisher: {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Lëkurësi Castle Sarandë — Travel Guide',
        url: `${baseUrl}/`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Lëkurësi Castle Photo Gallery',
      description: galleryCaptions[0] || 'Photos of Lëkurësi Castle in Sarandë, Albania',
      url: `${url}#gallery`,
      associatedMedia: Array.from({ length: 16 }, (_, i) => {
        const caption = galleryCaptions[i] || `Lëkurësi Castle photo ${i + 1}`;
        return {
          '@type': 'ImageObject',
          contentUrl: `${baseUrl}/gallery/lekuresi-castle-${String(i + 1).padStart(2, '0')}.jpg`,
          name: caption,
          caption,
        };
      }),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <Hero />
        {locale === 'en' && (
          <div className="px-4 sm:px-6 py-2 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
            ★ {RATING.value} / 5 · {RATING.count.toLocaleString('en-US')} Google reviews
          </div>
        )}
        <QuickFacts />
        <QuickActions locale={locale as Locale} />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <WeatherSection />
        <TicketsSection />
        <TransportSection />
        <SeasonalSection />
        <ItinerariesSection />
        <HistorySection />
        <InfoSection />
        <LegendsSection />
        <FacilitiesSection />
        <ResponsibilitySection />
        <RouteSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <TopicLinks locale={locale as Locale} />
        <SourcesSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
