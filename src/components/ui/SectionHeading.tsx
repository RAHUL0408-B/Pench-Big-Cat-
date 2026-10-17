import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-luxury uppercase">
          {align === "center" && (
            <span
              className={cn(
                "inline-block w-6 h-[1px]",
                isDark ? "bg-brass/60" : "bg-forest-canopy/40"
              )}
            />
          )}
          <span className={cn(isDark ? "text-brass" : "text-forest-canopy font-medium")}>
            {eyebrow}
          </span>
          {align === "center" && (
            <span
              className={cn(
                "inline-block w-6 h-[1px]",
                isDark ? "bg-brass/60" : "bg-forest-canopy/40"
              )}
            />
          )}
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight",
          isDark ? "text-stone-cream" : "text-forest-night"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed font-sans pt-1",
            isDark ? "text-stone-dawn/80" : "text-forest-night/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
