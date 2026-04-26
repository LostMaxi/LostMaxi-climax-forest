---
axis: 3D / Camera-Scroll
description: 鏡頭與滾動編舞 token 軸 · scroll = timeline
status: skeleton
version: 0.2.0
---

# Camera-Scroll Choreography · 鏡頭與滾動編舞

## 軸角色
scrollY 驅動 PerspectiveCamera 狀態（position / rotation / fov / focus）的編舞詞彙。Lusion-tier 的核心招牌——scroll 是時間軸、camera 是觀眾的眼睛。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `dolly-through-particle-tunnel` | 推軌穿越粒子隧道 | camera position.z scroll-driven · 穿過 instanced field |
| `orbital-pause-and-reveal` | 軌道停駐揭示 | scroll 至特定 anchor 時 camera 軌道環繞物件 |
| `depth-of-field-rack` | 景深拉焦 | scroll 驅動 focus distance · 前景虛背景實切換 |
| `camera-shake-organic` | 有機鏡頭微震 | 低頻 sin perturbation · 模擬手持鏡頭 |
| `fly-through-portal` | 穿門飛入 | 場景轉換時 camera 飛入下一個 stage 入口 |
| `pan-and-tilt-cinematic` | 電影感平搖 | scroll 段落 camera 以 cinematic 速率平移 |

## 黏著
- 強搭：`Bridge/Scroll-Coupling`（必須走共享 scrollY bus）/ `3D/Geometry-Field`（粒子隧道 = particle field）
- 衝突：`scroll-paced-reveal` 太快 + `depth-of-field-rack` 過頻 = 觀眾暈

## SHER 軸層級
S +0.15 / H +0.10 / E +0.15 / R +0.25
（R 最高 · Lusion-tier 沒這層等於沒進場）

## 狀態
v0.2 skeleton
