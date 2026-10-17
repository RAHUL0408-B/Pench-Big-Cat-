"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/content/gallery";
import { GalleryLightbox } from "@/components/photography/GalleryLightbox";
import { Eye, Filter } from "lucide-react";

type CategoryFilter = "all" | "stays" | "wildlife" | "experiences" | "property";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-stone-cream">
      {/* 1. Page Hero */}
      <section className="py-16 md:py-24 bg-forest-night text-stone-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Visual Documentation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-cream leading-tight">
            The Pench Visual Journal
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-dawn/80 font-sans font-light leading-relaxed">
            A curated photographic archive capturing the architecture, wildlife encounters, forest moods, and tranquil rituals of Pench Big Cat Nature Resort.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="sticky top-20 z-30 bg-stone-sand/95 backdrop-blur-md border-b border-forest-night/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-forest-night/60 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-brass" />
            <span>Category Filter:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { label: "All Works", value: "all" },
                { label: "Stays & Architecture", value: "stays" },
                { label: "Pench Wildlife", value: "wildlife" },
                { label: "Dining & Spa", value: "experiences" },
                { label: "Property & Grounds", value: "property" },
              ] as const
            ).map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                    isActive
                      ? "bg-forest-night text-stone-cream border-forest-night font-semibold shadow-sm"
                      : "bg-transparent text-forest-night/80 border-forest-night/20 hover:border-forest-night hover:text-forest-night"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <span className="text-[11px] font-mono text-forest-night/50">
            {filteredItems.length} Photographs
          </span>
        </div>
      </section>

      {/* 3. Editorial Masonry-Style Image Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Determine varied aspect ratios for dynamic visual rhythm
            const aspectClasses =
              item.aspectRatio === "portrait"
                ? "aspect-[3/4]"
                : item.aspectRatio === "square"
                ? "aspect-square"
                : "aspect-[16/11]";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`group relative overflow-hidden bg-forest-night border border-forest-night/10 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 ${aspectClasses}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-night/90 via-forest-night/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2 bg-forest-night/80 text-stone-cream rounded-full">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] tracking-luxury text-brass uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-stone-cream font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-dawn/80 font-sans line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Accessible Lightbox */}
      <GalleryLightbox
        images={filteredItems}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={(idx) => setSelectedImageIndex(idx)}
      />
    </div>
  );
}
