import type { Topic } from './types';

/** G. Decision and comparison pages — 3 pages. */
export const COMPARE_TOPICS: Topic[] = [
  {
    slug: 'guides/is-it-worth-visiting',
    group: 'compare',
    priority: 'P0',
    keyword: 'is lekuresi castle worth visiting',
    intent: 'Make an honest go / no-go decision before spending time on the climb.',
    related: ['guides/best-time-to-visit', 'guides/how-long-to-spend', 'guides/sunset-view', 'comparisons/lekuresi-vs-saranda-waterfront'],
    sources: ['aktAttraction', 'aktCastle', 'sarandaInfo', 'maps', 'heritage'],
    en: {
      cardTitle: 'Is it worth visiting?',
      cardText: 'An honest answer including the reasons you might skip it.',
      metaTitle: 'Is Lëkurësi Castle Worth Visiting? | An Honest Answer',
      metaDescription:
        'Is Lëkurësi Castle worth the climb? What it does well, what may disappoint you, how much time it needs and when to skip it.',
      h1: 'Is Lëkurësi Castle worth visiting?',
      lead:
        'For most first-time visitors to Sarandë, yes, with one condition: go for the view and the setting, not for a complete medieval castle. This page gives the honest case on both sides so you can decide how much of your trip to give it.',
      sections: [
        {
          heading: 'The case for going',
          paragraphs: [
            'The hilltop panorama is the best orientation you can get over Sarandë bay, the town and the coast towards Butrint, and in clear weather the Corfu horizon. In the last hour of light the stone walls add a foreground that a seafront viewpoint cannot offer.',
            'It is also compact. A meaningful visit takes roughly an hour, it sits close to town, and it can be paired with the waterfront or with a return from the southern coast without consuming a whole day.',
          ],
          bullets: [
            'An elevated, wide view of the bay and town.',
            'A genuine 16th-century Ottoman-period ruin.',
            'Short visit that fits into almost any itinerary.',
          ],
        },
        {
          heading: 'The case for lowering your expectations',
          paragraphs: [
            'This is a ruin, not a restored castle with rooms, exhibitions or a guided route. There is little shade, uneven ground, limited verified facilities and a busy narrow road at sunset.',
            'If you are expecting a large fortress, a museum, guaranteed floodlighting or a fully accessible site, you may be disappointed. The panorama is weather-dependent; haze or low cloud can remove the distant view entirely.',
          ],
        },
        {
          heading: 'When we would skip it',
          paragraphs: [
            'Skip or postpone the castle if visibility is poor and you have a flexible schedule, if the climb or steps are a problem for someone in your group, or if you have only a few hours and would rather spend them at Butrint.',
            'If you do go, check the sunset time for your date, arrive early, wear shoes with grip and arrange the return down the hill before it gets dark.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle worth visiting?',
          a: 'Yes for the elevated view over Sarandë bay and a genuine Ottoman-period ruin, especially in the last hour of light. It is not a restored castle, a museum or a fully accessible attraction.',
        },
        {
          q: 'What might disappoint visitors at Lëkurësi Castle?',
          a: 'The limited surviving fabric, the lack of shade and confirmed public facilities, uneven ground, sunset crowds and weather-dependent long-distance views.',
        },
        {
          q: 'Should I choose the castle or the waterfront for sunset?',
          a: 'The castle gives an elevated panorama with the town lights below; the waterfront is level, easier and better in poor visibility. Our comparison page covers the trade-offs in detail.',
        },
      ],
    },
  },
  {
    slug: 'comparisons/lekuresi-vs-ali-pasha-castle',
    group: 'compare',
    priority: 'P2',
    keyword: 'lekuresi castle vs ali pasha castle',
    intent: 'Compare two differently located fortifications without conflating them.',
    related: ['history/saranda-fortifications', 'nearby/butrint-national-park', 'guides/is-it-worth-visiting', 'itineraries/saranda-one-day'],
    sources: ['aktSarande', 'butrint', 'aktCastle', 'heritage', 'maps'],
    en: {
      cardTitle: 'Lëkurësi vs Ali Pasha Castle',
      cardText: 'Two different sites, two different trips, and a naming caveat.',
      metaTitle: 'Lëkurësi Castle vs Ali Pasha Castle | Which to Visit',
      metaDescription:
        'How Lëkurësi Castle compares with the Ali Pasha castles around Butrint and the southern Albanian coast: location, period, visit style and itinerary fit.',
      h1: 'Lëkurësi Castle compared with the Ali Pasha castles',
      lead:
        'These two names appear together in Sarandë searches, but they do not describe two neighbouring castles that can be visited on the same short walk. This comparison keeps the geography and the history separate so you can choose a realistic itinerary.',
      sections: [
        {
          heading: 'First, a naming caution',
          paragraphs: [
            '"Ali Pasha Castle" is used for more than one fortification associated with Ali Pasha of Ioannina in this part of southern Albania, including sites around the Butrint area and the coast further north. Confirm the exact place on a map before comparing or planning.',
            'Lëkurësi Castle, by contrast, is unambiguous: the hilltop ruin directly above Sarandë, also called Kalaja e Lëkurësit or Saranda Castle in English.',
          ],
        },
        {
          heading: 'Location and visit style',
          paragraphs: [
            'Lëkurësi is a short trip from the town, usually combined with sunset, the waterfront and a meal. It is an open hilltop ruin with wide views and limited facilities.',
            'The Ali Pasha sites associated with the southern coast are normally visited as part of a Butrint or coastal excursion, with their own transport, tickets and opening arrangements. They are waterside or lowland fortifications rather than a panoramic hill above a city.',
          ],
          bullets: [
            'Lëkurësi: hill above Sarandë, short visit, sunset panorama.',
            'Ali Pasha sites: southern coast / Butrint area, part of a longer excursion.',
            'Confirm which Ali Pasha castle a source means before you travel.',
          ],
        },
        {
          heading: 'Which one to choose',
          paragraphs: [
            'Choose Lëkurësi if you have an evening in Sarandë, want the panorama and prefer a short, flexible stop. Choose an Ali Pasha fortification if you are already dedicating a day to Butrint and the southern coast and want to understand that defensive landscape.',
            'With a full day and your own transport you can do both, but keep Butrint as the main excursion and the castle as the evening stop, as in our one-day itinerary.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Are Lëkurësi Castle and Ali Pasha Castle the same place?',
          a: 'No. Lëkurësi Castle is the hilltop Ottoman-period ruin above Sarandë. "Ali Pasha Castle" refers to other fortifications associated with Ali Pasha of Ioannina, commonly around Butrint or the southern coast.',
        },
        {
          q: 'Which castle near Sarandë should I visit?',
          a: 'For a short visit and the best view, choose Lëkurësi. For a full-day historical excursion, combine Butrint with the Ali Pasha fortification included in that route.',
        },
        {
          q: 'Can I visit both castles in one day?',
          a: 'Yes with your own transport, but treat Butrint and the southern coast as the main daytime excursion and Lëkurësi as the sunset stop. Check current opening arrangements for each managed site.',
        },
      ],
    },
  },
  {
    slug: 'comparisons/lekuresi-vs-saranda-waterfront',
    group: 'compare',
    priority: 'P1',
    keyword: 'best sunset viewpoint saranda',
    intent: 'Choose between a hilltop panorama and an easy level waterfront view.',
    related: ['guides/sunset-view', 'guides/is-it-worth-visiting', 'nearby/saranda-promenade', 'guides/accessibility'],
    sources: ['aktSarande', 'sarandaInfo', 'maps', 'aktAttraction'],
    en: {
      cardTitle: 'Castle vs waterfront sunset',
      cardText: 'Two ways to watch the same bay, with different effort and different photos.',
      metaTitle: 'Best Sunset Viewpoint in Sarandë | Castle vs Waterfront',
      metaDescription:
        'Which is the best sunset viewpoint in Sarandë: Lëkurësi Castle or the waterfront? Compare the view, effort, accessibility, photography and evening logistics.',
      h1: 'Best sunset viewpoint in Sarandë: castle or waterfront?',
      lead:
        'Both viewpoints look at the same bay and the same sunset, but they produce completely different evenings. One asks for a hill climb and repays it with scale; the other asks for nothing and keeps you at water level. Neither is objectively better for every traveller.',
      sections: [
        {
          heading: 'The view',
          paragraphs: [
            'From Lëkurësi Castle you look down on the whole curve of the bay, the town and the coast towards Butrint, with the sun setting roughly towards the sea side of the panorama. Historic walls give a foreground and the illuminated town appears below you after dark.',
            'From the waterfront you are level with the water. The horizon is closer, boats and the promenade become part of the frame, and haze has less effect on the nearby scene, but you lose the overview of the town and the bay shape.',
          ],
        },
        {
          heading: 'Effort, accessibility and logistics',
          paragraphs: [
            'The castle requires transport up a winding hill, a walk over uneven stone and a planned return after dark. It has limited shade, no verified public facilities and a busy access road at sunset.',
            'The waterfront is level, lit, easy to reach on foot and far simpler for anyone with limited mobility, small children or a tight schedule. It is also the more reliable choice in low cloud, when the long-distance panorama disappears.',
          ],
          bullets: [
            'Castle: panoramic, historic foreground, needs transport and planning.',
            'Waterfront: level, accessible, close-up sea view, no climb.',
            'Poor visibility: the waterfront usually loses less.',
          ],
        },
        {
          heading: 'Photography and a combined plan',
          paragraphs: [
            'For layered wide shots with the town below, the castle is unmatched. For reflections, boats, people and blue-hour street scenes, the waterfront is better.',
            'If you have one evening, go up to the castle and finish with a short, level walk on the waterfront afterwards. If you have two, use one for each and compare the light yourself.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What is the best sunset viewpoint in Sarandë?',
          a: 'For a panoramic view over the whole bay, Lëkurësi Castle. For an easy, level, accessible view at the waters edge, the Sarandë promenade. Choose based on mobility, weather and how far you want to travel.',
        },
        {
          q: 'Is the castle better than the promenade for sunset photos?',
          a: 'It is better for wide, layered images with the town and walls as foreground. The promenade is better for reflections, boats and close-up evening scenes.',
        },
        {
          q: 'Which sunset spot is better on a cloudy day?',
          a: 'The waterfront. Low cloud and haze remove the castles long-distance panorama, while the near view over the water and the promenade remain readable.',
        },
      ],
    },
  },
];
