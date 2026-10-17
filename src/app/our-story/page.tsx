import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FAMILY_STORY_HERO } from "@/content/family-story";
import { FamilyTree } from "@/components/story/FamilyTree";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jugni Family Story — The Royal Dynasty of Pench",
  description:
    "Discover the living chronicle of Jugni, the resident tigress of Khawasa buffer, and her lineage descending from the legendary Collarwali.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-20 md:py-28 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/story/jugni-tigress.jpg"
            alt="Jugni the tigress of Khawasa"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-canopy/40 border border-brass/30">
            <span className="font-mono text-xs tracking-luxury text-brass uppercase">
              The Living Chronicle
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
            {FAMILY_STORY_HERO.title}
          </h1>

          <p className="font-mono text-xs sm:text-sm text-brass tracking-wide max-w-2xl mx-auto">
            {FAMILY_STORY_HERO.subtitle}
          </p>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            {FAMILY_STORY_HERO.intro[0]} {FAMILY_STORY_HERO.intro[1]}
          </p>
        </div>
      </section>

      {/* 2. Editorial Philosophy & Respect Note */}
      <section className="py-16 bg-stone-sand border-b border-forest-night/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-4 bg-stone-cream border border-forest-night/15 flex items-start gap-3 text-xs font-mono text-forest-night/70">
            <BookOpen className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Naturalist Attribution & Owner Verification:</strong> {FAMILY_STORY_HERO.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Interactive Responsive Family Tree */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Generational Genealogy"
          title="The Royal Lineage of Jugni"
          description="Follow the generational descent from Collarwali, the Super Mom of Pench, through Patdev and Swastik, culminating in Jugni and her current litters."
        />

        <FamilyTree />
      </section>

      {/* 4. Why A Family Works So Well (Brand Rationale) */}
      <section className="py-20 bg-forest-night text-stone-cream border-t border-forest-canopy/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="The Sanctuary Rationale"
            title="How the Story Connects on Safari"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-forest-deep p-6 border border-forest-canopy/30 space-y-3">
              <span className="font-mono text-xs text-brass tracking-wider uppercase block">
                01 · The Natural Connection
              </span>
              <h3 className="font-serif text-xl text-stone-cream">
                Spoken on Every Drive
              </h3>
              <p className="text-xs text-stone-dawn/80 font-sans leading-relaxed">
                Naturalists in Pench discuss Trishul, Patdev, and Collarwali on almost every safari drive. When a guest returns to the lodge and enters a villa bearing their name, the connection needs no explanation.
              </p>
            </div>

            <div className="bg-forest-deep p-6 border border-forest-canopy/30 space-y-3">
              <span className="font-mono text-xs text-brass tracking-wider uppercase block">
                02 · An Uncopyable Identity
              </span>
              <h3 className="font-serif text-xl text-stone-cream">
                Tied to This Exact Soil
              </h3>
              <p className="text-xs text-stone-dawn/80 font-sans leading-relaxed">
                Any hotel can use tree or flower names. Only Pench Big Cat Nature Resort carries Jugni on its emblem and frames its villas around the family whose territory meets our fence line.
              </p>
            </div>

            <div className="bg-forest-deep p-6 border border-forest-canopy/30 space-y-3">
              <span className="font-mono text-xs text-brass tracking-wider uppercase block">
                03 · Return to the Family
              </span>
              <h3 className="font-serif text-xl text-stone-cream">
                A Lifelong Bond
              </h3>
              <p className="text-xs text-stone-dawn/80 font-sans leading-relaxed">
                Wildlife travelers return to Pench season after season to follow the growth of these tigers. Guests who stay in Patdev or Jugni ask for their villa by name when returning with their families.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link href="/stay" className="luxury-button-brass text-xs">
              <span>Explore Stays Named After the Family</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
