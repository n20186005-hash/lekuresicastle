import type { Topic } from './types';

/** F. Different visitor needs — 6 pages. */
export const AUDIENCE_TOPICS: Topic[] = [
  {
    slug: 'guides/family-visit',
    group: 'audiences',
    priority: 'P1',
    keyword: 'lekuresi castle with kids',
    intent: 'Plan a safe family visit around walls, heights and limited facilities.',
    related: ['guides/visitor-facilities', 'guides/accessibility', 'guides/how-long-to-spend', 'guides/parking'],
    sources: ['aktAttraction', 'sarandaInfo', 'maps', 'restaurant'],
    en: {
      cardTitle: 'Visiting with children',
      cardText: 'Walls, drops, heat, toilets and how long younger visitors last.',
      metaTitle: 'Lëkurësi Castle with Kids | Family Visit Guide',
      metaDescription:
        'Visiting Lëkurësi Castle with children: open walls and drops, uneven stone, shade, toilets, a sensible visit length and the sunset return.',
      h1: 'Visiting Lëkurësi Castle with children',
      lead:
        'Children often enjoy the castle because it is a real ruin with walls to explore and a huge view. It is also an unprotected hilltop with drops, steps and very little shade, so the visit needs a little more planning than a playground stop.',
      sections: [
        {
          heading: 'Safety around the ruins',
          paragraphs: [
            'The site has open wall sections, uneven stone, steps and edges without modern barriers in every place. Keep young children close, avoid climbing on the masonry and set a clear meeting point before letting older ones wander.',
            'After dark the same ground is harder to read. If you stay for sunset, keep the family together on the way back to the vehicle and carry a light.',
          ],
          bullets: [
            'Hold hands near walls and open edges.',
            'Choose shoes with grip rather than sandals.',
            'Agree a meeting point in case the group splits.',
          ],
        },
        {
          heading: 'Heat, water and facilities',
          paragraphs: [
            'There is little shade on the hill and the wind can be deceptive in summer. Bring water, hats and sun protection, and avoid the midday climb with small children.',
            'We cannot verify public toilets, baby-changing facilities or drinking-water points outside the restaurant, and restaurant facilities are for its customers. Plan a comfort stop in town before going up.',
          ],
        },
        {
          heading: 'How long and when to go',
          paragraphs: [
            'For most families, 45-90 minutes is enough: a walk around the walls, a lookout stop and time for photographs. A full sunset wait plus a meal is a much longer outing for younger children.',
            'Going up earlier in the day is usually easier than the crowded sunset hour, when parking, the road and the viewpoints are busiest. If a seated break matters, arrange it with the restaurant operator in advance.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle suitable for children?',
          a: 'Yes with supervision. It is an open ruin with uneven stone, steps and unprotected edges, so keep children close and avoid climbing on the walls.',
        },
        {
          q: 'Are there baby-changing facilities at the castle?',
          a: 'We could not verify any public baby-changing or toilet facilities outside the restaurant. Plan a comfort stop in Sarandë before the climb.',
        },
        {
          q: 'How long should a family spend at the castle?',
          a: 'Around 45-90 minutes suits most families. Add time only if you plan to wait for sunset or eat at the restaurant, and arrange the return transport first.',
        },
      ],
    },
  },
  {
    slug: 'guides/senior-visitors',
    group: 'audiences',
    priority: 'P2',
    keyword: 'lekuresi castle for seniors',
    intent: 'Assess walking distance, steps, rest points and vehicle access.',
    related: ['guides/accessibility', 'guides/visitor-facilities', 'guides/how-to-get-there', 'guides/how-long-to-spend'],
    sources: ['aktAttraction', 'sarandaInfo', 'maps', 'municipality'],
    en: {
      cardTitle: 'Senior visitors',
      cardText: 'Steps, surfaces, how close a car can get and where to rest.',
      metaTitle: 'Lëkurësi Castle for Seniors | Steps, Surfaces & Rest',
      metaDescription:
        'A practical guide for older visitors to Lëkurësi Castle: walking distance, uneven ground, vehicle drop-off, seating and a comfortable visit length.',
      h1: 'Lëkurësi Castle for older visitors',
      lead:
        'The view is accessible to almost everyone who can reach the hilltop, but the historic ground itself is not built for easy movement. This page sets out the specific obstacles so a visit can be planned around them rather than discovered on arrival.',
      sections: [
        {
          heading: 'Getting to the top without the climb',
          paragraphs: [
            'The most important decision is transport. A car or taxi removes the steep uphill road from the town and lets you start at the hilltop rather than halfway up. Agree where the driver will wait and how long they will stay.',
            'Where exactly a vehicle can stop depends on congestion and any temporary restrictions on the day. Ask your driver to get as close as is permitted and expect a final section on foot.',
          ],
        },
        {
          heading: 'Surfaces, steps and rest points',
          paragraphs: [
            'Inside the enclosure expect stone, gravel, thresholds, steps and changes in level. A walking pole or a companion arm makes a real difference on the rougher sections.',
            'We cannot verify public benches or shaded resting places around the ruins. Seating is largely associated with the restaurant terrace, so plan short circuits with breaks rather than one long loop.',
          ],
          bullets: [
            'Use a taxi or car for the climb.',
            'Wear sturdy, flat shoes.',
            'Plan short loops with rest breaks.',
          ],
        },
        {
          heading: 'Timing the visit',
          paragraphs: [
            'A morning or early-afternoon visit avoids crowds, heat and the after-dark descent. If sunset is the goal, arrive early, choose one comfortable viewpoint and leave before the ground becomes hard to read.',
            'For anyone with limited mobility or a wheelchair, read the accessibility guide before committing; we do not claim step-free access to the ruins.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you drive up to Lëkurësi Castle?',
          a: 'Yes, vehicles reach the hilltop area by the paved road, which is how most visitors with limited walking ability arrive. Exactly how close you can be dropped off depends on congestion and any restrictions that day.',
        },
        {
          q: 'Are there many steps at Lëkurësi Castle?',
          a: 'The historic ground includes steps, thresholds and uneven stone, and parts of the perimeter are rough. It is not a level, paved attraction.',
        },
        {
          q: 'Are there places to sit at the castle?',
          a: 'We cannot verify public benches or shaded rest areas around the ruins. Seating is mainly associated with the restaurant terrace, so plan a shorter visit with breaks.',
        },
      ],
    },
  },
  {
    slug: 'guides/accessibility',
    group: 'audiences',
    priority: 'P1',
    keyword: 'lekuresi castle wheelchair access',
    intent: 'Get an honest, non-guaranteed account of step-free access.',
    related: ['guides/visitor-facilities', 'guides/senior-visitors', 'guides/parking', 'guides/family-visit'],
    sources: ['aktAttraction', 'heritage', 'municipality', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'Accessibility',
      cardText: 'Which areas might be reachable, which are not, and what we refuse to promise.',
      metaTitle: 'Lëkurësi Castle Wheelchair Access | An Honest Assessment',
      metaDescription:
        'Is Lëkurësi Castle wheelchair accessible? A careful account of the hilltop approach, uneven stone, steps, toilets and what to confirm before travelling.',
      h1: 'Accessibility at Lëkurësi Castle',
      lead:
        'This is a ruined 16th-century fortress on an exposed hill. We cannot certify step-free routes, accessible toilets or barrier-free viewing areas, and we will not imply that they exist. What follows is a description of the obstacles and the questions to ask before you go.',
      sections: [
        {
          heading: 'The approach and drop-off',
          paragraphs: [
            'The hill is reached by a paved but winding road. A vehicle can bring you to the hilltop area, which is the only realistic approach for visitors who cannot manage a sustained uphill walk.',
            'From where a vehicle stops, the remaining route to a viewpoint may include rough stone, gravel, a slope or a threshold. We could not verify a continuous, marked step-free path from the parking area to any specific viewpoint.',
          ],
        },
        {
          heading: 'Inside the ruins',
          paragraphs: [
            'The historic fabric includes steps, uneven masonry, narrow passages and changes in level. Tower areas and parts of the wall perimeter should be considered not accessible without assistance.',
            'Some outdoor viewpoints near the approach may be reachable with help, but this depends on the exact route, the surface condition on the day and the equipment used. Confirm with a companion who can check the ground first.',
          ],
          bullets: [
            'Not verified: step-free route to a viewpoint.',
            'Not verified: accessible toilet on site.',
            'Not verified: handrails, ramps or designated accessible parking bays.',
          ],
        },
        {
          heading: 'How to get a reliable answer',
          paragraphs: [
            'Because access changes with events, works and weather, the only reliable answer comes from the site or local authorities on your travel date. Contact the municipality, the heritage authority or Sarandë tourist information with your specific requirements.',
            'If a barrier-free experience is essential, the level Sarandë waterfront is a more dependable alternative for the panorama of the bay; see our comparison of the two viewpoints.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle wheelchair accessible?',
          a: 'We cannot confirm wheelchair access to the ruins. A vehicle can reach the hilltop, but the historic ground has steps, thresholds and uneven stone, and we could not verify a step-free route, ramps or an accessible toilet.',
        },
        {
          q: 'Is there an accessible toilet at the castle?',
          a: 'We could not verify one. Toilets appear to be associated with the restaurant operation and are not confirmed as accessible public facilities; plan accordingly.',
        },
        {
          q: 'Is there accessible parking at Lëkurësi Castle?',
          a: 'We could not verify designated accessible bays. Vehicles do stop near the hilltop, but space is tight around sunset. Ask your driver about a drop-off and check arrangements locally.',
        },
      ],
    },
  },
  {
    slug: 'guides/budget-visit',
    group: 'audiences',
    priority: 'P1',
    keyword: 'free things to do saranda castle',
    intent: 'Enjoy the hill without assuming unverified free services.',
    related: ['guides/entrance-fee', 'guides/how-to-get-there', 'guides/visitor-facilities', 'nearby/saranda-promenade'],
    sources: ['aktAttraction', 'aktSarande', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'Visiting on a budget',
      cardText: 'What costs nothing by nature, and which "free" claims need checking.',
      metaTitle: 'Free Things to Do at Lëkurësi Castle | Budget Visit',
      metaDescription:
        'How to enjoy Lëkurësi Castle on a budget: the free outdoor viewpoints, walking instead of taxis, bringing your own water and the costs to check.',
      h1: 'Visiting Lëkurësi Castle on a budget',
      lead:
        'The best thing about this hill is also the cheapest: the panorama. A low-cost visit is entirely realistic, but it helps to separate things that are free by nature from services that have a price set by someone else.',
      sections: [
        {
          heading: 'What does not require a purchase',
          paragraphs: [
            'Looking at the bay from the outdoor areas, walking around the surviving walls and photographing the town below are sightseeing activities, not purchases. Our main guide describes the castle grounds as free to enter, though we could not verify a current official tariff or access notice.',
            'The waterfront promenade below is another free, level way to enjoy the same bay from a different angle, and it pairs naturally with the hill.',
          ],
        },
        {
          heading: 'The costs that do exist',
          paragraphs: [
            'Transport is the main real expense: a taxi or hired car up the hill, or the time and effort of walking. Restaurant meals, drinks and any guided excursion are separately priced by their operators.',
            'We do not publish current taxi fares, parking charges, menu prices or tour prices. Ask locally on the day rather than budgeting around a number from an undated guide.',
          ],
          bullets: [
            'Bring water and sun protection from town.',
            'Walk up if you are fit and the weather is mild.',
            'Split a taxi with other travellers for a sunset visit.',
          ],
        },
        {
          heading: 'Avoiding false economies',
          paragraphs: [
            'Walking down after dark to save a fare is a poor trade on an unlit, uneven road. If you stay for sunset, keep the return transport in the budget.',
            'Also avoid assuming that free entry includes the restaurant terrace, a guided explanation or a guaranteed parking space. Those are separate services.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is visiting Lëkurësi Castle free?',
          a: 'The outdoor grounds are commonly described as free to enter, but we could not verify a current official tariff or access notice. The view and the ruins cost nothing by nature; restaurant meals, tours and transport are separate.',
        },
        {
          q: 'What is the cheapest way to get to the castle?',
          a: 'Walking up from Sarandë is free but it is a sustained uphill road with little shade. For a sunset visit, a shared taxi is usually the better value once you include the return after dark.',
        },
        {
          q: 'Do I need to buy anything to see the view?',
          a: 'No. The outdoor viewpoints are part of a sightseeing visit. A restaurant table is optional and is charged by the operator.',
        },
      ],
    },
  },
  {
    slug: 'guides/solo-travelers',
    group: 'audiences',
    priority: 'P2',
    keyword: 'visiting lekuresi castle alone',
    intent: 'Handle the return trip, evening safety and navigation on your own.',
    related: ['guides/evening-visit', 'guides/how-to-get-there', 'guides/sunset-view', 'guides/is-it-worth-visiting'],
    sources: ['maps', 'sarandaInfo', 'aktAttraction', 'municipality'],
    en: {
      cardTitle: 'Solo travellers',
      cardText: 'The descent, phone navigation and what to arrange before sunset.',
      metaTitle: 'Visiting Lëkurësi Castle Alone | Solo Traveller Tips',
      metaDescription:
        'Tips for visiting Lëkurësi Castle alone: arranging the return down the hill, evening safety, phone navigation and choosing a time with other visitors around.',
      h1: 'Visiting Lëkurësi Castle on your own',
      lead:
        'The castle is a straightforward solo stop, and the hilltop is rarely empty at the popular hours. The one part that needs real planning is the return: you are on a hill above town, after dark, on uneven ground.',
      sections: [
        {
          heading: 'Sort the return before you go up',
          paragraphs: [
            'Agree a pick-up time and place with a taxi driver, or keep your own vehicle within an easy walk. Do not assume a ride will be waiting at the summit after sunset.',
            'If you walk down, use the same road you used to come up, carry a light and avoid shortcuts across unlit, rough ground.',
          ],
        },
        {
          heading: 'Phone, navigation and timing',
          paragraphs: [
            'Save the map link offline or as a pinned place before leaving your accommodation, so you can find the road back without depending on a live connection. Keep enough battery for the return and for a call.',
            'Choosing a busier time of day is not a compromise on the experience: late afternoon gives you the best light and other visitors nearby. A very late, quiet visit offers little extra beyond the town lights.',
          ],
          bullets: [
            'Pin the castle and your accommodation on a map.',
            'Carry a light and a charged phone.',
            'Tell someone your plan for an evening visit.',
          ],
        },
        {
          heading: 'If you want company or context',
          paragraphs: [
            'Guided excursions that include the castle are sold by third-party operators; check what is actually included before paying. For historical background, the sources on our history pages are free and can be read before you go.',
            'This guide is independent and does not arrange meet-ups, guides or transport.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is it safe to visit Lëkurësi Castle alone at sunset?',
          a: 'The sunset hour is usually the busiest time on the hill. The main risk is the descent afterwards: arrange transport in advance, carry a light and keep to the road you know.',
        },
        {
          q: 'How do I get back to Sarandë alone after dark?',
          a: 'A pre-arranged taxi or your own vehicle is the reliable option. We cannot verify a late public bus from the hilltop, so do not count on finding one.',
        },
        {
          q: 'Will I have phone signal at the castle?',
          a: 'We cannot guarantee coverage across the hilltop. Save your map and pick-up details offline before you set out.',
        },
      ],
    },
  },
  {
    slug: 'guides/rainy-day-visit',
    group: 'audiences',
    priority: 'P2',
    keyword: 'lekuresi castle rainy day',
    intent: 'Decide whether a wet or low-visibility day is worth the climb.',
    related: ['guides/best-time-to-visit', 'guides/visitor-facilities', 'guides/evening-visit', 'itineraries/saranda-half-day'],
    sources: ['aktAttraction', 'aktSarande', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'Rainy day visit',
      cardText: 'Slippery stone, lost visibility and what to do instead.',
      metaTitle: 'Lëkurësi Castle in the Rain | Is It Worth Going?',
      metaDescription:
        'Should you visit Lëkurësi Castle on a rainy or cloudy day? Wet stone, visibility, shelter, a shorter route and indoor-friendly alternatives in Sarandë.',
      h1: 'Visiting Lëkurësi Castle in rain or low cloud',
      lead:
        'Rain changes this site more than it changes a museum. The attraction is an exposed hilltop panorama, so both the ground underfoot and the reason for coming are affected. This page helps you decide whether to go up, postpone, or change the plan.',
      sections: [
        {
          heading: 'What rain does to the site',
          paragraphs: [
            'Stone, gravel and old thresholds become slippery, and there is very little shelter across the open ruins. Wind on the exposed hill can make an umbrella useless.',
            'Low cloud and haze can remove the long view towards Corfu and the southern coast even when it is not actually raining. A dry but overcast day can be just as disappointing for the panorama.',
          ],
        },
        {
          heading: 'If you still go',
          paragraphs: [
            'Shorten the visit, wear shoes with grip and keep to the routes you can see clearly. Focus on the walls and towers at close range rather than trying to wait out a gap in the cloud.',
            'Arrange transport for both directions: a wet uphill walk and a wet descent are a poor combination, especially after sunset.',
          ],
          bullets: [
            'Check the forecast for Sarandë, including cloud and wind.',
            'Wear grippy shoes and a waterproof layer rather than carrying an umbrella.',
            'Keep a second clear slot in your itinerary if you can.',
          ],
        },
        {
          heading: 'Alternatives nearby',
          paragraphs: [
            'On a wet day, the level waterfront and the town below are easier to manage, and a longer indoor or archaeological visit such as Butrint may be a better use of the hours. Check Butrint current opening arrangements before travelling.',
            'Our half-day itinerary can be run in reverse: keep the castle for a clearer morning and use the rainy afternoon for the town.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Lëkurësi Castle worth visiting in the rain?',
          a: 'Only if you are mainly interested in the masonry at close range. The panorama can disappear in low cloud and the stone becomes slippery. If you have a flexible schedule, wait for a clearer slot.',
        },
        {
          q: 'Is there shelter at the castle when it rains?',
          a: 'Very little across the open ruins. The restaurant terrace offers shelter to its customers, but we cannot verify public shelter for all visitors.',
        },
        {
          q: 'What can I do near Lëkurësi Castle on a rainy day?',
          a: 'The level Sarandë waterfront is easier in wet weather, and Butrint is a common alternative for a longer visit. Check current opening information for any managed site before setting out.',
        },
      ],
    },
  },
];
