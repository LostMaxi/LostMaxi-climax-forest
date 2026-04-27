---
kit: hall-villeneuve
name: Hall · Villeneuve Cinematic Kit
mood: 紀念性建築 · slow temporal · 光的重量 · 安靜的敬畏
best_for: 收藏品 / 限量發表 / 品牌儀式 / 紀念性網站 / 高端展覽
status: validated (Drop 05 η-05 黑曜石 SHER 9/10)
version: 0.1.0
---

# Hall · Villeneuve Cinematic Kit

對標：Denis Villeneuve 視覺美學（Blade Runner 2049 / Arrival / Dune / Sicario）+ 紀念性建築。

## Mood

> 「Hall 不是廢墟、是仍在運行的紀念物」

慢的能力 · 量體有重量 · 光是雕塑 · 沉默承載敘事。

## Anchor

- Vast monumental architecture · pillars / beams / shafts of light
- Atmospheric density（fog · particle dust · volumetric haze）
- Cool palette + surgical warm accent（一個 ochre 點打破冷藍）
- Slow temporal logic（過場 600-1100ms · ease-kando）
- Letterbox 21:9 cinematic crop（電影級畫框）
- Silence carrying weight（多用留白、少用音效）
- Quiet section as visible structural element（不是過場、是駐留）

## Palette

| 角色 | 色 | 用途 |
|---|---|---|
| Hall void | `#06080c` ~ `#0a0d14` | 暗底 |
| Iris cool | `#8384BD` / `#9EA0C9` | 主光 · 冷調 |
| Iris dim | `#6F71A7` / `#3C3D5A` | 陰影 / 邊緣 |
| Ochre warm | `#B4543A` / `#D77A55` | 唯一暖色 · 點睛 |
| Paper | `#F6F6F4` / `#FAFAF8` | 文字主色 |
| Mute | `rgba(246,246,244,0.62)` | meta |

冷色 ≥85% / Ochre 點 ≤3% · 永不大面積暖色。

## Typography

- Display zh: 獅尾 Thin display / Noto Sans TC Light · 巨大（clamp 64-156px）· 行高 0.92
- Display en: LINER / Inter · 12-13px · 大寫 · `letter-spacing: 0.28em`
- Body zh: Noto Sans TC · 400 wt · 行高 1.95
- Body en: LINER · 11px · 大寫 · `letter-spacing: 0.18em`
- Reportage caption: Maia / 手寫感 · 旋轉 -3.4° · 紙片風

A Hierarchy bilingual：zh 主 en 副 · zh 給情感、en 給座標。

## Composition

- 5-chapter Stage scrollytelling（Title / Material / Object / Quiet / Edition）
- Letterbox 21:9 bars top + bottom（fixed · `--bar:max(36px,calc((100vh-(100vw*9/21))/2))`）
- Header bar：Liquid Glass · backdrop-filter blur 24px
- Right-edge progress rail：dot ladder + scrubber fill
- Corner registration marks（`+` glyphs at 4 corners）
- Quiet chapter：90vh content + 大字 + ritual glyph 居中

## Motion / Transition

- Lenis smooth scroll · `lerp: 0.06`（更慢）
- View Transition API on chapter change（`::view-transition-old/new(chapter-flag)`）
- Pointer parallax PX=1.5
- Camera dolly: multi-keyframe three-stage（hero → mid → finale）
- Reveal: opacity + translateY · 600-1100ms cubic-bezier(0.19,1,0.22,1) ease-kando
- Warm point flicker animation（6.5s loop · 0.55-1 opacity）

## Tech Stack

- Three.js（必須）· PerspectiveCamera 36mm · FogExp2 · Spot/Hemi/Dir 多光源 · monumental geometry
- Lenis（必須）· 單一 rafLenis 整合 animate loop
- View Transition API（建議）
- WebAudio sub-bass drone（sine 42Hz + triangle 56Hz + LFO · default muted）
- HDRI + PMREMGenerator + RGBELoader（含 procedural CanvasTexture fallback）
- Raycaster + drag rotate（pickable · momentum 0.94）
- importmap CDN（three / lenis）· file:// safe

## Voice Register

- 持續性語氣 · 不宣告完成
- en 大寫 spec label
- zh 標題短 · body 詩意但克制
- 不誇耀、不 buzzword、不 emoji

## Anti-pattern

- 禁止熱帶 / 飽和色（破冷調）
- 禁止 Material Design 按鈕
- 禁止 SaaS landing
- 禁止 3-column feature grid
- 禁止 Apple 產品頁式 hero（hero 是 cinematic 不是 product shot）

## Reference Frames

`reference/` 收 Drop 05 黑曜石 frames + Villeneuve 三幀（Blade Runner 2049 / Oblivion / Man of Steel）。

## 已實證

[Archive-Library/Projects/Climax-Forest/v1.4/Obsidian.html](../../../../Archive-Library/Projects/Climax-Forest/v1.4/Obsidian.html) — 1882 lines single-file · SHER 9/10 · iron-ochre line 敘事→幾何翻譯滿分。

## Starter Prompt

見 [starter-prompt.md](./starter-prompt.md)（待補 · 可參考 Drop 05 prompt 結構）。
