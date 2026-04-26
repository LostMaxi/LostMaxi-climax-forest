---
axis: Bridge / Z-Stack-Protocol
description: 圖層堆疊規約 token 軸 · canvas z=0 / DOM z≥1 / 永不混嵌
status: skeleton
version: 0.2.0
---

# Z-Stack Protocol · 圖層堆疊規約

## 軸角色
2D ↔ 3D 黏合層的硬規約。防止 Claude Design 把 DOM UI 嵌進 canvas 或把 3D 元素塞進 DOM——這兩個錯誤直接破壞沉浸感。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `canvas-z0-base` | canvas 為底 | `<canvas>` always position: fixed; z-index: 0 |
| `dom-z1-overlay` | DOM 浮層 | overlay container z-index ≥ 1 |
| `never-nested` | 永不嵌套 | 禁止 `<canvas><div>` 或 `<div ref=R3F>` 混嵌結構 |
| `pointer-events-pass-through` | 點擊穿透 | overlay 不需互動區段 `pointer-events: none` 讓事件穿到 canvas |

## 黏著
- 必備：所有沉浸式 spine 都引用此軸 · HARD-LOCKED 一部分
- 強搭：`Bridge/Scroll-Coupling`（堆疊穩定後 scroll 才好接）

## SHER 軸層級
S +0.30 / H +0.20 / E +0.05 / R +0.20
（S 最高 · 規約類軸貢獻在於穩定性）

## 狀態
v0.2 skeleton · 此軸 token 會直接寫進 Prompt Spine HARD-LOCKED 段
