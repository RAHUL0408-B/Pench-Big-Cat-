import { OfferItem } from "@/types/resort";

export const OFFERS_DATA: OfferItem[] = [
  {
    id: "tiger-safari-expedition",
    slug: "tiger-safari-expedition",
    title: "The Call of the Jungle: 3-Night Tiger Safari Expedition",
    tagline: "An immersive naturalist journey through the territories of Jugni and her family.",
    duration: "3 Nights / 4 Days",
    description:
      "A comprehensive immersion designed for avid wildlife enthusiasts and first-time safari travelers alike. Includes curated game drives in exclusive open 4x4 vehicles led by senior resident naturalists, private bush breakfasts, and fireside wildlife discussions.",
    inclusions: [
      "Luxury villa or cottage stay of your choice",
      "All artisanal daily meals at Bargad restaurant",
      "Assistance with authorized government safari permit bookings (subject to forest department availability)",
      "Dedicated resident naturalist accompanying all game drives",
      "Curated bush breakfast hamper in the forest buffer",
      "Complimentary access to Neel pool & Chhalaang fitness pavilion",
    ],
    exclusions: [
      "Government safari entry fees and vehicle camera taxes (paid directly at gate)",
      "Discretionary gratuities for guides and drivers",
      "Personal spa therapies at Thehrav",
      "Airfare and intercity airport road transfers (can be arranged on request)",
    ],
    validity: "October 1 – June 30 (Operational season of Pench core gates)",
    idealFor: "Couples, small families, and avid wildlife enthusiasts",
    image: "/images/offers/safari-expedition.jpg",
    approvalStatus: "pending",
  },
  {
    id: "wild-romance",
    slug: "wild-romance",
    title: "Wild Romance: The Couples' Forest Sanctuary Retreat",
    tagline: "Seclusion, starlit dining, and rejuvenation in our private-pool Swastik sanctuary.",
    duration: "2 Nights / 3 Days",
    description:
      "Engineered for honeymoons and romantic anniversaries, this retreat balances tranquil forest seclusion with bespoke sensory experiences. Enjoy private candlelit dining by the pool, restorative couples' Ayurvedic massages, and quiet moments under the canopy.",
    inclusions: [
      "Stay in Swastik (or Mangal) romantic villa with private plunge pool",
      "Welcome bottle of celebratory sparkling refreshment & wild honey confection",
      "One candlelit multi-course private dinner on your villa sundeck",
      "Couple's 60-minute rejuvenating botanical therapy at Thehrav Spa",
      "Daily gourmet breakfasts and chef's curated evening dinners",
      "Nightly aromatherapy turndown service with forest herbal infusions",
    ],
    exclusions: [
      "Core safari gate fees and permits (can be added upon request)",
      "Alcoholic beverages beyond welcome refreshment",
      "Salon bridal styling services at Abha",
    ],
    validity: "Year-round availability",
    idealFor: "Honeymooners, couples, and anniversary celebrations",
    image: "/images/offers/couples-escape.jpg",
    approvalStatus: "pending",
  },
  {
    id: "photography-workshop",
    slug: "photography-workshop",
    title: "The Naturalist's Wilderness Photography Workshop",
    tagline: "Capture the raw light, elusive predators, and avian treasures of central India.",
    duration: "4 Nights / 5 Days",
    description:
      "Tailored for both aspiring and seasoned wildlife photographers. Accompanied by our expert tracker naturalists who understand animal behavior, light angles, and positioning to maximize photography opportunities.",
    inclusions: [
      "Accommodation in Trishul Verandah Rooms or Four Mark Bamboo Cottage",
      "Extensive morning and late-afternoon buffer and core game drives",
      "Beanbags and professional camera mounting clamps in safari vehicles",
      "Evening photo critique and editing sessions in the naturalist library",
      "All meals and energy refreshment hampers on drive",
      "High-speed fiber connectivity for raw image backup",
    ],
    exclusions: [
      "Commercial filming permits and specialized video equipment taxes",
      "Personal camera gear or lens rentals",
      "Travel insurance",
    ],
    validity: "November 1 – April 30 (Optimal lighting and wildlife activity)",
    idealFor: "Wildlife photographers, birdwatchers, and visual storytellers",
    image: "/images/offers/photo-workshop.jpg",
    approvalStatus: "pending",
  },
];
