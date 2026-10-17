import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#192421",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Pench Big Cat Nature Resort",
    default: "Pench Big Cat Nature Resort — Luxury Wilderness Sanctuary in Pench Tiger Reserve",
  },
  description:
    "An ultra-luxury forest sanctuary situated on the Khawasa buffer of Pench Tiger Reserve, inspired by the legendary tigress Jugni and her royal lineage.",
  keywords: [
    "Pench Big Cat Nature Resort",
    "Luxury Wildlife Resort Pench",
    "Tiger Safari Lodge Madhya Pradesh",
    "Jugni Tigress Pench",
    "Turia Gate Safari Lodge",
    "Pench National Park Stay",
    "Luxury Wilderness Villa",
  ],
  metadataBase: new URL("https://penchbigcat.com"),
  openGraph: {
    title: "Pench Big Cat Nature Resort — Luxury Wilderness Sanctuary",
    description:
      "Stay where the forest breathes. Bespoke villas, guided safaris, authentic regional dining, and tranquil luxury in the heart of tiger country.",
    url: "https://penchbigcat.com",
    siteName: "Pench Big Cat Nature Resort",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1920,
        height: 1080,
        alt: "Pench Big Cat Nature Resort Forest Landscape",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jakarta.variable} ${spaceMono.variable} font-sans bg-stone-cream text-forest-night antialiased min-h-screen flex flex-col selection:bg-forest-canopy selection:text-stone-cream`}
      >
        <SiteHeader />
        <main className="flex-1 w-full">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
