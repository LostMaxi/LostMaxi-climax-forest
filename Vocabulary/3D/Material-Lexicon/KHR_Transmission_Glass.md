---
token: KHR-transmission-glass
axis: 3D / Material-Lexicon
chinese_anchor: 透射玻璃材質
status: drafted
version: 0.2.0
created: 2026-04-27
---

# KHR Transmission Glass · 透射玻璃材質

## 視覺定義

基於 glTF 2.0 `KHR_materials_transmission` extension 的真實玻璃 / 透明介質材質。視覺特徵：背景物體穿透折射、邊緣 fresnel rim 增強、厚度感（thickness map）模擬光學深度。Lusion 級沉浸式網頁的招牌材質之一——通常出現在 hero geometry、liquid blob、scroll-paced pavilion 物件上。

非單純 `opacity < 1` 的偽透明：真實光線追蹤近似（IOR + roughness + thickness），效能成本明顯但視覺保真度跳躍式提升。

**Lusion 對位案例**：[佔位 · 待補 lusion.co 截圖路徑] · scroll phase 2 hero blob 材質。

---

## Claude Design 觸發語法

```
Use KHR_materials_transmission with:
- transmissionFactor: 0.95-1.0
- thickness map (or thicknessFactor 0.5-1.5)
- ior: 1.45-1.55 (玻璃)
- roughness: 0.05-0.2 (低 roughness 才有玻璃感)
Pair with environment HDRI for refraction sampling.
Apply to hero <mesh> geometry, never to background scenery.
```

完整 EN prompt 片段（直接複製進 Spine OPEN AXES）：

> "Hero geometry uses physically-based glass material via KHR_materials_transmission extension. Configure transmissionFactor: 0.95, ior: 1.5, roughness: 0.1, with thickness map for volumetric depth. Sample environment from studio HDRI for clean refraction. Avoid setting opacity—use transmission only."

---

## 出現條件

**何時使用**：
- 當 `Geometry Field` token 為 `morphing-primitive-blob` 或 `curve-following-lattice` 或 `instanced-forest`（單體形狀清晰時保真度最高）
- 當 `Light & Atmosphere` token 含 `HDRI-studio`（refraction 需要環境採樣 · 沒 HDRI = 灰玻璃）
- 當 `Camera-Scroll` token 含 `dolly-through-particle-tunnel` 或 `orbital-pause-and-reveal`（鏡頭運動時透射折射的視覺價值最大化）

**何時迴避**：
- mobile-degrade-tier（GPU fillrate 殺手 · 中低階手機掉幀）
- 大量 instanced 用例（每個 instance 都做 transmission = 災難）
- background scenery（透射 background 等於沒透射 · 浪費 budget）

---

## 與其他 token 組合

### ↑ 強搭

| Token | 為什麼搭 |
|---|---|
| `subsurface-skin` | 雙層折射（外殼 transmission + 內核 SSS）· Lusion 液態玻璃感經典 |
| `HDRI-studio` | 提供 refraction 環境採樣 · 沒它無視覺意義 |
| `rim-light-edge` | 強化邊緣 fresnel · 讓玻璃 silhouette 跳出來 |
| `bloom-soft-pulse` | 高光區域 bloom · 模擬玻璃高反射高光的 HDR feel |

### ↓ 衝突

| Token | 為什麼衝 |
|---|---|
| `volumetric-fog` | 透射穿透 fog 計算不一致（fog 在透射內外的呈現邏輯衝突）· 兩者選一 |
| `matcap-stylized` | matcap 烘焙光照、與 transmission 物理採樣矛盾 |
| `wireframe-skeleton` | wireframe 不參與 transmission · 視覺 nonsense |

### ◎ 條件搭

| Token | 條件 |
|---|---|
| `liquid-metal-iridescence` | 不可同時用、但可在 morph 序列中切換（玻璃→液態金屬轉場） |
| `god-ray-volumetric` | 透射物體後方有 god-ray 時、ray 需單獨計算 · 工時 +30% |

---

## SHER 貢獻

| 維度 | 增量 | 為什麼 |
|---|---:|---|
| **S** Structure | +0.10 | 玻璃材質本身結構穩定（KHR 標準）· 不增脆性 |
| **H** Honesty | +0.05 | 物理基礎 PBR · 不假裝深度 · 但 thickness 是近似而非真積分 |
| **E** Evolution | +0.15 | 配 KHR_materials_volume 可進階為 volumetric glass · 演化空間大 |
| **R** Relevance | +0.20 | Lusion / Apple / Vercel 等 premium 站常用 · 跨案例攸關性高 |

軸層級存活分（min）：0.05（H 是 weak link · 物理近似 vs 真實光學的差距）

---

## 技術細節（給 Claude Design / Three.js implementer）

### glTF / Three.js 端

```js
// THREE.MeshPhysicalMaterial 對應參數
const glass = new THREE.MeshPhysicalMaterial({
  transmission: 0.95,     // KHR transmissionFactor
  thickness: 1.0,         // KHR thicknessFactor (mm)
  ior: 1.5,               // 玻璃
  roughness: 0.1,
  metalness: 0,
  attenuationDistance: 1.0,
  attenuationColor: new THREE.Color(0xffffff),
});

// 必須開啟 environment map
scene.environment = pmremGenerator.fromEquirectangular(hdri).texture;

// renderer 開啟 transmission render target
renderer.physicallyCorrectLights = true;
```

### 模型端（SketchUp / Shapr3D → Blender）

- Shapr3D 出 STEP → Blender 導入後加 Principled BSDF · transmission > 0
- glTF 匯出時勾選「KHR_materials_transmission」extension
- Thickness map：bake from geometry mass（Blender → bake → thickness）

---

## 狀態

`drafted` · 2026-04-27 02:14 v0.2 範本卡 · 待 C round-trip POC 餵 Claude Design 後評估觸發語法精度。

## 修改紀錄

- 2026-04-27 v0.2.0 · 初版（範本用 · 跟隨 Climax_Forest_Project_Report §8.5 格式）
