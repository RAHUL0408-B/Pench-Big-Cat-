# Pench Big Cat Nature Resort — Cinematic Luxury Wildlife Website

> **Frontend-First | Production-Quality Next.js & React | Central Indian Forest Luxury**

Pench Big Cat Nature Resort is an ultra-luxury wildlife sanctuary situated on the Khawasa buffer of Pench Tiger Reserve, Seoni District, Madhya Pradesh, India. This website is engineered as a photography-led, art-directed digital journal inspired by the resident tigress **Jugni** and her celebrated royal lineage.

---

## 1. Visual Identity & Brand System

### Color Palette (From Brand Color Specification)
- **Forest Night** (`#192421`): Deep immersive dark green inspired by the forest after dusk. Primary dark surface, text, and immersive headers.
- **Canopy Green** (`#324D3C`): Rich botanical green drawn from the dense teak forest canopy. Represents growth and wilderness connection.
- **Dawn Stone** (`#D9D8D1`): Soft natural neutral inspired by morning light and sandstone plinths. Creates breathing space and balance.
- **Bark Brown** (`#5E3A29`): Warm earthy brown inspired by teak bark and forest floor. Adds organic grounding.
- **Warm Sand Cream** (`#F7F5F0` / `#EFECE6`): Clean editorial page backgrounds and alternating textured sections.
- **Muted Brass** (`#C8A97E`): Refined luxury metallic accents, star indicators, and button highlights.

### Typography Hierarchy (From Brand Typography Specification)
- **Primary Display**: `Cormorant Garamond` (Serif) — Headlines, villa names, and key statements. Conveys timeless luxury and quiet confidence.
- **Body & Controls**: `Plus Jakarta Sans` (Sans) — Long-form reading, navigational items, form fields, and specifications.
- **Wayfinding & Expedition**: `Space Mono` / OCR style — Coordinates, cub litter themes, field notes, and telemetry tags.

---

## 2. All 11 Requested Public Routes & Room Detail

| Route | Page Name | Key Features & Interactions |
| :--- | :--- | :--- |
| `/` | **Home** | Cinematic hero with genuine brand emblem, multi-aspect-ratio photo tickers, brand story teaser, stays showcase, amenities preview, curated gallery, location summary, and inquiry CTA. |
| `/stay` | **Stay With Us** | Architectural portfolio of all 5 villa & cottage categories with dimensions, occupancy, bed setups, and "Contact for price". |
| `/stay/[slug]` | **Room Detail Route** | Dynamic detail routes (`/stay/jugni`, `/stay/patdev`, `/stay/trishul`, `/stay/four-mark`, `/stay/swastik`). High-res gallery, cub litter breakdown, architectural specs, and direct pre-filled booking inquiry CTA. |
| `/our-story` | **Jugni Family Story** | Interactive responsive family tree connecting Collarwali, Raiyakassa, Patdev, Swastik, Jugni, Trishul, and Four Mark to resort stays. Naturalist oral history attribution and owner approval flags. |
| `/experiences` | **Experiences & Amenities** | Single-page editorial showcase of estate amenities: Bargad (Restaurant), Neel (Pool), Thehrav (Spa), Abha (Salon), and Chhalaang (Gym). |
| `/gallery` | **Gallery** | Categorized photo archive with filter buttons (All, Stays, Wildlife, Experiences, Property) and keyboard-navigable Lightbox (Esc, arrow keys, counter). |
| `/contact` | **Location & Contact** | Verified distance guides from Nagpur (100 km) and Jabalpur (195 km) airports, gate proximities, official phone/email, and GPS coordinates. |
| `/booking-inquiry`| **Booking Inquiry** | Guest reservation gateway with client & server-side Zod validation, adult/child selectors, date logic, anti-spam honeypot, error handling, and inquiry receipt. |
| `/privacy-policy` | **Privacy Policy** | Transparent data processing terms, email delivery disclosures, and visitor rights. Flagged for legal review. |
| `/terms` | **Terms & Conditions** | Explicit reservation distinction, safari permit policies, and forest etiquette guidelines. Flagged for legal review. |
| `/safari-nearby` | **Safari & Attractions** | Guides for Turia Gate, Khawasa buffer, Totladoh Dam, Kohka Lake, Pachdhar potters' village, and seasonal weather advice. |
| `/offers` | **Offers & Packages** | Curated multi-day journeys (Tiger Safari Expedition, Couples' Retreat, Photography Masterclass) with inclusions/exclusions and "Contact for price". |
| `/sitemap.xml` | **SEO Sitemap** | Dynamic sitemap indexing all static and dynamic room routes. |
| `/robots.txt` | **Robots Directive** | Search engine indexing rules with sitemap link. |

---

## 3. Technology Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict type checking enabled)
- **Styling**: Tailwind CSS with custom brand theme tokens
- **Icons**: Lucide React
- **Validation**: Zod schema validation (client and server)
- **Animation System**:
  - CSS Keyframe Tickers (`@keyframes marquee-left`, `@keyframes marquee-right`) with `hover:paused` and `prefers-reduced-motion` compliance.
  - GSAP / CSS transitions for micro-interactions and modal lightboxes.
- **Centralized Data Model**: All content decoupled from presentation in `/src/content/`.

---

## 4. Setup, Environment & Deployment

### Installation
```bash
# Clone the repository
git clone https://github.com/RAHUL0408-B/Pench-Big-Cat-.git
cd Pench-Big-Cat-

# Install dependencies
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://penchbigcat.com
ADMIN_INQUIRY_EMAIL=reservations@penchbigcat.com
EMAIL_FROM=inquiries@penchbigcat.com
EMAIL_API_KEY=your_transactional_email_api_key_here
```

### Commands
```bash
# Run local development server
npm run dev

# Run production build and type-checking
npm run build

# Start production server
npm run start
```

---

## 5. Booking Inquiry & Email Integration

The booking inquiry form at `/booking-inquiry` connects to `POST /api/inquiries`:
1. **Validation**: Validates required fields, formats, party sizes, and date sequences via Zod.
2. **Anti-Spam**: Checks for hidden honeypot submissions.
3. **Transactional Dispatch**: If `EMAIL_API_KEY` is configured, it transmits an administrative notification to `ADMIN_INQUIRY_EMAIL` with `Reply-To` set to the guest.
4. **Development Mode**: If `EMAIL_API_KEY` is not present, it validates all inputs and returns a clear setup notice rather than silently simulating delivery.
5. **No Live Payments or Live Booking Locks**: In accordance with project requirements, live booking synchronization and online payment gateways are strictly excluded.

---

## 6. Content Approval & Verification Checklist

See [docs/content-approval-checklist.md](docs/content-approval-checklist.md) for full tracking:
- **Akash Memorial Room**: Reserved as a storytelling tribute for the cub that did not survive ("went back to the sky"); marked strictly as non-bookable.
- **Pricing Policy**: All rooms and packages display **"Contact for price"** with no invented rates.
- **Wildlife Claims**: Stories are attributed to naturalist oral chronicles without implying official government affiliation.
- **Reference Site Inspection**: `https://luxuriouswildlife.com/` was verified as unreachable (`no such host`) during audit and documented accordingly.
