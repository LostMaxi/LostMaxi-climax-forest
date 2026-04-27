---
axis: Pipeline-Lexicon / Topology-Budget
description: 面數與拓撲規範 token 軸 · CAD → web 橋接層
status: skeleton
version: 0.2.0
---

# Topology Budget · 面數與拓撲規範

## 軸角色
SketchUp / Shapr3D 出 CAD 模型 → web 用 glTF 的橋詞彙。CAD 模型直餵 Three.js 會炸——百萬面、ngon、non-manifold——此軸定義可接受拓撲規範。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `face-budget` | 面數預算 | 單模型 ≤ 500K tri · scene 總計 ≤ 2M tri |
| `quad-dominant` | 四邊面為主 | 90%+ quad · 利於後續 subdivide / decimate |
| `LOD0-LOD3` | 4 階 LOD | LOD0 hero / LOD1 mid / LOD2 far / LOD3 silhouette |
| `non-manifold-check` | 非流形檢查 | Blender → Mesh → Clean Up → Make Manifold |
| `ngon-quarantine` | n-gon 隔離 | n-gon 必須隔離成單獨 group · 不混進主 mesh |

## 黏著
- 強搭：`Pipeline-Lexicon/Pipeline-Verbs`（decimate / triangulate-clean）
- 消費端：`3D/Geometry-Field`（消費這軸產出的乾淨拓撲）

## SHER 軸層級
S +0.20 / H +0.20 / E +0.10 / R +0.20

## 狀態
v0.2 skeleton · 真實面數 budget 待 Maxi 走第一條 Shapr3D 模型 pipeline 後校準
