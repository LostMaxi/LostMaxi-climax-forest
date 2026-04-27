---
name: Prompt Spine Compiler
description: 接收 Aesthetic Kit + Token 組合、編譯為可貼 Claude Design 的英文 prompt
status: skeleton
---

# Prompt Spine 編譯器

從 Aesthetic Kit + Token Library 抽出組合 → 編譯為結構化 prompt → 貼進 Claude Design。

## 雙層結構

```yaml
HARD-LOCKED SPINE（不可改 · 防止輸出退化）:
  canvas: body fixed full-screen, z-index 0
  renderer: Three.js PerspectiveCamera + real 3D Scene
  scroll: Lenis + GSAP ScrollTrigger driving camera state
  ui: overlay z-index 1+, never inside canvas

OPEN AXES（讓 Claude Design 探索）:
  geometry_field:    [從 3D/Geometry Field 軸抽]
  material:          [從 3D/Material Lexicon 軸抽]
  camera_path:       [從 3D/Camera-Scroll 軸抽]
  composition:       [從 2D/Composition Spine 軸抽]
  typography:        [從 2D/Kinetic Type 軸抽]
  aesthetic_anchor:  [Kit 提供]
```

HARD-LOCKED 防止 Claude Design 退化成 hero-section + plane shader baseline。
OPEN 是它的發揮場域。

## 結構

```
spine/
├── SPEC.md          (雙層規格)
├── index.html       (互動編譯器：選 Kit + Token → 出 prompt · 一鍵 copy)
└── examples/        (對應每個 Kit 的 spine 樣板)
```

## 使用流程

1. 進 [/kits](../kits/) 選一個 Kit
2. 進 [/tokens](../tokens/) 選 OPEN axes 各自 token
3. 來 spine/ 編譯器 · 看實時 prompt 預覽
4. 一鍵 copy → 貼進 Claude Design
