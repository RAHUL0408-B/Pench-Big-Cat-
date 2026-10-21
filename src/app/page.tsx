import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Compass,
  Waves,
  Sparkles,
  TreePine,
  Utensils,
  Sun,
  Smile,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTicker, TickerImageItem } from "@/components/photography/PhotoTicker";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ROOMS_DATA } from "@/content/rooms";
import { GALLERY_ITEMS } from "@/content/gallery";

// Ticker dataset 1: Mixed editorial wilderness strip
const WILDERNESS_TICKER: TickerImageItem[] = [
  {
    src: "/images/story/jugni-tigress.jpg",
    alt: "Jugni patrolling Khawasa buffer",
    title: "Jugni's Realm",
    caption: "The resident tigress of Khawasa",
    aspectRatio: "4:3",
    tag: "Wildlife",
  },
  {
    src: "/images/rooms/jugni-villa.jpg",
    alt: "Two storey signature villa",
    title: "Jugni Villa",
    caption: "Spacious 2-storey villas with scenic gallery",
    aspectRatio: "16:9",
    tag: "Architecture",
  },
  {
    src: "/images/gallery/wildlife-deer.jpg",
    alt: "Chital spotted deer in forest",
    title: "Morning Golden Hour",
    caption: "Spotted deer grazing in open greenery",
    aspectRatio: "3:4",
    tag: "Fauna",
  },
  {
    src: "/images/amenities/neel-pool.jpg",
    alt: "Swimming pool at the resort",
    title: "Swimming Pool",
    caption: "Leisure pool surrounded by forest greenery",
    aspectRatio: "16:9",
    tag: "Leisure",
  },
  {
    src: "/images/amenities/bargad-dining.jpg",
    alt: "Dining at Big Cat Safari Resort",
    title: "Restaurant & Hearth",
    caption: "Delicious dining in a relaxed jungle setting",
    aspectRatio: "4:3",
    tag: "Dining",
  },
  {
    src: "/images/rooms/patdev-cottage.jpg",
    alt: "Arched cottages in green spaces",
    title: "Patdev Cottages",
    caption: "2 arched cottages to relax in green spaces",
    aspectRatio: "16:9",
    tag: "Stay",
  },
  {
    src: "/images/rooms/trishul-verandah.jpg",
    alt: "Trishul cottage with open shower",
    title: "Trishul Cottages",
    caption: "Comfortable cottages featuring open shower",
    aspectRatio: "16:9",
    tag: "Sanctuary",
  },
];

// Highlight cards matching "The Destination At a Glance"
const HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Close to Khursapar Gate",
    desc: "Quick and easy access to premier morning & evening safari drives.",
  },
  {
    icon: MapPin,
    title: "Near Teliya & Khawasa Buffer Zone",
    desc: "Nestled right alongside celebrated wildlife habitats & night trails.",
  },
  {
    icon: ShieldCheck,
    title: "Near MP–Maharashtra Border",
    desc: "Conveniently accessible from both Nagpur and Seoni/Jabalpur routes.",
  },
  {
    icon: TreePine,
    title: "Spacious Pathways & Open Areas",
    desc: "Serene walking pathways and uncrowded nature-filled acreage.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "Refreshing pool to unwind after an exhilarating morning jungle safari.",
  },
  {
    icon: Sparkles,
    title: "Spa, Salon, and Restaurant",
    desc: "Rejuvenating therapies, salon grooming, and delicious dining under one roof.",
  },
  {
    icon: Sun,
    title: "Lawn & Play Area",
    desc: "Lush outdoor green lawns for leisurely family strolls and children's games.",
  },
  {
    icon: Smile,
    title: "Rain Dance Area",
    desc: "Fun-filled recreational rain dance for memorable group and family moments.",
  },
];

// 5 Reasons to Choose Big Cat Safari Resort
const REASONS_TO_CHOOSE = [
  {
    title: "Nature All Around You",
    description: "Unwind amidst open spaces, greenery and a nature-inspired setting.",
    tag: "01",
  },
  {
    title: "Close to the Wild",
    description:
      "Stay conveniently located near Khursapar Gate and the Teliya and Khawasa Buffer Zones.",
    tag: "02",
  },
  {
    title: "Space to Slow Down",
    description: "Enjoy spacious pathways, open lawns and peaceful surroundings.",
    tag: "03",
  },
  {
    title: "Leisure for Everyone",
    description: "Make time for the swimming pool, spa, play area, rain dance and more.",
    tag: "04",
  },
  {
    title: "Stays with a Story",
    description:
      "Discover distinctive villas and cottages inspired by Jugni and her family, bringing the stories of Pench closer to your stay.",
    tag: "05",
  },
];

export default function HomePage() {
  // Select the 3 featured accommodations explicitly requested: Jugni, Patdev, Trishul
  const featuredRooms = ROOMS_DATA.filter((r) =>
    ["jugni", "patdev", "trishul"].includes(r.slug)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION CAROUSEL */}
      <HeroCarousel />

      {/* 2. PHOTO TICKER: EDITORIAL WILDERNESS STRIP */}
      <section className="w-full bg-stone-sand border-y border-forest-night/10 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between text-xs font-mono text-forest-canopy">
          <span className="tracking-luxury uppercase">Field Notes & Living Chronicles</span>
          <span className="hidden sm:inline text-[11px] text-forest-night/50">
            Pench Tiger Reserve & Surroundings
          </span>
        </div>
        <PhotoTicker images={WILDERNESS_TICKER} variant="mixed" speed="slow" direction="left" />
      </section>

      {/* 3. ABOUT - HOMEPAGE */}
      <section className="py-24 md:py-32 bg-stone-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Imagery Composition (6 cols) */}
            <ScrollReveal animation="fade-right" className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-night border border-forest-night/10 shadow-2xl resort-card-lift">
                <Image
                  src="/images/story/jugni-tigress.jpg"
                  alt="Big Cat Nature Resort natural setting"
                  fill
                  className="object-cover resort-image-hover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="editorial-tag bg-forest-night/90 text-stone-cream border-brass/50 backdrop-blur-sm">
                    Pench National Park
                  </span>
                </div>
              </div>

              {/* Overlapping secondary floating photo with slow parallax float */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 h-48 bg-forest-night border-2 border-stone-cream shadow-2xl overflow-hidden animate-float-slow">
                <Image
                  src="/images/property/resort-property-view.jpg"
                  alt="Open spaces and pathways at Big Cat Nature Resort"
                  fill
                  className="object-cover resort-image-hover"
                  sizes="260px"
                />
                <div className="absolute inset-0 border border-brass/20 pointer-events-none" />
              </div>
            </ScrollReveal>

            {/* Story Narrative (6 cols) */}
            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Nature-themed Resort in Pench National Park"
                title="Big Cat Nature Resort"
                align="left"
              />

              <div className="space-y-4 text-base sm:text-lg text-forest-night/85 leading-relaxed font-sans font-light">
                <p>
                  Big Cat Nature Resort offers a{" "}
                  <span className="highlight-gold font-normal">peaceful nature retreat</span> near
                  the Madhya Pradesh–Maharashtra border, with spacious pathways, open areas and easy
                  access to the Pench landscape. Located close to{" "}
                  <span className="text-forest-canopy font-medium">Khursapar Gate</span> and the{" "}
                  <span className="text-forest-canopy font-medium">
                    Teliya &amp; Khawasa Buffer Zone
                  </span>
                  , the resort brings together comfortable stays, leisure and a{" "}
                  <span className="highlight-gold font-normal">nature-inspired setting</span>.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link href="/stay" className="luxury-button-primary text-xs">
                  <span>Explore Accommodations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="luxury-button-secondary text-xs">
                  <span>About Us</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. FEATURED ACCOMMODATIONS (Any 3: Jugni, Patdev, Trishul) */}
      <section className="py-24 md:py-32 bg-stone-sand border-t border-forest-night/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal animation="fade-up">
              <SectionHeading
                eyebrow="Featured Accommodations"
                title="Stay Your Way in the Heart of Nature"
                description="Choose from distinctive accommodations designed for different kinds of Pench getaways"
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <Link href="/stay" className="luxury-button-secondary text-xs self-start md:self-auto">
                <span>View All Stays</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Staggered Room Grid with scroll-up animation & card hover lift */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room, idx) => (
              <ScrollReveal key={room.id} animation="fade-up" delay={idx * 150}>
                <div className="group flex flex-col bg-stone-cream border border-forest-night/10 overflow-hidden resort-card-lift h-full">
                  {/* Image Stage with hover zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-night">
                    <Image
                      src={room.heroImage}
                      alt={room.name}
                      fill
                      className="object-cover resort-image-hover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="editorial-tag bg-forest-night/90 text-stone-cream border-brass/40 backdrop-blur-sm">
                        {room.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl text-forest-night font-medium group-hover:text-brass transition-colors duration-300">
                        {room.name}
                      </h3>
                      <p className="text-sm text-forest-night/80 font-sans leading-relaxed">
                        {room.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-forest-night/10">
                      <Link
                        href={`/stay/${room.slug}`}
                        className="inline-flex items-center justify-between w-full text-xs font-mono tracking-wider uppercase text-forest-night hover:text-brass font-medium pt-1 transition-colors"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HIGHLIGHTS: THE DESTINATION AT A GLANCE */}
      <section className="py-24 md:py-32 bg-forest-night text-stone-cream relative overflow-hidden bg-forest-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Highlights"
              title="The Destination At a Glance"
              description="Everything that makes Big Cat Nature Resort your ideal home in Pench."
              theme="dark"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 75}>
                  <div className="bg-forest-deep/80 border border-forest-canopy/40 p-6 rounded-none hover:border-brass/70 transition-all duration-300 flex flex-col justify-between space-y-4 resort-card-lift h-full group">
                    <div className="w-10 h-10 rounded-full bg-brass/10 border border-brass/30 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-forest-night transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg text-stone-cream font-medium group-hover:text-brass transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-dawn/70 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. REASONS TO CHOOSE BIG CAT SAFARI RESORT */}
      <section className="py-24 md:py-32 bg-stone-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="For Your Stay in Pench"
              title="Reasons to Choose Big Cat Safari Resort"
              description="Beyond the Big Cats Lies a World of Experiences!"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REASONS_TO_CHOOSE.map((reason, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-stone-sand border border-forest-night/10 p-8 space-y-4 hover:border-brass/70 transition-all duration-300 resort-card-lift h-full group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brass font-bold tracking-widest group-hover:scale-110 transition-transform">
                      {reason.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-forest-canopy group-hover:text-brass transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-forest-night font-medium group-hover:text-forest-canopy transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-forest-night/80 font-sans leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOD AT BIG CAT SAFARI RESORT */}
      <section className="py-24 md:py-32 bg-stone-sand border-t border-forest-night/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Dining Narrative (6 cols) */}
            <ScrollReveal animation="fade-right" className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <SectionHeading
                eyebrow="Dining & Culinary"
                title="Food At Big Cat Safari Resort"
                align="left"
              />

              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-brass italic font-normal">
                  Flavours That Complete Your Pench Experience!
                </h3>
                <p className="text-base sm:text-lg text-forest-night/85 leading-relaxed font-sans font-light">
                  Savour delicious meals in a{" "}
                  <span className="highlight-gold font-normal">relaxed setting</span>, with{" "}
                  <span className="highlight-gold font-normal">flavours that bring comfort</span>{" "}
                  to your jungle getaway. Whether it’s a{" "}
                  <span className="text-forest-canopy font-medium">hearty meal after a safari</span>{" "}
                  or a leisurely dining experience at the resort, let every meal add to your Pench
                  memories.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/experiences" className="luxury-button-brass text-xs">
                  <span>Explore Dining Experiences</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/booking-inquiry" className="luxury-button-secondary text-xs">
                  <span>Reserve Table / Inquire</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Dining Image Stage (6 cols) */}
            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-night border border-forest-night/10 shadow-2xl resort-card-lift">
                <Image
                  src="/images/amenities/bargad-dining.jpg"
                  alt="Delicious food in a relaxed setting at Big Cat Safari Resort"
                  fill
                  className="object-cover resort-image-hover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-forest-night/90 text-stone-cream px-3 py-1.5 border border-brass/40 backdrop-blur-sm">
                  <Utensils className="w-3.5 h-3.5 text-brass" />
                  <span className="font-mono text-[10px] tracking-wider uppercase">
                    Safari Breakfasts &amp; Hearty Dinners
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. GALLERY PREVIEW */}
      <section className="py-24 bg-stone-cream border-t border-forest-night/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <ScrollReveal animation="fade-up">
              <SectionHeading
                eyebrow="Curated Gallery"
                title="Through the Lens of Pench"
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <Link href="/gallery" className="luxury-button-secondary text-xs self-start sm:self-auto">
                <span>Explore Full Gallery</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item, idx) => (
              <ScrollReveal key={item.id} animation="zoom-in" delay={idx * 100}>
                <div className="relative aspect-square overflow-hidden bg-forest-night border border-forest-night/10 group resort-card-lift">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover resort-image-hover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-forest-night/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="font-serif text-sm text-stone-cream font-medium line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCATION SUMMARY & FINAL INQUIRY BANNER */}
      <section className="py-20 bg-stone-sand border-t border-forest-night/10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-forest-canopy tracking-luxury uppercase">
              <MapPin className="w-4 h-4 text-brass" />
              <span>Close to Khursapar Gate &middot; Near Teliya &amp; Khawasa Buffer Zone</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-night leading-tight">
              Ready to Venture Into Tiger Country?
            </h2>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-forest-night/80 font-sans font-light leading-relaxed">
              Submit an inquiry with your preferred travel dates and party size. Our team will review
              availability and assist in planning your Pench getaway.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking-inquiry" className="luxury-button-brass text-xs py-3.5 px-8">
                <span>Make a Booking Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="luxury-button-secondary text-xs py-3.5 px-8">
                <span>Location &amp; Contact</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
