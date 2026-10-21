import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Nature-Themed Retreat Near Pench",
  description:
    "Big Cat Nature Resort is a nature-themed retreat near the MP–Maharashtra border, close to Khursapar Gate and Teliya & Khawasa Buffer Zone.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Guest-Centric Hospitality",
    description:
      "We put our guests at the heart of everything we do, creating a warm, welcoming and comfortable experience from arrival to departure.",
    num: "01",
  },
  {
    icon: Leaf,
    title: "Connection with Nature",
    description:
      "We value the natural surroundings of Pench and strive to create a stay that allows guests to enjoy open spaces, greenery and the peaceful side of the wilderness.",
    num: "02",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Quality",
    description:
      "From thoughtfully designed accommodations to resort amenities, we focus on providing quality, comfort and convenience throughout the stay.",
    num: "03",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. HERO INTRO */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/property/resort-property-view.jpg"
            alt="Big Cat Nature Resort natural surroundings"
            fill
            priority
            className="object-cover opacity-35 animate-kenburns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-canopy/40 border border-brass/30">
              <span className="font-mono text-xs tracking-luxury text-brass uppercase">
                About Big Cat Nature Resort
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
              Nature-Themed Retreat Near Pench
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-dawn/80 pt-1">
              <MapPin className="w-4 h-4 text-brass" />
              <span>Near MP–Maharashtra Border &middot; Khursapar Gate &middot; Buffer Zones</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ABOUT INTRO NARRATIVE */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (5 cols) */}
          <ScrollReveal animation="fade-right" className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-night border border-forest-night/10 shadow-2xl resort-card-lift">
              <Image
                src="/images/property/bamboo-path.jpg"
                alt="Spacious pathways and greenery at Big Cat Nature Resort"
                fill
                className="object-cover resort-image-hover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="editorial-tag bg-forest-night/90 text-stone-cream border-brass/50 backdrop-blur-sm">
                  Open Spaces &amp; Pathways
                </span>
              </div>
            </div>

            {/* Secondary Floating Image */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-56 h-44 bg-forest-night border-2 border-stone-cream shadow-2xl overflow-hidden animate-float-slow">
              <Image
                src="/images/rooms/jugni-villa.jpg"
                alt="Accommodations at Big Cat Nature Resort"
                fill
                className="object-cover resort-image-hover"
                sizes="230px"
              />
              <div className="absolute inset-0 border border-brass/25 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Narrative Content (7 cols) */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Our Story & Philosophy"
              title="A Peaceful Retreat in the Wild"
              align="left"
            />

            <div className="space-y-5 text-base sm:text-lg text-forest-night/85 leading-relaxed font-sans font-light">
              <p>
                Big Cat Nature Resort is a{" "}
                <span className="highlight-gold font-normal">nature-themed retreat</span> located
                near the Madhya Pradesh–Maharashtra border, close to{" "}
                <span className="text-forest-canopy font-medium">Khursapar Gate</span> and the{" "}
                <span className="text-forest-canopy font-medium">
                  Teliya &amp; Khawasa Buffer Zone
                </span>
                . Designed around open spaces, spacious pathways and a{" "}
                <span className="highlight-gold font-normal">peaceful natural setting</span>, the
                resort offers a comfortable place to unwind while experiencing the beauty of Pench.
              </p>
              <p>
                Our focus is to create a stay where guests can enjoy the excitement of a Pench getaway
                while having the space and comforts to relax at their own pace. From{" "}
                <span className="highlight-gold font-normal">
                  villas and Bamboo Rooms to couple cottages
                </span>
                , Big Cat Nature Resort offers a choice of accommodations that bring a distinct
                character to your stay. The open surroundings and generous spaces allow guests to slow
                down, breathe easy and enjoy the{" "}
                <span className="text-forest-canopy font-medium">
                  quieter side of a wildlife holiday
                </span>
                .
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/stay" className="luxury-button-primary text-xs">
                <span>View Accommodations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/booking-inquiry" className="luxury-button-secondary text-xs">
                <span>Plan Your Stay</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. VISION SECTION */}
      <section className="py-20 bg-stone-sand border-y border-forest-night/10 relative overflow-hidden">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-cream border border-forest-night/15">
              <Sparkles className="w-3.5 h-3.5 text-brass" />
              <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase">
                Our Vision
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-night leading-tight">
              Vision
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-forest-night/90 leading-relaxed font-normal pt-2">
              &ldquo;To create{" "}
              <span className="highlight-gold font-normal">memorable nature retreats</span> where
              guests can experience the beauty of the wilderness with{" "}
              <span className="text-forest-canopy font-medium">
                comfort, space and genuine hospitality
              </span>
              .&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. VALUES SECTION */}
      <section className="py-24 md:py-32 bg-forest-night text-stone-cream relative overflow-hidden bg-forest-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Vision & Values"
              title="Our Values"
              description="The guiding principles that shape every guest experience at Big Cat Nature Resort."
              theme="dark"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.num} animation="fade-up" delay={idx * 150}>
                  <div className="bg-forest-deep border border-forest-canopy/40 p-8 flex flex-col justify-between space-y-6 hover:border-brass/70 transition-all duration-300 resort-card-lift h-full group">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-brass/10 border border-brass/30 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-forest-night transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-brass tracking-widest">{val.num}</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl text-stone-cream font-medium group-hover:text-brass transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-sm text-stone-dawn/80 font-sans leading-relaxed font-light">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-stone-cream border-t border-forest-night/10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <SectionHeading
              eyebrow="Experience Pench"
              title="Begin Your Jungle Getaway"
              description="Reach out to our reservations team to check availability and arrange your comfortable stay near Khursapar Gate."
            />

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking-inquiry" className="luxury-button-brass text-xs py-3.5 px-8">
                <span>Make an Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/stay" className="luxury-button-secondary text-xs py-3.5 px-8">
                <span>Explore Accommodations</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
