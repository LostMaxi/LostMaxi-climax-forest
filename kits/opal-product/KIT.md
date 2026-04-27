---
kit: opal-product
name: Opal Hardware Product Kit
mood: Apple 產品頁 minimalism · 全屏攝影 · sticky cart · 中性灰
best_for: 硬體 / 物件 / 新品發表 / 工業設計作品 / 高端消費品
status: skeleton
version: 0.1.0
---

# Opal Hardware Product Kit

對標：[opalcamera.com/opal-tadpole](https://opalcamera.com/opal-tadpole) · Apple 產品頁式 hardware showcase。

## Mood

> 「物品本身就是英雄 · 一張照片頂萬字 · 訂購卡始終在角落」

留白量大 · 中性灰底襯產品攝影 · sticky persistent purchase card · 規格頁逐一 reveal。

## Anchor

- Full-bleed product photography（每 section 一張）
- Hand-as-scale shots（人手持物 · 給尺寸感）
- Sticky purchase card 恆在右上 / 右下角（不消失）
- Spec reveal scroll（材質 / 重量 / 顏色 / 對比 ladder）
- Watch-style stat blocks（45g / 47 Parts / 8 Materials）

## Palette

| 角色 | 色 | 用途 |
|---|---|---|
| Base | `#1F2026` / `#2A2C30` | 暗模式底（規格頁）|
| Light Base | `#F5F5F4` / `#FAFAF8` | 明模式底（hero）|
| Subject | 中性灰 `#4C4E56` ~ `#818387` | 產品配色 / 文字主色 |
| Accent | `#FFE08A` / `#FDDA25` (warm yellow circle) | ONE 高光點 · 不超過畫面 1% |
| Mute | `rgba(0,0,0,0.55)` / `rgba(255,255,255,0.45)` | meta |

中性灰 ≥85% / 對比強光 ≤10% / Accent ≤1%。

## Typography

- Display: SF Pro Display / Inter · 600 wt · 中等尺寸（48-96px）· 鬆 letter-spacing 0
- Body: SF Pro Text / Inter · 400 wt · 行高 1.5
- Spec label: Inter · 11-13px · 中性灰 · `letter-spacing: 0.04em`
- Type-Centric: weights 收一個層級（通常 600 + 400 兩級即可）

## Composition

- Vertical scroll sections（不是 fixed 全屏）
- Hero: full-bleed 產品照片 + 短文 overlay 左上
- Sticky 購買卡: top-right · 永不消失 · semi-transparent backdrop blur
- Spec section: 暗模式 · 兩欄 grid · 數字大字
- Comparison: photo grid · 横向 ladder
- Lifestyle shot: 人手 + 環境 + 物件 in context

## Motion / Transition

- 純 scroll · 無 GSAP timeline
- CSS transition only（300ms ease-out）
- Image fade-in on enter viewport
- Sticky card stays · 不淡入淡出

## Tech Stack

- 純 HTML + CSS + 少量 vanilla JS（不需 Three.js）
- IntersectionObserver for fade-in
- Sticky positioning + backdrop-filter
- Optimized images（webp / responsive sizes）
- 無外部依賴除 fonts

## Voice Register

- 英文簡短 + 數字主導
- Tagline: 物件 + 一個動詞（"A new species of webcam"）
- Spec：用 「Tiny」「Premium」「Painted」這類 evocative adjective
- 不講「revolutionary」「game-changing」這類 buzzword

## Anti-pattern

- 禁止 3D scene（這個 Kit 純 2D 攝影）
- 禁止 cinematic dark mode hero（Apple-style 是亮的、暗模式只用於 spec 頁）
- 禁止 emoji
- 禁止 Lottie animation（保持靜態攝影感）

## Reference Frames

`reference/` 收 Opal Tadpole / Apple product page / 高端硬體 reference。

## Starter Prompt

見 [starter-prompt.md](./starter-prompt.md)（待補）。
