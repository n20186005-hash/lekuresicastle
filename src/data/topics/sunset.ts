import type { Topic } from './types';

/** B. Sunset and photography — 5 pages. */
export const SUNSET_TOPICS: Topic[] = [
  {
    slug: 'guides/sunset-view',
    group: 'sunset',
    priority: 'P0',
    keyword: 'lekuresi castle sunset',
    intent: 'Plan a sunset visit: timing, where to stand, and getting back down.',
    related: ['guides/best-time-to-visit', 'guides/sunset-photography', 'guides/evening-visit', 'guides/castle-restaurant', 'guides/how-to-get-there'],
    sources: ['aktAttraction', 'aktCastle', 'sarandaInfo', 'maps', 'restaurant'],
    en: {
      cardTitle: 'Sunset viewpoint',
      cardText: 'Why the hill works, when to arrive, which viewpoints are open and the return trip.',
      metaTitle: 'Lëkurësi Castle Sunset View | Timing, Viewpoints & Return',
      metaDescription:
        'Plan a Lëkurësi Castle sunset: why the hill overlooks Sarandë bay, how to find the sunset time, where to stand, restaurant terraces and how to get back down.',
      h1: 'Watching the sunset from Lëkurësi Castle',
      lead:
        'Sunset is the reason many people make the climb. Lëkurësi Castle stands on a hill above Sarandë with a wide westward outlook over the town, the bay and the channel towards Corfu, so the last hour of light falls across the water rather than behind the visitor. This page covers the practical side of that experience.',
      sections: [
        {
          heading: 'Why this hill is a sunset viewpoint',
          paragraphs: [
            'The castle occupies high ground above the town, which gives an elevated, unobstructed angle across Sarandë bay. From the ramparts the eye follows the waterfront, the mouth of the bay and the lower coast towards Butrint, with the island of Corfu on the horizon when visibility allows.',
            'Because the sun sets roughly towards the sea side of the panorama, both the stone walls and the water catch warm light in the final hour. That combination of a historic foreground and a sea horizon is what makes the spot distinctive.',
          ],
        },
        {
          heading: 'Getting the timing right',
          paragraphs: [
            'Do not use a fixed clock time. Sunset in Sarandë shifts by hours between June and December, so look up the sunset time for your exact date and work backwards from it.',
            'Arrive early enough to park or be dropped off, walk to a viewpoint and choose a position. The last minutes before sunset are the most crowded, and arriving exactly on time usually means watching from behind other people.',
          ],
          bullets: [
            'Check the sunset time for your travel date.',
            'Arrive roughly an hour earlier in peak season.',
            'Stay for the 20-30 minutes after sunset, when the town lights come on.',
          ],
        },
        {
          heading: 'Where to stand, and the restaurant question',
          paragraphs: [
            'The outdoor ramparts and open ground around the walls offer several different angles: towards the town below, along the bay, or west towards the channel. Walk between them before the light peaks rather than committing to the first spot.',
            'Some terrace areas belong to the restaurant inside the walls. Whether a particular terrace can be used without dining is an operational decision for that business, not a public right; ask the staff or reserve a table if a seated view matters to you. Free standing on the outdoor ruins is a different experience from a reserved table.',
          ],
        },
        {
          heading: 'After the sun goes down',
          paragraphs: [
            'The return is the part most visitors underestimate. Stone, steps and the road edge are harder to read after dark, and we cannot verify continuous lighting across the site. Carry a light and arrange your taxi or pick-up before sunset rather than afterwards.',
            'On a cloudy evening the panorama may vanish but the illuminated town below can still be worthwhile. Decide on the day rather than cancelling on the basis of a single forecast icon.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you watch the sunset from Lëkurësi Castle?',
          a: 'Yes. The hilltop overlooks Sarandë bay towards the west, which is why it is one of the best-known sunset viewpoints in the area. Look up the sunset time for your date and arrive early, especially in summer.',
        },
        {
          q: 'Do I need to eat at the restaurant to see the sunset?',
          a: 'No. The outdoor areas around the ruins offer open views. Some terraces belong to the restaurant and are for its customers; if you want a seated table with service, book directly with the operator.',
        },
        {
          q: 'Is it safe to walk back down after sunset?',
          a: 'It requires preparation rather than being impossible. Surfaces are uneven, lighting cannot be guaranteed and the road carries traffic. Arrange a taxi or a lift in advance and carry a light.',
        },
        {
          q: 'Is sunset still worth it when it is cloudy?',
          a: 'Often yes, but for a different reason: the town lights and the bay in low cloud. The long view towards Corfu may be lost, so treat the distant panorama as a bonus rather than a promise.',
        },
      ],
    },
  },
  {
    slug: 'guides/sunset-photography',
    group: 'sunset',
    priority: 'P1',
    keyword: 'lekuresi castle photography',
    intent: 'Choose compositions, lens direction and exposure strategy for the hilltop.',
    related: ['guides/sunset-view', 'guides/corfu-view', 'guides/saranda-bay-view', 'guides/best-time-to-visit'],
    sources: ['aktAttraction', 'aktCastle', 'maps'],
    en: {
      cardTitle: 'Sunset photography',
      cardText: 'Foregrounds, lens direction, exposure and tripod etiquette on a crowded rampart.',
      metaTitle: 'Lëkurësi Castle Photography | Compositions & Light',
      metaDescription:
        'Photographing Lëkurësi Castle at sunset: how to use the walls as foreground, which way to point the lens, exposure choices and working around crowds.',
      h1: 'Photographing Lëkurësi Castle at sunset',
      lead:
        'The photographic problem here is not finding a view; it is building a frame out of a very wide one. A bare panorama of the bay often looks flat. The walls, towers and rough stone give the scale and foreground that make an image readable.',
      sections: [
        {
          heading: 'Build a foreground instead of shooting the whole bay',
          paragraphs: [
            'Use a section of wall, a tower curve or a stone threshold as the near element and let the town and water fall behind it. Moving a metre either side of a wall changes how much of Sarandë appears in the frame.',
            'A wide lens is useful for the near-360 degree panorama, but a short telephoto is often better for compressing the town, the bay and the Corfu horizon into layers. Both approaches work; choose one deliberately.',
          ],
          bullets: [
            'Wide angle: wall texture in the foreground, sweep of the bay behind.',
            'Short telephoto: compress the waterfront and the island horizon.',
            'Vertical frames: tower silhouettes against the afterglow.',
          ],
        },
        {
          heading: 'Direction of light and exposure',
          paragraphs: [
            'In the last hour the low sun is roughly towards the sea side of the view, so the walls are side-lit or rim-lit while the water is bright. Expose for the sky and lift the stone in editing, or bracket exposures if your camera allows it.',
            'Do not pack up when the disc disappears. The 20-30 minutes of blue hour, when the town lights come on and the sky still holds colour, frequently produce the most balanced images.',
          ],
        },
        {
          heading: 'Working around other visitors',
          paragraphs: [
            'The ramparts are narrow and busy at sunset. A compact setup is more practical than a full tripod in the peak weeks, and stepping aside between frames matters more than holding the single best position.',
            'If you use a tripod, keep it out of walkways on uneven stone. Drones, commercial shoots and events may be restricted; check current rules locally rather than assuming permission.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What is the best lens for Lëkurësi Castle sunset photos?',
          a: 'A wide lens for wall-foreground panoramas and a short telephoto for compressed views of the bay and Corfu. A phone works well if you keep a clear near element in the frame.',
        },
        {
          q: 'When should I arrive for sunset photography?',
          a: 'At least an hour before the sunset time for your date. That gives you time to walk the ramparts, test several compositions and settle before the busiest minutes.',
        },
        {
          q: 'Can I fly a drone at the castle?',
          a: 'We cannot confirm current drone permissions for the site or its surroundings. Check local rules and any signage or restrictions in force on the day before flying.',
        },
      ],
    },
  },
  {
    slug: 'guides/saranda-bay-view',
    group: 'sunset',
    priority: 'P1',
    keyword: 'saranda bay view from castle',
    intent: 'Identify what is actually visible in the panorama below the castle.',
    related: ['guides/corfu-view', 'guides/sunset-view', 'nearby/saranda-promenade', 'history/lekuresi-castle-history'],
    sources: ['aktSarande', 'aktCastle', 'maps', 'sarandaInfo'],
    en: {
      cardTitle: 'Sarandë bay panorama',
      cardText: 'A reading guide to the town, waterfront, harbour and coastline below.',
      metaTitle: 'Sarandë Bay View from Lëkurësi Castle | What You Can See',
      metaDescription:
        'What can you see from Lëkurësi Castle? Identify the Sarandë waterfront, the bay, the harbour, the coast towards Butrint and the hills behind the town.',
      h1: 'Reading the Sarandë bay view from Lëkurësi Castle',
      lead:
        'The view is the castle most reliable attraction: an elevated look across the whole bowl of Sarandë bay. Knowing what you are looking at turns a pretty panorama into a useful orientation for the rest of your stay.',
      sections: [
        {
          heading: 'The town and the waterfront',
          paragraphs: [
            'Directly below, Sarandë climbs from the waterfront into a bowl of hills. The promenade and the curve of the bay are easy to pick out, and from above you can see how the town wraps around the shore rather than facing an open sea horizon.',
            'This is a good place to orient yourself before walking the promenade: identify the stretch you want, then use the map to plan the descent.',
          ],
        },
        {
          heading: 'The water, the harbour and the southern coast',
          paragraphs: [
            'The bay opens towards the channel that separates the Albanian coast from Corfu. Following the coastline south, the low land and the direction of Butrint and Lake Butrint are visible in clear conditions, though individual monuments cannot be distinguished from this distance.',
            'Ferries and small boats are seasonal and their movements are not a fixture of the view. Treat any vessel traffic as incidental, not as something to plan around.',
          ],
        },
        {
          heading: 'Visibility, haze and time of day',
          paragraphs: [
            'Summer haze, low cloud and strong wind can flatten the distant coastline even on a dry day. Morning tends to give crisper long-distance definition; late afternoon gives warmer light but softer distance.',
            'Because the panorama depends on weather, we do not promise a guaranteed view of any specific landmark from the hill. Check the forecast and, if possible, keep a second evening free.',
          ],
          bullets: [
            'Near: town, waterfront and the curve of the bay.',
            'Middle: the harbour and the channel.',
            'Far: the coast towards Butrint and the Corfu horizon, visibility permitting.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What can you see from Lëkurësi Castle?',
          a: 'Sarandë town and its waterfront directly below, the bay and harbour, the coastline leading south towards Butrint, and in clear weather the island of Corfu on the horizon.',
        },
        {
          q: 'Can you see Butrint from the castle?',
          a: 'You can see the general direction of the southern coast and the low land towards Butrint, but not the archaeological site itself. Plan a separate visit for Butrint National Park.',
        },
        {
          q: 'Is the panorama really 360 degrees?',
          a: 'The hilltop offers a very wide sweep covering the town, the bay and the inland hills, but walls, vegetation and the restaurant structures interrupt parts of the circle. Walk around the perimeter for the full effect.',
        },
      ],
    },
  },
  {
    slug: 'guides/corfu-view',
    group: 'sunset',
    priority: 'P1',
    keyword: 'corfu view from lekuresi castle',
    intent: 'Understand the Corfu sightline, its direction and why visibility varies.',
    related: ['guides/saranda-bay-view', 'guides/sunset-view', 'guides/sunset-photography', 'history/ottoman-fortress'],
    sources: ['aktSarande', 'aktCastle', 'maps', 'sarandaInfo'],
    en: {
      cardTitle: 'View towards Corfu',
      cardText: 'Where to look across the channel and why the island is not always visible.',
      metaTitle: 'Corfu View from Lëkurësi Castle | Direction & Visibility',
      metaDescription:
        'Can you see Corfu from Lëkurësi Castle? Where the island sits on the horizon, how haze and weather affect the view, and the historical link to the channel.',
      h1: 'Looking towards Corfu from Lëkurësi Castle',
      lead:
        'Corfu lies across the channel from the Sarandë coast, close enough to shape the history of this hill and far enough that the view depends entirely on the atmosphere. This page explains the sightline without promising a postcard on every visit.',
      sections: [
        {
          heading: 'Where the island sits in the panorama',
          paragraphs: [
            'From the ramparts, look beyond the mouth of the bay across the water to the west and north-west. In clear conditions the long ridge of Corfu sits on the horizon rather than filling the frame; a short telephoto or a phone zoom helps separate land from haze.',
            'If you cannot pick it out, ask someone on site to point it out rather than assuming the wrong headland is the island. Nearby coastal hills and the low land towards Butrint are easier to confuse with a distant island than expected.',
          ],
        },
        {
          heading: 'When visibility is best',
          paragraphs: [
            'Clear, dry air after wind or rain usually gives the sharpest long-distance definition. Summer heat haze, low cloud and sea mist can erase the horizon even when the town below looks perfectly clear.',
            'Late afternoon gives golden light but often softer distance. If the island matters to you, try a morning visit as well and compare.',
          ],
          bullets: [
            'Look west to north-west beyond the mouth of the bay.',
            'Use a zoom to separate the ridge from haze.',
            'Treat the distant view as weather-dependent, not guaranteed.',
          ],
        },
        {
          heading: 'Why Corfu matters to this castle',
          paragraphs: [
            'The channel was not just scenery. Historical accounts of the fortress connect its position to controlling the harbour of Sarandë and the routes towards Butrint, within a region where sea traffic towards Corfu was strategically important.',
            'Our history pages set out what the national tourism sources actually say about the building period and its defensive role; separate that documented background from later local stories.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you see Corfu from Lëkurësi Castle?',
          a: 'Yes, in clear weather the island can be seen across the channel towards the west and north-west. Haze, low cloud and summer heat often hide it, so it is never guaranteed.',
        },
        {
          q: 'How far is Corfu from Lëkurësi Castle?',
          a: 'The island lies across the Corfu Channel from this part of the Albanian coast. We do not publish a precise distance from the castle because vantage-point figures vary between sources; use a map for an exact measurement.',
        },
        {
          q: 'Which direction should I point my camera for Corfu?',
          a: 'Beyond the mouth of Sarandë bay, roughly west to north-west. A short telephoto or phone zoom helps pick out the island ridge from the coastal hills in front of it.',
        },
      ],
    },
  },
  {
    slug: 'guides/evening-visit',
    group: 'sunset',
    priority: 'P1',
    keyword: 'lekuresi castle evening visit',
    intent: 'Plan the practical and safety side of visiting after dark.',
    related: ['guides/sunset-view', 'guides/how-to-get-there', 'guides/visitor-facilities', 'guides/solo-travelers'],
    sources: ['aktAttraction', 'restaurant', 'sarandaInfo', 'maps', 'municipality'],
    en: {
      cardTitle: 'Evening visit',
      cardText: 'Light, surfaces, transport home and limits on what stays open after dark.',
      metaTitle: 'Visiting Lëkurësi Castle in the Evening | Safety & Transport',
      metaDescription:
        'What to expect on an evening visit to Lëkurësi Castle: the town lights, unlit stone, arranging a return taxi and which facilities may not be available.',
      h1: 'Visiting Lëkurësi Castle in the evening',
      lead:
        'After sunset the experience changes character. The historic fabric becomes a silhouette, the town below turns into a field of lights, and the practical questions shift from "where is the best view" to "how do I get down safely".',
      sections: [
        {
          heading: 'What the evening view is actually like',
          paragraphs: [
            'The strongest reason to stay after dark is the illuminated town and the curve of the bay below you, seen from above. The stone walls catch some reflected light near the restaurant, but the ruins themselves are not a floodlit monument we can guarantee.',
            'Photographers should plan for long exposures or a steady hand; visitors who mainly want to inspect masonry will be disappointed after dark.',
          ],
        },
        {
          heading: 'Surfaces, lighting and supervision',
          paragraphs: [
            'The site has steps, thresholds, uneven stone and open edges. We cannot verify continuous lighting across the whole hilltop or supervision of every area after dark, so move slowly and keep to routes you saw in daylight.',
            'Children need close attention near walls and drops. A phone torch is useful, but it is not a substitute for a pre-planned route.',
          ],
          bullets: [
            'Carry a light for the walk to your transport.',
            'Wear shoes with grip; stone can be damp or dusty.',
            'Avoid exploring unfamiliar corners of the ruins after dark.',
          ],
        },
        {
          heading: 'Getting back and what remains open',
          paragraphs: [
            'Arrange the return before you go up: agree a pick-up time with a taxi, or keep your own car within an easy walk of the hilltop. Do not rely on finding a ride at the summit late in the evening.',
            'The restaurant keeps its own schedule and we cannot confirm that any public facility, kiosk or information point operates after dark. Check the operator directly if you plan to dine, and confirm local access arrangements in the off-season.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you visit Lëkurësi Castle at night?',
          a: 'Evening visits are a common part of the sunset experience, but we cannot confirm a guaranteed 24-hour opening or after-dark access to every area. Check locally, keep to the open viewpoints and arrange transport home in advance.',
        },
        {
          q: 'Is Lëkurësi Castle lit up at night?',
          a: 'The town below is brightly lit and there is light around the restaurant, but we cannot verify consistent floodlighting of the ruins. Do not plan a night visit around a guaranteed illumination of the walls.',
        },
        {
          q: 'How do I get back to Sarandë after an evening visit?',
          a: 'The reliable options are a pre-arranged taxi, your own vehicle or a tour with its own transport. Do not assume a late bus or an available taxi at the hilltop; confirm with local tourist information or your accommodation.',
        },
      ],
    },
  },
];
