---
kit: lusion-cinematic
name: Lusion Cinematic Studio Kit
mood: 創意工作室 · 暗 + 霓虹 + 粒子 · slow scroll-driven cinematic
best_for: Portfolio / 創意工作室 / 動態藝術展演 / agency landing
status: skeleton
version: 0.1.0
---

# Lusion Cinematic Studio Kit

對標：[lusion.co](https://lusion.co) · [shader.se](https://shader.se) 級別 cinematic 3D agency 美學。

## Mood

> 「Loader 是儀式 · scroll 是 camera dolly · 每個 hover 都是 shader 顫動」

暗底襯 3D · 粒子作為呼吸 · 鏡頭穿越場景 · 鍵入時間性敘事。

## Anchor

- Slow scroll-driven camera dolly through 3D space
- Loader-as-ritual（asset 計數可見、進場有重量）
- Particle systems as ambient breath
- 5-phase scrollytelling arc（hero → grid → flythrough → finale → about）
- Black base + neon accent + crystalline depth

## Palette

| 角色 | 色 | 用途 |
|---|---|---|
| Base | `#000000` / `#06080c` | 底 · 太空 |
| Accent A | `#0066FF` (electric blue) | 粒子主光 / scroll cue |
| Accent B | `#FF3366` / 紅紫 | 對比擾動 / hover 顫動 |
| Highlight | `#FFFFFF` | 大字 / 焦點 |
| Mute | `rgba(255,255,255,0.45)` | meta / spec |

冷色 95% / 跳色 ≤5% / Neon 不超過 3 點同時。

## Typography

- Display: Inter / Helvetica Neue · 700 wt · 巨大尺寸（clamp 64-180px）· 緊密 letter-spacing -0.02em
- Body: Inter · 300-400 wt · 行高 1.6
- Mono: 'SF Mono' / 'JetBrains Mono' · 用作 spec label（如 `[[ 001 ]]` `i\h 1SR`）
- Monospace 標籤是 Lusion 招牌（tooltip / nav / asset count 都用）

## Composition

- Full-screen fixed canvas · z-index 0
- Overlay UI · z-index 1+ · 永不嵌進 canvas
- 5-section scrollytelling spine（每 section 100vh+）
- Header transparent / 收合於 scroll
- 右下角 frame counter / fps / asset progress 持續顯示

## Motion / Transition

- Lenis smooth scroll · `lerp: 0.08`
- GSAP ScrollTrigger · scrub camera state
- ease: `expo.out` / `power4.out`
- Hover：粒子 displacement + bloom flicker
- Click：shockwave 從 cursor radial 擴散
- Loader：asset count up 0/N · 進度條為視覺 ritual 的一部分

## Tech Stack

- Three.js（必須）+ PerspectiveCamera + Fog + Spot/Hemi 多光源
- Lenis（必須）
- GSAP + ScrollTrigger（必須）
- HDRI + PMREM（強烈建議）
- Custom GLSL fragment shader（粒子 / bloom）
- BufferGeometry + InstancedMesh（千級粒子）

## Voice Register

- 英文簡短 spec label · 大寫 + monospace
- Tagline 詩意 · 標題敘事 · body 留白多
- 不講功能、講氛圍

## Anti-pattern

- 禁止 SaaS landing 樣式（hero text + CTA 按鈕 + 3-column features）
- 禁止 Tailwind default rounded corners
- 禁止 emoji
- 禁止 Material Design 按鈕

## Reference Frames

`reference/` 目錄將收 Lusion / Shader.se / Maxi 收集的參考幀。

## Starter Prompt

見 [starter-prompt.md](./starter-prompt.md)（待補）。
