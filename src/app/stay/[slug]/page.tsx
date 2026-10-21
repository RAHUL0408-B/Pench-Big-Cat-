import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOMS_DATA } from "@/content/rooms";
import { RESORT_CONTACT } from "@/content/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";
import { Metadata } from "next";

interface RoomDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const room = ROOMS_DATA.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.title} — Big Cat Nature Resort`,
    description: room.shortDescription,
  };
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  const room = ROOMS_DATA.find((r) => r.slug === params?.slug);

  if (!room) {
    notFound();
  }

  // Related suggestions: other rooms excluding current
  const relatedRooms = ROOMS_DATA.filter((r) => r.slug !== room.slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-stone-cream">
      {/* 1. Back Navigation & Category */}
      <div className="bg-stone-sand border-b border-forest-night/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono">
          <Link
            href="/stay"
            className="inline-flex items-center gap-2 text-forest-canopy hover:text-forest-night font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Stays</span>
          </Link>
          <span className="text-forest-night/60 uppercase tracking-wider">
            {room.category}
          </span>
        </div>
      </div>

      {/* 2. Hero Stage */}
      <section className="relative h-[55vh] sm:h-[65vh] w-full bg-forest-night overflow-hidden">
        <Image
          src={room.heroImage}
          alt={room.title}
          fill
          priority
          className="object-cover opacity-80 animate-kenburns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/30 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="space-y-2 max-w-3xl">
              <span className="editorial-tag-dark">{room.category}</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-cream font-light leading-tight">
                {room.title}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-brass pt-1">
                {room.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Main Room Details & Sticky Booking Bar */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative, Story, Glance & In-room Facilities (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Narrative */}
            <ScrollReveal animation="fade-up">
              <div className="space-y-4">
                <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                  Accommodation Overview
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest-night font-light">
                  {room.subtitle}
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-forest-night/85 font-sans leading-relaxed font-light pt-2">
                  {room.fullDescription.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* The Story of {room.name} */}
            <ScrollReveal animation="fade-up">
              <div className="p-6 sm:p-8 bg-stone-sand border-l-4 border-brass border-y border-r border-forest-night/10 space-y-3 resort-card-lift">
                <div className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brass" />
                  <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                    The Story of {room.name}
                  </span>
                </div>
                <p className="text-base text-forest-night/90 font-sans leading-relaxed font-light">
                  {room.storyInspiration}
                </p>
              </div>
            </ScrollReveal>

            {/* Your Stay at a Glance */}
            {room.glance && (
              <ScrollReveal animation="fade-up">
                <div className="space-y-4 pt-4 border-t border-forest-night/10">
                  <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                    Overview
                  </span>
                  <h3 className="font-serif text-2xl text-forest-night font-medium">
                    Your Stay at a Glance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {room.glance.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-stone-sand border border-forest-night/10 space-y-1 resort-card-lift"
                      >
                        <span className="font-mono text-xs text-brass font-medium uppercase tracking-wider block">
                          {item.label}
                        </span>
                        <span className="font-sans text-sm sm:text-base text-forest-night font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                    {room.idealFor && (
                      <div className="p-4 bg-stone-sand border border-forest-night/10 space-y-1 resort-card-lift">
                        <span className="font-mono text-xs text-brass font-medium uppercase tracking-wider block">
                          Ideal For
                        </span>
                        <span className="font-sans text-sm sm:text-base text-forest-night font-medium">
                          {room.idealFor}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* In-room Facilities */}
            <ScrollReveal animation="fade-up">
              <div className="space-y-4 pt-4 border-t border-forest-night/10">
                <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                  Amenities &amp; Inclusions
                </span>
                <h3 className="font-serif text-2xl text-forest-night font-medium">
                  In-room Facilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {room.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 bg-stone-sand/60 border border-forest-night/10 text-sm font-sans text-forest-night hover:border-brass/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest-canopy flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Room Photo Gallery Grid */}
            <ScrollReveal animation="fade-up">
              <div className="space-y-4 pt-4 border-t border-forest-night/10">
                <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                  Visual Documentation
                </span>
                <h3 className="font-serif text-2xl text-forest-night font-medium">
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {room.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] overflow-hidden bg-forest-night border border-forest-night/10 group resort-card-lift"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${room.name} image ${idx + 1}`}
                        fill
                        className="object-cover resort-image-hover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sticky Reservation Inquiry Card (4 cols) */}
          <div className="lg:col-span-4">
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="sticky top-28 bg-stone-sand border border-forest-night/15 p-6 sm:p-8 space-y-6 shadow-sm resort-card-lift">
                <div className="space-y-2 border-b border-forest-night/10 pb-4">
                  <span className="font-mono text-[10px] tracking-luxury uppercase text-forest-canopy">
                    Tariff &amp; Reservation
                  </span>
                  <div className="font-serif text-3xl text-forest-night font-light">
                    Contact for price
                  </div>
                  <p className="text-xs font-sans text-forest-night/70">
                    Contact our team to enquire about availability, seasonal rates, and safari bookings.
                  </p>
                </div>

                {/* Action Button: Pre-filled into Booking Inquiry */}
                <div className="space-y-3">
                  <Link
                    href={`/booking-inquiry?room=${room.slug}&category=${encodeURIComponent(
                      room.category
                    )}`}
                    className="luxury-button-brass w-full text-center py-3.5 text-xs"
                  >
                    <span>Inquire About {room.name}</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>

                  <p className="text-[11px] font-mono text-center text-forest-night/50">
                    Submitting an inquiry does not confirm a booking. No payment required online.
                  </p>
                </div>

                {/* Contact Assistance */}
                <div className="pt-4 border-t border-forest-night/10 text-xs font-sans text-forest-night/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-forest-night font-semibold">
                    <Info className="w-3.5 h-3.5 text-brass" />
                    <span>Direct Reservations Desk</span>
                  </div>
                  <p className="font-mono text-xs">{RESORT_CONTACT.phone}</p>
                  <p className="font-mono text-xs">{RESORT_CONTACT.email}</p>
                  <p className="text-[11px] text-forest-night/60 pt-1">
                    Near Khursapar Gate &middot; Buffer Zone, Pench
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Related Stays Suggestions */}
      <section className="py-16 bg-stone-sand border-t border-forest-night/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Explore Accommodations"
              title="Other Stays at the Resort"
              align="left"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedRooms.map((rel, idx) => (
              <ScrollReveal key={rel.id} animation="fade-up" delay={idx * 150}>
                <div className="bg-stone-cream border border-forest-night/10 p-6 flex flex-col sm:flex-row gap-6 items-center resort-card-lift h-full group">
                  <div className="relative w-full sm:w-48 aspect-[4/3] flex-shrink-0 bg-forest-night overflow-hidden">
                    <Image
                      src={rel.heroImage}
                      alt={rel.name}
                      fill
                      className="object-cover resort-image-hover"
                      sizes="200px"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="editorial-tag bg-forest-night/5 text-forest-night">{rel.category}</span>
                    <h3 className="font-serif text-2xl text-forest-night font-medium group-hover:text-forest-canopy transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-forest-night/70 font-sans line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <Link
                      href={`/stay/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-forest-canopy hover:text-brass font-medium pt-1 transition-colors"
                    >
                      <span>View Stay</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
