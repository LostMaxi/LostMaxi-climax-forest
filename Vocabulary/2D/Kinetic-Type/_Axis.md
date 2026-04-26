---
axis: 2D / Kinetic-Type
description: 動態文字 token 軸 · scroll-driven typography
status: skeleton
version: 0.2.0
---

# Kinetic Type · 動態文字

## 軸角色
scroll / hover / progress 驅動的文字行為。Lusion-tier 沉浸式網頁中、字體本身是 motion 主角而非靜態 label。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `scroll-masked-reveal` | 滾動遮罩顯字 | clip-path scroll-driven · 字體從 mask 中浮出 |
| `variable-axis-morph` | 字軸變形 | OpenType variable font · weight/width scroll-driven |
| `staggered-uppercase` | 錯開大寫陣列 | 大字標題逐字延遲入場 |
| `character-by-character` | 逐字呈現 | char-level animation · stagger 50-100ms |
| `type-mask-clip` | 文字遮影像 | text-as-mask · 影片/3D scene 從字內顯現 |
| `variable-weight-pulse` | 字重脈動 | scroll progress 驅動 font-weight 100→900 |
| `kerning-breathe` | 字距呼吸 | hover/idle 時 letter-spacing 微幅震盪 |

## 黏著
- 強搭：`2D/Composition-Spine`（hero 留白給大字呼吸）/ `3D/Camera-Scroll`（字體與鏡頭同步）
- 衝突：過密 `staggered-uppercase` + 過快 `scroll-paced-reveal` = 認知過載

## SHER 軸層級
S +0.10 / H +0.10 / E +0.20 / R +0.15

## 狀態
v0.2 skeleton
