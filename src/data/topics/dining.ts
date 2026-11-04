import type { Topic } from './types';

/** D. Restaurant and reservation information — 4 pages. */
export const DINING_TOPICS: Topic[] = [
  {
    slug: 'guides/castle-restaurant',
    group: 'dining',
    priority: 'P0',
    keyword: 'lekuresi castle restaurant',
    intent: 'Understand what the restaurant is, where it sits and how it differs from the ruins.',
    related: ['guides/restaurant-reservation', 'guides/restaurant-menu', 'guides/sunset-dinner', 'guides/entrance-fee'],
    sources: ['restaurant', 'aktAttraction', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'The castle restaurant',
      cardText: 'A separate business inside the walls, not the castle administration.',
      metaTitle: 'Lëkurësi Castle Restaurant | What It Is & How It Differs',
      metaDescription:
        'Is there a restaurant inside Lëkurësi Castle? Where it sits, how dining differs from visiting the ruins, and where to find the operator current information.',
      h1: 'The restaurant inside Lëkurësi Castle',
      lead:
        'Many searches for "Lëkurësi Castle restaurant" come from people who are not sure whether they are looking at a monument, a viewpoint or a place to eat. It is all three, but they are run differently. This guide explains the relationship and points to the actual operator for anything commercial.',
      sections: [
        {
          heading: 'One hill, two different visits',
          paragraphs: [
            'The historic fortress is a ruined Ottoman-period structure on an open hilltop. Inside part of that enclosure, an independent restaurant operates with a terrace overlooking Sarandë bay. Its trading name is commonly given as Restorant Kalaja e Lëkurësit / Lekursi Castle Restaurant, and it has its own website.',
            'Walking around the outdoor walls and viewpoints is sightseeing. Ordering a meal is a transaction with that business. Neither one automatically grants access to the other, and this website is not the restaurant, its booking page or the castle administration.',
          ],
        },
        {
          heading: 'What can be said about the setting',
          paragraphs: [
            'The attraction of the restaurant is its position: a terrace on the hill with the same elevated panorama that draws sightseers. That makes sunset and evening seating the most requested period and the most likely to require advance contact with the operator.',
            'We describe the setting rather than the current menu, prices, opening hours or service standards. Those change with the season and are only authoritative on the operator own channels.',
          ],
          bullets: [
            'Location: within the castle walls on the Lëkurës hill.',
            'View: Sarandë bay and the town below, subject to weather.',
            'Operator information: use the official restaurant website.',
          ],
        },
        {
          heading: 'Avoiding common mistakes',
          paragraphs: [
            'Do not treat restaurant opening hours as castle opening hours, or a restaurant bill as an entrance fee. Do not assume that the whole terrace is public viewing space, or that a table is available without contacting the business.',
            'If you only want the view, the outdoor areas around the ruins are the right starting point. If you want a seated meal at a specific time, go to the reservation guide and then to the operator.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is there a restaurant inside Lëkurësi Castle?',
          a: 'Yes, an independent restaurant operates within part of the castle walls with a terrace over Sarandë bay. It is a separate business from the historic site and from this guide.',
        },
        {
          q: 'Do I have to eat at the restaurant to visit the castle?',
          a: 'No. Visitors come to the hill for the outdoor ruins and the panorama without dining. A table is only needed if you want restaurant service.',
        },
        {
          q: 'Is this website the official restaurant booking site?',
          a: 'No. This is an independent third-party visitor guide. Menus, prices, hours and bookings must be confirmed on the restaurant own website or directly with its staff.',
        },
      ],
    },
  },
  {
    slug: 'guides/restaurant-reservation',
    group: 'dining',
    priority: 'P0',
    keyword: 'lekuresi castle reservation',
    intent: 'Find out how to book a table and what cannot be booked through this guide.',
    related: ['guides/castle-restaurant', 'guides/restaurant-menu', 'guides/sunset-dinner', 'guides/sunset-view'],
    sources: ['restaurant', 'sarandaInfo', 'maps'],
    en: {
      cardTitle: 'Restaurant reservations',
      cardText: 'How to contact the operator, sunset demand and the limits of this guide.',
      metaTitle: 'Lëkurësi Castle Restaurant Reservation | How to Book a Table',
      metaDescription:
        'How to reserve a table at the Lëkurësi Castle restaurant: who to contact, why sunset is busy, which policies the operator decides, and why this guide cannot book for you.',
      h1: 'Reserving a table at the Lëkurësi Castle restaurant',
      lead:
        'A reservation query usually has a simple answer: contact the restaurant itself. This page explains why that matters, what a booking actually covers, and which policies we will not guess at on the operator behalf.',
      sections: [
        {
          heading: 'Who takes the booking',
          paragraphs: [
            'The restaurant inside the castle walls is an independent business with its own website and contact channels. Table availability, group sizes, deposits, cancellation terms and payment methods are set by that operator.',
            'This guide does not take bookings, hold tables, pass on messages or offer an authorised reservation service. Any site claiming to book "Lëkurësi Castle" on behalf of the monument should be checked carefully.',
          ],
          bullets: [
            'Use the operator website listed in the sources below.',
            'Confirm the date, party size and whether you want a view table.',
            'Ask the operator about deposits, cancellations and payment directly.',
          ],
        },
        {
          heading: 'Sunset demand and timing',
          paragraphs: [
            'Sunset is the most requested seating period because the terrace shares the westward panorama. Find the sunset time for your exact date and ask for a table early enough to be seated before it, rather than naming a generic evening hour.',
            'In peak summer, book further ahead and allow time for the hill road. In the off-season, confirm that the restaurant is open at all on your date instead of assuming a year-round dinner service.',
          ],
        },
        {
          heading: 'Castle visit versus table booking',
          paragraphs: [
            'A restaurant reservation is not a ticket to the castle, and a sightseeing visit does not include a table. If you are organising a group, keep the two plans separate: the outdoor viewpoint for everyone, and any meal arranged with the operator.',
            'We do not publish a phone number, an email address or a booking widget because we cannot verify that a third-party listing is current. The operator website is the authoritative starting point.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need a reservation for the Lëkurësi Castle restaurant?',
          a: 'For sunset or a peak-season evening, contacting the operator in advance is strongly advisable. Whether a booking is formally required is the restaurant decision; check its own channels.',
        },
        {
          q: 'Can I book a table through this website?',
          a: 'No. This is an independent visitor guide and does not handle reservations. Use the restaurant official website or contact its staff directly.',
        },
        {
          q: 'Does a restaurant reservation include castle entry?',
          a: 'The two are separate. A table booking covers restaurant service only, while the outdoor ruins are a sightseeing area. Confirm any access questions with the operator or on site.',
        },
      ],
    },
  },
  {
    slug: 'guides/restaurant-menu',
    group: 'dining',
    priority: 'P1',
    keyword: 'lekuresi castle restaurant menu',
    intent: 'Find a current menu without being shown invented dishes or prices.',
    related: ['guides/castle-restaurant', 'guides/restaurant-reservation', 'guides/sunset-dinner', 'guides/budget-visit'],
    sources: ['restaurant', 'sarandaInfo', 'aktSarande'],
    en: {
      cardTitle: 'Menu & prices',
      cardText: 'Where the current menu lives, and why we do not invent dishes or numbers.',
      metaTitle: 'Lëkurësi Castle Restaurant Menu | Where to Find Current Prices',
      metaDescription:
        'Looking for the Lëkurësi Castle restaurant menu? Where the operator publishes current dishes and prices, and why an independent guide should not fabricate a menu.',
      h1: 'The Lëkurësi Castle restaurant menu',
      lead:
        'A menu is the most perishable information on a travel site. Dishes, prices, service charges and availability change with the season and with the operator, so this page deliberately does not reproduce a list that could mislead you.',
      sections: [
        {
          heading: 'Where to find the current menu',
          paragraphs: [
            'Start with the restaurant own website, which is the first-party source for its current offer. If a dish, a price or a set menu matters to your plans, confirm it again when booking or on arrival.',
            'Third-party reviews, photos of old menus and cached travel articles are useful for a general impression but should never be treated as a current price list.',
          ],
          bullets: [
            'First-party source: the operator website.',
            'Second check: ask when you reserve or arrive.',
            'Avoid relying on undated menu photographs in reviews.',
          ],
        },
        {
          heading: 'What kind of food to expect, carefully stated',
          paragraphs: [
            'The restaurant is a hilltop venue serving visitors to an Albanian coastal destination, so menus in this setting commonly draw on Albanian and Mediterranean cooking. That is a description of the category, not a claim about any specific dish, supplier or price on the current menu.',
            'Dietary requirements, children portions and drinks are operator decisions. Ask directly rather than assuming an option exists.',
          ],
        },
        {
          heading: 'Why we do not publish a price list',
          paragraphs: [
            'Publishing invented dishes or outdated numbers would be worse than publishing nothing, particularly for a site that is not the operator. We also do not state that service is included, that a minimum spend applies or that a fixed-price sunset menu exists.',
            'For a low-cost visit, remember that the outdoor viewpoints and the historic ruins do not require a purchase. Our budget guide covers how to enjoy the hill without a restaurant bill.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Where can I see the Lëkurësi Castle restaurant menu?',
          a: 'Check the restaurant own website, and confirm dishes and prices when you book or arrive. We do not reproduce a menu because we cannot guarantee it is current.',
        },
        {
          q: 'How much does dinner at Lëkurësi Castle cost?',
          a: 'We do not publish prices for the restaurant. Prices, service charges and minimum spends are set by the operator and change over time; confirm them through its official channels.',
        },
        {
          q: 'Is there a fixed sunset dinner menu?',
          a: 'We cannot verify a permanent sunset set menu. Ask the operator about set menus, group menus or special events for your date.',
        },
      ],
    },
  },
  {
    slug: 'guides/sunset-dinner',
    group: 'dining',
    priority: 'P1',
    keyword: 'lekuresi castle sunset dinner',
    intent: 'Align a meal booking with the sunset and plan the return down the hill.',
    related: ['guides/sunset-view', 'guides/restaurant-reservation', 'guides/evening-visit', 'guides/castle-restaurant'],
    sources: ['restaurant', 'maps', 'sarandaInfo', 'aktAttraction'],
    en: {
      cardTitle: 'Sunset dinner',
      cardText: 'Booking times, terrace views, the difference from free viewing and the ride home.',
      metaTitle: 'Sunset Dinner at Lëkurësi Castle | Timing, Terrace & Return',
      metaDescription:
        'Planning a sunset dinner at Lëkurësi Castle: how to align a table with the sunset time, terrace considerations, the difference from free viewpoint access and getting back to Sarandë.',
      h1: 'Planning a sunset dinner at Lëkurësi Castle',
      lead:
        'A meal on the hill at sunset combines the best view in Sarandë with a commercial booking. The two halves need to be planned together: the light waits for nobody, and a table is only useful if you are seated before it happens.',
      sections: [
        {
          heading: 'Work backwards from the sunset time',
          paragraphs: [
            'Look up the sunset time for your exact travel date; it shifts by hours across the year. Ask for a table early enough to be seated, have ordered and be settled well before that time, and allow extra time for the road up the hill in peak season.',
            'Booking for "the evening" without a specific time is a common reason people miss the light from their table.',
          ],
          bullets: [
            'Find the sunset time for your date.',
            'Reserve a seating time at least an hour earlier.',
            'Allow for the hill road and parking or drop-off.',
          ],
        },
        {
          heading: 'Terrace, view and what a booking covers',
          paragraphs: [
            'The restaurant terrace shares the elevated westward outlook over the bay. If a specific table with a clear view matters, say so when booking; we cannot verify a seating plan or promise that any particular table has an uninterrupted panorama.',
            'A meal booking is not a castle ticket, and watching the sunset from the outdoor ruins does not require a purchase. Decide which experience you want before contacting the operator.',
          ],
        },
        {
          heading: 'After dinner: the return journey',
          paragraphs: [
            'You will leave after dark on a hill with uneven stone and an access road that carries traffic. Arrange the taxi or pick-up before you sit down, and keep a light for the walk to the vehicle.',
            'Restaurant closing times, last orders and whether a table can be held late are operator policies. Confirm them directly rather than relying on a third-party guide.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What time should I book a sunset dinner at Lëkurësi Castle?',
          a: 'Find the sunset time for your exact date and ask for a table at least an hour earlier, adding travel time up the hill. This gives you a chance to be seated before the light changes.',
        },
        {
          q: 'Do I need to book dinner to see the sunset from the castle?',
          a: 'No. The outdoor viewpoints around the ruins are open to sightseers. A table is only needed if you want restaurant service and a guaranteed seat.',
        },
        {
          q: 'How do I get back to Sarandë after dinner?',
          a: 'Arrange a taxi or a lift in advance. The descent is dark, the ground is uneven and we cannot verify a late public transport service from the hilltop.',
        },
      ],
    },
  },
];
