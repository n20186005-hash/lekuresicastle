import type { Topic } from './types';

/** E. Nearby attractions and itineraries — 6 pages. */
export const NEARBY_TOPICS: Topic[] = [
  {
    slug: 'nearby/saranda-promenade',
    group: 'nearby',
    priority: 'P1',
    keyword: 'lekuresi castle saranda promenade',
    intent: 'Combine the hilltop castle with a walk along the Sarandë waterfront.',
    related: ['itineraries/saranda-half-day', 'comparisons/lekuresi-vs-saranda-waterfront', 'guides/how-to-get-there', 'nearby/monastery-of-forty-saints'],
    sources: ['aktSarande', 'sarandaInfo', 'maps', 'municipality'],
    en: {
      cardTitle: 'Castle & Sarandë promenade',
      cardText: 'Two complementary views of the same bay, one from above and one at water level.',
      metaTitle: 'Lëkurësi Castle & the Sarandë Promenade | Walking Pair',
      metaDescription:
        'How to combine Lëkurësi Castle with a walk on the Sarandë promenade: why the two views complement each other, a workable order and the climb between them.',
      h1: 'Lëkurësi Castle and the Sarandë promenade',
      lead:
        'The castle and the waterfront are the two easiest Sarandë experiences to pair. One gives you the whole bay from above; the other puts you in the town at water level. This page is about the order and the climb between them, not a directory of businesses.',
      sections: [
        {
          heading: 'Why the two views work together',
          paragraphs: [
            'From the ramparts you read the shape of the bay, the curve of the waterfront and how the town climbs into the hills. From the promenade you see the same hill from below, with the castle as a landmark above the rooftops.',
            'Doing both in one outing gives a much clearer mental map of Sarandë than either one alone, especially on a first day in town.',
          ],
        },
        {
          heading: 'A workable order',
          paragraphs: [
            'In hot weather, start with the promenade in the morning or late afternoon and go up to the castle for the last light. If you prefer a quieter hill, reverse it: take a taxi up early, then come back down and walk the waterfront.',
            'The connecting section is a hill road with traffic and little shade, not a seaside stroll. If you walk it, take water and allow real time; if not, use a taxi in at least one direction.',
          ],
          bullets: [
            'Morning: promenade, coffee, orientation at water level.',
            'Late afternoon: taxi or drive up to the castle.',
            'Evening: return to the waterfront for a level, lit walk.',
          ],
        },
        {
          heading: 'Practical cautions',
          paragraphs: [
            'We do not publish a walking time for the climb, a bus timetable or a list of named venues along the promenade, because these vary and are better checked locally. The national tourism agency page for Sarandë is a good starting point for the town layout.',
            'If you have limited mobility, treat the waterfront as the accessible half of this pairing and read the accessibility guide before attempting the hill.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can I walk from the Sarandë promenade to Lëkurësi Castle?',
          a: 'It is possible for fit walkers, but it is a sustained uphill road with traffic and little shade, not a level seafront walk. Many visitors take a taxi up and walk back down, or use a taxi both ways.',
        },
        {
          q: 'Which should I visit first, the castle or the promenade?',
          a: 'For sunset, do the promenade earlier and the castle last. For a quieter castle and cooler air, go up in the morning and walk the waterfront afterwards.',
        },
        {
          q: 'Can I see the castle from the promenade?',
          a: 'Yes, the fortress is a landmark on the hill above the town and is visible from many points along the waterfront, which makes it a useful orientation point.',
        },
      ],
    },
  },
  {
    slug: 'nearby/monastery-of-forty-saints',
    group: 'nearby',
    priority: 'P1',
    keyword: 'forty saints monastery saranda',
    intent: 'Add a second historic site above Sarandë to the same half-day.',
    related: ['itineraries/saranda-half-day', 'history/saranda-fortifications', 'nearby/saranda-promenade', 'guides/how-long-to-spend'],
    sources: ['aktSarande', 'sarandaInfo', 'heritage', 'maps'],
    en: {
      cardTitle: 'Monastery of the Forty Saints',
      cardText: 'A second historic hill site to pair with the castle, without inventing its details.',
      metaTitle: 'Monastery of the Forty Saints & Lëkurësi Castle | Sarandë',
      metaDescription:
        'How to combine the Monastery of the Forty Saints with Lëkurësi Castle in one Sarandë half-day, and which site details need local confirmation.',
      h1: 'The Monastery of the Forty Saints and Lëkurësi Castle',
      lead:
        'Sarandë takes its modern name from the tradition of the Forty Saints, and the monastery site above the town is the historic landmark behind it. Pairing it with Lëkurësi Castle gives a half-day of two very different hilltop monuments.',
      sections: [
        {
          heading: 'Two different monuments, one hillside city',
          paragraphs: [
            'The monastery is a religious site with its own history and remains; Lëkurësi Castle is an Ottoman-period military structure. They are sometimes grouped together as "the viewpoints above Sarandë", but their dates, purposes and condition are unrelated.',
            'Visit them as separate stops with their own access arrangements. We do not publish opening hours, entry charges or a restoration status for the monastery because we could not verify current official information.',
          ],
        },
        {
          heading: 'A sensible half-day order',
          paragraphs: [
            'Start with the monastery in the cooler part of the day, return towards the town for a break, then go up to the castle for the late-afternoon light. This avoids the steepest heat and keeps the best panorama for last.',
            'Both stops involve hills and transport between them; do not treat them as adjacent buildings on one pedestrian route. Confirm each location on a live map before setting out.',
          ],
          bullets: [
            'Morning: the monastery site.',
            'Midday: back in town, out of the heat.',
            'Late afternoon: Lëkurësi Castle and sunset.',
          ],
        },
        {
          heading: 'What to check locally',
          paragraphs: [
            'Ask Sarandë tourist information or your accommodation about current access, any services at the monastery and the state of the approach roads. The heritage authority is the appropriate source for conservation questions.',
            'Our half-day itinerary shows how these two stops fit with the waterfront without pretending a precise timetable exists.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is the Monastery of the Forty Saints near Lëkurësi Castle?',
          a: 'Both are on hills around Sarandë and are often paired in a half-day, but they are separate sites with separate access roads. Check each on a map rather than assuming you can walk directly between them.',
        },
        {
          q: 'Is there an entrance fee for the Forty Saints monastery?',
          a: 'We could not verify a current official entry fee or opening hours, so we do not publish one. Check with local tourist information before visiting.',
        },
        {
          q: 'Why is Sarandë called Sarandë?',
          a: 'The modern name is widely linked to the tradition of the Forty Saints and the monastery above the town. For a documented account, consult the national tourism agency and local heritage sources listed below.',
        },
      ],
    },
  },
  {
    slug: 'nearby/ksamil',
    group: 'nearby',
    priority: 'P1',
    keyword: 'lekuresi castle to ksamil',
    intent: 'Decide whether the castle and Ksamil belong in the same day.',
    related: ['itineraries/saranda-one-day', 'nearby/butrint-national-park', 'guides/best-time-to-visit', 'guides/how-long-to-spend'],
    sources: ['aktSarande', 'sarandaInfo', 'maps', 'municipality'],
    en: {
      cardTitle: 'Castle to Ksamil',
      cardText: 'How a hilltop fortress fits into a beach day on the southern coast.',
      metaTitle: 'Lëkurësi Castle to Ksamil | Combining Both in One Day',
      metaDescription:
        'Can you visit Lëkurësi Castle and Ksamil in one day? A realistic order, transport considerations, seasonal crowds and what to confirm locally.',
      h1: 'Combining Lëkurësi Castle with Ksamil',
      lead:
        'Ksamil, south of Sarandë, is a beach and lagoon destination with a completely different rhythm from a hilltop ruin. Combining them works, but only if you accept that they are not neighbours and that transport sets the pace.',
      sections: [
        {
          heading: 'A realistic shape for the day',
          paragraphs: [
            'A workable plan gives the morning to the southern coast and the evening to the castle. Beaches are best in clear daylight, while the fortress is at its best in the last hour of light.',
            'Driving yourself, hiring a car or agreeing a day rate with a driver gives the most flexibility. We do not publish bus times or fares because we could not verify a current timetable for this route.',
          ],
          bullets: [
            'Morning to afternoon: Ksamil and the coast.',
            'Late afternoon: return towards Sarandë.',
            'Sunset: Lëkurësi Castle, then descend after dark.',
          ],
        },
        {
          heading: 'Seasonality and time pressure',
          paragraphs: [
            'In July and August, both Ksamil and the castle road are at their busiest. Parking, traffic and the search for a beach space can consume the extra time you thought you had, so pick a shorter beach stop rather than trying to fit in Butrint, Ksamil and a long sunset dinner.',
            'Outside the main season the pressure drops, but beach services and transport options are more variable. Check locally on the day.',
          ],
        },
        {
          heading: 'What not to assume',
          paragraphs: [
            'We do not publish a current beach entry charge, sunbed price, bus timetable or a precise driving time between the two places. Those are seasonal, operator-set and easily outdated.',
            'Use the map link to check the route for your date, and read our one-day itinerary for an order that includes Butrint as an alternative.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you visit Lëkurësi Castle and Ksamil in one day?',
          a: 'Yes, with your own transport or a pre-arranged driver: Ksamil in the morning or afternoon and the castle for the evening light. It is a full day, so avoid adding a long third stop.',
        },
        {
          q: 'How do I get from Lëkurësi Castle to Ksamil?',
          a: 'The practical options are a hired car, a taxi or an organised excursion. We could not verify a current public bus timetable for this route, so check with local tourist information on the day.',
        },
        {
          q: 'Should I choose Ksamil or Butrint with the castle?',
          a: 'Choose based on your interest: Butrint for archaeology and a UNESCO landscape, Ksamil for beaches and lagoons. Trying to do both thoroughly plus a sunset at the castle makes for a rushed day.',
        },
      ],
    },
  },
  {
    slug: 'nearby/butrint-national-park',
    group: 'nearby',
    priority: 'P1',
    keyword: 'lekuresi castle butrint',
    intent: 'Plan a castle-plus-Butrint day with verified, separate site information.',
    related: ['itineraries/saranda-one-day', 'history/saranda-fortifications', 'nearby/ksamil', 'guides/how-long-to-spend'],
    sources: ['butrint', 'aktSarande', 'heritage', 'maps', 'sarandaInfo'],
    en: {
      cardTitle: 'Castle & Butrint',
      cardText: 'Two separate monuments, two separate sets of tickets and opening hours.',
      metaTitle: 'Lëkurësi Castle and Butrint | Planning Both in One Day',
      metaDescription:
        'How to combine Lëkurësi Castle with Butrint National Park: a workable order, why their history and tickets are separate, and where to check current opening information.',
      h1: 'Lëkurësi Castle and Butrint in one day',
      lead:
        'Butrint is the major archaeological landscape south of Sarandë and a UNESCO World Heritage Site; Lëkurësi Castle is a compact Ottoman-period hill fort above the town. They are frequently searched together, and they can share a day, but they share almost nothing else.',
      sections: [
        {
          heading: 'Two sites, independent arrangements',
          paragraphs: [
            'Butrint has its own ticket, opening hours, visitor route and management. Lëkurësi Castle is an open hilltop ruin with an independent restaurant. A ticket for one does not cover the other, and this guide does not sell either.',
            'Check Butrint current opening arrangements and prices with the official park or UNESCO-linked sources before you travel; we do not reproduce numbers that change between seasons.',
          ],
        },
        {
          heading: 'A workable order',
          paragraphs: [
            'Give Butrint the morning and early afternoon, when there is time to walk the archaeological route without rushing. Return towards Sarandë in the late afternoon and go up to the castle for the view and sunset.',
            'This order also respects the light: archaeological detail reads better in even daylight, while the hill is at its best at the end of the day.',
          ],
          bullets: [
            'Morning: travel south to Butrint.',
            'Midday: walk the site at an unhurried pace.',
            'Late afternoon: return to Sarandë.',
            'Sunset: Lëkurësi Castle and the descent after dark.',
          ],
        },
        {
          heading: 'The historical link, briefly',
          paragraphs: [
            'National tourism sources connect Lëkurësi Castle with controlling the road towards Butrint in the Ottoman period. That is a historical relationship between a route and a fortress, not a reason to treat the two monuments as one site.',
            'Our fortifications guide sets out the different periods more fully. For Butrint itself, the UNESCO listing in the sources below is the authoritative starting point.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle part of Butrint National Park?',
          a: 'No. They are separate sites with separate tickets and opening arrangements. The castle is on the hill above Sarandë; Butrint is a UNESCO archaeological landscape to the south.',
        },
        {
          q: 'Can I visit Butrint and Lëkurësi Castle in one day?',
          a: 'Yes: Butrint in the morning and early afternoon, the castle for the late-afternoon view and sunset. Allow real travel time between them and check Butrint current opening details first.',
        },
        {
          q: 'Is there a combined ticket?',
          a: 'We are not aware of a verified combined ticket and do not sell tickets. Check official channels for each site before travelling.',
        },
      ],
    },
  },
  {
    slug: 'itineraries/saranda-half-day',
    group: 'nearby',
    priority: 'P1',
    keyword: 'saranda half day itinerary',
    intent: 'Follow a short route with the castle as the core stop.',
    related: ['itineraries/saranda-one-day', 'nearby/monastery-of-forty-saints', 'nearby/saranda-promenade', 'guides/how-long-to-spend'],
    sources: ['aktSarande', 'sarandaInfo', 'maps', 'municipality'],
    en: {
      cardTitle: 'Half-day in Sarandë',
      cardText: 'A realistic 4-5 hour route with the castle as the main stop.',
      metaTitle: 'Sarandë Half-Day Itinerary | Castle, History & Waterfront',
      metaDescription:
        'A practical half-day in Sarandë built around Lëkurësi Castle, with a second historic stop and a waterfront walk, plus transport and timing caveats.',
      h1: 'A half-day in Sarandë built around Lëkurësi Castle',
      lead:
        'If you only have a morning or an afternoon, keep the plan tight. This route uses Lëkurësi Castle as the core stop and adds two nearby experiences that genuinely complement it, rather than trying to reach Ksamil or Butrint.',
      sections: [
        {
          heading: 'The route',
          paragraphs: [
            'Start at water level on the Sarandë promenade to get oriented and see the castle on the hill above you. Then take a short historic stop at the Monastery of the Forty Saints area, if access is confirmed locally, before heading up to the castle.',
            'Finish on the ramparts for the late-afternoon view, or reverse the whole order if you want the hill in the cool of the morning.',
          ],
          bullets: [
            'Stop 1: the waterfront promenade, 30-60 minutes.',
            'Stop 2: Forty Saints area, subject to current access.',
            'Stop 3: Lëkurësi Castle, 1-1.5 hours plus transport.',
          ],
        },
        {
          heading: 'Transport and pacing',
          paragraphs: [
            'The two hill sites are not on one continuous pedestrian route. Use a taxi or your own vehicle between them, and agree a pick-up time for the castle if you are staying for sunset.',
            'We do not publish a minute-by-minute timetable. Traffic, heat and how long you linger at the viewpoint matter more than a schedule, and the connecting roads climb.',
          ],
        },
        {
          heading: 'If the weather turns',
          paragraphs: [
            'Low cloud removes the long-distance panorama but not the masonry. On a dull day, shorten the viewpoint stop, keep the waterfront walk and use the rainy-day guide to decide whether to move the castle visit.',
            'In peak summer, shift everything earlier or later to avoid the midday climb.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What can I do in Sarandë in half a day?',
          a: 'Walk the waterfront, add one historic hill stop such as the Forty Saints area, and spend the last hour of light at Lëkurësi Castle. Keep transport pre-arranged between the hills.',
        },
        {
          q: 'Is the castle enough for a half-day on its own?',
          a: 'A thorough visit takes roughly 1-1.5 hours, or longer with sunset and a meal. Pairing it with the promenade makes a more satisfying half-day without long transfers.',
        },
        {
          q: 'Should I add Butrint to a half-day?',
          a: 'No. Butrint needs a substantial part of a day of its own. Use our one-day itinerary if you want to combine the castle with the southern coast.',
        },
      ],
    },
  },
  {
    slug: 'itineraries/saranda-one-day',
    group: 'nearby',
    priority: 'P1',
    keyword: 'saranda one day itinerary',
    intent: 'Fit the castle and one southern-coast highlight into a full day without rushing.',
    related: ['itineraries/saranda-half-day', 'nearby/butrint-national-park', 'nearby/ksamil', 'guides/best-time-to-visit'],
    sources: ['aktSarande', 'butrint', 'sarandaInfo', 'maps', 'municipality'],
    en: {
      cardTitle: 'One day in Sarandë',
      cardText: 'A full-day order that makes a real choice between Butrint and Ksamil.',
      metaTitle: 'Sarandë One-Day Itinerary | Castle, Butrint or Ksamil',
      metaDescription:
        'A realistic one-day Sarandë itinerary starting or finishing at Lëkurësi Castle, with an honest choice between Butrint and Ksamil and time for the return down the hill.',
      h1: 'One day in Sarandë: castle, town and the southern coast',
      lead:
        'The most common mistake in a Sarandë day plan is trying to fit in everything. This itinerary deliberately asks you to choose one southern-coast highlight, then gives Lëkurësi Castle the evening it deserves.',
      sections: [
        {
          heading: 'Morning: choose one major excursion',
          paragraphs: [
            'Option A is Butrint National Park, for archaeology and a UNESCO landscape; allow a proper walk of the site rather than a quick photo. Option B is Ksamil and the nearby coast, for beaches and lagoons in clear daylight.',
            'Doing both thoroughly and still reaching the castle for sunset produces a rushed, transport-heavy day. Pick based on your interest, not on a checklist.',
          ],
        },
        {
          heading: 'Afternoon: back to town, then up the hill',
          paragraphs: [
            'Return to Sarandë with time to spare. A short waterfront break resets the pace before the climb to the castle, and gives you a buffer if the southern coast was busier than expected.',
            'Aim to be on the hill well before the sunset time for your date. Use a taxi or your own vehicle, and agree the return before the light goes.',
          ],
          bullets: [
            'Morning to mid-afternoon: Butrint or Ksamil, not both.',
            'Late afternoon: Sarandë town and the waterfront.',
            'Sunset: Lëkurësi Castle, then the arranged descent.',
          ],
        },
        {
          heading: 'What we deliberately leave out',
          paragraphs: [
            'We do not publish bus timetables, current ticket prices for Butrint, beach charges or exact driving times. Those are seasonal and operator-set, and a wrong number is worse than no number.',
            'Check the UNESCO-linked information for Butrint and local tourist information for transport on the day. If the forecast is poor, swap the sunset castle slot for a morning visit and keep the afternoon flexible.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is one day enough for Sarandë, Butrint and Lëkurësi Castle?',
          a: 'Yes if you choose Butrint as the single major excursion and keep the castle for the evening. Adding Ksamil as well usually makes the day too rushed.',
        },
        {
          q: 'What is the best order for a Sarandë day trip?',
          a: 'Southern coast in the morning and early afternoon, back to town before sunset, then Lëkurësi Castle for the last light. Reverse it if the forecast for the evening is poor.',
        },
        {
          q: 'Do I need a car for this itinerary?',
          a: 'A hired car, a taxi arrangement or an organised excursion is the practical choice. We could not verify a current public transport timetable covering the castle and the southern coast reliably.',
        },
      ],
    },
  },
];
