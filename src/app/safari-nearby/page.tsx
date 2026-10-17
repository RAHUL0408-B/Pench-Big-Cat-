import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ATTRACTIONS_DATA, SAFARI_GUIDELINES } from "@/content/attractions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  ArrowUpRight,
  Sun,
  CloudRain,
  Snowflake,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safari & Nearby Attractions — Exploring Pench Tiger Country",
  description:
    "Comprehensive guide to Turia gate, Khawasa buffer, Totladoh Dam, Pachdhar potters' village, and seasonal safari planning at Pench Big Cat Nature Resort.",
};

export default function SafariNearbyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-16 md:py-24 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-forest-mist.jpg"
            alt="Pench National Park Misty Landscape"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            The Land of Mowgli & Kipling
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
            Safari & Region
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            Spanning the central Indian saturation of teak, sal, and mahua forests, Pench is celebrated for legendary wildlife cinema, historic gates, and peaceful cultural hamlets.
          </p>
        </div>
      </section>

      {/* 2. Official Safari Regulations Strip */}
      <section className="bg-stone-sand border-b border-forest-night/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFARI_GUIDELINES.map((item, idx) => (
              <div key={idx} className="space-y-1.5 text-xs font-sans">
                <span className="font-mono text-[10px] text-brass uppercase tracking-wide font-semibold block">
                  {item.title}
                </span>
                <p className="text-forest-night/80 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Attractions & Gates Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Points of Interest"
          title="Sanctuaries, Gates & Hamlets"
          description="Explore verified historical gates, reservoir waters, and tribal artisan settlements surrounding the resort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTRACTIONS_DATA.map((attraction) => (
            <div
              key={attraction.id}
              className="group bg-stone-sand border border-forest-night/10 overflow-hidden flex flex-col justify-between shadow-sm hover:border-forest-canopy/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-forest-night">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="editorial-tag bg-forest-night text-stone-cream">
                      {attraction.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-forest-canopy">
                      <MapPin className="w-3.5 h-3.5 text-brass" />
                      <span>{attraction.distance}</span>
                      <span>·</span>
                      <span>{attraction.driveTime}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-forest-night font-medium">
                      {attraction.title}
                    </h3>
                  </div>

                  <p className="text-xs text-forest-night/80 font-sans leading-relaxed font-light">
                    {attraction.description}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-forest-night/10">
                    {attraction.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="text-[11px] font-mono text-forest-night/70">
                        • {h}
                      </p>
                    ))}
                  </div>

                  {attraction.officialTip && (
                    <div className="p-2.5 bg-stone-cream border border-brass/30 text-[10px] font-mono text-earth-bark">
                      <strong>Tracker Tip:</strong> {attraction.officialTip}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/booking-inquiry?specialRequest=${encodeURIComponent(
                    `Inquiry regarding visits to ${attraction.title}`
                  )}`}
                  className="luxury-button-secondary w-full text-center text-xs py-2.5"
                >
                  <span>Inquire About Safari Guidance</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Seasonal Visitor Information */}
      <section className="py-20 bg-forest-night text-stone-cream border-t border-forest-canopy/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Seasons of Pench"
            title="When to Experience Tiger Country"
            description="Pench transforms dramatically across the annual seasons. Plan your journey according to your weather and wildlife preferences."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-forest-deep p-6 border border-forest-canopy/30 space-y-3">
              <div className="flex items-center gap-2 text-brass">
                <Snowflake className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Oct – Feb · Winter
                </span>
              </div>
              <h3 className="font-serif text-xl text-stone-cream">
                Crisp Mornings & Golden Light
              </h3>
              <p className="text-xs text-stone-dawn/80 font-sans leading-relaxed">
                Chilly dawn drives with mist rising over the Wainganga river. Lush green foliage, vibrant migratory bird life, and pleasant afternoons for village walks.
              </p>
            </div>

            <div className="bg-forest-deep p-6 border border-forest-canopy/30 space-y-3">
              <div className="flex items-center gap-2 text-brass">
                <Sun className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Mar – Jun · Summer
                </span>
              </div>
              <h3 className="font-serif text-xl text-stone-cream">
                Peak Predator Sightings
              </h3>
              <p className="text-xs text-stone-dawn/80 font-sans leading-relaxed">
                As waterholes recede, big cats and cubs frequent permanent waterbodies like Neel and Baghin Nala. Dry golden teak forest provides unmatched visibility for photographers.
              </p>
            </div>

            <div className="bg-forest-deep p-6 border border-forest-canopy/30 space-y-3">
              <div className="flex items-center gap-2 text-brass">
                <CloudRain className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Jul – Sep · Monsoon
                </span>
              </div>
              <h3 className="font-serif text-xl text-stone-cream">
                Buffer Greenery & Rain
              </h3>
              <p className="text-xs text-stone-dawn/80 font-sans leading-relaxed">
                Core gates close for breeding season, while the adjacent Khawasa buffer remains open. Emerald forest renewal, roaring nullahs, and quiet sanctuary seclusion.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link href="/booking-inquiry" className="luxury-button-brass text-xs">
              <span>Inquire About Seasonal Travel</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
