import React from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFERS_DATA } from "@/content/offers";
import { Check, X, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers & Curated Packages — Pench Big Cat Nature Resort",
  description:
    "Curated seasonal itineraries, wilderness photography masterclasses, and romantic couple retreats at Pench Big Cat Nature Resort.",
};

export default function OffersPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-16 md:py-24 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/offers/safari-expedition.jpg"
            alt="Pench Safari Jeep in Golden Light"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Curated Wilderness Journeys
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
            Offers & Packages
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            Thoughtfully structured multi-day itineraries combining luxury accommodation, private naturalist drives, bush meals, and restorative forest therapies.
          </p>
          <div className="pt-2">
            <span className="editorial-tag-dark">
              Tariff Notice: Contact for price · No fabricated discounts
            </span>
          </div>
        </div>
      </section>

      {/* 2. Editorial Package Cards */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {OFFERS_DATA.map((offer) => (
          <div
            key={offer.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-stone-sand border border-forest-night/10 p-6 sm:p-10 md:p-12 shadow-sm items-center"
          >
            {/* Visual Stage (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-forest-night border border-forest-night/10">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="editorial-tag bg-forest-night text-stone-cream">
                  {offer.duration}
                </span>
              </div>
            </div>

            {/* Narrative & Inclusions (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="font-mono text-xs text-forest-canopy tracking-wide uppercase font-semibold">
                  Curated Itinerary
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest-night font-light mt-1">
                  {offer.title}
                </h2>
                <p className="text-xs font-sans text-earth-bark italic mt-1 font-medium">
                  {offer.tagline}
                </p>
              </div>

              <p className="text-sm text-forest-night/85 font-sans leading-relaxed font-light">
                {offer.description}
              </p>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-forest-night/10 text-xs">
                {/* Inclusions */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-forest-canopy font-semibold uppercase tracking-wider block">
                    Curated Inclusions
                  </span>
                  <ul className="space-y-1.5 text-forest-night/80 font-sans">
                    {offer.inclusions.slice(0, 4).map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-forest-canopy flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-forest-night/60 font-semibold uppercase tracking-wider block">
                    Exclusions
                  </span>
                  <ul className="space-y-1.5 text-forest-night/70 font-sans">
                    {offer.exclusions.slice(0, 3).map((exc, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-earth-bark/60 flex-shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Validity & Pricing Note */}
              <div className="p-3 bg-stone-cream border border-forest-night/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-forest-night/70 gap-2">
                <span>Validity: {offer.validity}</span>
                <span className="text-brass font-semibold uppercase">
                  Tariff: Contact for price
                </span>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href={`/booking-inquiry?specialRequest=${encodeURIComponent(
                    `Inquiry regarding ${offer.title} (${offer.duration})`
                  )}`}
                  className="luxury-button-brass text-xs"
                >
                  <span>Inquire for Package Tariff</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Bespoke Itinerary Customization Callout */}
      <section className="py-16 bg-forest-night text-stone-cream border-t border-forest-canopy/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Bespoke Wilderness Planning
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-stone-cream font-light">
            Desire a Customized Expedition?
          </h3>
          <p className="text-sm text-stone-dawn/80 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            From extended 7-day tiger tracking workshops to multi-villa family celebrations, our resident naturalists and reservations managers will build a customized program.
          </p>
          <div className="pt-2">
            <Link href="/booking-inquiry" className="luxury-button-secondary text-xs text-stone-cream border-stone-cream/30 hover:border-stone-cream hover:bg-stone-cream hover:text-forest-night">
              <span>Submit Custom Itinerary Inquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
