---
kit: opal-product
name: Opal Hardware Product Kit
mood: Apple-product-page minimalism · full-bleed photography · sticky cart · neutral gray
best_for: hardware / objects / new-product launches / industrial design work / premium consumer goods
status: skeleton
version: 0.1.0
---

# Opal Hardware Product Kit

Reference: [opalcamera.com/opal-tadpole](https://opalcamera.com/opal-tadpole) — Apple-style hardware product showcase.

## Mood

> "The object is the hero · one photo speaks louder than ten thousand words · the purchase card never leaves the corner."

Generous whitespace · neutral gray backdrop carrying product photography · sticky persistent purchase card · spec page revealed one by one.

## Anchor

- Full-bleed product photography (one image per section)
- Hand-as-scale shots (a hand holding the object · gives a sense of size)
- Sticky purchase card pinned to top-right / bottom-right (never disappears)
- Spec reveal scroll (material / weight / colors / contrast ladder)
- Watch-style stat blocks (45g / 47 Parts / 8 Materials)

## Palette

| Role | Color | Use |
|---|---|---|
| Base | `#1F2026` / `#2A2C30` | dark mode base (spec pages) |
| Light Base | `#F5F5F4` / `#FAFAF8` | light mode base (hero) |
| Subject | neutral gray `#4C4E56` ~ `#818387` | product palette / primary text |
| Accent | `#FFE08A` / `#FDDA25` (warm yellow circle) | the ONE highlight · ≤1% of frame |
| Mute | `rgba(0,0,0,0.55)` / `rgba(255,255,255,0.45)` | meta |

Neutral gray ≥85% / strong-contrast highlight ≤10% / accent ≤1%.

## Typography

- Display: SF Pro Display / Inter · 600 wt · medium scale (48-96px) · loose letter-spacing 0
- Body: SF Pro Text / Inter · 400 wt · line-height 1.5
- Spec label: Inter · 11-13px · neutral gray · `letter-spacing: 0.04em`
- Type-Centric: weight set tightened to one tier (typically 600 + 400 only)

## Composition

- Vertical scroll sections (not fixed full-screen)
- Hero: full-bleed product photo + short overlay text top-left
- Sticky purchase card: top-right · never disappears · semi-transparent backdrop blur
- Spec section: dark mode · two-column grid · oversized numerals
- Comparison: photo grid · horizontal ladder
- Lifestyle shot: hand + environment + object in context

## Motion / Transition

- Pure scroll · no GSAP timeline
- CSS transition only (300ms ease-out)
- Image fade-in on enter viewport
- Sticky card stays · no fade in/out

## Tech Stack

- Pure HTML + CSS + a little vanilla JS (no Three.js needed)
- IntersectionObserver for fade-in
- Sticky positioning + backdrop-filter
- Optimized images (webp / responsive sizes)
- No external deps beyond fonts

## Voice Register

- Short English + numerals dominant
- Tagline: object + one verb ("A new species of webcam")
- Specs: evocative adjectives like "Tiny", "Premium", "Painted"
- Avoid buzzwords like "revolutionary", "game-changing"

## Anti-pattern

- No 3D scene (this Kit is purely 2D photography)
- No cinematic dark-mode hero (Apple-style hero is light; dark mode reserved for spec pages)
- No emoji
- No Lottie animation (preserve still-photography feel)

## Reference Frames

`reference/` collects Opal Tadpole / Apple product page / premium hardware references.

## Starter Prompt

See [starter-prompt.md](./starter-prompt.md) (TBD).
