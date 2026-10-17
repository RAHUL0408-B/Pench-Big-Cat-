import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTicker, TickerImageItem } from "@/components/photography/PhotoTicker";
import { ROOMS_DATA } from "@/content/rooms";
import { FACILITIES_DATA } from "@/content/facilities";
import { GALLERY_ITEMS } from "@/content/gallery";
import { RESORT_CONTACT } from "@/content/navigation";

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
    caption: "Canopy timber deck and private pool",
    aspectRatio: "16:9",
    tag: "Architecture",
  },
  {
    src: "/images/gallery/wildlife-deer.jpg",
    alt: "Chital spotted deer in forest",
    title: "Morning Golden Hour",
    caption: "Spotted deer grazing on buffer fringe",
    aspectRatio: "3:4",
    tag: "Fauna",
  },
  {
    src: "/images/amenities/neel-pool.jpg",
    alt: "Neel pool at sunset",
    title: "Neel Waterhole",
    caption: "Basalt infinity pool reflecting evening skies",
    aspectRatio: "16:9",
    tag: "Sanctuary",
  },
  {
    src: "/images/story/collarwali.jpg",
    alt: "Legendary Collarwali",
    title: "The Super Mom",
    caption: "Collarwali · Matriarch of Pench",
    aspectRatio: "1:1",
    tag: "Lineage",
  },
  {
    src: "/images/amenities/bargad-dining.jpg",
    alt: "Lantern dining at Bargad",
    title: "Bargad Hearth",
    caption: "Open air hearth dining under banyan branches",
    aspectRatio: "4:3",
    tag: "Dining",
  },
  {
    src: "/images/rooms/patdev-cottage.jpg",
    alt: "Arched family cottages",
    title: "Patdev Cottages",
    caption: "Twin arched stone sanctuaries for families",
    aspectRatio: "16:9",
    tag: "Stay",
  },
];

// Ticker dataset 2: Room and architecture cards
const ROOMS_TICKER: TickerImageItem[] = ROOMS_DATA.map((room) => ({
  src: room.heroImage,
  alt: room.name,
  title: room.name,
  caption: room.category,
  aspectRatio: "16:9",
  tag: "Contact for price",
}));

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-night text-stone-cream pt-20">
        {/* Full-bleed background hero imagery */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Pench Big Cat Nature Resort forest morning light"
            fill
            priority
            className="object-cover opacity-60 scale-105 transition-transform duration-1000 ease-out"
            sizes="100vw"
          />
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/40 to-forest-night/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-forest-night/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-12 pb-16">
          {/* Emblem & Eyebrow */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-forest-night/70 border border-brass/40 backdrop-blur-md mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs tracking-luxury text-stone-cream uppercase">
              Khawasa Buffer · Pench Tiger Reserve
            </span>
          </div>

          {/* Majestic Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-cream leading-[1.05]">
            Stay With the Family That <span className="italic font-normal text-brass-light">Rules</span> This Forest.
          </h1>

          {/* Subtitle / Intro */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base md:text-lg text-stone-dawn/90 leading-relaxed font-light">
            An intimate luxury wildlife retreat inspired by Jugni, the resident tigress of Khawasa, and her celebrated Pench dynasty. Where untamed teak forests meet bespoke hospitality.
          </p>

          {/* Dual CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/stay" className="luxury-button-brass w-full sm:w-auto text-xs py-3.5 px-8">
              <span>Explore Our Stays</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/booking-inquiry"
              className="luxury-button-secondary w-full sm:w-auto text-xs py-3.5 px-8 text-stone-cream border-stone-cream/30 hover:border-stone-cream hover:bg-stone-cream hover:text-forest-night"
            >
              <span>Make an Inquiry</span>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-10 flex flex-col items-center gap-2 text-stone-dawn/60">
            <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to Explore</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-brass to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. PHOTO TICKER: EDITORIAL WILDERNESS STRIP */}
      <section className="w-full bg-stone-sand border-y border-forest-night/10 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between text-xs font-mono text-forest-canopy">
          <span className="tracking-luxury uppercase">Field Notes & Living Chronicles</span>
          <span className="hidden sm:inline text-[11px] text-forest-night/50">
            Swipe or hover to pause
          </span>
        </div>
        <PhotoTicker images={WILDERNESS_TICKER} variant="mixed" speed="slow" direction="left" />
      </section>

      {/* 3. BRAND PHILOSOPHY & STORY TEASER */}
      <section className="py-24 md:py-32 bg-stone-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Imagery Composition (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-night border border-forest-night/10 shadow-lg">
                <Image
                  src="/images/story/jugni-tigress.jpg"
                  alt="Jugni the tigress of Khawasa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="editorial-tag bg-forest-night text-stone-cream border-brass/40">
                    The Khawasa Resident Tigress
                  </span>
                </div>
              </div>

              {/* Overlapping secondary photo */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-44 bg-forest-night border-2 border-stone-cream shadow-2xl overflow-hidden">
                <Image
                  src="/images/story/tiger-cubs.jpg"
                  alt="Jugni's cubs in the forest"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            </div>

            {/* Story Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="The Naming Story"
                title="A Story That Cannot Be Copied"
                align="left"
              />

              <div className="space-y-4 text-sm sm:text-base text-forest-night/85 leading-relaxed font-sans font-light">
                <p>
                  Any resort can name its rooms after sal, teak, or mahua trees. But only one resort can say its logo carries Jugni, and its villas are named after the tigress whose territory you step into each morning.
                </p>
                <p>
                  Jugni comes from one of the most famous tiger dynasties on earth. Her grandmother is Collarwali, the world-renowned &lsquo;Super Mom&rsquo; of Pench. Her mother is Patdev, who raised 19 cubs through the seasons. Her companions are Trishul and Four Mark.
                </p>
                <p className="font-serif italic text-lg text-forest-night">
                  &ldquo;A guest isn&rsquo;t staying in a generic deluxe room. They are staying with the family of the tigress they came to see.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link href="/our-story" className="luxury-button-primary text-xs">
                  <span>Read the Jugni Family Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/stay" className="luxury-button-secondary text-xs">
                  <span>Explore Villas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED ACCOMMODATIONS PREVIEW */}
      <section className="py-24 md:py-32 bg-stone-sand border-t border-forest-night/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Sanctuaries in the Wild"
              title="Villas Crafted for Quiet Wonder"
              description="Each stay is inspired by a member of Jugni's family, reflecting their unique character through sandstone, cane, and teak architecture."
              align="left"
            />
            <Link href="/stay" className="luxury-button-secondary text-xs self-start md:self-auto">
              <span>View All 5 Stays</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Staggered Editorial Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="group flex flex-col bg-stone-cream border border-forest-night/10 overflow-hidden hover:border-forest-canopy/60 transition-all duration-300"
              >
                {/* Image Stage */}
                <div className="relative aspect-[16/10] overflow-hidden bg-forest-night">
                  <Image
                    src={room.heroImage}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="editorial-tag bg-forest-night text-stone-cream">
                      {room.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-forest-night font-medium">
                      {room.name}
                    </h3>
                    <p className="text-xs text-forest-night/70 font-sans line-clamp-2 leading-relaxed">
                      {room.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-forest-night/10">
                    <div className="flex items-center justify-between text-xs font-mono text-forest-night/60">
                      <span>{room.dimensions}</span>
                      <span className="text-brass font-medium">Contact for price</span>
                    </div>

                    <Link
                      href={`/stay/${room.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-mono tracking-wider uppercase text-forest-night hover:text-forest-canopy font-medium pt-1"
                    >
                      <span>Explore Villa Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHOTO TICKER: ROOMS & COTTAGES STRIP */}
      <section className="w-full bg-forest-night py-10 border-y border-forest-canopy/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between text-xs font-mono text-stone-dawn/70">
          <span className="tracking-luxury uppercase text-brass">
            Architectural Portfolio Snapshot
          </span>
          <span className="text-[11px] text-stone-dawn/50">All Stays · Contact for price</span>
        </div>
        <PhotoTicker images={ROOMS_TICKER} variant="rooms" speed="gentle" direction="right" />
      </section>

      {/* 6. EXPERIENCES & AMENITIES PREVIEW */}
      <section className="py-24 md:py-32 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="Dining, Pool & Restoration"
            title="Life in the Wilderness"
            description="From communal hearth dining at Bargad to sunset swims at Neel waterhole, every facility is conceived around natural forest gathering."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES_DATA.slice(0, 3).map((facility) => (
              <div
                key={facility.id}
                className="group bg-forest-deep border border-forest-canopy/40 p-6 flex flex-col justify-between space-y-6 hover:border-brass/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden border border-forest-canopy/30">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="editorial-tag-dark">{facility.category}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-stone-cream font-medium">
                      {facility.name}
                    </h3>
                    <p className="font-mono text-xs text-brass tracking-wide">
                      {facility.meaning}
                    </p>
                  </div>

                  <p className="text-xs text-stone-dawn/80 font-sans line-clamp-3 leading-relaxed">
                    {facility.description[0]}
                  </p>
                </div>

                <div className="pt-2 border-t border-forest-canopy/30 flex items-center justify-between text-xs font-mono text-stone-dawn/70">
                  <span className="truncate pr-2">{facility.locationOnProperty}</span>
                  <Link
                    href="/experiences"
                    className="text-brass hover:text-stone-cream flex items-center gap-1 flex-shrink-0"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/experiences" className="luxury-button-brass text-xs">
              <span>Explore All Experiences & Amenities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="py-24 bg-stone-cream border-t border-forest-night/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Curated Gallery"
              title="Through the Lens of Pench"
              align="left"
            />
            <Link href="/gallery" className="luxury-button-secondary text-xs self-start sm:self-auto">
              <span>Explore Full Gallery (15 Images)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden bg-forest-night border border-forest-night/10 group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-forest-night/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-serif text-sm text-stone-cream font-medium line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOCATION SUMMARY & FINAL INQUIRY BANNER */}
      <section className="py-20 bg-stone-sand border-t border-forest-night/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-forest-canopy tracking-luxury uppercase">
            <MapPin className="w-4 h-4 text-brass" />
            <span>{RESORT_CONTACT.gateProximity}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-night leading-tight">
            Ready to Venture Into Tiger Country?
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-forest-night/80 font-sans font-light leading-relaxed">
            Submit an inquiry with your preferred travel dates and party size. Our reservations team will review room availability and provide a tailored proposal for your Pench expedition.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking-inquiry" className="luxury-button-brass text-xs py-3.5 px-8">
              <span>Make a Booking Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="luxury-button-secondary text-xs py-3.5 px-8">
              <span>View Route & Distance Guides</span>
            </Link>
          </div>

          <p className="text-[11px] font-mono text-forest-night/50">
            Note: Inquiries are reviewed manually by resort management. We do not operate automated bookings or take online payments.
          </p>
        </div>
      </section>
    </div>
  );
}
