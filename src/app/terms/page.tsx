import React from "react";
import Link from "next/link";
import { TERMS_CONDITIONS_CONTENT } from "@/content/legal";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Pench Big Cat Nature Resort",
  description:
    "Booking inquiry terms, safari permit policies, and guest sanctuary guidelines for Pench Big Cat Nature Resort.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-stone-cream">
      {/* 1. Header Hero */}
      <section className="py-14 bg-forest-night text-stone-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-brass hover:text-stone-cream transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Resort Home</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-cream">
            Terms & Conditions
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-dawn/70 pt-1">
            <span>Last Updated: {TERMS_CONDITIONS_CONTENT.lastUpdated}</span>
            <span>·</span>
            <span className="text-brass">
              Status: {TERMS_CONDITIONS_CONTENT.ownerReviewFlag}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Legal Review Alert */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-4 bg-stone-sand border border-forest-night/20 text-xs font-mono text-forest-night/70 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
          <p>
            <strong>Important Operational Notice:</strong> These terms govern the formal booking inquiry and communication workflow. A website inquiry does NOT constitute a confirmed booking. These terms are flagged for final owner validation.
          </p>
        </div>
      </section>

      {/* 3. Terms Body Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {TERMS_CONDITIONS_CONTENT.sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-stone-sand border border-forest-night/10 p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <h2 className="font-serif text-2xl text-forest-night font-medium border-b border-forest-night/10 pb-3">
              {section.title}
            </h2>
            <div className="space-y-3 text-sm text-forest-night/85 font-sans leading-relaxed font-light whitespace-pre-line">
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-6 border-t border-forest-night/10 flex justify-between items-center text-xs font-mono text-forest-night/60">
          <span>Pench Big Cat Nature Resort · Seoni District, Madhya Pradesh</span>
          <Link href="/privacy-policy" className="text-forest-canopy hover:text-forest-night underline">
            View Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
}
