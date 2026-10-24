import {
  BURGER,
  GELATO,
  LAMB,
  BURGERTRAY,
  CAKE,
  CHICKEN,
  COCKTAILS,
  CROISSANT,
  DESSERTS,
  EXTERIOR,
  PIZZA,
  SANDWICH,
  SOFTSERVE,
  TERRACE,
  WAFFLES,
  WINDOW,
} from "./photos";

/* Cactus Restaurant — verified facts (Oct 23, 2026):
   address, phones and hours from their Instagram bio + Google listing;
   4.4★ across ~6,700 Google reviews (Wanderlog aggregation, Oct 2026);
   TripAdvisor ranks them #7 of 510 Lagos restaurants; 33.7K IG followers.
   Every photo on this site is theirs (Instagram / their menu site). */

export const business = {
  name: "Cactus Restaurant",
  shortName: "Cactus",
  area: "Victoria Island, Lagos",
  address: "20/24 Ozumba Mbadiwe Ave, Victoria Island, Lagos",
  phoneDisplay: "0807 377 7666",
  phoneHref: "tel:+2348073777666",
  restaurantPhone: "0802 777 7666",
  bakeryPhone: "0818 177 7666",
  hours: "Open daily from 7:30am — 10pm (Fri & Sat till 10:30pm)",
  rating: "4.4",
  reviewCount: "6,700+",
  tripadvisorRank: "#7 of 510 restaurants in Lagos",
  instagramUrl: "https://www.instagram.com/cactuslagos",
  instagramFollowers: "33.7K",
  menuUrl: "https://cactus.menus.ws",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cactus%20Restaurant%20Victoria%20Island%20Lagos",
};

export const marqueeWords = [
  "Jollof rice",
  "Grilled prawns",
  "Club sandwich",
  "Gelato",
  "Red velvet",
  "Lamb chops",
  "Waffles",
  "Pepperoni pizza",
];

export const courses = [
  {
    id: "morning",
    step: "01",
    title: "The morning",
    img: CROISSANT,
    alt: "A croissant resting on a Cactus mug, morning light",
    copy: "The bakery opens the day — croissants, waffles with four dips, breakfast done properly from 7:30 sharp.",
    dishes: ["Belgian waffles", "Fresh croissants", "The full breakfast"],
  },
  {
    id: "grill",
    step: "02",
    title: "The grill",
    img: CHICKEN,
    alt: "A fried chicken platter with slaws and dips",
    copy: "Fried chicken by the platter, lamb chops still steaming off the grill, suya heat in the air.",
    dishes: ["Lamb chops", "Fried chicken platter", "Grilled prawns"],
  },
  {
    id: "mains",
    step: "03",
    title: "The mains",
    img: PIZZA,
    alt: "A pepperoni pizza being shared, cocktail beside it",
    copy: "Pizza worth crossing the Island for, the club sandwich Lagos keeps naming its favourite, jollof done right.",
    dishes: ["Pepperoni pizza", "The club sandwich", "Jollof rice", "Chicken alfredo"],
  },
  {
    id: "sweet",
    step: "04",
    title: "The sweet finish",
    img: CAKE,
    alt: "A caramel drip cake on a stand",
    copy: "And then the bakery takes its bow — drip cakes, red velvet, and the gelato everybody warns you about.",
    dishes: ["Caramel drip cake", "Red velvet", "Gelato", "Strawberry cheesecake"],
  },
];

export const walk = [
  { src: BURGER, label: "The double smash", alt: "A double cheeseburger, close up" },
  { src: SANDWICH, label: "The club — the famous one", alt: "Club sandwich with a mountain of fries" },
  { src: BURGERTRAY, label: "Burger & fries, properly", alt: "Burger and fries on a tray with slaw" },
  { src: COCKTAILS, label: "Something cold", alt: "Three colourful cocktails on the bar" },
  { src: DESSERTS, label: "The dessert display", alt: "Cake slices and desserts on display" },
  { src: SOFTSERVE, label: "Soft-serve o'clock", alt: "A hand holding a soft-serve cone" },
  { src: TERRACE, label: "The terrace, on the water", alt: "The Cactus terrace pergola over the water" },
];

/* Real diner words — short excerpts from public Google / TripAdvisor
   reviews (via Wanderlog), October 2026. */
export const reviews = [
  {
    quote:
      "My favourite go-to place for a perfect club sandwich and chicken salad — amazing breakfast food, generous portions.",
    source: "Google review",
  },
  {
    quote: "All things being considered, this has to be among the finest restaurants in Lagos.",
    source: "Google review",
  },
  {
    quote:
      "Absolutely beautiful, warm ambience — and an outdoor spot leading to the waterfront. How cool.",
    source: "Princess A. — TripAdvisor",
  },
  {
    quote:
      "We always have brunch here after church. The children love the outdoor play area — and the food is very good.",
    source: "Gatiri — TripAdvisor",
  },
  {
    quote: "Step into Cactus and you feel the cosy ambience. The display of desserts is a visual feast.",
    source: "Loh K W — TripAdvisor",
  },
];

export const visitPhotos = [
  { src: TERRACE, alt: "The terrace pergola over the Lagos lagoon" },
  { src: WINDOW, alt: "By the window, among the cactus plants" },
  { src: EXTERIOR, alt: "Cactus Restaurant from the street" },
];

export { WAFFLES };

/* v2 — THE LONG TABLE: the day as full-bleed chapters. */
export const chapters = [
  {
    id: "morning",
    no: "01",
    time: "07:30",
    title: "THE MORNING",
    img: CROISSANT,
    alt: "A croissant resting on a Cactus mug in morning light",
    line: "The bakery opens the day. Waffles with four dips, croissants still warm.",
    dishes: "BELGIAN WAFFLES — CROISSANTS — THE FULL BREAKFAST",
  },
  {
    id: "grill",
    no: "02",
    time: "12:00",
    title: "THE GRILL",
    img: CHICKEN,
    alt: "A fried chicken platter with slaws and dips, built for the table",
    line: "Chicken by the platter. Lamb chops still steaming. Suya heat in the air.",
    dishes: "LAMB CHOPS — FRIED CHICKEN PLATTER — GRILLED PRAWNS",
  },
  {
    id: "mains",
    no: "03",
    time: "15:00",
    title: "THE MAINS",
    img: PIZZA,
    alt: "A pepperoni pizza being shared, cocktail beside it",
    line: "The club sandwich Lagos calls its favourite. Jollof, done properly.",
    dishes: "PEPPERONI PIZZA — THE CLUB — JOLLOF RICE — CHICKEN ALFREDO",
  },
  {
    id: "sweet",
    no: "04",
    time: "18:30",
    title: "THE SWEET FINISH",
    img: CAKE,
    alt: "A caramel drip cake on a stand",
    line: "Then the bakery takes its bow — and the gelato everybody warns you about.",
    dishes: "CARAMEL DRIP CAKE — RED VELVET — GELATO — STRAWBERRY CHEESECAKE",
  },
];

/* The greatest hits — the names Lagos orders by. */
export const hits = [
  { name: "Lamb chops", tag: "off the grill, still steaming", img: LAMB },
  { name: "The club sandwich", tag: "the one reviewers name", img: SANDWICH },
  { name: "Fried chicken platter", tag: "built for the whole table", img: CHICKEN },
  { name: "Pepperoni pizza", tag: "worth crossing the Island for", img: PIZZA },
  { name: "Jollof rice", tag: "done properly", img: null },
  { name: "Grilled prawns", tag: "from the water, to the fire", img: null },
  { name: "Red velvet", tag: "the bakery's signature", img: DESSERTS },
  { name: "Gelato", tag: "the legend — ask anyone", img: GELATO },
];

export const bandPhotos = [CHICKEN, COCKTAILS, CAKE];
