---
name: Climax Forest Vocabulary
description: 詞彙平台三庫骨架 v0.2 · 2D + 3D + Bridge + Pipeline-Lexicon · 餵 Claude Design 生成 Lusion-tier 沉浸式網頁
version: 0.2.0
status: skeleton
---

# Climax Forest · Vocabulary

詞彙平台三庫（+ Pipeline 子庫）的根駐點。每張 token 卡 = 一個原子 token、組合進 Prompt Spine 編譯器 → 餵 Claude Design → 收 Lusion-tier 代碼架構。

公式：
```
極相林 = 2D 詞彙庫 + 3D 詞彙庫 + Bridge 詞彙庫
       → Prompt Spine 編譯器
       → Claude Design 生成代碼架構
       → Lusion-tier 沉浸式網頁規格
```

---

## 三庫地圖

### 2D 詞彙庫（DOM / Tailwind / overlay 層）

| 軸 | 入口 | 一句話 |
|---|---|---|
| Composition Spine | [2D/Composition-Spine/](2D/Composition-Spine/_Axis.md) | 整體版面骨架 |
| Kinetic Type | [2D/Kinetic-Type/](2D/Kinetic-Type/_Axis.md) | 動態文字 |
| Color & Mood | [2D/Color-Mood/](2D/Color-Mood/_Axis.md) | 色彩與氣氛 |
| UI Layer Motion | [2D/UI-Motion/](2D/UI-Motion/_Axis.md) | 介面層動效 |

### 3D 詞彙庫（Three.js / Scene 層）

| 軸 | 入口 | 一句話 |
|---|---|---|
| Camera-Scroll Choreography | [3D/Camera-Scroll/](3D/Camera-Scroll/_Axis.md) | 鏡頭與滾動編舞 |
| Geometry Field | [3D/Geometry-Field/](3D/Geometry-Field/_Axis.md) | 幾何場域 |
| Material Lexicon | [3D/Material-Lexicon/](3D/Material-Lexicon/_Axis.md) | 材質詞彙（含範本卡）|
| Light & Atmosphere | [3D/Light-Atmosphere/](3D/Light-Atmosphere/_Axis.md) | 光線與氛圍 |
| Motion Easing (3D) | [3D/Motion-Easing-3D/](3D/Motion-Easing-3D/_Axis.md) | 3D 動效曲線 |

### Bridge 詞彙庫（2D ↔ 3D 黏合層）

| 軸 | 入口 | 一句話 |
|---|---|---|
| Z-Stack Protocol | [Bridge/Z-Stack-Protocol/](Bridge/Z-Stack-Protocol/_Axis.md) | 圖層堆疊規約 |
| Scroll Coupling | [Bridge/Scroll-Coupling/](Bridge/Scroll-Coupling/_Axis.md) | 滾動雙軌綁定 |
| Fallback Pact | [Bridge/Fallback-Pact/](Bridge/Fallback-Pact/_Axis.md) | 退化策略 |

### Pipeline-Lexicon 子庫（SketchUp/Shapr3D → glTF 技術軌）

| 軸 | 入口 | 一句話 |
|---|---|---|
| Topology Budget | [Pipeline-Lexicon/Topology-Budget/](Pipeline-Lexicon/Topology-Budget/_Axis.md) | 面數與拓撲規範 |
| PBR & KHR Extensions | [Pipeline-Lexicon/PBR-KHR-Extensions/](Pipeline-Lexicon/PBR-KHR-Extensions/_Axis.md) | 材質擴展 |
| Compression | [Pipeline-Lexicon/Compression/](Pipeline-Lexicon/Compression/_Axis.md) | 壓縮詞彙 |
| Pipeline Verbs | [Pipeline-Lexicon/Pipeline-Verbs/](Pipeline-Lexicon/Pipeline-Verbs/_Axis.md) | Pipeline 動詞 |

---

## Token 卡格式（v0.2 範本）

每張卡 = 1 個 .md 檔（Title_Case · 與 token 名同名）· 駐於對應軸資料夾下。

```yaml
---
token: <kebab-case-name>
axis: <bank>/<axis>
chinese_anchor: <中文錨>
status: skeleton | drafted | validated
---

## 視覺定義
[Lusion 案例截圖 + 一句話描述]

## Claude Design 觸發語法
"<EN prompt phrase>"

## 出現條件
- 當 [其他軸 token] 為 X 時 ...

## 與其他 token 組合
- ↑ 強搭：...
- ↓ 衝突：...

## SHER 貢獻
S +x.xx / H +x.xx / E +x.xx / R +x.xx
```

實例：[3D/Material-Lexicon/KHR_Transmission_Glass.md](3D/Material-Lexicon/KHR_Transmission_Glass.md)（v0.2 唯一 fully-fleshed 卡）

---

## Prompt Spine 雙層結構（編譯器產出格式）

```yaml
HARD-LOCKED SPINE（不可改）:
  canvas: body fixed full-screen, z-index 0
  renderer: Three.js PerspectiveCamera + real 3D Scene
  scroll: Lenis + GSAP ScrollTrigger driving camera state
  ui: overlay z-index 1+, never inside canvas

OPEN AXES（從詞彙庫抽 token）:
  geometry_field: [...]
  material:       [...]
  camera_path:    [...]
  composition:    [...]
  typography:     [...]
  aesthetic_anchor: [Villeneuve quiet awe / monumental architectural density / Ive precision]
```

---

## 狀態（v0.2.0）

- 三庫 + Pipeline 子庫骨架已落地
- 16 個軸 `_Axis.md`（皆為 stub · 列計畫中 token）
- 1 張範本 token 卡（Material-Lexicon / KHR_Transmission_Glass）
- 下一步：C 路線 round-trip POC（手寫 spine prompt → 餵 Claude Design → 評估缺 token）

---

## 跨專案外溢（傳動鏈成立後）

| 專案 | Geometry Field | Camera-Scroll | Material |
|---|---|---|---|
| VDL-Flow | particle-light / volumetric-cloud | dolly-rack-focus / anamorphic-pan | film-grain / cine-LUT-bake |
| Parking-Design | architectural-mass / extruded-floor-plate | axonometric-reveal / orbit-section-cut | concrete-PBR / glass-curtain / neon-emissive |

詞彙平台一旦成立、上述專案換 token 集即重用。
