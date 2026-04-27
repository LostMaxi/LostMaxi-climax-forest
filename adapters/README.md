---
name: Tech Adapter Docs
description: Three.js / Lenis / View Transition / WebAudio / GSAP / HDRI 各封為 adapter docs · 給用戶與 AI agent 對齊技術細節
status: skeleton
---

# Tech Adapter Docs

每個 adapter = 一份 .md 文件 · 描述某項技術在極相林 Kit 內的使用慣例。

純概念文檔、零依賴。給用戶讀（理解 Kit 怎麼跑）、給 AI agent 讀（生成代碼時對齊規範）。

## 結構

```
adapters/
├── SPEC.md             (adapter 介面規格)
├── three-js.md         (Three.js scene grammar)
├── lenis.md            (smooth scroll 整合)
├── view-transition.md  (chapter 切換)
├── webaudio.md         (sub-bass / drone / click)
├── hdri-pmrem.md       (HDRI 環境光)
└── gsap.md             (timeline / easing 規範)
```

## 設計參考

借 [HyperFrames](https://github.com/heygen-com/hyperframes) 的 Frame Adapter pattern——把 GSAP / Lottie / CSS / Three.js 各自封為可獨立替換的 adapter。同樣思路用在 web 側。

## 添加新 adapter

寫一份 `<tech-name>.md` 含：
- 用途（在 Kit 內解什麼問題）
- 慣例（命名 / 結構 / 預設值）
- 對應 Kit（哪些 Kit 強依賴此 adapter）
- 代碼樣板
