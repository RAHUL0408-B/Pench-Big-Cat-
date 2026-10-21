"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "float";
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Trigger once
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return {
            opacity: 0,
            transform: "translateY(36px)",
            transition: baseTransition,
          };
        case "fade-down":
          return {
            opacity: 0,
            transform: "translateY(-36px)",
            transition: baseTransition,
          };
        case "fade-left":
          return {
            opacity: 0,
            transform: "translateX(36px)",
            transition: baseTransition,
          };
        case "fade-right":
          return {
            opacity: 0,
            transform: "translateX(-36px)",
            transition: baseTransition,
          };
        case "zoom-in":
          return {
            opacity: 0,
            transform: "scale(0.94)",
            transition: baseTransition,
          };
        case "float":
          return {
            opacity: 0,
            transform: "translateY(20px)",
            transition: baseTransition,
          };
        default:
          return { opacity: 0, transition: baseTransition };
      }
    }

    return {
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1)",
      transition: baseTransition,
    };
  };

  return (
    <div
      ref={ref}
      style={getAnimationStyles()}
      className={`${className} ${isVisible && animation === "float" ? "animate-float-slow" : ""}`}
    >
      {children}
    </div>
  );
}
