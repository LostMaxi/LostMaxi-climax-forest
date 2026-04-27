---
name: Aesthetic Kit Library
description: 極相林的美學套件庫——讓所有熱愛網站架構的人在這裡找到屬於自己的美學表達
status: skeleton
---

# Aesthetic Kit Library

每個 Kit = 一組（aesthetic anchors + tech stack + scroll choreography + token 組合 + voice register）綁定。

選一個 Kit、套上你的 subject、進 Spine 編譯器 → 出可貼 Claude Design 的 prompt → 收 Lusion-tier 沉浸式網頁。

## 結構

```
kits/
├── _registry.yaml          (Kit 索引 · 機器可讀)
├── {kit-name}/
│   ├── KIT.md              (規格 · mood / palette / typography / motion / GSAP timing)
│   ├── reference/          (來源 frame 截圖 · 標註)
│   └── starter-prompt.md   (Claude Design 樣板 prompt)
```

## 首批 Kit（規劃中）

| Kit | 性格 | 適用 |
|---|---|---|
| `lusion-cinematic` | Cinematic 3D agency · 暗 + 霓虹 + 粒子 | Portfolio / 工作室 / 創意展演 |
| `opal-product` | Apple 產品頁 minimalism · 全屏攝影 + sticky cart | 硬體 / 物件 / 新品發表 |
| `hall-villeneuve` | 紀念性建築 · slow temporal · 光的重量 | 品牌儀式 / 收藏 / 限量 |
| `swiss-pulse` | 臨床精準 · grid-locked · 數字主導 | SaaS / 數據儀表 / 開發者工具 |
| `ig-commercial` | 商業海報 · 主角 70% · 強視覺 1 秒抓眼 | 行銷投放 / IG / Threads |

## Kit 來源

- 真實設計傳統（Müller-Brockmann / Vignelli / Carson 等）
- 知名創意工作室公開作品（Lusion / Shader.se / heygen 等）
- 用戶自定義（歡迎貢獻）

## 貢獻

寫一個 KIT.md + 放幾張 reference 截圖 + 寫 starter-prompt.md → PR 進 `_registry.yaml`。
