---
axis: 3D / Motion-Easing-3D
description: 3D 動效曲線 token 軸 · scroll-paced / organic ease
status: skeleton
version: 0.2.0
---

# Motion Easing (3D) · 3D 動效曲線

## 軸角色
3D 物件 / camera / 屬性 over time 的緩動曲線詞彙。Lusion-tier 的「呼吸感」就在這層——sin / cubic-bezier / spring 的選擇決定觀眾感覺自然或機械。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `organic-cubic-bezier` | 有機立方貝茲 | 0.65, 0, 0.35, 1 · in-out 緩動 |
| `scroll-paced-reveal` | 滾動同步揭示 | velocity-aware · scroll 快慢決定 reveal 速率 |
| `micro-jitter` | 微抖動 | 低幅 noise perturbation · 1-2px / 0.5° |
| `pendulum-swing` | 鐘擺擺動 | sin 振盪 · 物件 idle 時微擺 |
| `overshoot-settle` | 過衝回穩 | spring overshoot 1.1 · settle |
| `physics-spring` | 物理彈簧 | mass-spring-damper · realistic |

## 黏著
- 強搭：`3D/Camera-Scroll`（曲線同源）/ `Bridge/Scroll-Coupling`
- 衝突：`micro-jitter` + `prefers-reduced-motion` = 必須 fallback

## SHER 軸層級
S +0.10 / H +0.15 / E +0.10 / R +0.15

## 狀態
v0.2 skeleton
