import React, { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Loader2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Inquiry — Request Your Pench Expedition",
  description:
    "Submit an official booking inquiry to Pench Big Cat Nature Resort. Our reservations team will review room availability and provide personalized tariff proposals.",
};

export default function BookingInquiryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-16 md:py-20 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Reservations Gateway
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-stone-cream leading-tight">
            Booking Inquiry
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            Every expedition to Pench Big Cat Nature Resort is personally coordinated by our lodge management. Submit your preferred dates and party details below to receive a personalized tariff and safari proposal.
          </p>
        </div>
      </section>

      {/* 2. Notice Strip: Inquiry Distinction */}
      <div className="bg-stone-sand border-b border-forest-night/10 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 text-xs font-mono text-earth-bark text-center">
          <ShieldCheck className="w-4 h-4 text-brass flex-shrink-0" />
          <span>
            Formal Inquiry Gateway · Submitting this form does not confirm a reservation. No online payment required.
          </span>
        </div>
      </div>

      {/* 3. Main Form Section wrapped in Suspense */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Suspense
          fallback={
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-4 bg-stone-sand border border-forest-night/10">
              <Loader2 className="w-8 h-8 animate-spin text-brass" />
              <p className="font-mono text-xs text-forest-night/60">
                Loading Reservation Gateway...
              </p>
            </div>
          }
        >
          <InquiryForm />
        </Suspense>
      </section>

      {/* 4. Inquiry Process Steps */}
      <section className="py-16 bg-stone-sand border-t border-forest-night/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="The Workflow"
            title="How Our Reservation Process Works"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-cream p-6 border border-forest-night/10 space-y-3">
              <span className="font-mono text-xs text-brass font-semibold">
                STEP 01
              </span>
              <h3 className="font-serif text-lg text-forest-night font-medium">
                Submit Your Stay Request
              </h3>
              <p className="text-xs text-forest-night/70 font-sans leading-relaxed">
                Provide your travel dates, preferred villa category, and any safari guidance requested.
              </p>
            </div>

            <div className="bg-stone-cream p-6 border border-forest-night/10 space-y-3">
              <span className="font-mono text-xs text-brass font-semibold">
                STEP 02
              </span>
              <h3 className="font-serif text-lg text-forest-night font-medium">
                Manual Management Review
              </h3>
              <p className="text-xs text-forest-night/70 font-sans leading-relaxed">
                Our reservations team reviews estate availability, verifies safari permit dates with the forest department, and prepares a tailored proposal.
              </p>
            </div>

            <div className="bg-stone-cream p-6 border border-forest-night/10 space-y-3">
              <span className="font-mono text-xs text-brass font-semibold">
                STEP 03
              </span>
              <h3 className="font-serif text-lg text-forest-night font-medium">
                Official Confirmation Voucher
              </h3>
              <p className="text-xs text-forest-night/70 font-sans leading-relaxed">
                Upon agreeing to the seasonal itinerary and tariff, your reservation is formally confirmed with an official resort voucher.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
