---
axis: 3D / Material-Lexicon
description: 材質詞彙 token 軸 · PBR + KHR extensions
status: skeleton
version: 0.2.0
---

# Material Lexicon · 材質詞彙

## 軸角色
3D 物件的表面材質策略。Lusion-tier 的另一招牌——透射玻璃、次表面散射、液態金屬虹彩、體積霧——這軸決定觀眾「相信這個物件是真的」的程度。

## 計畫 token

| Token | 中文錨 | 一句話 | 卡片 |
|---|---|---|:---:|
| `KHR-transmission-glass` | 透射玻璃 | KHR_materials_transmission · 真實玻璃感 | [✓](KHR_Transmission_Glass.md) |
| `subsurface-skin` | 次表面散射肌膚 | SSS · 半透明蠟/皮/玉 | stub |
| `liquid-metal-iridescence` | 液態金屬虹彩 | metalness 1 + iridescence + low roughness | stub |
| `volumetric-fog` | 體積霧 | volumetric scattering · 真實光霧 | stub |
| `brushed-metal-anisotropy` | 各向異性拉絲金屬 | anisotropic highlight · brushed metal | stub |
| `film-grain-coat` | 膠片顆粒塗層 | post-process grain overlay · 電影感 | stub |
| `matcap-stylized` | matcap 風格化 | baked lighting · 風格化非物理 | stub |

## 黏著
- 強搭：`3D/Light-Atmosphere`（HDRI / rim / bloom 必備）/ `Pipeline-Lexicon/PBR-KHR-Extensions`
- 衝突：`KHR-transmission-glass` ↔ `volumetric-fog` 計算路徑衝突

## SHER 軸層級
S +0.10 / H +0.10 / E +0.20 / R +0.25
（R 最高 · 材質精度直接決定 Lusion-tier 等級）

## 範本卡
[KHR_Transmission_Glass.md](KHR_Transmission_Glass.md) — v0.2 唯一 fully-fleshed 範本、其餘待 v0.2.1+ 充實

## 狀態
v0.2 skeleton（含 1 張範本卡）
