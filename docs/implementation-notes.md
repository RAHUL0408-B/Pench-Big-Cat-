# Pench Big Cat Nature Resort — Implementation Notes

## Architecture Overview
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom brand theme tokens (Forest Night, Canopy Green, Dawn Stone, Bark Brown, Warm Sand, Muted Brass)
- **Animation System**: GSAP ScrollTrigger for scroll-based timeline reveals, CSS keyframe tickers for zero-layout-shift horizontal loops, and CSS transitions for micro-interactions
- **Type Safety**: TypeScript strict mode, Zod schemas for inquiry form validation
- **Centralized Data Model**: All accommodation, amenities, storytelling, offers, gallery, and navigation items are declared in `/src/content/` with explicit TypeScript types and approval flags.

## Page Map & Routes Implemented
1. `/` — Home (Cinematic hero, brand philosophy, multi-aspect ratio photo tickers, accommodations preview, Jugni story teaser, experiences preview, curated gallery, location overview, booking inquiry CTA)
2. `/stay` — Stay With Us (Complete architectural portfolio of villas and cottages, occupancy details, feature lists, direct inquiry triggers)
3. `/stay/[slug]` — Dynamic Room Details (`jugni`, `patdev`, `trishul`, `four-mark`, `swastik`; high-resolution gallery, floor plans, room attributes, individual cub room themes, direct pre-filled inquiry CTA, related stays)
4. `/our-story` — Jugni Family Story (Detailed legacy narrative of Collarwali, Raiyakassa, Patdev, Swastik, Jugni, Trishul, Four Mark; interactive responsive lineage tree; architectural naming rationale; owner approval flags)
5. `/experiences` — Experiences & Amenities (Bargad Dining, Neel Pool, Thehrav Spa, Abha Salon, Chhalaang Gym, Guided Safari drives, Birding walks, Night astronomy)
6. `/gallery` — Gallery (Categorized photography with filter buttons for All, Stays, Wildlife, Experiences, Landscape; full-screen accessible keyboard-navigable Lightbox)
7. `/contact` — Location & Contact (Verified directions from Nagpur Dr. Babasaheb Ambedkar International Airport, Jabalpur Airport, Turia & Khawasa gates, contact numbers, interactive inquiry hook)
8. `/booking-inquiry` — Booking Inquiry (Complete guest inquiry workflow with client & server-side Zod validation, adult/child selector, date checking, anti-spam honeypot, error handling, success receipt)
9. `/privacy-policy` — Privacy Policy (Transparent data handling for inquiry submissions, email processing, data retention, user rights under Indian and international privacy standards)
10. `/terms` — Terms & Conditions (Explicit disclaimer that inquiries are not binding reservations until confirmed by resort management; wildlife safari regulations; payment terms; cancellation policy)
11. `/safari-nearby` — Safari & Nearby Attractions (Pench National Park buffer & core safari guides, Turia gate, Khawasa buffer, Totladoh Dam, Kohka Lake, Pachdhar Potters Village, Runi Jhuni nature walk)
12. `/offers` — Offers & Packages (Curated seasonal retreats: 3-Night Tiger Safari Expedition, Couples' Wilderness Escape, Wildlife Photography Masterclass, Bespoke Naturalist Retreats)
13. `/api/inquiries` — Transactional email dispatch route with server-side validation, rate limiting, and environment variable support.
