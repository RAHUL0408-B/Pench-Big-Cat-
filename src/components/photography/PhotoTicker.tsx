"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TickerImageItem {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "16:9" | "4:3" | "3:4" | "1:1" | "2:3";
  title?: string;
  tag?: string;
}

interface PhotoTickerProps {
  images: TickerImageItem[];
  variant?: "wide" | "mixed" | "rooms" | "editorial";
  speed?: "slow" | "normal" | "gentle";
  direction?: "left" | "right";
  className?: string;
}

export function PhotoTicker({
  images,
  variant = "mixed",
  speed = "slow",
  direction = "left",
  className,
}: PhotoTickerProps) {
  // Speed mapping in seconds for 50% translation
  const speedSeconds = {
    slow: "45s",
    normal: "30s",
    gentle: "60s",
  }[speed];

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={cn(
        "ticker-container relative w-full overflow-hidden select-none py-4 bg-stone-sand/50",
        className
      )}
      style={{ "--marquee-duration": speedSeconds } as React.CSSProperties}
    >
      <div className={cn("ticker-track flex w-max gap-4 sm:gap-6", animationClass)}>
        {/* Primary accessible track */}
        <div className="flex gap-4 sm:gap-6 items-center">
          {images.map((item, index) => (
            <TickerCard key={`orig-${index}`} item={item} variant={variant} />
          ))}
        </div>

        {/* Duplicate clone for seamless loop with aria-hidden to prevent duplicate screen reader items */}
        <div className="flex gap-4 sm:gap-6 items-center" aria-hidden="true">
          {images.map((item, index) => (
            <TickerCard key={`clone-${index}`} item={item} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TickerCard({
  item,
  variant,
}: {
  item: TickerImageItem;
  variant: "wide" | "mixed" | "rooms" | "editorial";
}) {
  // Determine width and aspect ratio based on variant and item settings
  let dimensionClasses = "w-72 h-48 sm:w-80 sm:h-56"; // Default 16:9 landscape

  if (variant === "wide") {
    dimensionClasses = "w-80 h-48 sm:w-[420px] sm:h-64";
  } else if (variant === "rooms") {
    dimensionClasses = "w-72 h-96 sm:w-80 sm:h-[400px]"; // Portrait room card
  } else if (variant === "editorial") {
    dimensionClasses =
      item.aspectRatio === "3:4"
        ? "w-60 h-80 sm:w-64 sm:h-96"
        : item.aspectRatio === "1:1"
        ? "w-60 h-60 sm:w-72 sm:h-72"
        : "w-80 h-52 sm:w-96 sm:h-64";
  } else if (variant === "mixed") {
    // Dynamic mixed rhythm based on individual item ratio
    switch (item.aspectRatio) {
      case "3:4":
        dimensionClasses = "w-56 h-72 sm:w-64 sm:h-84";
        break;
      case "1:1":
        dimensionClasses = "w-56 h-56 sm:w-68 sm:h-68";
        break;
      case "2:3":
        dimensionClasses = "w-52 h-80 sm:w-60 sm:h-92";
        break;
      case "4:3":
        dimensionClasses = "w-72 h-56 sm:w-84 sm:h-64";
        break;
      default:
        dimensionClasses = "w-80 h-48 sm:w-96 sm:h-56";
    }
  }

  return (
    <div
      className={cn(
        "relative flex-shrink-0 group overflow-hidden bg-forest-night border border-forest-night/10",
        dimensionClasses
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 300px, 450px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-night/85 via-forest-night/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Card Info Overlay */}
      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between z-10 pointer-events-none">
        <div>
          {item.tag && (
            <span className="font-mono text-[9px] tracking-luxury uppercase px-2 py-0.5 bg-forest-night/80 text-brass border border-brass/30 backdrop-blur-sm">
              {item.tag}
            </span>
          )}
        </div>
        <div>
          {item.title && (
            <h4 className="font-serif text-stone-cream text-base sm:text-lg font-medium leading-tight">
              {item.title}
            </h4>
          )}
          {item.caption && (
            <p className="font-sans text-[11px] text-stone-dawn/80 line-clamp-1 mt-0.5">
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
