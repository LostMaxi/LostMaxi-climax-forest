---
axis: Pipeline-Lexicon / Compression
description: glTF 壓縮詞彙 token 軸 · Draco / Meshopt / KTX2
status: skeleton
version: 0.2.0
---

# Compression · 壓縮詞彙

## 軸角色
模型 / 紋理壓縮策略。沉浸式網頁首屏 < 5MB 是硬指標、沒這軸無法達標。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `Draco` | Draco 幾何壓縮 | geometry 約 7-10× 壓縮率 · 需 decoder runtime |
| `Meshopt` | Meshopt 幾何壓縮 | 替代 Draco · decoder 更小 · gltfpack 工具 |
| `KTX2` | KTX2 紋理 | basis universal supercompressed texture · GPU 直讀 |
| `basis-universal` | basis universal | KTX2 後端 · cross-platform GPU texture |
| `texture-resize-budget` | 紋理尺寸預算 | hero 2K / mid 1K / detail 512 |

## 黏著
- 強搭：`Pipeline-Lexicon/Pipeline-Verbs`（壓縮是 verb 的最後一步）
- 消費端：Three.js GLTFLoader + DRACOLoader / KTX2Loader 配對

## SHER 軸層級
S +0.20 / H +0.10 / E +0.15 / R +0.20

## 狀態
v0.2 skeleton
