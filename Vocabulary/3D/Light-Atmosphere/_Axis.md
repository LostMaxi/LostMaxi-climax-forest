---
axis: 3D / Light-Atmosphere
description: 光線與氛圍 token 軸 · HDRI / rim / bloom / fog
status: skeleton
version: 0.2.0
---

# Light & Atmosphere · 光線與氛圍

## 軸角色
場景照明與大氣感。對位美學 DNA 的 Monet 軸（光影呼吸）+ Zumthor 軸（氛圍密度）。沒這層、再好的材質都是塑膠模型。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `HDRI-studio` | 工作室 HDRI 環境 | studio HDRI · clean refraction / reflection |
| `rim-light-edge` | 邊緣 rim 燈 | back rim light · silhouette 跳出 |
| `god-ray-volumetric` | 體積神光 | volumetric light shaft · 光束穿透 |
| `contact-shadow` | 接觸陰影 | screen-space contact shadow · 物件接地感 |
| `bloom-soft-pulse` | 柔光脈動 | bloom pass · scroll-driven intensity |
| `fog-distance-fade` | 距離霧消退 | exp fog · 遠景柔化 |
| `point-light-cluster` | 點光簇 | 多點光 · 動態 flicker（壁爐/星簇） |

## 黏著
- 強搭：`3D/Material-Lexicon`（光線決定材質可讀性）/ `2D/Color-Mood`（色溫一致）
- 必備：`HDRI-studio` 是 `KHR-transmission-glass` 的前置依賴

## SHER 軸層級
S +0.10 / H +0.15 / E +0.15 / R +0.20

## 狀態
v0.2 skeleton
