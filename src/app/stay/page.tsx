import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROOMS_DATA } from "@/content/rooms";
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation Listing — Stays Inspired by the Wild",
  description:
    "Find your place in Pench at Pench Big Cat Nature Resort. Choose from villas, arched cottages, verandah rooms, and bamboo cottages inspired by Jugni and her family.",
};

export default function StayPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-stone-cream">
      {/* 1. Page Header Hero */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rooms/jugni-villa.jpg"
            alt="Pench Big Cat Nature Resort Accommodations"
            fill
            priority
            className="object-cover opacity-35 animate-kenburns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-canopy/40 border border-brass/30">
              <span className="font-mono text-xs tracking-luxury text-brass uppercase">
                Stays Inspired by the Wild
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
              Find Your Place in Pench
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="space-y-4 max-w-3xl mx-auto text-sm sm:text-base text-stone-dawn/90 font-sans font-light leading-relaxed">
              <p>
                Every stay at Pench Big Cat Nature Resort brings you closer to the{" "}
                <span className="highlight-gold font-normal">natural charm of Pench</span>. Choose
                from distinctive accommodations inspired by the landscape, the tranquillity of the
                forest and the story of Jugni and her family.
              </p>
              <p className="text-stone-dawn/75 text-xs sm:text-sm">
                Whether you&rsquo;re planning a family getaway, a romantic escape or a peaceful break
                surrounded by nature, find a stay that feels right for your Pench experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Explore Our Stays Section Heading */}
      <section className="pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Our Accommodations"
            title="Explore Our Stays"
            description="Each accommodation is thoughtfully designed to offer comfort, spacious surroundings, and a personal connection to Pench."
          />
        </ScrollReveal>
      </section>

      {/* 3. Room Collection Portfolio (5 Accommodations) */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {ROOMS_DATA.map((room, index) => {
          const isEven = index % 2 === 0;

          return (
            <ScrollReveal
              key={room.id}
              animation={isEven ? "fade-right" : "fade-left"}
              delay={index * 100}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-stone-sand border border-forest-night/10 p-6 sm:p-8 md:p-10 shadow-sm hover:border-brass/50 transition-all duration-300 resort-card-lift">
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
                    className="object-cover resort-image-hover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="editorial-tag bg-forest-night/90 text-stone-cream border-brass/40 backdrop-blur-sm">
                      {room.category}
                    </span>
                  </div>
                </div>

                {/* Text Column (6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs tracking-wider text-brass font-medium uppercase">
                      {room.category}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-forest-night font-light">
                      {room.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-forest-night/85 leading-relaxed font-sans font-light">
                    {room.shortDescription}
                  </p>

                  {/* Ideal For Highlight */}
                  {room.idealFor && (
                    <div className="p-4 bg-stone-cream border-l-2 border-brass border-y border-r border-forest-night/10">
                      <span className="font-mono text-xs text-brass font-semibold tracking-wider uppercase block mb-0.5">
                        Ideal For
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-forest-night/85 font-medium">
                        {room.idealFor}
                      </span>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/stay/${room.slug}`}
                      className="luxury-button-primary text-xs"
                    >
                      <span>View Room Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/booking-inquiry?room=${room.slug}`}
                      className="luxury-button-secondary text-xs"
                    >
                      <span>Enquire Availability</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* 4. Story Feature Section */}
      <section className="py-20 md:py-24 bg-forest-night text-stone-cream border-t border-forest-canopy/40 relative overflow-hidden bg-forest-texture">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-canopy/40 border border-brass/30">
              <Compass className="w-3.5 h-3.5 text-brass" />
              <span className="font-mono text-xs tracking-luxury text-brass uppercase">
                Stories of Pench
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-cream leading-tight">
              Our Accommodations Explore A Story of a Tiger Family in Pench
            </h2>

            <p className="text-base sm:text-lg text-stone-dawn/85 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Our accommodation names draw inspiration from{" "}
              <span className="highlight-gold font-normal">Jugni and her family</span>, connecting
              your stay to the wildlife stories that make Pench memorable. Complete your getaway
              with time spent enjoying the resort&rsquo;s spaces and facilities, including the{" "}
              <span className="text-stone-cream font-medium">
                swimming pool, restaurant and other leisure amenities
              </span>{" "}
              available during your visit.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Plan Your Stay CTA Section */}
      <section className="bg-stone-sand border-t border-forest-night/10 py-20 text-center">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brass" />
              <span className="font-mono text-xs uppercase tracking-luxury text-forest-canopy">
                Start Planning
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-forest-night font-light">
              Plan Your Stay at Pench Big Cat Nature Resort
            </h3>

            <p className="text-sm sm:text-base text-forest-night/80 leading-relaxed font-sans font-light">
              Discover your preferred accommodation and contact our team to enquire about availability,
              rates and reservations.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking-inquiry" className="luxury-button-brass text-xs py-3.5 px-8">
                <span>Make an Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="luxury-button-secondary text-xs py-3.5 px-8">
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
