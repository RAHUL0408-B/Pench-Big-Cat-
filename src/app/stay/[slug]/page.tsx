import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOMS_DATA } from "@/content/rooms";
import { RESORT_CONTACT } from "@/content/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Metadata } from "next";

interface RoomDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const room = ROOMS_DATA.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.name} — ${room.category}`,
    description: room.shortDescription,
  };
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  const room = ROOMS_DATA.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  // Related suggestions: other rooms excluding current
  const relatedRooms = ROOMS_DATA.filter((r) => r.slug !== room.slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-stone-cream">
      {/* 1. Back Navigation & Eyebrow */}
      <div className="bg-stone-sand border-b border-forest-night/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono">
          <Link
            href="/stay"
            className="inline-flex items-center gap-2 text-forest-canopy hover:text-forest-night font-medium"
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
      <section className="relative h-[60vh] sm:h-[70vh] w-full bg-forest-night overflow-hidden">
        <Image
          src={room.heroImage}
          alt={room.title}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/30 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-3xl">
            <span className="editorial-tag-dark">{room.category}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-cream font-light leading-tight">
              {room.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-brass tracking-wide">
              {room.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Room Details & Sticky Booking Bar */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Story, Gallery & Specifications (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Story & Concept */}
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                The Architectural Chronicle
              </span>
              <h2 className="font-serif text-3xl text-forest-night font-light">
                Inspired by {room.name}
              </h2>
              <div className="p-4 bg-stone-sand border-l-2 border-brass text-sm text-earth-bark font-sans italic leading-relaxed">
                &ldquo;{room.storyInspiration}&rdquo;
              </div>
              <div className="space-y-4 text-sm sm:text-base text-forest-night/85 font-sans leading-relaxed font-light pt-2">
                {room.fullDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Room Photo Gallery Grid */}
            <div className="space-y-4 pt-4 border-t border-forest-night/10">
              <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                Visual Documentation
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden bg-forest-night border border-forest-night/10 group"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${room.name} interior detail ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights & Features */}
            <div className="space-y-6 pt-4 border-t border-forest-night/10">
              <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                Sanctuary Specifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-forest-night font-medium">
                    Features & Inclusions
                  </h3>
                  <ul className="space-y-2 text-xs font-sans text-forest-night/80">
                    {room.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-forest-canopy flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-forest-night font-medium">
                    Amenities & Services
                  </h3>
                  <ul className="space-y-2 text-xs font-sans text-forest-night/80">
                    {room.amenities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brass flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Individual Cub Room Litter Breakdown (if applicable) */}
            {room.cubsTheme && (
              <div className="p-6 bg-stone-sand border border-forest-night/10 space-y-4">
                <div>
                  <span className="font-mono text-xs text-brass tracking-wider uppercase font-semibold">
                    {room.cubsTheme.litterTitle}
                  </span>
                  <p className="text-xs text-forest-night/70 mt-1">
                    {room.cubsTheme.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {room.cubsTheme.rooms.map((cub, cIdx) => (
                    <div
                      key={cIdx}
                      className={`p-3 border text-xs font-mono flex flex-col justify-between ${
                        cub.isBookable
                          ? "bg-stone-cream border-forest-night/15 text-forest-night"
                          : "bg-forest-night text-stone-dawn border-forest-canopy/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-serif">{cub.name}</strong>
                        <span className="text-[10px] uppercase text-brass">
                          {cub.meaning}
                        </span>
                      </div>
                      <span className="text-[10px] text-forest-night/60 mt-1">
                        {cub.theme}
                      </span>
                      {cub.notes && (
                        <p className="text-[10px] text-brass/90 mt-2 italic font-sans">
                          {cub.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Reservation Inquiry Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-stone-sand border border-forest-night/15 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2 border-b border-forest-night/10 pb-4">
                <span className="font-mono text-[10px] tracking-luxury uppercase text-forest-canopy">
                  Tariff Schedule
                </span>
                <div className="font-serif text-3xl text-forest-night font-light">
                  Contact for price
                </div>
                <p className="text-[11px] font-mono text-forest-night/60">
                  Tailored quotations based on season, occupancy, and safari drive schedules.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="space-y-3 text-xs font-mono text-forest-night/80 border-b border-forest-night/10 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-forest-night/60">Dimensions:</span>
                  <span className="font-semibold">{room.dimensions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-forest-night/60">Occupancy:</span>
                  <span className="font-semibold">{room.occupancy}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-forest-night/60">Bed Setup:</span>
                  <span className="font-semibold text-right">{room.bedConfiguration}</span>
                </div>
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
                  Submitting an inquiry does not confirm a reservation. No payment required online.
                </p>
              </div>

              {/* Assistance Callout */}
              <div className="pt-2 border-t border-forest-night/10 text-xs font-sans text-forest-night/70 space-y-1">
                <p className="font-semibold text-forest-night">Prefer to speak with reservations?</p>
                <p className="font-mono text-[11px]">{RESORT_CONTACT.phone}</p>
                <p className="font-mono text-[11px]">{RESORT_CONTACT.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Stays Suggestions */}
      <section className="py-16 bg-stone-sand border-t border-forest-night/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="Explore Alternative Sanctuaries"
            title="Other Stays in the Lineage"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedRooms.map((rel) => (
              <div
                key={rel.id}
                className="bg-stone-cream border border-forest-night/10 p-6 flex flex-col sm:flex-row gap-6 items-center"
              >
                <div className="relative w-full sm:w-48 aspect-[4/3] flex-shrink-0 bg-forest-night overflow-hidden">
                  <Image
                    src={rel.heroImage}
                    alt={rel.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="editorial-tag">{rel.category}</span>
                  <h3 className="font-serif text-2xl text-forest-night font-medium">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-forest-night/70 font-sans line-clamp-2">
                    {rel.shortDescription}
                  </p>
                  <Link
                    href={`/stay/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-forest-canopy font-medium pt-1"
                  >
                    <span>View Stay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
