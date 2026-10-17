import { AttractionItem } from "@/types/resort";

export const ATTRACTIONS_DATA: AttractionItem[] = [
  {
    id: "turia-gate",
    title: "Turia Gate — Pench Core Reserve",
    category: "safari-gate",
    distance: "14 km from resort",
    driveTime: "Approx. 20 minutes drive",
    description:
      "Turia is the most famous and biodiverse core gate of Pench National Park, known globally as the primary filming location for BBC's 'Spy in the Jungle'. Featuring open grasslands, waterholes, and dense teak tracts, it offers exceptional opportunities for observing tigers, leopards, wild dogs (dhole), and gaur.",
    highlights: [
      "Open morning and evening safari shifts",
      "Prime tiger territory with historical sightings of Collarwali's descendants",
      "Baghin Nala, Pyorthadi, and Alikatta meadows",
    ],
    officialTip:
      "Core safari permits must be booked well in advance via the official Madhya Pradesh Forest Department portal. Our reservations team assists guests with authorized booking guidance.",
    image: "/images/attractions/turia-gate.jpg",
  },
  {
    id: "khawasa-buffer",
    title: "Khawasa Buffer Zone (Teliya Range)",
    category: "safari-gate",
    distance: "Adjacent to resort",
    driveTime: "Less than 5 minutes drive",
    description:
      "Directly neighboring our property, the Khawasa buffer zone is the homeland of Jugni and her family. Because buffer zones permit night drives and walking trails that core zones restrict, it offers an exceptionally rich and flexible safari experience.",
    highlights: [
      "Home territory of Jugni and Four Mark",
      "Offers nocturnal night safaris to witness civets, owls, and nocturnal predators",
      "Open year-round, including during the monsoon months",
    ],
    officialTip: "Ideal for afternoon arrivals wanting an immediate evening game drive.",
    image: "/images/hero/hero-tiger.jpg",
  },
  {
    id: "pachdhar-village",
    title: "Pachdhar Artisan Potters' Village",
    category: "cultural",
    distance: "18 km from resort",
    driveTime: "Approx. 25 minutes drive",
    description:
      "A charming traditional village inhabited by traditional Kumhaar (potter) families who have shaped local black and red clay on manual wheels for generations. Guests can watch master potters at work and try their hand at shaping earthen lamps, cups, and pots.",
    highlights: [
      "Generations-old terracotta pottery craft",
      "Interactive pottery wheel sessions with local artisans",
      "Purchase authentic handmade terracotta souvenirs directly from craftsmen",
    ],
    officialTip: "Visits are best scheduled during late morning between safari drives.",
    image: "/images/attractions/pottery-village.jpg",
  },
  {
    id: "totladoh-dam",
    title: "Totladoh Dam & Pench Reservoir",
    category: "waterbody",
    distance: "32 km from resort",
    driveTime: "Approx. 45 minutes drive",
    description:
      "A magnificent gravity dam built across the Wainganga / Pench river, creating a vast freshwater reservoir enclosed by forested hills. The shoreline is a vital watering ground for wildlife and a sanctuary for migratory waterfowl, ospreys, and mugger crocodiles.",
    highlights: [
      "Stunning panoramic vistas of forested central Indian hills",
      "Spectacular avian biodiversity with migratory waterbirds in winter",
      "Historical waterbody that inspired Rudyard Kipling's tales of the Wainganga",
    ],
    image: "/images/attractions/river-lake.jpg",
  },
  {
    id: "kohka-lake",
    title: "Kohka Lake & Wilderness Sunsets",
    category: "waterbody",
    distance: "12 km from resort",
    driveTime: "Approx. 15 minutes drive",
    description:
      "A serene village lake bordered by acacia trees and rocky outcrops. A favorite spot for peaceful evening tea, landscape photography, and observing winter migratory birds like bar-headed geese and painted storks.",
    highlights: [
      "Dramatic reflection of golden hour skies across undisturbed waters",
      "Excellent birdwatching for waders, kingfishers, and raptors",
      "Quiet sunset picnic spot away from vehicular trails",
    ],
    image: "/images/gallery/forest-sunset.jpg",
  },
  {
    id: "runi-jhuni-trail",
    title: "Runi Jhuni Nature Walking Trail",
    category: "nature",
    distance: "16 km from resort",
    driveTime: "Approx. 25 minutes drive",
    description:
      "An authorized guided nature walking track in the buffer, Runi Jhuni provides an intimate, on-foot perspective of the jungle. Accompanied by a forest guard and naturalist, guests learn pugmark identification, alarm call acoustics, and medicinal forest botany.",
    highlights: [
      "Safe walking experience guided by certified forest department trackers",
      "Focus on smaller ecosystem wonders: butterflies, termites, and medicinal flora",
      "Experience the tactile textures and fragrances of the central Indian sal forest",
    ],
    officialTip: "Sturdy walking boots, neutral-colored clothing, and insect repellant are recommended.",
    image: "/images/property/bamboo-path.jpg",
  },
];

export const SAFARI_GUIDELINES = [
  {
    title: "Permit Regulations",
    text: "Safari entry is strictly controlled by the Madhya Pradesh Forest Department. Every visitor must provide original government photo ID matching the booking document at gate entry.",
  },
  {
    title: "Vehicle Etiquette",
    text: "All safaris are conducted in registered open 4x4 Gypsy vehicles. Guests must remain seated at all times; standing or stepping off the vehicle is strictly prohibited by forest law.",
  },
  {
    title: "Dress & Colors",
    text: "Wear muted jungle colors (khaki, olive green, beige, or brown). Avoid bright neon colors, strong perfumes, and unnecessary noise that disturbs wild creatures.",
  },
  {
    title: "No Sightings Guarantee",
    text: "Tigers are wild predators roaming vast natural ecosystems. Sightings are wild encounters guided by tracker skill and natural luck, never manufactured entertainment.",
  },
];
