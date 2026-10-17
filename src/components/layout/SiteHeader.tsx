"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Menu, X, ArrowUpRight, Compass, PhoneCall } from "lucide-react";
import { MAIN_NAV_ITEMS, RESORT_CONTACT } from "@/content/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-forest-night/95 backdrop-blur-md py-3.5 border-b border-forest-canopy/30 shadow-lg"
          : "bg-gradient-to-b from-forest-night/90 via-forest-night/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Mark */}
          <NextLink
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-brass"
            aria-label="Pench Big Cat Nature Resort — Home"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo-white.png"
                alt="Pench Big Cat Nature Resort Emblem"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 48px, 56px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl tracking-wide text-stone-cream font-medium leading-none uppercase">
                Pench Big Cat
              </span>
              <span className="font-mono text-[9px] md:text-[10px] tracking-luxury text-stone-dawn/80 uppercase mt-1">
                Nature Resort · Madhya Pradesh
              </span>
            </div>
          </NextLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors duration-200 relative group font-medium ${
                    isActive
                      ? "text-brass font-semibold"
                      : "text-stone-cream/90 hover:text-stone-cream"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[1px] bg-brass transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </NextLink>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <NextLink
              href="/booking-inquiry"
              className="luxury-button-brass text-[11px] py-2.5 px-5"
            >
              <span>Make an Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </NextLink>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <NextLink
              href="/booking-inquiry"
              className="sm:hidden luxury-button-brass text-[10px] py-2 px-3"
            >
              Inquire
            </NextLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-cream hover:text-brass focus:outline-none focus:ring-1 focus:ring-brass"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-forest-night z-40 flex flex-col justify-between overflow-y-auto px-6 py-8 border-t border-forest-canopy/40">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-brass font-mono text-[11px] tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>Resort Navigation</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NextLink
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between py-2.5 border-b border-forest-canopy/20 text-sm tracking-wider uppercase font-serif ${
                      isActive ? "text-brass font-semibold pl-2" : "text-stone-cream hover:text-stone-dawn"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono text-stone-dawn/60 lowercase tracking-normal">
                      {item.description}
                    </span>
                  </NextLink>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-forest-canopy/30 space-y-4">
            <NextLink
              href="/booking-inquiry"
              className="w-full luxury-button-brass text-center py-3 text-xs"
            >
              <span>Submit Booking Inquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </NextLink>
            <div className="flex items-center justify-center gap-2 text-stone-dawn/70 text-xs font-mono">
              <PhoneCall className="w-3.5 h-3.5 text-brass" />
              <span>{RESORT_CONTACT.phone}</span>
            </div>
            <p className="text-center text-[10px] text-stone-dawn/50 font-mono tracking-wider uppercase">
              {RESORT_CONTACT.gateProximity}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
