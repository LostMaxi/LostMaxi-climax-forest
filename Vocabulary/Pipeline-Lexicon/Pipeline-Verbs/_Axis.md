---
axis: Pipeline-Lexicon / Pipeline-Verbs
description: Pipeline 動詞 token 軸 · decimate / unwrap / bake / merge / instance
status: skeleton
version: 0.2.0
---

# Pipeline Verbs · Pipeline 動詞

## 軸角色
SketchUp / Shapr3D → Blender → glTF 流程中的**動作詞彙**。Maxi 在 Blender 走的每一步都對應這裡一個 verb token。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `decimate` | 抽面降密 | Blender Decimate modifier · 0.3-0.5 ratio 降至 web budget |
| `unwrap` | 展 UV | Smart UV Project · 為 bake 做準備 |
| `bake-AO-normal` | 烘焙 AO + normal | high-poly → low-poly bake · 保視覺密度 |
| `merge-by-material` | 按材質合併 | 同材質 mesh 合併 · 減少 draw call |
| `instance-from-collection` | 從集合實例化 | Collection Instance · 配合 InstancedMesh export |
| `triangulate-clean` | 三角化清理 | export 前 triangulate · 確保 glTF 相容 |
| `apply-transforms` | 套用變換 | scale / rotation 套用入頂點 · 防意外旋轉 |

## 黏著
- 強搭：`Pipeline-Lexicon/Topology-Budget`（verb 的目標是達到 budget）
- 順序：apply-transforms → unwrap → bake → decimate → merge → triangulate → export

## SHER 軸層級
S +0.20 / H +0.20 / E +0.10 / R +0.20

## 狀態
v0.2 skeleton · 與 Maxi 第一條 Shapr3D pipeline POC 同步充實
