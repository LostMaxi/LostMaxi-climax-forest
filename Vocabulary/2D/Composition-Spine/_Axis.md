---
axis: 2D / Composition-Spine
description: 整體版面骨架 token 軸 · canvas 範圍 / overlay 堆疊 / hero 留白 / 視窗鎖定
status: skeleton
version: 0.2.0
---

# Composition Spine · 整體版面骨架

## 軸角色
定義整體版面的骨架性 token。每個 token 影響 Claude Design 生成 React 結構的 root layout 與 overlay 容器策略。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `full-screen-fixed` | 全屏固定 | body fixed full-screen、canvas z=0 占滿視窗 |
| `overlay-z-stack` | 浮層堆疊 | DOM z≥1 浮於 canvas 之上、永不嵌入 |
| `hero-negative-space` | 主視覺留白 | hero 60-70% 留白、單一焦點 |
| `viewport-locked-canvas` | 視窗鎖定 canvas | canvas 不隨 scroll 滑動、camera 動 |
| `split-grid-modular` | 分割網格 | 12-col grid 模組化分割 |
| `centered-axis-mirror` | 中軸鏡像 | 左右對稱中軸 anchor |
| `bleed-edge-overlay` | 出血邊浮層 | overlay 觸到視窗邊緣、無 padding |
| `sticky-stage` | 黏性舞台 | scroll 過 hero 段時 canvas pin 住 |

## 黏著
- 強搭：`3D/Camera-Scroll`（canvas 鎖定後鏡頭才好動）/ `Bridge/Z-Stack-Protocol`
- 注意：與 `2D/UI-Motion` 的 `panel-slide-from-edge` 需協調 z-index

## SHER 軸層級
S +0.20 / H +0.05 / E +0.10 / R +0.15

## 狀態
v0.2 skeleton · 待 C round-trip POC 後反推真正缺的 token
