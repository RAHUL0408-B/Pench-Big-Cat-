export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Stay With Us", href: "/stay", description: "Villas & forest sanctuaries" },
  { label: "Jugni Family Story", href: "/our-story", description: "The tigress & lineage" },
  { label: "Experiences & Amenities", href: "/experiences", description: "Dining, spa & wellness" },
  { label: "Gallery", href: "/gallery", description: "Wilderness photography" },
  { label: "Safari & Nearby", href: "/safari-nearby", description: "Pench reserve & trails" },
  { label: "Offers", href: "/offers", description: "Curated seasonal stays" },
  { label: "Location & Contact", href: "/contact", description: "Reaching the resort" },
];

export const FOOTER_PAGES = [
  { label: "Home", href: "/" },
  { label: "Stay With Us", href: "/stay" },
  { label: "Jugni Family Story", href: "/our-story" },
  { label: "Experiences & Amenities", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Safari & Nearby Attractions", href: "/safari-nearby" },
  { label: "Offers & Packages", href: "/offers" },
  { label: "Location & Contact", href: "/contact" },
  { label: "Booking Inquiry", href: "/booking-inquiry" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const RESORT_CONTACT = {
  name: "Pench Big Cat Nature Resort",
  address: "Khawasa Buffer Zone, Pench National Park, Seoni District, Madhya Pradesh 480881, India",
  phone: "+91 98230 45678", // Verified format placeholder for owner confirmation
  email: "reservations@penchbigcat.com",
  gateProximity: "Adjacent to Khawasa Buffer Gate & 14 km from Turia Gate",
  coordinates: "21.6882° N, 79.3512° E",
  checkIn: "13:00 hrs",
  checkOut: "11:00 hrs",
};
