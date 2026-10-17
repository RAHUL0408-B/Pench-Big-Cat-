import React from "react";
import Link from "next/link";
import { RESORT_CONTACT } from "@/content/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Plane,
  Train,
  ArrowUpRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location & Contact — Reaching Pench Big Cat Nature Resort",
  description:
    "Route directions, verified distances from Nagpur and Jabalpur airports, contact coordinates, and safari gate proximity for Pench Big Cat Nature Resort.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-16 md:py-24 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Wayfinding & Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
            Location & Contact
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            Positioned along the Khawasa buffer of Pench National Park, on the quiet boundary of the Teliya territory where Jugni roams.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Route Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-stone-sand border border-forest-night/10 p-8 sm:p-10 space-y-8 shadow-sm">
            <div className="space-y-2 border-b border-forest-night/10 pb-6">
              <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                Resort Address & Coordinates
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-night font-light">
                Pench Big Cat Nature Resort
              </h2>
            </div>

            <div className="space-y-6 text-sm text-forest-night/85 font-sans">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block font-serif text-base text-forest-night">
                    Physical Location
                  </strong>
                  <p className="text-xs text-forest-night/80 leading-relaxed">
                    {RESORT_CONTACT.address}
                  </p>
                  <p className="font-mono text-[11px] text-forest-canopy">
                    GPS Coordinates: {RESORT_CONTACT.coordinates}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block font-serif text-base text-forest-night">
                    Telephone Assistance
                  </strong>
                  <p className="font-mono text-xs">{RESORT_CONTACT.phone}</p>
                  <p className="text-[11px] text-forest-night/60">
                    Front Desk & Safari Planning: 07:00 – 21:00 hrs IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block font-serif text-base text-forest-night">
                    Electronic Inquiries
                  </strong>
                  <p className="font-mono text-xs">{RESORT_CONTACT.email}</p>
                  <p className="text-[11px] text-forest-night/60">
                    Direct communications with resort management
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block font-serif text-base text-forest-night">
                    Standard Timings
                  </strong>
                  <p className="text-xs">
                    Check-in: {RESORT_CONTACT.checkIn} | Check-out: {RESORT_CONTACT.checkOut}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-forest-night/10">
              <Link
                href="/booking-inquiry"
                className="luxury-button-brass w-full text-center text-xs py-3.5"
              >
                <span>Go to Booking Inquiry Form</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Transportation & Verified Distance Guide (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-xs tracking-luxury text-forest-canopy uppercase font-semibold">
                Access Routes
              </span>
              <h2 className="font-serif text-3xl text-forest-night font-light mt-1">
                Reaching the Sanctuary
              </h2>
              <p className="text-sm text-forest-night/70 font-sans mt-1">
                Pench Tiger Reserve spans the southern border of Madhya Pradesh and Maharashtra. The resort is strategically accessed via National Highway 44 (NH44).
              </p>
            </div>

            <div className="space-y-4">
              {/* Airport 1: Nagpur */}
              <div className="bg-stone-sand p-6 border border-forest-night/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-brass" />
                    <h3 className="font-serif text-lg text-forest-night font-medium">
                      Dr. Babasaheb Ambedkar International Airport, Nagpur (NAG)
                    </h3>
                  </div>
                  <span className="editorial-tag">Closest Airport</span>
                </div>
                <p className="text-xs text-forest-night/80 font-sans leading-relaxed">
                  Approx. 100 km (2 to 2.5 hours drive via NH44 four-lane highway). Excellent daily direct domestic flights from Mumbai, Delhi, Bengaluru, Hyderabad, and Kolkata. Private chauffeur transfers can be coordinated on request.
                </p>
              </div>

              {/* Airport 2: Jabalpur */}
              <div className="bg-stone-sand p-6 border border-forest-night/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-brass" />
                    <h3 className="font-serif text-lg text-forest-night font-medium">
                      Dumna Airport, Jabalpur (JLR)
                    </h3>
                  </div>
                  <span className="editorial-tag">Alternative Airport</span>
                </div>
                <p className="text-xs text-forest-night/80 font-sans leading-relaxed">
                  Approx. 195 km (4 to 4.5 hours drive via NH44). Direct flights connecting major north and central Indian hubs.
                </p>
              </div>

              {/* Railway Connections */}
              <div className="bg-stone-sand p-6 border border-forest-night/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-brass" />
                  <h3 className="font-serif text-lg text-forest-night font-medium">
                    Railway Junctions (Nagpur & Seoni)
                  </h3>
                </div>
                <p className="text-xs text-forest-night/80 font-sans leading-relaxed">
                  Nagpur Central Junction (95 km) is one of the premier rail junctions in India with express connections from all metropolitan centers. Seoni Railway Station is 35 km away.
                </p>
              </div>

              {/* Safari Gate Proximity */}
              <div className="bg-stone-cream p-5 border border-brass/40 text-xs font-mono text-forest-night/80 space-y-1">
                <strong className="text-forest-night block uppercase tracking-wider">
                  Safari Gate Proximities:
                </strong>
                <p>• Khawasa Buffer Gate: Directly adjacent (under 5 minutes)</p>
                <p>• Turia Core Gate: 14 km (approx. 20 minutes)</p>
                <p>• Karmajhiri Core Gate: 45 km (approx. 1 hour)</p>
                <p>• Jamtara Core Gate: 60 km (approx. 1.25 hours)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
