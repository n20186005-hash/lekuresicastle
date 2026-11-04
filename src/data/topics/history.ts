import type { Topic } from './types';

/** C. History and architecture — 5 pages, each with a distinct research question. */
export const HISTORY_TOPICS: Topic[] = [
  {
    slug: 'history/lekuresi-castle-history',
    group: 'history',
    priority: 'P0',
    keyword: 'lekuresi castle history',
    intent: 'Get the documented building period, strategic purpose and later fate.',
    related: ['history/ottoman-fortress', 'history/castle-architecture', 'history/lekures-village', 'history/saranda-fortifications'],
    sources: ['aktAttraction', 'aktCastle', 'sarandaExplore', 'heritage'],
    en: {
      cardTitle: 'Castle history',
      cardText: 'The 16th-century building period, the strategic hill and what happened later.',
      metaTitle: 'Lëkurësi Castle History | 16th-Century Ottoman Fortress',
      metaDescription:
        'The documented history of Lëkurësi Castle: its 16th-century Ottoman context, the 1537 tradition, the harbour and Butrint road it protected, and how it became a viewpoint.',
      h1: 'A short history of Lëkurësi Castle',
      lead:
        'Lëkurësi Castle, known in Albanian as Kalaja e Lëkurësit, is a ruined fortress on the hill above Sarandë. Albania National Tourism Agency material places it in the 16th century and links it to the Ottoman period and to Sultan Suleiman I in 1537. This page separates that documented outline from the less certain details repeated by travel guides.',
      sections: [
        {
          heading: 'A 16th-century fortress on a strategic hill',
          paragraphs: [
            'The national tourism agency describes the castle as a 16th-century construction associated with the Ottoman period, with a tradition linking its building to 1537 and Sultan Suleiman I. The key point is not the exact year but the choice of site: a hill that overlooks Sarandë, its harbour approaches and the route south towards Butrint.',
            'From this height, movement along the coast and into the bay could be observed. That is why the fortress is usually explained in terms of controlling the harbour and the road to Butrint rather than as a residence or a ceremonial building.',
          ],
        },
        {
          heading: 'From garrison to ruin',
          paragraphs: [
            'Over the following centuries the military value of a small hilltop fort changed with the region, and the structure eventually lost its garrison role and fell into ruin. Some visitor guides attach precise dates, troop numbers or named events to this decline.',
            'We treat those details as secondary tradition unless they can be tied to a source. What is visible today is a ruin: standing wall sections, tower remains and an open interior that has been adapted for visitors and for a restaurant business.',
          ],
        },
        {
          heading: 'The castle in the 20th and 21st centuries',
          paragraphs: [
            'Today the hill is visited far more for its panorama than for its military history. Sarandë grew into a seaside destination, the castle became a landmark above the bay, and the restaurant inside the walls turned part of the site into a commercial venue with its own operating arrangements.',
            'This guide is independent of those operations. For heritage questions, the National Institute of Cultural Heritage and the municipality are the appropriate authorities; for the building period and strategic role, the national tourism agency pages listed below are the sources we rely on.',
          ],
          bullets: [
            'Documented: 16th-century Ottoman context; strategic hill above Sarandë; harbour and Butrint route.',
            'Traditional / less certain: the precise 1537 date, troop numbers and exact abandonment date.',
            'Visible today: ruined walls, tower remains, viewpoints and a separately operated restaurant.',
          ],
        },
      ],
      faqs: [
        {
          q: 'When was Lëkurësi Castle built?',
          a: 'Albania National Tourism Agency material places it in the 16th century during the Ottoman period, with a tradition linking it to 1537 and Sultan Suleiman I. Treat the exact year as a tradition rather than a date confirmed by a surviving building inscription.',
        },
        {
          q: 'Who built Lëkurësi Castle?',
          a: 'It is described as an Ottoman-period fortress, commonly associated with the era of Sultan Suleiman I. We do not name an architect or a specific military commander because we could not verify one in the sources listed.',
        },
        {
          q: 'Why was the castle built on this hill?',
          a: 'The position overlooks Sarandë, the harbour approaches and the route towards Butrint. National tourism sources connect the fortress with protecting the harbour and controlling that road.',
        },
        {
          q: 'Is the castle still intact?',
          a: 'No. It is a ruin with surviving wall sections and tower remains. Part of the interior is used by an independent restaurant, which is separate from the historic fabric.',
        },
      ],
    },
  },
  {
    slug: 'history/ottoman-fortress',
    group: 'history',
    priority: 'P1',
    keyword: 'ottoman fortress saranda',
    intent: 'Understand the military and maritime background behind the fortress.',
    related: ['history/lekuresi-castle-history', 'history/saranda-fortifications', 'history/castle-architecture', 'guides/corfu-view'],
    sources: ['aktCastle', 'aktAttraction', 'aktSarande', 'heritage', 'butrint'],
    en: {
      cardTitle: 'The Ottoman context',
      cardText: 'Sea routes, harbour defence and why a small fort made sense here.',
      metaTitle: 'Ottoman Fortress above Sarandë | Why Lëkurësi Was Built',
      metaDescription:
        'Why was an Ottoman-era fortress built above Sarandë? Sea routes, the harbour, the road to Butrint and the defensive logic of the Lëkurës hill.',
      h1: 'Lëkurësi Castle in its Ottoman context',
      lead:
        'A small hilltop fort only makes sense in relation to what it watched. This page looks at the maritime and overland geography of the Sarandë area rather than retelling the building chronology covered in the castle history page.',
      sections: [
        {
          heading: 'The channel as a strategic corridor',
          paragraphs: [
            'Sarandë faces the channel that separates the Albanian coast from Corfu. For centuries that waterway carried traffic along the coast and between the Adriatic and Ionian routes, which made the shore and its anchorage worth watching.',
            'The national tourism agency describes the castle in terms of protecting the harbour of Sarandë and controlling the road towards Butrint. Those two functions, one maritime and one overland, explain the position better than any story about a single battle.',
          ],
        },
        {
          heading: 'Harbour and road, not a frontier wall',
          paragraphs: [
            'This was not a long frontier fortification. It is a compact position on high ground, suited to observation and to controlling a limited area: the bay below, the landing places and the route south.',
            'Butrint, further down the coast, had its own defensive history across many periods. Lëkurësi belongs to a later, Ottoman-era layer of that landscape, and the two should not be collapsed into one story.',
          ],
        },
        {
          heading: 'What the sources do and do not say',
          paragraphs: [
            'National tourism material supports the 16th-century dating, the Ottoman association and the harbour / Butrint road function. It does not, as far as we can verify, provide a detailed order of battle, a named garrison commander or a full construction account.',
            'Later visitor guides sometimes add precise troop numbers or dramatic episodes. Where a claim cannot be traced, this guide labels it as tradition and leaves it out of the factual summary.',
          ],
          bullets: [
            'Supported: Ottoman-period, 16th-century, harbour and route control.',
            'Geographic context: the Corfu channel and the coast towards Butrint.',
            'Not verified: garrison size, named commanders, specific siege narratives.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Was Lëkurësi Castle an Ottoman fortress?',
          a: 'Yes. Albania National Tourism Agency material describes it as a 16th-century fortress of the Ottoman period, associated with the era of Sultan Suleiman I.',
        },
        {
          q: 'What was the fortress defending?',
          a: 'Sources connect it with protecting the harbour of Sarandë and controlling the road towards Butrint, taking advantage of a hill that overlooks the bay and the channel towards Corfu.',
        },
        {
          q: 'Is Lëkurësi Castle connected to Butrint?',
          a: 'Geographically and historically the site relates to the route south towards Butrint, but it is a separate, later monument. Butrint has its own much longer archaeological and defensive history.',
        },
      ],
    },
  },
  {
    slug: 'history/castle-architecture',
    group: 'history',
    priority: 'P1',
    keyword: 'lekuresi castle architecture',
    intent: 'Read the surviving plan, walls and towers as built fabric.',
    related: ['history/lekuresi-castle-history', 'history/ottoman-fortress', 'history/saranda-fortifications', 'guides/visitor-facilities'],
    sources: ['aktCastle', 'sarandaExplore', 'heritage', 'aktAttraction'],
    en: {
      cardTitle: 'Architecture & masonry',
      cardText: 'The plan, the round towers, wall construction and what survives.',
      metaTitle: 'Lëkurësi Castle Architecture | Plan, Walls & Towers',
      metaDescription:
        'A readable guide to the architecture of Lëkurësi Castle: its roughly square plan, corner towers, stone walls, defensive logic and the condition of the remains.',
      h1: 'The architecture of Lëkurësi Castle',
      lead:
        'The castle is small, but its layout rewards a slow walk. Rather than listing measurements that vary between secondary guides, this page explains how to read the surviving fabric: where the enclosure runs, how the towers relate to it, and what has been altered for modern use.',
      sections: [
        {
          heading: 'The enclosure and its towers',
          paragraphs: [
            'The fortress is generally described as a roughly quadrangular enclosure with substantial round towers at opposing corners. Walk the perimeter and the logic becomes clear: the towers project beyond the wall line so defenders could look along the faces of the walls rather than only straight out.',
            'The interior is open and uneven. Part of it has been adapted by the restaurant business, so modern paving, seating and service structures should not be read as historic fabric.',
          ],
        },
        {
          heading: 'Walls, stone and defensive details',
          paragraphs: [
            'The standing walls are built from local stone in thick, solid sections, with the weathered, irregular surface typical of masonry that has lost its original finishes. Look for changes in the stonework where repairs or later alterations have been made.',
            'Some guides quote wall thicknesses and heights to the metre. Those figures differ between secondary sources and we could not confirm them against a measured survey, so we do not present them as established data.',
          ],
          bullets: [
            'Look along the wall faces to understand the projecting towers.',
            'Separate modern restaurant fittings from historic stone.',
            'Treat published measurements as approximate until confirmed by a survey.',
          ],
        },
        {
          heading: 'What has not survived',
          paragraphs: [
            'A ruined fortress loses its roofs, floors, internal divisions and most of its upper works. What remains is the enclosure and the mass of the towers, which is why the site reads more as a viewpoint with walls than as a complete castle.',
            'This is also why accessibility is limited: thresholds, steps and rough ground are original features, not defects that can be assumed away. Our visitor facilities guide covers the practical consequences.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What shape is Lëkurësi Castle?',
          a: 'It is generally described as a roughly square or quadrangular enclosure with large round towers at opposing corners. Walking the perimeter is the easiest way to see how the towers project beyond the wall line.',
        },
        {
          q: 'How thick are the castle walls?',
          a: 'Some secondary guides give figures around two metres, but published numbers vary and we could not verify them against a measured heritage survey. We therefore avoid stating a definitive thickness.',
        },
        {
          q: 'Is the restaurant building original?',
          a: 'No. The restaurant is a modern commercial use of part of the site. Its terraces, seating and service areas should be distinguished from the historic masonry.',
        },
      ],
    },
  },
  {
    slug: 'history/lekures-village',
    group: 'history',
    priority: 'P2',
    keyword: 'lekures village history',
    intent: 'Understand the relationship between the castle, the hill and the Lëkurës name.',
    related: ['history/lekuresi-castle-history', 'history/saranda-fortifications', 'guides/how-to-get-there', 'nearby/saranda-promenade'],
    sources: ['aktCastle', 'aktAttraction', 'sarandaInfo', 'municipality'],
    en: {
      cardTitle: 'The Lëkurës name',
      cardText: 'How the hill, a historic village name and the castle are connected.',
      metaTitle: 'Lëkurës Village & the Name of Lëkurësi Castle',
      metaDescription:
        'Why is it called Lëkurësi Castle? The relationship between the Lëkurës hill above Sarandë, the local name Kalaja e Lëkurësit and the surrounding settlement history.',
      h1: 'Lëkurës: the hill, the name and the castle',
      lead:
        'The castle takes its name from the hill and the Lëkurës area above Sarandë rather than from a famous ruler or a battle. That small fact helps explain why the place appears under several different spellings in maps and search results.',
      sections: [
        {
          heading: 'A place name before a monument name',
          paragraphs: [
            'In Albanian the fortress is Kalaja e Lëkurësit, literally the castle of Lëkurës. The hill and the historic settlement area above the town carried the name, and the fortress inherited it.',
            'Visitors encounter Lekuresi, Lekursi and Lëkurësi in English-language results. These are the same place rendered with or without Albanian diacritics and with different transliteration habits, not separate castles. Search engines see them as variant queries, so this guide keeps them on one entity.',
          ],
        },
        {
          heading: 'Settlement and the hill above the town',
          paragraphs: [
            'The relationship between any historic village on the hill and the growth of modern Sarandë below is a local-history question. We have not found a source that lets us state a founding date, a population or a precise boundary for a historic Lëkurës settlement, so we do not invent one.',
            'What can be observed is the geography: a steep, exposed hill with a wide viewshed, a winding access road, and later development spreading along the coast below. The castle sits at the top of that relationship.',
          ],
        },
        {
          heading: 'Where to verify local history',
          paragraphs: [
            'For anything beyond this geographic outline, use local institutions: Sarandë tourist information, the municipality and the national heritage authority. They are the appropriate sources for cadastral records, place-name studies or archaeological notes.',
            'Oral traditions about the origin of the name circulate in visitor writing. We do not repeat them as established etymology.',
          ],
          bullets: [
            'Kalaja e Lëkurësit is the Albanian name of the same castle.',
            'Lekuresi / Lekursi are spelling variants, not different sites.',
            'Founding dates and etymology require local archival sources.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Why is it called Lëkurësi Castle?',
          a: 'The Albanian name Kalaja e Lëkurësit links the fortress to the Lëkurës hill and area above Sarandë. We do not put forward a single etymology for the place name because the local sources we checked do not establish one.',
        },
        {
          q: 'Are Lekuresi Castle and Lekursi Castle the same place?',
          a: 'Yes. They are spelling variants of Lëkurësi Castle, alongside the Albanian Kalaja e Lëkurësit. There is no need for separate pages or separate trips.',
        },
        {
          q: 'Was there a village at Lëkurës?',
          a: 'The name refers to the hill and local area above Sarandë, and local histories discuss settlement there. We could not verify a founding date or documented village boundary, so we avoid publishing one.',
        },
      ],
    },
  },
  {
    slug: 'history/saranda-fortifications',
    group: 'history',
    priority: 'P2',
    keyword: 'historic fortifications saranda',
    intent: 'Place the castle among other defensive sites around Sarandë.',
    related: ['history/ottoman-fortress', 'history/lekuresi-castle-history', 'nearby/butrint-national-park', 'nearby/monastery-of-forty-saints'],
    sources: ['aktSarande', 'aktCastle', 'butrint', 'heritage', 'sarandaInfo'],
    en: {
      cardTitle: 'Fortifications around Sarandë',
      cardText: 'How the hilltop castle fits into a coast with many layers of defence.',
      metaTitle: 'Historic Fortifications around Sarandë | Lëkurësi in Context',
      metaDescription:
        'How Lëkurësi Castle relates to other fortified and historic sites around Sarandë and Butrint, and how to plan a visit without conflating different periods.',
      h1: 'Lëkurësi Castle among the fortifications around Sarandë',
      lead:
        'The coast around Sarandë has been defended, abandoned and re-fortified across many periods. Lëkurësi is one Ottoman-era layer in that landscape. This page gives a framework for understanding its neighbours without merging unrelated monuments into a single timeline.',
      sections: [
        {
          heading: 'Different periods, different purposes',
          paragraphs: [
            'Butrint, south of Sarandë, preserves ancient, medieval and later defensive works within a UNESCO World Heritage landscape. The monastery of the Forty Saints above the town belongs to a religious and historical tradition with its own chronology. Lëkurësi Castle is a compact 16th-century Ottoman-period hill fort.',
            'These sites are sometimes presented as one "castles of Sarandë" circuit, but their dates, functions and visiting arrangements are unrelated. Check each one separately for opening arrangements, tickets and transport.',
          ],
        },
        {
          heading: 'Other castle names you will meet',
          paragraphs: [
            'Searches for Ali Pasha castles in this region can refer to more than one site, including fortifications associated with the Butrint area and the coast further north. Confirm the exact location on a map before adding one to an itinerary rather than assuming every reference means the same building.',
            'The same caution applies to "Saranda Castle" in English-language results: it is usually a generic label for Lëkurësi Castle above the town.',
          ],
        },
        {
          heading: 'Building a sensible history day',
          paragraphs: [
            'A realistic day pairs the hilltop castle with one substantial site rather than trying to cover everything. Our half-day and one-day itineraries show two workable orders, with the travel time between the hill, the town and the southern coast treated as a real constraint.',
            'For authoritative background, start with the national tourism agency pages for Sarandë and the castle, then the UNESCO listing for Butrint. Those sources are listed below with the date we last checked them.',
          ],
          bullets: [
            'Lëkurësi: Ottoman-period hill fort above the town.',
            'Butrint: multi-period archaeological landscape to the south.',
            'Forty Saints: historic monastery site above Sarandë.',
            'Ali Pasha references: several possible sites, confirm on a map.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle the only castle near Sarandë?',
          a: 'No. The wider area includes other fortified and historic sites, notably around Butrint and along the coast. They belong to different periods and have separate visiting arrangements.',
        },
        {
          q: 'Is Lëkurësi Castle part of Butrint National Park?',
          a: 'No. It is a separate hilltop monument above Sarandë. Butrint lies to the south and is a UNESCO World Heritage Site with its own ticket and opening arrangements.',
        },
        {
          q: 'What is "Saranda Castle"?',
          a: 'It is a common English label for Lëkurësi Castle, the fortress on the hill above Sarandë. It does not refer to a second castle in the town centre.',
        },
      ],
    },
  },
];
