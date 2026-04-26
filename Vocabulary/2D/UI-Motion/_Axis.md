---
axis: 2D / UI-Motion
description: 介面層動效 token 軸 · panel / form / cursor
status: skeleton
version: 0.2.0
---

# UI Layer Motion · 介面層動效

## 軸角色
DOM overlay 層的微互動動效。與 3D motion 解耦——這層是滑鼠／觸控／表單反饋、不是場景 motion。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `panel-slide-from-edge` | 邊緣滑入面板 | side panel 從視窗邊緣滑入、200-300ms ease-out |
| `form-progressive-disclosure` | 表單漸進揭露 | 多步表單 · 上一步完成後下一步 fade-in |
| `cursor-magnet` | 滑鼠磁吸 | hover 區域對 cursor 產生 < 8px 磁吸位移 |
| `tooltip-blur-in` | 提示模糊入場 | tooltip 從 blur(8px) opacity 0 過渡 |
| `button-elevation-tilt` | 按鈕浮起傾斜 | hover 時 transform: translateZ + 軸傾 1-2° |
| `scroll-progress-bar` | 滾動進度條 | sticky top bar · scroll 0-100% 寬度填充 |

## 黏著
- 強搭：`2D/Composition-Spine`（z-index 不打架）/ `Bridge/Scroll-Coupling`
- 注意：`cursor-magnet` 在觸控裝置自動降級

## SHER 軸層級
S +0.10 / H +0.10 / E +0.15 / R +0.10

## 狀態
v0.2 skeleton
