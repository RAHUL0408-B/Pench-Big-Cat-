import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/content/services";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Users, Heart, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Destination Weddings, Corporate Stays & School Trips",
  description:
    "Explore services at Pench Big Cat Nature Resort: Destination weddings, corporate events & team stays, and educational school trips in Pench.",
};

const SERVICE_ICONS = [Heart, Users, BookOpen];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amenities/bargad-dining.jpg"
            alt="Services at Pench Big Cat Nature Resort"
            fill
            priority
            className="object-cover opacity-30 animate-kenburns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-canopy/40 border border-brass/30">
              <span className="font-mono text-xs tracking-luxury text-brass uppercase">
                Resort Services
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
              Services at Big Cat Nature Resort
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-dawn/90 font-sans font-light leading-relaxed">
              From celebrating cherished beginnings and hosting revitalizing corporate retreats to
              inspiring educational school expeditions, explore memorable gatherings in the heart of
              Pench.
            </p>
          </ScrollReveal>

          {/* Jump Links */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {SERVICES_DATA.map((srv) => (
                <a
                  key={srv.id}
                  href={`#${srv.slug}`}
                  className="px-4 py-2 bg-stone-cream/10 border border-brass/40 text-stone-cream hover:bg-brass hover:text-forest-night text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  {srv.title}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Detailed Service Sections */}
      <div className="space-y-24 py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];

          return (
            <ScrollReveal
              key={service.id}
              animation={isEven ? "fade-right" : "fade-left"}
              delay={index * 100}
            >
              <section
                id={service.slug}
                className="scroll-mt-32 bg-stone-sand border border-forest-night/10 p-6 sm:p-10 md:p-12 shadow-sm resort-card-lift"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Visual Image Stage (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative aspect-[16/11] overflow-hidden bg-forest-night border border-forest-night/15 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover resort-image-hover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="editorial-tag bg-forest-night/90 text-stone-cream flex items-center gap-1.5 border-brass/40 backdrop-blur-sm">
                        <Icon className="w-3.5 h-3.5 text-brass" />
                        <span>0{index + 1}</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Information & Highlights (7 cols) */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <span className="font-mono text-xs tracking-wider text-brass font-medium uppercase">
                        Pench Special Event &amp; Gathering
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl text-forest-night font-light">
                        {service.title}
                      </h2>
                      <p className="font-serif italic text-lg sm:text-xl text-brass pt-1 font-normal">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-base sm:text-lg text-forest-night/85 font-sans leading-relaxed font-light">
                      {service.overview}
                    </p>

                    {/* Highlights Section */}
                    <div className="space-y-4 pt-4 border-t border-forest-night/10">
                      <h3 className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                        {service.highlightsTitle}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-4 bg-stone-cream border border-forest-night/10 space-y-1.5 hover:border-brass/50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-forest-canopy flex-shrink-0" />
                              <h4 className="font-serif text-base text-forest-night font-medium">
                                {h.title}
                              </h4>
                            </div>
                            <p className="text-xs text-forest-night/80 font-sans leading-relaxed font-light pl-6">
                              {h.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Callout */}
                    <div className="p-6 bg-forest-night text-stone-cream space-y-3 border-l-4 border-brass">
                      <h4 className="font-serif text-xl text-stone-cream font-medium">
                        {service.ctaTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-dawn/85 font-sans leading-relaxed font-light">
                        {service.ctaText}
                      </p>
                      <div className="pt-2">
                        <Link
                          href={`/booking-inquiry?specialRequest=${encodeURIComponent(
                            `Inquiry regarding ${service.title}`
                          )}`}
                          className="luxury-button-brass text-xs py-3 px-6"
                        >
                          <span>Discuss Requirements</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          );
        })}
      </div>

      {/* 3. Final Overall Inquiry Section */}
      <section className="bg-stone-sand border-t border-forest-night/10 py-20 text-center">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brass" />
              <span className="font-mono text-xs uppercase tracking-luxury text-forest-canopy">
                Tailored Events
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-forest-night font-light">
              Plan Your Group Visit or Special Occasion
            </h3>

            <p className="text-sm sm:text-base text-forest-night/80 leading-relaxed font-sans font-light">
              Connect directly with our hospitality and events team to discuss your group size,
              preferred dates, customized catering, and activity schedules.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking-inquiry" className="luxury-button-brass text-xs py-3.5 px-8">
                <span>Make an Event Inquiry</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/contact" className="luxury-button-secondary text-xs py-3.5 px-8">
                <span>Contact Reservations</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
