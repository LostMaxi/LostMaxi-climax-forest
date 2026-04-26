---
axis: Bridge / Fallback-Pact
description: 退化策略 token 軸 · reduced-motion / no-WebGL / mobile / battery
status: skeleton
version: 0.2.0
---

# Fallback Pact · 退化策略

## 軸角色
沉浸式不能假設所有用戶都能跑——`prefers-reduced-motion` / 無 WebGL / 行動裝置 / 省電模式 都需要明確降級路徑。費曼誠實要求：別假裝你的網站對所有人都一樣絢爛。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `prefers-reduced-motion` | 偏好減少動效 | 偵測 media query · 動效降至 ≤ 100ms / opacity only |
| `no-webgl-static` | 無 WebGL 靜態退化 | WebGL fail 時 canvas 替換為 hero 靜態圖 |
| `mobile-degrade-tier` | 行動裝置降級 | 手機 device tier 偵測 · Geometry / Material 降級表 |
| `battery-saver-pause` | 省電模式暫停 | navigator.getBattery low-power · 暫停 micro-jitter / bloom |

## 黏著
- 必備：所有沉浸式 spine HARD-LOCKED 必須包含此軸 token
- 強搭：`3D/Material-Lexicon`（降級時關閉 transmission）/ `3D/Motion-Easing-3D`（關閉 jitter）

## SHER 軸層級
S +0.20 / H +0.30 / E +0.10 / R +0.15
（H 最高 · 退化策略本身是誠實 axiom 的具體化）

## 狀態
v0.2 skeleton
