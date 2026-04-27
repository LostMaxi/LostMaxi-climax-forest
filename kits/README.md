---
name: Aesthetic Kit Library
description: The Climax Forest aesthetic kit library — where everyone who loves web architecture finds their own aesthetic expression
status: skeleton
---

# Aesthetic Kit Library

> Five doors into five forests · pick one, bring your light, the skeleton stitches itself.

Each Kit = a bundle of (aesthetic anchors + tech stack + scroll choreography + token set + voice register).

Pick a Kit, layer in your subject, run it through the Spine compiler → emit a prompt ready to paste into Claude Design → receive a Lusion-tier immersive site.

## Structure

```
kits/
├── _registry.yaml          (Kit index · machine-readable)
├── {kit-name}/
│   ├── KIT.md              (spec · mood / palette / typography / motion / GSAP timing)
│   ├── reference/          (source frames · annotations)
│   └── starter-prompt.md   (Claude Design starter prompt)
```

## First batch of Kits (in progress)

| Kit | Character | Best for |
|---|---|---|
| `lusion-cinematic` | Cinematic 3D agency · dark + neon + particles | portfolio / studio / motion-art showcase |
| `opal-product` | Apple-product-page minimalism · full-bleed photo + sticky cart | hardware / objects / product launches |
| `hall-villeneuve` | Monumental architecture · slow temporal · the weight of light | brand rituals / collectibles / limited editions |
| `swiss-pulse` | Clinical precision · grid-locked · numbers dominant | SaaS / data dashboards / developer tools |
| `ig-commercial` | Commercial poster · subject at 70% · 1-second eye-catch | marketing / IG / Threads |

## Sources

- Real design traditions (Müller-Brockmann / Vignelli / Carson, etc.)
- Public work from notable creative studios (Lusion / Shader.se / heygen, etc.)
- User contributions (welcome)

## Contributing

Write a KIT.md + drop a few reference frames + write a starter-prompt.md → PR into `_registry.yaml`.
