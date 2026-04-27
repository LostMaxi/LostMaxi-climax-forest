---
kit: lusion-cinematic
name: Lusion Cinematic Studio Kit
mood: creative-studio · dark + neon + particles · slow scroll-driven cinematic
best_for: portfolio / creative studio / motion-art showcase / agency landing
status: skeleton
version: 0.1.0
---

# Lusion Cinematic Studio Kit

Reference: [lusion.co](https://lusion.co) · [shader.se](https://shader.se) — cinematic 3D agency aesthetics.

## Mood

> "Loader is ritual · scroll is camera dolly · every hover is a shader tremor."

Dark base carrying 3D · particles as breath · camera passes through scenes · keyed temporal narrative.

## Anchor

- Slow scroll-driven camera dolly through 3D space
- Loader-as-ritual (asset count visible, entrance has weight)
- Particle systems as ambient breath
- 5-phase scrollytelling arc (hero → grid → flythrough → finale → about)
- Black base + neon accent + crystalline depth

## Palette

| Role | Color | Use |
|---|---|---|
| Base | `#000000` / `#06080c` | base · void |
| Accent A | `#0066FF` (electric blue) | particle main light / scroll cue |
| Accent B | `#FF3366` / red-violet | contrast disturbance / hover tremor |
| Highlight | `#FFFFFF` | display type / focal points |
| Mute | `rgba(255,255,255,0.45)` | meta / spec |

Cool tones 95% / accent ≤5% / no more than 3 neon points active simultaneously.

## Typography

- Display: Inter / Helvetica Neue · 700 wt · oversized (clamp 64-180px) · tight letter-spacing -0.02em
- Body: Inter · 300-400 wt · line-height 1.6
- Mono: 'SF Mono' / 'JetBrains Mono' · used as spec labels (e.g. `[[ 001 ]]` `i\h 1SR`)
- Monospace tags are Lusion's signature (tooltip / nav / asset count)

## Composition

- Full-screen fixed canvas · z-index 0
- Overlay UI · z-index 1+ · never embedded inside canvas
- 5-section scrollytelling spine (each section 100vh+)
- Header transparent / collapses on scroll
- Bottom-right frame counter / fps / asset progress always visible

## Motion / Transition

- Lenis smooth scroll · `lerp: 0.08`
- GSAP ScrollTrigger · scrub camera state
- ease: `expo.out` / `power4.out`
- Hover: particle displacement + bloom flicker
- Click: shockwave radial expansion from cursor
- Loader: asset count up 0/N · progress bar is part of the visual ritual

## Tech Stack

- Three.js (required) + PerspectiveCamera + Fog + Spot/Hemi multi-light
- Lenis (required)
- GSAP + ScrollTrigger (required)
- HDRI + PMREM (strongly recommended)
- Custom GLSL fragment shader (particles / bloom)
- BufferGeometry + InstancedMesh (thousand-particle scale)

## Voice Register

- Short English spec labels · uppercase + monospace
- Tagline poetic · titles narrative · bodies generous in whitespace
- Speak of mood, not features

## Anti-pattern

- No SaaS landing patterns (hero text + CTA button + 3-column features)
- No Tailwind default rounded corners
- No emoji
- No Material Design buttons

## Reference Frames

`reference/` directory will collect Lusion / Shader.se / Maxi reference frames.

## Starter Prompt

See [starter-prompt.md](./starter-prompt.md) (TBD).
