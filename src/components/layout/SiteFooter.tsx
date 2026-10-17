import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESORT_CONTACT } from "@/content/navigation";
import { ROOMS_DATA } from "@/content/rooms";
import { MapPin, Mail, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-forest-night text-stone-cream border-t border-forest-canopy/40 relative overflow-hidden">
      {/* Subtle background ambient grain & light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-canopy/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-forest-canopy/30">
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="Pench Big Cat Nature Resort Seal"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-wide uppercase text-stone-cream font-medium">
                  Pench Big Cat
                </h3>
                <p className="font-mono text-[10px] tracking-luxury text-brass uppercase">
                  Nature Resort · Estd 2024
                </p>
              </div>
            </Link>

            <p className="text-stone-dawn/80 text-sm leading-relaxed font-sans max-w-sm">
              An intimate wilderness sanctuary on the Khawasa buffer of Pench Tiger Reserve. Inspired by Jugni and her royal lineage, crafted for thoughtful travelers seeking deep communion with the wild.
            </p>

            <div className="pt-2">
              <span className="editorial-tag-dark">
                Coordinates: {RESORT_CONTACT.coordinates}
              </span>
            </div>
          </div>

          {/* Column 2: Accommodations & Villas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs tracking-luxury text-brass uppercase font-semibold">
              The Accommodations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {ROOMS_DATA.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/stay/${room.slug}`}
                    className="text-stone-dawn/80 hover:text-stone-cream transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span>{room.name}</span>
                    <span className="text-[11px] font-mono text-stone-dawn/50 group-hover:text-brass transition-colors">
                      {room.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/stay"
                className="text-xs font-mono text-brass hover:text-brass-light flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Resort Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs tracking-luxury text-brass uppercase font-semibold">
              Explore & Journal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/our-story" className="text-stone-dawn/80 hover:text-stone-cream transition-colors">
                  Jugni Family Story
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-stone-dawn/80 hover:text-stone-cream transition-colors">
                  Dining & Wellness
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-stone-dawn/80 hover:text-stone-cream transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/safari-nearby" className="text-stone-dawn/80 hover:text-stone-cream transition-colors">
                  Safari & Region
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-stone-dawn/80 hover:text-stone-cream transition-colors">
                  Seasonal Retreats
                </Link>
              </li>
              <li>
                <Link href="/booking-inquiry" className="text-stone-dawn/80 hover:text-stone-cream transition-colors">
                  Booking Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Proximity (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs tracking-luxury text-brass uppercase font-semibold">
              Location & Contact
            </h4>
            <div className="space-y-3 text-sm text-stone-dawn/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass flex-shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">{RESORT_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass flex-shrink-0" />
                <span className="text-xs">{RESORT_CONTACT.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass flex-shrink-0" />
                <span className="text-xs">{RESORT_CONTACT.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/booking-inquiry"
                className="luxury-button-brass text-[11px] w-full text-center py-2.5"
              >
                <span>Make a Booking Inquiry</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Operational Disclaimer & Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-dawn/60">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {new Date().getFullYear()} Pench Big Cat Nature Resort. All rights reserved.</p>
            <span className="hidden md:inline">·</span>
            <Link href="/privacy-policy" className="hover:text-stone-cream transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-stone-cream transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-stone-dawn/50">
            <ShieldCheck className="w-3.5 h-3.5 text-brass/70" />
            <span>Formal inquiry gateway · No automated payment processing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
