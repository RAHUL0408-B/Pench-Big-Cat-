import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESORT_AMENITIES, NEARBY_EXPERIENCES } from "@/content/facilities";
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences & Amenities — Big Cat Nature Resort",
  description:
    "Discover amenities and experiences at Pench Big Cat Nature Resort: Thehrav Spa, Neel Pool, Bargad Restaurant, Abha Salon, Chhalaang Gym, and jungle safaris.",
};

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amenities/bargad-dining.jpg"
            alt="Experiences & Amenities at Pench Big Cat Nature Resort"
            fill
            priority
            className="object-cover opacity-35 animate-kenburns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-canopy/40 border border-brass/30">
              <span className="font-mono text-xs tracking-luxury text-brass uppercase">
                Experiences &amp; Amenities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
              Experiences &amp; Amenities at Pench Big Cat Nature Resort
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-dawn/90 font-sans font-light leading-relaxed">
              A stay at Pench Big Cat Nature Resort is an opportunity to{" "}
              <span className="highlight-gold font-normal">slow down, reconnect with nature</span>{" "}
              and discover experiences beyond your accommodation. From moments of relaxation and
              wellness to{" "}
              <span className="text-stone-cream font-medium">outdoor adventures and local activities</span>
              , make every part of your Pench getaway memorable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Amenities in the Resort */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="On-Site Facilities"
            title="Amenities in the Resort"
            description="Designed to offer comfort, leisure, and wellness throughout your stay."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESORT_AMENITIES.map((amenity, idx) => (
            <ScrollReveal key={amenity.id} animation="fade-up" delay={idx * 100}>
              <div className="bg-stone-sand border border-forest-night/10 overflow-hidden flex flex-col justify-between hover:border-brass/70 transition-all duration-300 resort-card-lift h-full group">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-night">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className="object-cover resort-image-hover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="editorial-tag bg-forest-night/90 text-stone-cream border-brass/40 backdrop-blur-sm">
                        {amenity.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl text-forest-night font-medium group-hover:text-forest-canopy transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-sm text-forest-night/85 font-sans leading-relaxed font-light">
                      {amenity.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/booking-inquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-forest-canopy hover:text-brass font-medium pt-3 border-t border-forest-night/10 w-full justify-between transition-colors"
                  >
                    <span>Enquire With Team</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Experiences Nearby the Resort */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden border-t border-forest-canopy/40 bg-forest-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Pench Adventures"
              title="Experiences Nearby the Resort"
              description="Discover the beauty of Pench beyond the property with outdoor excursions, nature trails, and local culture."
              theme="dark"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEARBY_EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={exp.id} animation="fade-up" delay={idx * 100}>
                <div className="bg-forest-deep border border-forest-canopy/40 overflow-hidden flex flex-col justify-between hover:border-brass/70 transition-all duration-300 resort-card-lift h-full group">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-forest-night">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover resort-image-hover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-2xl text-stone-cream font-medium group-hover:text-brass transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-stone-dawn/80 font-sans leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-forest-canopy/30 flex items-center justify-between text-xs font-mono text-brass">
                      <span>Pench Experience</span>
                      <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Make Every Moment Count & Plan Your Stay CTA */}
      <section className="py-24 bg-stone-sand border-t border-forest-night/10 text-center">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brass" />
              <span className="font-mono text-xs uppercase tracking-luxury text-forest-canopy">
                Jungle Getaway
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-night leading-tight">
              Make Every Moment in Pench Count
            </h2>

            <p className="text-base sm:text-lg text-forest-night/85 font-sans font-light leading-relaxed">
              Whether you seek <span className="text-forest-canopy font-medium">outdoor adventure</span>,{" "}
              <span className="highlight-gold font-normal">peaceful moments in nature</span>, wellness
              or time to <span className="highlight-gold font-normal">simply unwind</span>, discover
              experiences that make your stay at Pench Big Cat Nature Resort your own.
            </p>

            <div className="pt-4 space-y-4">
              <h3 className="font-serif text-2xl text-brass font-normal">Plan Your Stay</h3>
              <p className="text-sm text-forest-night/80 font-sans font-light">
                Explore our accommodations and contact our team to learn more about the experiences
                available during your visit.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/stay" className="luxury-button-brass text-xs py-3.5 px-8">
                  <span>Explore Accommodations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/booking-inquiry" className="luxury-button-secondary text-xs py-3.5 px-8">
                  <span>Inquire About Experiences</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
