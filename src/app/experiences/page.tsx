import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FACILITIES_DATA } from "@/content/facilities";
import { ArrowUpRight, Clock, MapPin, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences & Amenities — Dining, Spa & Wellness",
  description:
    "Immerse yourself in our estate facilities: Bargad dining hearth, Neel natural stone pool, Thehrav Ayurvedic spa, Abha salon, and Chhalaang open-air gym.",
};

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amenities/bargad-dining.jpg"
            alt="Bargad Restaurant Lantern Dining"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Sanctuary Living
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
            Experiences & Amenities
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            Conceived as natural gathering grounds where wilderness rituals, regional culinary heritage, and restorative wellness unfold at the rhythm of the jungle.
          </p>
        </div>
      </section>

      {/* 2. Facility Showcases (Alternating Editorial Layouts) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {FACILITIES_DATA.map((facility, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={facility.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-stone-sand border border-forest-night/10 p-6 sm:p-10 md:p-12 shadow-sm"
            >
              {/* Image Stage (6 cols) */}
              <div
                className={`lg:col-span-6 relative aspect-[16/11] overflow-hidden bg-forest-night ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="editorial-tag bg-forest-night text-stone-cream">
                    {facility.category}
                  </span>
                </div>
              </div>

              {/* Text Information (6 cols) */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <span className="font-mono text-xs tracking-wide text-forest-canopy font-medium uppercase">
                    {facility.category}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-forest-night font-light mt-1">
                    {facility.name}
                  </h2>
                  <p className="font-mono text-xs text-brass tracking-wider mt-1 uppercase">
                    {facility.meaning}
                  </p>
                  <p className="text-xs font-sans text-earth-bark italic mt-1">
                    {facility.tagline}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-forest-night/85 font-sans leading-relaxed font-light">
                  {facility.description.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-forest-night/10">
                  {facility.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs text-forest-night/80 font-sans"
                    >
                      <Check className="w-3.5 h-3.5 text-forest-canopy flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hours & Location Strip */}
                <div className="p-3 bg-stone-cream border border-forest-night/10 text-xs font-mono text-forest-night/70 space-y-1">
                  {facility.hours && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brass" />
                      <span>{facility.hours}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brass" />
                    <span>{facility.locationOnProperty}</span>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <div className="pt-2">
                  <Link
                    href={`/booking-inquiry?specialRequest=${encodeURIComponent(
                      `Inquiry regarding ${facility.name} (${facility.category})`
                    )}`}
                    className="luxury-button-secondary text-xs"
                  >
                    <span>Inquire About {facility.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Booking Inquiry Banner */}
      <section className="bg-forest-night text-stone-cream py-16 text-center border-t border-forest-canopy/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-stone-cream font-light">
            Plan Your Wilderness Gathering
          </h3>
          <p className="text-sm text-stone-dawn/80 leading-relaxed font-sans font-light">
            Whether arranging a private dining experience under Bargad or booking rejuvenating botanical therapies at Thehrav, our reservations team will coordinate every detail.
          </p>
          <div className="pt-2">
            <Link href="/booking-inquiry" className="luxury-button-brass text-xs">
              <span>Make an Inquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
