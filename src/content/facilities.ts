export interface AmenityItem {
  id: string;
  name: string;
  title: string;
  meaning: string;
  category: string;
  description: string;
  image: string;
}

export interface NearbyExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const RESORT_AMENITIES: AmenityItem[] = [
  {
    id: "thehrav-spa",
    name: "Thehrav",
    title: "Thehrav — The Spa",
    meaning: "A sense of stillness and slowing down",
    category: "Spa & Wellness",
    description:
      "Thehrav, meaning a sense of stillness and slowing down, invites you to take a pause from everyday routines. Make time for relaxation and enjoy a more restful side of your Pench getaway. Whether you're unwinding after a day of exploration or simply looking for a moment to yourself, let relaxation become part of your stay.",
    image: "/images/amenities/thehrav-spa.jpg",
  },
  {
    id: "neel-pool",
    name: "Neel",
    title: "Neel — Spacious Swimming Pool",
    meaning: "Blue, inspired by a waterhole in the wild",
    category: "Swimming Pool",
    description:
      "Neel, meaning blue, is the proposed name for the resort's swimming pool, inspired by the idea of a waterhole in the wild. Take a refreshing break, enjoy some leisure time and make the most of a relaxed afternoon at the resort.",
    image: "/images/amenities/neel-pool.jpg",
  },
  {
    id: "bargad-restaurant",
    name: "Bargad",
    title: "Bargad — Restaurant",
    meaning: "The banyan tree as a place of gathering",
    category: "Dining",
    description:
      "Good food is an essential part of a memorable holiday. At Bargad, the proposed name for the resort restaurant, enjoy a relaxed dining experience and take time to savour the moments shared around the table. Inspired by the banyan tree as a place of gathering, Bargad reflects the warmth of coming together over a meal.",
    image: "/images/amenities/bargad-dining.jpg",
  },
  {
    id: "abha-salon",
    name: "Abha",
    title: "Abha — The Salon",
    meaning: "Glow, inspired by the radiance of a tigress in evening light",
    category: "Salon & Grooming",
    description:
      "Abha, meaning glow, is the proposed name for the resort salon, inspired by the warm radiance of a tigress's coat in the evening light. Make time for personal care and enjoy a little extra relaxation during your getaway.",
    image: "/images/amenities/abha-salon.jpg",
  },
  {
    id: "chhalaang-gym",
    name: "Chhalaang",
    title: "Chhalaang — Gym Area",
    meaning: "A leap, inspired by the strength of a tiger in motion",
    category: "Fitness & Gym",
    description:
      "Chhalaang, meaning a leap, is the proposed name for the resort gym, inspired by the strength and energy of a tiger in motion. For guests who like to maintain their fitness routine while travelling, the gym can be part of a stay that balances relaxation with activity.",
    image: "/images/amenities/chhalaang-gym.jpg",
  },
];

export const NEARBY_EXPERIENCES: NearbyExperienceItem[] = [
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    description:
      "A visit to Pench is an opportunity to explore a landscape known for its rich wildlife and forest surroundings. A jungle safari offers the chance to experience this remarkable natural environment and, with luck, encounter some of its wild inhabitants. From the thrill of the forest to the stories shared by knowledgeable guides, every safari brings its own sense of anticipation.",
    image: "/images/gallery/safari-jeep.jpg",
  },
  {
    id: "kohka-lake",
    title: "Kohka Lake Adventure Camp",
    description:
      "Add an outdoor adventure to your Pench itinerary with a visit to Kohka Lake Adventure Camp. Discover a different side of the region, enjoy time in the outdoors and make room for experiences beyond the resort.",
    image: "/images/gallery/forest-sunset.jpg",
  },
  {
    id: "nature-walks",
    title: "Nature Walks",
    description:
      "Sometimes, the best way to experience nature is to take your time. Nature walks offer an opportunity to observe the surroundings at a gentler pace, appreciate the landscape and notice the small details that make the natural world fascinating.",
    image: "/images/property/bamboo-path.jpg",
  },
  {
    id: "birdwatching",
    title: "Birdwatching",
    description:
      "Pench's natural surroundings offer opportunities to appreciate birdlife and observe the fascinating variety of birds found in the region. Bring your curiosity, take your time and enjoy the simple pleasure of noticing the colours, calls and movements of the birds around you.",
    image: "/images/gallery/wildlife-deer.jpg",
  },
  {
    id: "pottery",
    title: "Pottery",
    description:
      "Take a break from the usual holiday routine and discover the creative side of your getaway through pottery. Experience the charm of working with clay and exploring a traditional craft at a slower pace.",
    image: "/images/property/morning-deck.jpg",
  },
];

// Backward compatibility for existing imports in home
export const FACILITIES_DATA = RESORT_AMENITIES.map((a) => ({
  id: a.id,
  name: a.name,
  meaning: a.meaning,
  category: a.category,
  tagline: a.meaning,
  description: [a.description],
  locationOnProperty: "On Resort Grounds",
  image: a.image,
  highlights: [a.meaning],
  approvalStatus: "approved" as const,
}));
