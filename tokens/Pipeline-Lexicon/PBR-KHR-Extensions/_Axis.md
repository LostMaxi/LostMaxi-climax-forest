---
axis: Pipeline-Lexicon / PBR-KHR-Extensions
description: glTF 材質擴展詞彙 token 軸
status: skeleton
version: 0.2.0
---

# PBR & KHR Extensions · 材質擴展

## 軸角色
glTF 2.0 的 KHR materials extensions 是 Lusion-tier 材質的真正源頭。此軸列舉可用 extension · 與 `3D/Material-Lexicon` 軸對應映射。

## 計畫 token

| Token | 中文錨 | 一句話 |
|---|---|---|
| `KHR_materials_transmission` | 透射 | 真實玻璃 / 半透明介質 |
| `KHR_materials_volume` | 體積 | 與 transmission 配 · 模擬光在介質中衰減 |
| `KHR_materials_clearcoat` | 透明塗層 | 雙層材質 · 車漆 / 鋼琴漆 |
| `KHR_materials_ior` | 折射率 | transmission 必備 · 玻璃 1.5 / 鑽石 2.4 |
| `KHR_lights_punctual` | 點光源 | 可定義 point / spot / directional in glTF |
| `KHR_materials_iridescence` | 虹彩 | 油膜 / 蝶翅 / 肥皂泡效果 |
| `KHR_materials_anisotropy` | 各向異性 | brushed metal / 髮絲 high light |

## 黏著
- 消費端：`3D/Material-Lexicon`（每個 material token 必須宣告引用哪些 KHR extension）
- Pipeline：Blender glTF exporter 必須勾對應 extension

## SHER 軸層級
S +0.20 / H +0.20 / E +0.20 / R +0.20

## 狀態
v0.2 skeleton · 規範對齊 https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos
