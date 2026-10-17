# Pench Big Cat Nature Resort — Design System & Visual Identity

## 1. Overview & Brand Vision
Pench Big Cat Nature Resort is an ultra-luxury wildlife sanctuary retreat situated on the boundary of the Khawasa buffer zone and the Teliya territory of Pench National Park, Madhya Pradesh, India.
The brand identity bridges the untamed spirit of the central Indian teak forest with refined boutique luxury hospitality.

## 2. Color Palette (From Brand Color Specification)

| Token Name | Hex Code | Purpose & Brand Narrative |
| :--- | :--- | :--- |
| **Forest Night** | `#192421` | Primary dark surface, text, and immersive headers. A deep green inspired by the forest after dusk. |
| **Canopy Green** | `#324D3C` | Rich botanical accent green representing dense teak canopies, active buttons, borders. |
| **Dawn Stone** | `#D9D8D1` | Soft natural neutral inspired by morning light, sandstone plinths, and breathable page cards. |
| **Bark Brown** | `#5E3A29` | Warm earthy brown inspired by teak bark, raw soil, and grounded accents. |
| **Warm Sand Light** | `#F8F6F0` | Default body background for clean editorial reading. |
| **Warm Sand Cream** | `#EFECE6` | Alternating section backgrounds, ticker tracks, and subtle framed cards. |
| **Muted Brass** | `#C8A97E` | Subtle luxury highlights, star markers, dividers, and focus rings. |

## 3. Typography Hierarchy (From Brand Typography Specification)

| Role | Font Family | Usage |
| :--- | :--- | :--- |
| **Primary Display** | **Cormorant Garamond** (Serif) | Brand name, page hero headlines, editorial pull quotes, room titles. Conveys timeless luxury and quiet confidence. |
| **Body & UI** | **Plus Jakarta Sans** (Sans) | Long-form reading, navigational items, room amenities list, booking form labels. Clear and legible across all devices. |
| **Technical & Wayfinding** | **Space Mono / OCR-style** (Mono) | Coordinates, gate distances, cub litter labels, dates, field notes, wildlife tracking badges. Adds an authentic naturalist expedition character. |
| **Editorial Accent** | **Playfair / Cormorant Italic** | Naturalist citations, wildlife stories, poetic introductions. |

## 4. Layout & Spacing Rules
- **Negative Space**: Generous vertical rhythm (`py-20 md:py-32`) to allow high-resolution photography to breathe.
- **Asymmetric Grids**: Avoiding uniform "Bootstrap-style" three-column card grids. Using alternating 7/5 splits, overlapping frames, and horizontal photo tickers.
- **Border Radii**: Restrained (`rounded-none` or `rounded-sm`) to reflect organic sandstone architecture, not pill-shaped tech apps.
- **Shadows**: Soft natural ambient ambient diffuse shadows (`shadow-sm` or custom `0 20px 40px -15px rgba(25,36,33,0.07)`).

## 5. Motion & Interactivity Standards
- **Page Entrances**: Staggered opacity and subtle Y-transforms (`y: 24 -> 0`, `duration: 0.8s`).
- **Editorial Reveals**: Scroll-triggered masked image reveals using CSS and GSAP ScrollTrigger.
- **Photo Tickers**: Infinitely looping marquees with pauses on hover and `prefers-reduced-motion` fallbacks.
- **Interactive Lightbox**: Full-screen modal with keyboard navigation (`Esc` to close, arrow keys to navigate), focus traps, and image captions.
