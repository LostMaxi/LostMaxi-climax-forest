---
kit: swiss-pulse
name: Swiss Pulse Kit
mood: clinical precision · grid-locked · numbers dominant · black/white + ONE electric accent
best_for: SaaS / data dashboards / developer tools / API docs / investor decks
status: skeleton
version: 0.1.0
---

# Swiss Pulse Kit

Reference: Josef Müller-Brockmann Swiss grid + modern SaaS dashboard aesthetics.

## Mood

> "Nothing decorative · Everything counts."

Clinical, precise, numbers-led, no bloat. Every element snaps to a 12-column grid. Counters tick up from 0. Hard cuts · no decorative transitions.

## Anchor

- Grid-locked compositions · strict 12-column alignment
- Numbers dominate (80-120px stat blocks)
- Animated counters from 0
- Hard cuts only · no decorative transitions
- Black/white base + ONE electric accent
- Helvetica / Inter Bold for headlines · Regular for labels
- Cinematic Zoom or SDF Iris transition (precise · geometric)

## Palette

| Role | Color | Use |
|---|---|---|
| Base | `#1A1A1A` / `#000000` | dark base |
| Light Base | `#FFFFFF` / `#FAFAFA` | light base |
| Accent | `#0066FF` (electric blue) **OR** `#FFB300` (amber) — pick one | the ONE accent · do not mix |
| Text Primary | `#FFFFFF` / `#000000` | primary text |
| Text Mute | `rgba(255,255,255,0.55)` / `rgba(0,0,0,0.55)` | secondary text |
| Grid Line | `rgba(255,255,255,0.10)` | grid guides (debug visible) |

Black/white ≥90% / accent ≤10% · strictly enforced.

## Typography

- Display: Inter / Helvetica Neue · 700 wt · 80-120px · tight letter-spacing -0.01em
- Body: Inter · 400 wt · 14-16px · line-height 1.5
- Number: Inter · 600 wt · monospace tabular nums (`font-variant-numeric: tabular-nums`)
- Label: Inter · 500 wt · 10-12px · uppercase · `letter-spacing: 0.18em`
- Weight set tightened to 3-4 tiers (700 / 600 / 500 / 400)

## Composition

- 12-column grid · 24px gutter · strict alignment
- Header / nav / footer separated by grid lines
- Card grid: 3×N · each card a strict grid cell
- Dashboard blocks: stat block big + chart small + label tiny
- Whitespace: cell-based · entire cells reserved, never ad-hoc

## Motion / Transition

- GSAP `expo.out` / `power4.out`
- Entrance: fast snap into place · 300-400ms · no floating
- Counter animation: 0 → N · 1.2s · easeOutExpo
- Hover: 1px shift · no scale, no glow
- Page transition: hard cut or SDF iris geometric wipe

## Tech Stack

- Pure HTML + CSS Grid + GSAP (required for counters)
- No Three.js
- Chart.js / D3 / Apache ECharts (if data viz)
- IntersectionObserver for counter trigger

## Voice Register

- English-dominant
- Short sentences · active voice · numbers at the end
- "1.2M users · 99.99% uptime · 3 products"
- No boasting, no marketing fluff, no emoji

## Anti-pattern

- No gradients / glow / soft shadow (breaks the clinical feel)
- No rounded corners > 4px (rounded edges soften precision)
- No multiple accent colors (hold the line on ONE)
- No illustrations / personality icons (geometric icons only)
- No emoji
- No cinematic 3D scene

## Reference Frames

`reference/` collects Müller-Brockmann poster set + Linear / Vercel / Stripe dashboard reference.

## Starter Prompt

See [starter-prompt.md](./starter-prompt.md) (TBD).
