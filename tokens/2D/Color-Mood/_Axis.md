---
axis: 2D / Color-Mood
description: 色彩與氣氛 token 軸 · Lost Maxi.Art 六階為基底
status: skeleton
version: 0.2.0
---

# Color & Mood · 色彩與氣氛

## 軸角色
版面色彩策略。基底為 Lost Maxi.Art 六階（深灰 / 淺灰 / 淺白 / 純白 / 紫羅蘭 / 藍紫）· 此軸負責**氣氛延伸**而非色票本身。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `Lost-Maxi-six-tone` | 六階基底 | 全域層 §設計系統的硬約束六階 · 永不超出 |
| `violet-accent-pulse` | 紫色脈動強調 | `#A78BFA` scroll-paced opacity pulse |
| `glass-bloom-tint` | 玻璃 bloom 染色 | bloom pass 微染紫羅蘭 `#DFCEEA` |
| `duotone-shadow-rim` | 雙色陰影邊緣 | shadow 兩色漸變（紫 + 深灰） |
| `luminance-key-darken` | 亮度抠暗 | mid-grey 區段 -20% 提升對比 |
| `opacity-stack-vignette` | 浮層 vignette | overlay 邊緣 alpha gradient 暗角 |

## 黏著
- 強搭：`3D/Light-Atmosphere`（光線色與 UI 色須一致 mood）/ `2D/UI-Motion`
- 硬約束：所有 token 都不可跳出 Lost Maxi.Art 六階基底

## SHER 軸層級
S +0.05 / H +0.20 / E +0.05 / R +0.10
（H 高 · 因色彩誠實 = 不發明色碼）

## 狀態
v0.2 skeleton · 規範參考全域層 `~/.claude/CLAUDE.md` §Lost Maxi.Art 設計系統
