---
kit: swiss-pulse
name: Swiss Pulse Kit
mood: 臨床精準 · grid-locked · 數字主導 · 黑白 + ONE 電光跳色
best_for: SaaS / 數據儀表 / 開發者工具 / API 文檔 / 投資人介紹
status: skeleton
version: 0.1.0
---

# Swiss Pulse Kit

對標：Josef Müller-Brockmann Swiss grid + 現代 SaaS dashboard 美學。

## Mood

> 「Nothing decorative · Everything counts」

臨床、精準、數字主導、無浮腫。每個元素吸到 12-column 網格。Counter 從 0 數上來。Hard cut · 無花俏過場。

## Anchor

- Grid-locked compositions · 12-column 嚴格對齊
- Numbers dominate（80-120px stat blocks）
- Animated counters from 0
- Hard cuts only · 無 decorative transitions
- Black/white base + ONE electric accent
- Helvetica / Inter Bold for headlines · Regular for labels
- Cinematic Zoom 或 SDF Iris 過場（precise · geometric）

## Palette

| 角色 | 色 | 用途 |
|---|---|---|
| Base | `#1A1A1A` / `#000000` | 暗底 |
| Light Base | `#FFFFFF` / `#FAFAFA` | 亮底 |
| Accent | `#0066FF` (electric blue) **或** `#FFB300` (amber) — 二選一 | ONE 強調色 · 不混 |
| Text Primary | `#FFFFFF` / `#000000` | 主文字 |
| Text Mute | `rgba(255,255,255,0.55)` / `rgba(0,0,0,0.55)` | 次文字 |
| Grid Line | `rgba(255,255,255,0.10)` | 網格輔助線（debug 可顯示）|

黑白 ≥90% / 強調色 ≤10% · 嚴格不超出。

## Typography

- Display: Inter / Helvetica Neue · 700 wt · 80-120px · 緊密 letter-spacing -0.01em
- Body: Inter · 400 wt · 14-16px · 行高 1.5
- Number: Inter · 600 wt · monospace tabular nums (`font-variant-numeric: tabular-nums`)
- Label: Inter · 500 wt · 10-12px · 大寫 · `letter-spacing: 0.18em`
- 字型重量收 3-4 級（700 / 600 / 500 / 400）

## Composition

- 12-column grid · gutter 24px · 嚴格對齊
- Header / nav / footer 用 grid lines 分隔
- Card grid: 3×N · 每個 card 嚴格 grid cell
- Dashboard 板塊: stat block big + chart small + label tiny
- 留白：cell-based · 整 cell 留白、不亂留

## Motion / Transition

- GSAP `expo.out` / `power4.out`
- 進場：fast snap into place · 300-400ms · 不浮動
- Counter animation: 0 → N · 1.2s · easeOutExpo
- Hover：1px shift · 不放大、不 glow
- Page transition: hard cut 或 SDF iris geometric wipe

## Tech Stack

- 純 HTML + CSS Grid + GSAP（必須 for counters）
- 不需 Three.js
- Chart.js / D3 / Apache ECharts（如有 data viz）
- IntersectionObserver for counter trigger

## Voice Register

- 英文 dominant · 中文輔助
- 短句 · 主動語態 · 數字結尾
- "1.2M users · 99.99% uptime · 3 products"
- 不誇耀、不 marketing fluff、不 emoji

## Anti-pattern

- 禁止漸層 / glow / shadow soft（破 clinical 感）
- 禁止 rounded corners > 4px（圓角會軟化精準感）
- 禁止 multiple accent colors（嚴守 ONE）
- 禁止 illustrations / icons with personality（用 geometric icons only）
- 禁止 emoji
- 禁止 cinematic 3D scene

## Reference Frames

`reference/` 收 Müller-Brockmann poster set + Linear / Vercel / Stripe dashboard reference。

## Starter Prompt

見 [starter-prompt.md](./starter-prompt.md)（待補）。
