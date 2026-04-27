---
axis: 3D / Geometry-Field
description: 幾何場域 token 軸 · particles / instanced / curve / morph
status: skeleton
version: 0.2.0
---

# Geometry Field · 幾何場域

## 軸角色
場景中 3D 物件的「群體形態」詞彙。單體 vs 群體、規則 vs 自由、靜態 vs 變形——此軸定義 hero geometry 的拓撲族系。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `instanced-forest` | 實例化林群 | InstancedMesh thousands · 樹/枝/葉模型重複 |
| `curve-following-lattice` | 曲線追隨晶格 | geometry array 沿 CatmullRomCurve3 排列 |
| `morphing-primitive-blob` | 變形原型團塊 | metaball / SDF blob · scroll-driven morph |
| `voxel-grid-pulse` | 體素網格脈動 | voxel field · noise-driven height |
| `wireframe-skeleton` | 線框骨架 | geometry wireframe-only · 抽象骨架感 |
| `particle-swarm-coherent` | 粒子群凝聚 | GPU particle · flock behavior · 凝聚→散開 |
| `SDF-marching-cluster` | SDF 行進雲團 | implicit surface ray marching · 有機融合 |

## 黏著
- 強搭：`3D/Material-Lexicon`（材質決定群體質感）/ `3D/Camera-Scroll`（穿越動線）
- 衝突：`instanced-forest` + `KHR-transmission-glass` = GPU fillrate 災難
- Pipeline 依賴：`Pipeline-Lexicon/Topology-Budget`（單體 face budget）

## SHER 軸層級
S +0.15 / H +0.10 / E +0.20 / R +0.20

## 狀態
v0.2 skeleton · Maxi 的 SketchUp / Shapr3D 模型主要餵入此軸
