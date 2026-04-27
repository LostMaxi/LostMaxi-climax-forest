---
axis: Bridge / Scroll-Coupling
description: 滾動雙軌綁定 token 軸 · 共享 scrollY 驅動 camera + DOM
status: skeleton
version: 0.2.0
---

# Scroll Coupling · 滾動雙軌綁定

## 軸角色
保證 2D（DOM transition）與 3D（camera state）兩軌都吃同一條 scrollY · 否則沉浸式破功（DOM 動了 camera 沒動 = 觀眾看到 layer 脫節）。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `shared-scrollY-driver` | 共享 scrollY 驅動 | 單一 Lenis instance · 全域 scrollY bus |
| `camera-state-sync` | 鏡頭狀態同步 | scrollY → camera position/rot/fov 函數綁定 |
| `dom-transform-mirror` | DOM transform 鏡像 | scrollY → DOM transition 函數綁定 · 與 camera 同源 |
| `progress-emit-bus` | 進度事件總線 | scrollY normalized 0-1 · pub/sub bus |

## 黏著
- 必備：`Bridge/Z-Stack-Protocol`（堆疊先穩定）
- 強搭：`3D/Camera-Scroll`（消費端）/ `2D/UI-Motion`（消費端）

## SHER 軸層級
S +0.25 / H +0.15 / E +0.10 / R +0.20

## 狀態
v0.2 skeleton · Lenis + GSAP ScrollTrigger 為實作首選
