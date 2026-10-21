"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Compass } from "lucide-react";

interface HeroSlide {
  titleNode: React.ReactNode;
  subtitle: string;
  image: string;
  alt: string;
  badge: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    titleNode: (
      <>
        Stay Where the{" "}
        <span className="highlight-gold-gradient font-serif">Jungle Book</span> Comes
        Alive!
      </>
    ),
    subtitle:
      "Stay close to the wild, surrounded by open spaces, greenery and the natural charm of Pench.",
    image: "/images/hero/hero-main.jpg",
    alt: "Pench Big Cat Nature Resort surrounded by forest",
    badge: "Khursapar Gate & Buffer Zones · Pench",
  },
  {
    titleNode: (
      <>
        Your Comfortable Base for a{" "}
        <span className="highlight-gold-gradient font-serif">Pench Escape</span>
      </>
    ),
    subtitle:
      "Spacious stays, open areas and resort experiences designed for a relaxing jungle getaway.",
    image: "/images/property/resort-property-view.jpg",
    alt: "Spacious stays and natural greenery at Big Cat Nature Resort",
    badge: "Madhya Pradesh – Maharashtra Border",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-forest-night text-stone-cream pt-20">
      {/* Background Images with Ken Burns & Smooth Crossfade */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover opacity-60 transition-transform duration-1000 ease-out ${
                index === currentSlide ? "animate-kenburns" : "scale-100"
              }`}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-night via-forest-night/50 to-forest-night/65" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-forest-night/70" />
        </div>
      ))}

      {/* Floating Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brass/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-12 pb-20">
        {/* Emblem & Eyebrow with floating effect */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-forest-night/85 border border-brass/50 backdrop-blur-md mb-2 shadow-lg animate-float-slow">
          <Compass className="w-3.5 h-3.5 text-brass animate-spin-slow" />
          <span className="font-mono text-[10px] sm:text-xs tracking-luxury text-stone-cream uppercase">
            {HERO_SLIDES[currentSlide].badge}
          </span>
        </div>

        {/* Headline with smooth typography */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-cream leading-[1.08] min-h-[2.2em] sm:min-h-[2.1em] flex items-center justify-center">
          <span>{HERO_SLIDES[currentSlide].titleNode}</span>
        </h1>

        {/* Subtitle / Intro */}
        <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base md:text-lg text-stone-dawn/90 leading-relaxed font-light min-h-[3.2em]">
          {HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* Dual CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/stay" className="luxury-button-brass w-full sm:w-auto text-xs py-3.5 px-8">
            <span>Explore Our Stays</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/booking-inquiry"
            className="luxury-button-secondary w-full sm:w-auto text-xs py-3.5 px-8 text-stone-cream border-stone-cream/40 hover:border-brass hover:bg-stone-cream hover:text-forest-night"
          >
            <span>Make an Inquiry</span>
          </Link>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="pt-8 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-2.5 rounded-full border border-stone-cream/25 bg-forest-night/60 text-stone-cream/80 hover:text-stone-cream hover:border-brass hover:scale-105 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-500 h-1.5 rounded-full ${
                  idx === currentSlide
                    ? "w-10 bg-brass shadow-[0_0_12px_rgba(200,169,126,0.6)]"
                    : "w-2.5 bg-stone-cream/30 hover:bg-stone-cream/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-2.5 rounded-full border border-stone-cream/25 bg-forest-night/60 text-stone-cream/80 hover:text-stone-cream hover:border-brass hover:scale-105 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-6 flex flex-col items-center gap-2 text-stone-dawn/60 animate-float-slow">
          <span className="font-mono text-[9px] tracking-luxury uppercase">Scroll to Discover</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-brass via-brass/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
