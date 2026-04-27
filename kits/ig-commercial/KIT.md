---
kit: ig-commercial
name: IG / Threads Commercial Poster Kit
mood: 商業海報 · 主角 70%+ · 1 秒抓眼 · 平台投放 ready
best_for: IG / Threads / FB 廣告 / EDM / 商業 banner / 電商首頁
status: skeleton
version: 0.1.0
---

# IG / Threads Commercial Poster Kit

對標：IG carousel 商業教學體系（A 主視覺 / B 橫幅 / C 社群 / D 系列 / E 禮盒 / F 特寫 / G 促銷 / H 生活）8 種版型架構。

## Mood

> 「1 秒抓眼 · 主角自己說話 · 文字最少」

主視覺占畫面 70%+ · 文字區 ≤30% · 用強烈攝影 + 短標 + ONE accent 在零點幾秒內抓住注意力。

## Anchor

- 主角:文字 = 70:30（黃金比例）
- ONE strong product photo 占畫面主導
- Tagline ≤7 字繁中 / ≤5 words 英文
- Platform-ready framing：4:5（IG post）/ 1:1（square）/ 9:16（Reels / Stories）
- 中央/三分點放置主角
- 留白給 tagline 呼吸（少字、強視覺）

## 8 種子版型

選一個作為 prompt sub-flavor：

| Code | 名 | 用途 |
|:-:|---|---|
| A | 主視覺版 / Hero | 抓眼第一張 · 全 platform 適用 |
| B | 橫幅版 / Banner | website hero / EDM 標題 / 廣告 banner |
| C | 社群版 / Social | IG / Threads 純 post |
| D | 系列版 / Series | 3-4 件並列 · 系列作 / 多品 |
| E | 禮盒版 / Gift | 包裝展示 · 禮盒 / 套組 |
| F | 特寫版 / Close-up | 細節 / 質感 |
| G | 促銷版 / Promo | 折扣 / 限時 / CTA 強 |
| H | 生活版 / Lifestyle | 物件 in context · 情境照 |

## Palette

依照產品本身定 palette · Kit 不鎖死。但建議：

- 主背景：與產品形成反差（深品 → 淺底；淺品 → 深底）
- ONE accent：產品身上原有的色（不另創）
- 文字：最高對比（白 on 暗 / 黑 on 亮）

## Typography

- Display: Bold sans-serif（Inter / Helvetica / Anton）· 大字 · 占畫面 15-25%
- Tagline: 短句 · 有節奏 · 可大小寫混排
- Label: small + uppercase · 角落用
- 中文：思源黑體 Bold / 蒙納繁中黑 / Noto Sans TC 700
- 不超過 2 個字型族

## Composition (per 8 sub-flavor)

### A · 主視覺版
主角 80% · 上下留白 + tagline 浮在主角附近 / 角落

### B · 橫幅版
主角 90% 橫向延展 · tagline 對齊主角邊緣 + sub-headline 12px

### C · 社群版
主角 70% · 大留白 · tagline ≤5 字 · 用「品牌名 + 品名」二行
適用 IG / Threads · 4:5 或 1:1

### D · 系列版
3-4 件並列 grid · 每件下方一句話 · 整體統一光線方向

### E · 禮盒版
高角度俯拍 · 包裝展開 · 留白給「附贈說明」

### F · 特寫版
微距 macro · 質感放大 · 文字角落 minimal

### G · 促銷版
大折扣數字（80% / 8 折）+ 主角 + 限時 deadline
**警告**：本款最易踩 AI 老套（黃底紅字）· 改用 brand color + 反差

### H · 生活版
人物 + 物件 in context · 生活情境 · 文字輕

## Motion / Transition

- 純靜態 · 無動畫（這是海報、不是網頁）
- 如做成 web 版：scroll 進場 fade + 微 translateY · 300ms ease-out
- 不用 Lottie / GSAP timeline / Three.js

## Tech Stack

- 純 HTML + CSS（無 JS 也可）
- 或直接出靜態圖片（PNG / JPG / WebP）走 Canvas / SVG export
- 對位 IG / Threads 平台規範

## Voice Register

- 短句 · 動詞開頭
- "Tasteful chocolate · 流心布朗尼 · 剛剛好"
- 不用「最」「第一」「唯一」這類絕對詞（容易 cliché）
- 中英可混 · 但要有節奏

## Anti-pattern

- 禁止 cinematic 3D scene（破海報 flat 感）
- 禁止 GSAP scrollytelling（這是靜態海報）
- 禁止 emoji
- 禁止 多個 accent color（守 ONE）
- 禁止 主角 < 50%（畫面被文字占滿失敗）

## Reference Frames

`reference/` 收 IG / Threads 商業教學 carousel 系列（如 brownie 8 版型示範）+ 高水準產品攝影。

## Starter Prompt

見 [starter-prompt.md](./starter-prompt.md)（待補 · 須選 sub-flavor A-H 之一）。
