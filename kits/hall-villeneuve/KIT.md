---
kit: hall-villeneuve
name: Hall · Villeneuve Cinematic Kit
mood: monumental architecture · slow temporal · weight of light · quiet awe
best_for: collectibles / limited releases / brand rituals / commemorative sites / high-end exhibitions
status: validated (Drop 05 η-05 Obsidian, SHER 9/10)
version: 0.1.0
---

# Hall · Villeneuve Cinematic Kit

Reference: Denis Villeneuve visual aesthetics (Blade Runner 2049 / Arrival / Dune / Sicario) + monumental architecture.

## Mood

> "The Hall is not a ruin · it is a monument still in operation."

The capacity to be slow · volume with weight · light as sculpture · silence carrying narrative.

## Anchor

- Vast monumental architecture · pillars / beams / shafts of light
- Atmospheric density (fog · particle dust · volumetric haze)
- Cool palette + surgical warm accent (a single ochre point breaks the cold blue)
- Slow temporal logic (transitions 600-1100ms · ease-kando)
- Letterbox 21:9 cinematic crop
- Silence carrying weight (favor whitespace, avoid sound effects)
- Quiet section as visible structural element (not a transition, a dwelling)

## Palette

| Role | Color | Use |
|---|---|---|
| Hall void | `#06080c` ~ `#0a0d14` | dark base |
| Iris cool | `#8384BD` / `#9EA0C9` | main light · cool |
| Iris dim | `#6F71A7` / `#3C3D5A` | shadow / edges |
| Ochre warm | `#B4543A` / `#D77A55` | the only warm tone · highlight |
| Paper | `#F6F6F4` / `#FAFAF8` | primary text |
| Mute | `rgba(246,246,244,0.62)` | meta |

Cool tones ≥85% / ochre points ≤3% · never large warm areas.

## Typography

- Display: LINER / Inter · 12-13px · uppercase · `letter-spacing: 0.28em`
- Display oversized: Inter / Helvetica Neue · 700 wt · clamp 64-156px · line-height 0.92
- Body: Inter · 400 wt · line-height 1.95
- Body label: LINER · 11px · uppercase · `letter-spacing: 0.18em`
- Reportage caption: Maia / hand-written feel · rotated -3.4° · paper-strip style

Hierarchy: display gives coordinates · body gives feeling.

## Composition

- 5-chapter Stage scrollytelling (Title / Material / Object / Quiet / Edition)
- Letterbox 21:9 bars top + bottom (fixed · `--bar:max(36px,calc((100vh-(100vw*9/21))/2))`)
- Header bar: Liquid Glass · backdrop-filter blur 24px
- Right-edge progress rail: dot ladder + scrubber fill
- Corner registration marks (`+` glyphs at 4 corners)
- Quiet chapter: 90vh content + display type + ritual glyph centered

## Motion / Transition

- Lenis smooth scroll · `lerp: 0.06` (slower)
- View Transition API on chapter change (`::view-transition-old/new(chapter-flag)`)
- Pointer parallax PX=1.5
- Camera dolly: multi-keyframe three-stage (hero → mid → finale)
- Reveal: opacity + translateY · 600-1100ms cubic-bezier(0.19,1,0.22,1) ease-kando
- Warm point flicker animation (6.5s loop · 0.55-1 opacity)

## Tech Stack

- Three.js (required) · PerspectiveCamera 36mm · FogExp2 · Spot/Hemi/Dir multi-light · monumental geometry
- Lenis (required) · single rafLenis integrated animate loop
- View Transition API (recommended)
- WebAudio sub-bass drone (sine 42Hz + triangle 56Hz + LFO · default muted)
- HDRI + PMREMGenerator + RGBELoader (with procedural CanvasTexture fallback)
- Raycaster + drag rotate (pickable · momentum 0.94)
- importmap CDN (three / lenis) · file:// safe

## Voice Register

- Continuous tense · never claim completion
- Uppercase English spec labels
- Short titles · poetic but restrained body
- No boasting, no buzzwords, no emoji

## Anti-pattern

- No tropical / saturated colors (breaks cool tonality)
- No Material Design buttons
- No SaaS landing
- No 3-column feature grid
- No Apple product-page hero (the hero is cinematic, not a product shot)

## Reference Frames

`reference/` collects Drop 05 Obsidian frames + three Villeneuve frames (Blade Runner 2049 / Oblivion / Man of Steel).

## Validated

[Archive-Library/Projects/Climax-Forest/v1.4/Obsidian.html](../../../../Archive-Library/Projects/Climax-Forest/v1.4/Obsidian.html) — 1882-line single file · SHER 9/10 · iron-ochre line narrative-to-geometry translation, full marks.

## Starter Prompt

See [starter-prompt.md](./starter-prompt.md) (TBD · refer to Drop 05 prompt structure).
