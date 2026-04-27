---
kit: ig-commercial
name: IG / Threads Commercial Poster Kit
mood: commercial poster · subject 70%+ · grabs attention in 1 second · platform-ready
best_for: IG / Threads / FB ads / EDM / commercial banners / e-commerce hero
status: skeleton
version: 0.1.0
---

# IG / Threads Commercial Poster Kit

Reference: IG carousel commercial layout system (A Hero / B Banner / C Social / D Series / E Gift / F Close-up / G Promo / H Lifestyle) — eight sub-flavors.

## Mood

> "Grab the eye in 1 second · let the subject speak · use the fewest words possible."

Subject takes 70%+ of the frame · text area ≤30% · use strong photography + a short headline + ONE accent to lock attention in a fraction of a second.

## Anchor

- Subject : text = 70 : 30 (the golden ratio)
- ONE strong product photo dominates the frame
- Tagline ≤5 words
- Platform-ready framing: 4:5 (IG post) / 1:1 (square) / 9:16 (Reels / Stories)
- Subject placed at center or rule-of-thirds intersection
- Whitespace gives the tagline room to breathe (few words, strong image)

## Eight Sub-flavors

Pick one as the prompt sub-flavor:

| Code | Name | Use |
|:-:|---|---|
| A | Hero | first-impression image · works on every platform |
| B | Banner | website hero / EDM headline / ad banner |
| C | Social | IG / Threads post |
| D | Series | 3-4 items aligned · series releases / multi-product |
| E | Gift | packaging display · gift sets / bundles |
| F | Close-up | detail / texture |
| G | Promo | discount / limited-time / strong CTA |
| H | Lifestyle | object in context · scenario shot |

## Palette

Palette follows the product itself · the Kit does not lock it down. Recommendations:

- Background: contrast against the product (dark product → light base; light product → dark base)
- ONE accent: a color already on the product (do not invent a new one)
- Text: maximum contrast (white on dark / black on light)

## Typography

- Display: Bold sans-serif (Inter / Helvetica / Anton) · large · 15-25% of frame
- Tagline: short phrase · with rhythm · case-mix permitted
- Label: small + uppercase · used in corners
- No more than 2 type families

## Composition (per sub-flavor)

### A · Hero
Subject at 80% · whitespace top and bottom + tagline floating near the subject or in a corner.

### B · Banner
Subject 90% horizontal extension · tagline aligned to the subject's edge + 12px sub-headline.

### C · Social
Subject 70% · large whitespace · tagline ≤5 words · "brand name + product name" on two lines.
Suited to IG / Threads · 4:5 or 1:1.

### D · Series
3-4 items in a grid · one short line below each · unified light direction.

### E · Gift
High-angle top-down shot · packaging laid open · whitespace for "what's included".

### F · Close-up
Macro · texture amplified · text minimal in a corner.

### G · Promo
Big discount numerals (80% / 8 off) + subject + time-bound deadline.
**Warning**: this sub-flavor is the most prone to AI clichés (yellow base, red text) · use brand color + contrast instead.

### H · Lifestyle
Person + object in context · scenario · light text overlay.

## Motion / Transition

- Pure static · no animation (this is a poster, not a webpage)
- For web rendition: scroll-enter fade + small translateY · 300ms ease-out
- No Lottie / GSAP timeline / Three.js

## Tech Stack

- Pure HTML + CSS (JS optional)
- Or export static images (PNG / JPG / WebP) via Canvas / SVG
- Comply with IG / Threads platform specs

## Voice Register

- Short phrases · verb-first
- "Tasteful chocolate · molten brownie · just right"
- Avoid absolutes like "best", "first", "only" (cliché-prone)
- Bilingual is permitted in source projects, but this Kit speaks English

## Anti-pattern

- No cinematic 3D scene (breaks the flat poster feel)
- No GSAP scrollytelling (this is a static poster)
- No emoji
- No multiple accent colors (hold the line on ONE)
- No subject < 50% (text-heavy frame defeats the format)

## Reference Frames

`reference/` collects IG / Threads commercial carousel series (e.g. brownie 8-flavor demo) + premium product photography.

## Starter Prompt

See [starter-prompt.md](./starter-prompt.md) (TBD · pick one of sub-flavors A-H).
