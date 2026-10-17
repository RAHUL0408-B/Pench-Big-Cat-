import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROOMS_DATA } from "@/content/rooms";
import { ArrowRight, ArrowUpRight, Users, Maximize, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stay With Us — Villas & Forest Sanctuaries",
  description:
    "Explore our collection of five bespoke stays inspired by Jugni and her family: two-storey villas, arched cottages, verandah suites, and bamboo eco-lodges.",
};

export default function StayPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-stone-cream">
      {/* 1. Page Header Hero */}
      <section className="py-16 md:py-24 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rooms/jugni-villa.jpg"
            alt="Pench Big Cat Nature Resort Accommodations"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Architectural Sanctuaries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-stone-cream leading-tight">
            Stay With Us in the Wild
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            Every villa and cottage on our estate carries the name and character of a member of Jugni&rsquo;s legendary family. Constructed using indigenous sandstone, reclaimed teak, and organic thatch.
          </p>
          <div className="pt-2">
            <span className="editorial-tag-dark">
              Tariff Policy: Contact for price · Individual inquiry quotations
            </span>
          </div>
        </div>
      </section>

      {/* 2. Room Collection Portfolio (Alternating Editorial Sections) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {ROOMS_DATA.map((room, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={room.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-stone-sand border border-forest-night/10 p-6 sm:p-10 md:p-12 shadow-sm"
            >
              {/* Image Column (6 cols) */}
              <div
                className={`lg:col-span-6 relative aspect-[16/11] overflow-hidden bg-forest-night ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={room.heroImage}
                  alt={room.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="editorial-tag bg-forest-night text-stone-cream">
                    {room.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-10 bg-forest-night/80 backdrop-blur-sm px-3 py-1 text-brass text-xs font-mono">
                  {room.priceNote}
                </div>
              </div>

              {/* Text & Features Column (6 cols) */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <span className="font-mono text-xs tracking-wide text-forest-canopy font-medium uppercase">
                    Inspired by {room.name}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-forest-night font-light mt-1">
                    {room.name}
                  </h2>
                  <p className="font-sans text-xs text-earth-bark mt-1 font-medium italic">
                    {room.subtitle}
                  </p>
                </div>

                <p className="text-sm text-forest-night/80 leading-relaxed font-sans font-light">
                  {room.shortDescription}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 py-2 text-xs font-mono text-forest-night/70 border-y border-forest-night/10">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-brass" />
                    <span>{room.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-brass" />
                    <span>{room.occupancy}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  {room.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-forest-night/80 font-sans">
                      <Check className="w-3.5 h-3.5 text-forest-canopy flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Cub litter highlight if exists */}
                {room.cubsTheme && (
                  <div className="p-3 bg-stone-cream border border-forest-night/10 text-xs font-mono text-forest-night/70">
                    <span className="font-semibold text-forest-night block mb-1">
                      {room.cubsTheme.litterTitle}
                    </span>
                    <span className="text-[11px] text-forest-night/60">
                      Cub rooms: {room.cubsTheme.rooms.map((c) => c.name).join(", ")}
                    </span>
                  </div>
                )}

                {/* Action Links */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/stay/${room.slug}`}
                    className="luxury-button-primary text-xs"
                  >
                    <span>View Room Details & Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/booking-inquiry?room=${room.slug}&category=${encodeURIComponent(
                      room.category
                    )}`}
                    className="luxury-button-secondary text-xs"
                  >
                    <span>Inquire About This Stay</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Inquiry Call to Action Banner */}
      <section className="bg-stone-sand border-t border-forest-night/10 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h3 className="font-serif text-3xl text-forest-night font-light">
            Need Guidance Choosing Your Sanctuary?
          </h3>
          <p className="text-sm text-forest-night/80 leading-relaxed font-sans font-light">
            Whether traveling as a multi-generational family seeking interconnected cottages or couples desiring private pool seclusion, our reservations team will advise the ideal stay.
          </p>
          <div className="pt-2">
            <Link href="/booking-inquiry" className="luxury-button-brass text-xs">
              <span>Submit General Booking Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
