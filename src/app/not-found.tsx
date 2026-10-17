import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-forest-night text-stone-cream flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-forest-canopy/20 border border-forest-canopy/50 rounded-full flex items-center justify-center mx-auto text-brass">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Error 404 · Uncharted Trail
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-cream font-light">
            Lost in the Forest
          </h1>
          <p className="text-xs sm:text-sm text-stone-dawn/80 font-sans leading-relaxed">
            The pathway or document you are seeking does not exist or has been shifted in our forest archives.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="luxury-button-brass text-xs w-full sm:w-auto">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Return to Sanctuary Home</span>
          </Link>
          <Link href="/stay" className="luxury-button-secondary text-xs text-stone-cream border-stone-cream/30 hover:border-stone-cream hover:bg-stone-cream hover:text-forest-night w-full sm:w-auto">
            <span>Explore Stays</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
