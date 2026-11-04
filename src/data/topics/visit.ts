import type { Topic } from './types';
import { PLUS_CODE } from '@/lib/site';

/** A. Practical visiting information — 7 pages. */
export const VISIT_TOPICS: Topic[] = [
  {
    slug: 'guides/entrance-fee',
    group: 'visit',
    priority: 'P0',
    keyword: 'lekuresi castle entrance fee',
    intent: 'Find out whether a ticket is needed and where to confirm a current price.',
    related: ['guides/opening-hours', 'guides/is-it-worth-visiting', 'guides/budget-visit', 'guides/castle-restaurant'],
    sources: ['aktAttraction', 'aktCastle', 'municipality', 'heritage', 'restaurant', 'maps'],
    en: {
      cardTitle: 'Entrance fee & tickets',
      cardText: 'What a ticket covers, what it does not, and how to check the current rules.',
      metaTitle: 'Lëkurësi Castle Entrance Fee & Tickets (Sarandë) | 2026 Guide',
      metaDescription:
        'Is there an entrance fee for Lëkurësi Castle? Understand the difference between visiting the ruins and the restaurant, what to verify before you go, and where to check current rules.',
      h1: 'Lëkurësi Castle entrance fee and tickets',
      lead:
        'Visitors searching for a Lëkurësi Castle entrance fee are usually asking two different questions: whether the historic ruins can be walked around without a ticket, and whether the restaurant on the hill charges for anything. This page separates the two and points to the places where a current answer can be confirmed.',
      sections: [
        {
          heading: 'Is there a ticket for the castle grounds?',
          paragraphs: [
            'Our main guide describes the open castle grounds above Sarandë as free to enter, and that matches the way most independent visitor accounts describe a short stop at the ruins. We have not found a currently published, official tariff issued by a site administration for the hilltop grounds.',
            'Treat this as a snapshot of common visitor practice, not a guarantee. There is no ticket office operated by this website, we do not sell admission, and we cannot confirm whether a charge, a controlled access area or a temporary closure applies on the day of your visit.',
          ],
          bullets: [
            'Confirm at the site entrance or with the Municipality of Sarandë / National Institute of Cultural Heritage before relying on "free entry".',
            'Special events, private functions and restoration work can change which areas are open.',
            'Dining at the restaurant is a separate commercial service and is never included in any castle admission.',
          ],
        },
        {
          heading: 'Castle visit versus restaurant visit',
          paragraphs: [
            'The castle and the restaurant inside its walls are different things. Walking around the historic fabric and the outdoor viewpoints is a sightseeing activity; eating on the terrace is a purchase from an independent operator with its own menu, prices and booking policy.',
            'A restaurant bill is not an entrance fee. Equally, a free walk around the ruins does not give access to restaurant seating, terraces or service areas.',
          ],
        },
        {
          heading: 'Do you need to reserve anything?',
          paragraphs: [
            'For a short independent visit to the outdoor ruins, no reservation through this website is possible or required. For a table, especially around sunset, contact the restaurant operator directly through its own website.',
            'Guided tours, transport and combinations with Butrint or Ksamil are sold by third-party operators; their prices are not castle ticket prices and should be checked with the operator.',
          ],
          bullets: [
            'Independent sightseeing: no booking with us.',
            'Restaurant table: book with the operator.',
            'Guided excursion: book with the tour company, not with the castle.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle free to visit?',
          a: 'The open grounds are commonly described as free to enter and our main guide says so, but we could not verify a current official tariff or access notice. Check on site or with the municipality and heritage authorities before travelling; restaurant meals and guided tours are always separate paid services.',
        },
        {
          q: 'Can I buy Lëkurësi Castle tickets on this website?',
          a: 'No. This is an independent visitor guide, not the castle administration or a ticket seller. Any ticket, tour or table must be arranged with the relevant operator or authority.',
        },
        {
          q: 'Does the entrance fee include the restaurant or the sunset terrace?',
          a: 'No. The restaurant inside the castle walls is an independent business. Food, drinks and a reserved table are charged separately by the operator, and a sightseeing visit does not guarantee access to its terrace.',
        },
      ],
    },
  },
  {
    slug: 'guides/opening-hours',
    group: 'visit',
    priority: 'P0',
    keyword: 'lekuresi castle opening hours',
    intent: 'Work out when the hilltop site can be visited, separately from the restaurant.',
    related: ['guides/best-time-to-visit', 'guides/evening-visit', 'guides/castle-restaurant', 'guides/sunset-view'],
    sources: ['aktAttraction', 'sarandaInfo', 'restaurant', 'municipality', 'maps'],
    en: {
      cardTitle: 'Opening hours',
      cardText: 'Outdoor access, daylight, sunset and the restaurant schedule are not the same thing.',
      metaTitle: 'Lëkurësi Castle Opening Hours | Outdoor Access & Restaurant Times',
      metaDescription:
        'When can you visit Lëkurësi Castle? Learn why outdoor access, sunset visiting and restaurant opening hours differ, and how to confirm current times before you travel.',
      h1: 'Lëkurësi Castle opening hours',
      lead:
        'There is no single clock for this hilltop site. The outdoor ruins, the road up the hill, daylight for the view and the restaurant all follow different practical limits. This page explains each one so a restaurant schedule is never mistaken for a castle opening time.',
      sections: [
        {
          heading: 'Outdoor access and the quoted visiting window',
          paragraphs: [
            'Our main guide quotes 08:00-23:00 as a commonly used daily visiting window for the castle area. That figure is a visitor-guide snapshot describing when people typically go up the hill, not an official opening-hours notice published by a managing authority.',
            'Because the site is an open hilltop ruin rather than a staffed museum with a gate, we cannot confirm a guaranteed opening time, a last-entry time or a fixed weekly closing day. Check locally on the day, especially outside the summer season.',
          ],
          bullets: [
            'Daylight, not a turnstile, is the practical limit for the outdoor viewpoints.',
            'Restoration, private events or weather can restrict parts of the site without notice.',
            'Restaurant hours belong to the operator and must be checked on its own channels.',
          ],
        },
        {
          heading: 'Sunset, evening and after-dark visits',
          paragraphs: [
            'Sunset is the busiest period. The sun sets at very different times in June and December, so use a current sunset time for Sarandë rather than a fixed hour, and plan to arrive well before it.',
            'After dark the appeal is the illuminated town below rather than the masonry. Paths, steps and uneven stone are harder to read in low light and there is no guarantee of lighting across the whole site, so bring a light and decide in advance how you will get back down.',
          ],
        },
        {
          heading: 'Seasonal and operational variation',
          paragraphs: [
            'Sarandë is strongly seasonal. In peak summer the road, parking and restaurant are busiest; in winter, services around the hill may operate on reduced schedules while the outdoor viewpoint itself remains a landscape stop.',
            'For 2026 we have recorded the sources we checked and the date of that check. We do not publish a permanent 24-hour opening guarantee, a fixed public-transport timetable or a promise that every area is accessible at all times.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What time does Lëkurësi Castle open?',
          a: 'The outdoor hilltop site is commonly visited from morning until late evening, and our main guide quotes 08:00-23:00. That is not an official posted schedule: check on site or with local tourist information, and keep the restaurant opening hours separate.',
        },
        {
          q: 'Is Lëkurësi Castle open 24 hours?',
          a: 'We cannot confirm a 24-hour opening guarantee. Even if the outdoor area has no staffed gate, lighting, safety, events and road access can limit an after-dark visit. Treat late-night access as unverified and plan a return route.',
        },
        {
          q: 'Are the restaurant hours the same as the castle hours?',
          a: 'No. The restaurant is an independent business with its own kitchen and booking schedule. Its opening times say nothing about when the outdoor ruins can be viewed; always check the operator website for dining hours.',
        },
      ],
    },
  },
  {
    slug: 'guides/how-to-get-there',
    group: 'visit',
    priority: 'P0',
    keyword: 'how to get to lekuresi castle',
    intent: 'Choose a way up the hill from Sarandë and plan the return trip.',
    related: ['guides/parking', 'guides/evening-visit', 'guides/accessibility', 'guides/solo-travelers'],
    sources: ['maps', 'sarandaInfo', 'aktSarande', 'municipality', 'aktAttraction', 'googleBusiness'],
    en: {
      cardTitle: 'How to get there',
      cardText: 'From Sarandë centre by car, taxi, on foot and back down after dark.',
      metaTitle: 'How to Get to Lëkurësi Castle from Sarandë | Routes & Return',
      metaDescription:
        'How to reach Lëkurësi Castle from Sarandë: driving, taxi, walking uphill, choosing a return trip after sunset and what to check on the access road.',
      h1: 'How to get to Lëkurësi Castle from Sarandë',
      lead:
        'Lëkurësi Castle sits on a hill above Sarandë, so the visit is as much about the climb as the destination. The castle is close to town as the crow flies, but every approach follows the winding road up the Lëkurës hill. Use the map link for live navigation and choose a return plan before you go up.',
      sections: [
        {
          heading: 'From Sarandë centre by car or taxi',
          paragraphs: [
            'The usual approach is the paved road that climbs from the Sarandë side towards the hilltop. A taxi or a hired car is the most common choice for a sunset visit because it removes the uphill walk and, more importantly, solves the return trip after dark.',
            'Ask the driver to wait or agree a pick-up time before you get out. Ride availability on the hill at closing time is not something this guide can verify, and mobile signal or ride coverage should not be assumed.',
          ],
          bullets: [
            'Open the Google Maps link for the current road and turn-by-turn directions.',
            'Agree the fare and the return journey before starting.',
            'Allow extra time in peak season: the access road is narrow and busy around sunset.',
            `Use the Plus Code ${PLUS_CODE} in your map app to pin the exact hilltop drop-off.`,
          ],
        },
        {
          heading: 'Walking up from the town',
          paragraphs: [
            'Walking is possible for fit visitors and gives a changing view over the bay on the way up. It is a sustained uphill route on paved surfaces with traffic, limited shade and few natural resting points, so it is not equivalent to a flat seaside stroll.',
            'In summer heat, take water and avoid the middle of the day. After rain the surface can be slippery, and after dark the unlit sections are a poor choice for an unfamiliar walker.',
          ],
        },
        {
          heading: 'Buses, organised trips and the return leg',
          paragraphs: [
            'We could not verify a current public bus timetable serving the castle itself, so we do not publish one. Local tourist information or your accommodation is the right place to ask about any seasonal shuttle or city service on the day.',
            'Organised excursions that combine the castle with Butrint or Ksamil use their own transport and schedule. If you arrive with a tour, follow the operator instructions for the meeting point rather than assuming you can walk back independently.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How far is Lëkurësi Castle from Sarandë centre?',
          a: 'It is the hill directly above the town, but the road climbs in bends rather than running straight to the summit. Use a live map for the current driving route and allow more time than the straight-line distance suggests.',
        },
        {
          q: 'Can I walk up to Lëkurësi Castle?',
          a: 'Yes, fit walkers do climb the paved road, but it is a sustained uphill walk with traffic, little shade and uneven edges. For a sunset or evening visit, arranging a taxi for the descent is the safer plan.',
        },
        {
          q: 'Is there a bus to the castle?',
          a: 'We have not verified a current public bus timetable to the castle and do not publish one. Check with Sarandë tourist information or your accommodation for seasonal services, or use a taxi or a hired car.',
        },
      ],
    },
  },
  {
    slug: 'guides/parking',
    group: 'visit',
    priority: 'P0',
    keyword: 'lekuresi castle parking',
    intent: 'Find out where to leave a car and what is actually verifiable about parking.',
    related: ['guides/how-to-get-there', 'guides/visitor-facilities', 'guides/accessibility', 'guides/family-visit'],
    sources: ['maps', 'sarandaInfo', 'municipality', 'aktSarande', 'googleBusiness'],
    en: {
      cardTitle: 'Parking near the castle',
      cardText: 'Where cars stop, why peak season is difficult and which claims we will not make.',
      metaTitle: 'Lëkurësi Castle Parking | Where to Leave a Car in Sarandë',
      metaDescription:
        'Parking at Lëkurësi Castle: what to expect on the hilltop road, why sunset is busy, how far you may still need to walk, and which parking details need local confirmation.',
      h1: 'Parking at Lëkurësi Castle',
      lead:
        'Most self-drive visitors want one answer: how close can I leave the car? The honest answer is that parking on a narrow hilltop road is a practical, seasonal matter rather than a fixed service with published prices and capacities. This page explains what to expect and what we cannot verify.',
      sections: [
        {
          heading: 'Where vehicles stop',
          paragraphs: [
            'Cars reach the castle along the paved hill road and stop in the immediate hilltop area or along the approach, depending on how busy it is. Some visitors then walk the last stretch on foot over stone and uneven ground.',
            'Use the map link to see the current road layout and plan a place to turn around. We do not publish a precise walking distance from parking to the viewpoint because it changes with where you can actually stop. The hilltop is marked with the Plus Code V28G+97 Sarandë, Albania — search it in your map app to confirm the exact drop-off point.',
          ],
        },
        {
          heading: 'Peak season and road conditions',
          paragraphs: [
            'Sunset in July and August is the hardest moment. The access road is narrow, the hilltop area is limited, and the restaurant draws its own traffic at the same time as sightseers arrive for the view.',
            'Arriving earlier, or leaving the car lower down and walking the remainder, is often less stressful than circling the summit. Do not assume a guaranteed space, a marked bay or an attendant.',
          ],
          bullets: [
            'Allow extra time before sunset.',
            'Expect to walk a final section on stone or uneven ground.',
            'Check for temporary restrictions, events or road works locally.',
          ],
        },
        {
          heading: 'Fees and accessibility: what we will not claim',
          paragraphs: [
            'Our main guide describes parking at the hilltop as free. We have not been able to verify a current official price list, a permanent free-parking guarantee or the number of marked spaces, so do not budget around an assumed fee.',
            'Nor can we verify accessible bays, step-free routes from the parking area or a continuously available accessible toilet. Visitors with mobility needs should read the accessibility guide and confirm with the site or their driver before setting out.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is there parking at Lëkurësi Castle?',
          a: 'Vehicles do stop in the hilltop area and along the approach road. There is no verified, published car park capacity, and space is tight around sunset in peak season, so arrive early and expect a short final walk.',
        },
        {
          q: 'Is parking at the castle free?',
          a: 'Our main guide describes it as free, but we could not confirm a permanent official free-parking policy or a current tariff. Check the signs and any attendant on the day rather than relying on a third-party guide.',
        },
        {
          q: 'Can I park right next to the viewpoint?',
          a: 'Not reliably. Depending on congestion you may need to stop further down the road and walk the last part over uneven stone. Mobility-impaired visitors should arrange a drop-off and confirm the surface conditions first.',
        },
      ],
    },
  },
  {
    slug: 'guides/best-time-to-visit',
    group: 'visit',
    priority: 'P0',
    keyword: 'best time to visit lekuresi castle',
    intent: 'Choose a time of day and season that matches the reason for visiting.',
    related: ['guides/sunset-view', 'guides/how-long-to-spend', 'guides/evening-visit', 'guides/rainy-day-visit'],
    sources: ['aktAttraction', 'aktSarande', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'Best time to visit',
      cardText: 'Morning clarity, golden hour and off-season trade-offs explained.',
      metaTitle: 'Best Time to Visit Lëkurësi Castle | Season, Light & Crowds',
      metaDescription:
        'When is the best time to visit Lëkurësi Castle? Compare morning, afternoon and sunset light, summer crowds and quieter months in Sarandë.',
      h1: 'Best time to visit Lëkurësi Castle',
      lead:
        'The best time depends on what you came for. Photographers, history readers, families and sunset diners all want different conditions from the same hill. Rather than naming one magic hour, this page maps the trade-offs.',
      sections: [
        {
          heading: 'Morning: clear light and quieter stonework',
          paragraphs: [
            'Early in the day the hill is usually quieter, the heat is lower and the masonry is easier to walk around and read. With the sun in the east, the view over the bay and towards Corfu can be hazier than later in the day, but the site itself is more comfortable.',
            'Morning suits visitors who mainly want the castle fabric, a slow look at the walls and towers, or a walk up from town before the heat builds.',
          ],
        },
        {
          heading: 'Late afternoon and sunset: the classic choice',
          paragraphs: [
            'The hour before sunset is the signature Lëkurësi experience: warm light on the stone, the town below beginning to light up and the sea to the west. It is also the busiest period, with the restaurant, parking and the road all at capacity.',
            'Look up the sunset time for Sarandë for your travel date rather than relying on a fixed hour, and arrive early enough to find a position and a way back down.',
          ],
        },
        {
          heading: 'Season and weather trade-offs',
          paragraphs: [
            'July and August bring long evenings and the largest crowds. Spring and autumn are often more comfortable for walking and for combining the castle with Butrint or the promenade; winter can be clear and quiet but services around the hill are more variable.',
            'Wind and low cloud matter more here than rain alone: the panorama is the main attraction and visibility can disappear even on a dry day. Check the forecast for Sarandë and be willing to move the visit by a day.',
          ],
          bullets: [
            'For photographs: late afternoon, with a backup morning slot.',
            'For a quiet look at the ruins: early morning or outside peak summer.',
            'For a meal with a view: reserve with the operator and align it to the sunset time.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What is the best time of day to visit Lëkurësi Castle?',
          a: 'Late afternoon and the hour before sunset give the classic warm light over Sarandë bay, but they are the busiest. Choose early morning if you want fewer people, cooler air and a better look at the masonry.',
        },
        {
          q: 'Which month is best for Lëkurësi Castle?',
          a: 'Late spring and early autumn tend to balance daylight, walking comfort and crowds; July and August have the longest evenings but the busiest road and parking. Winter is quieter, with more variable services around the site.',
        },
        {
          q: 'Is the castle worth visiting on a cloudy day?',
          a: 'The historic structure is still there, but the long-distance view towards Corfu and Butrint can be lost in haze or low cloud. On a dull day, focus on the walls and towers and keep a second slot for a clearer evening.',
        },
      ],
    },
  },
  {
    slug: 'guides/how-long-to-spend',
    group: 'visit',
    priority: 'P1',
    keyword: 'how long to spend at lekuresi castle',
    intent: 'Fit the castle into a half-day or a full Sarandë itinerary.',
    related: ['itineraries/saranda-half-day', 'itineraries/saranda-one-day', 'guides/is-it-worth-visiting', 'guides/best-time-to-visit'],
    sources: ['aktAttraction', 'aktSarande', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'How long to spend',
      cardText: 'From a 20-minute photo stop to a sunset evening with dinner.',
      metaTitle: 'How Long to Spend at Lëkurësi Castle | Visit Lengths',
      metaDescription:
        'How much time do you need at Lëkurësi Castle? Realistic durations for a quick viewpoint stop, a full look at the ruins, sunset and a meal.',
      h1: 'How long should you spend at Lëkurësi Castle?',
      lead:
        'The castle is a compact hilltop ruin, but the time people spend there varies enormously. The view can be taken in quickly; the history, the light and a meal take longer. These are planning ranges, not official timed tickets.',
      sections: [
        {
          heading: 'A short viewpoint stop (about 20-40 minutes)',
          paragraphs: [
            'If you arrive by car or taxi and mainly want the panorama, a brief stop is enough to walk to an open viewpoint, take photographs of the bay and look at the outer walls. This is the version most often included in a passing Sarandë drive.',
            'It works best outside the sunset rush, when parking and the road are less of a constraint.',
          ],
        },
        {
          heading: 'A proper visit (about 1-1.5 hours)',
          paragraphs: [
            'Add time to walk around the perimeter, look at the two round towers and the wall thickness, read the historical background and compare the view towards the town, the bay and Corfu. Uneven stone and steps slow this down, especially for children or older visitors.',
            'This is the recommended range if you want to understand the site rather than only photograph it.',
          ],
        },
        {
          heading: 'Sunset or dinner (2 hours or more)',
          paragraphs: [
            'For sunset, plan to arrive well before the published sunset time, wait through the changing light and leave after dark. With a reserved table at the restaurant, the meal itself sets the pace.',
            'Build in the return journey. A downhill taxi that was not arranged in advance can easily add more waiting than the visit itself.',
          ],
          bullets: [
            'Quick photo stop: 20-40 minutes.',
            'Ruins and viewpoints: 1-1.5 hours.',
            'Sunset with a meal: 2 hours or more plus transport.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is 30 minutes enough at Lëkurësi Castle?',
          a: 'Yes for a panorama and a few photographs if you arrive by car. It is not enough to walk the whole site, read the history or wait for sunset light.',
        },
        {
          q: 'How long should I allow for sunset?',
          a: 'Arrive at least an hour before the sunset time for your date, stay through dusk and allow time for the descent. With dinner, plan two hours or more and book directly with the restaurant.',
        },
        {
          q: 'Can I combine the castle with Butrint in one day?',
          a: 'Yes, but it needs a full day and transport. See our one-day itinerary for a realistic order and the trade-offs between Butrint and Ksamil.',
        },
      ],
    },
  },
  {
    slug: 'guides/visitor-facilities',
    group: 'visit',
    priority: 'P1',
    keyword: 'lekuresi castle facilities',
    intent: 'Know which on-site services exist and which need local confirmation.',
    related: ['guides/accessibility', 'guides/family-visit', 'guides/castle-restaurant', 'guides/parking'],
    sources: ['aktAttraction', 'restaurant', 'sarandaInfo', 'municipality', 'heritage'],
    en: {
      cardTitle: 'Visitor facilities',
      cardText: 'Toilets, shade, surfaces, seating and the limits of what is verified.',
      metaTitle: 'Lëkurësi Castle Visitor Facilities | What to Expect On Site',
      metaDescription:
        'What facilities are at Lëkurësi Castle? A careful, verified overview of surfaces, shade, seating, toilets, food and drink, and what to confirm locally.',
      h1: 'Visitor facilities at Lëkurësi Castle',
      lead:
        'This is an open historic ruin on an exposed hill, not a purpose-built visitor centre. Facilities are limited and partly tied to the restaurant business, so a little preparation makes a large difference to comfort.',
      sections: [
        {
          heading: 'Ground, shade and seating',
          paragraphs: [
            'Expect stone, steps, thresholds and uneven surfaces around the old walls. There is little natural shade on the hilltop and the wind can be strong even on a warm day.',
            'Formal seating and sheltered areas are largely associated with the restaurant terrace rather than the public ruins. Do not assume an indoor waiting area, a ticket desk or a staffed information point.',
          ],
          bullets: [
            'Wear shoes with grip for stone and gravel.',
            'Carry water and sun protection in summer.',
            'Bring a layer in the evening: the exposed hill cools quickly.',
          ],
        },
        {
          heading: 'Food, drink and toilets',
          paragraphs: [
            'The restaurant inside the castle walls is the main on-site source of food, drink and customer toilets. These are commercial facilities for its guests and are not a public service guarantee for every visitor.',
            'We could not independently verify the current availability, location or accessibility of public toilets, drinking-water points or baby-changing facilities, so we do not list them as confirmed. Plan as if none are available outside the restaurant.',
          ],
        },
        {
          heading: 'Accessibility and information',
          paragraphs: [
            'A historic fortress with towers, steps and rough stone cannot be assumed step-free. Our accessibility guide sets out which questions to ask and which claims this guide refuses to make without verification.',
            'For authoritative local information, use Sarandë tourist information and the municipal or heritage authorities listed in the sources below rather than third-party review snippets.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Are there toilets at Lëkurësi Castle?',
          a: 'Toilets are associated with the restaurant operation inside the walls, not verified as a public facility for all visitors. We could not confirm current public toilet access or accessible toilets, so plan accordingly.',
        },
        {
          q: 'Is there shade or shelter at the castle?',
          a: 'Very little on the open hilltop. The restaurant terrace offers shelter to its customers, but the outdoor ruins are exposed to sun and wind. Bring water, a hat and an extra layer for the evening.',
        },
        {
          q: 'Is there a visitor centre or information desk?',
          a: 'We cannot confirm a staffed visitor centre or ticket desk. This is an open ruin; use the sources listed on this page or local tourist information for up-to-date questions.',
        },
      ],
    },
  },
];
