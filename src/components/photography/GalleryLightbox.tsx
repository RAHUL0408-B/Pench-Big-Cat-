"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/types/resort";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = currentIndex !== null;
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prev);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % images.length;
    onNavigate(next);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 bg-forest-night/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fade-in"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-stone-cream pb-4 border-b border-forest-canopy/30 z-20">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-brass tracking-luxury uppercase">
            {currentImage.category}
          </span>
          <span className="font-mono text-xs text-stone-dawn/60">
            {String((currentIndex ?? 0) + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-stone-dawn hover:text-stone-cream hover:bg-forest-canopy/40 transition-colors focus:outline-none focus:ring-1 focus:ring-brass"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 bg-forest-night/80 border border-forest-canopy/40 text-stone-cream hover:text-brass hover:bg-forest-night transition-colors"
          aria-label="Previous Image (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 bg-forest-night/80 border border-forest-canopy/40 text-stone-cream hover:text-brass hover:bg-forest-night transition-colors"
          aria-label="Next Image (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Information */}
      <div className="max-w-3xl mx-auto text-center pt-2 pb-2 z-20">
        <h3 className="font-serif text-lg sm:text-xl text-stone-cream font-medium">
          {currentImage.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-stone-dawn/80 mt-1">
          {currentImage.caption}
        </p>
      </div>
    </div>
  );
}
