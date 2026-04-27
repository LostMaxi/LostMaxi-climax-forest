---
name: Output Bridge · Video Render
description: 把 Kit 渲染為 MP4 · 給人看 · 給 Claude Design 看
status: skeleton
---

# Output Bridge · 影片渲染

Kit + Spine → [HyperFrames](https://github.com/heygen-com/hyperframes) → MP4。

## 兩條路徑

| 路徑 | 用途 |
|---|---|
| 影片給人看 | 30s 行銷 / IG / Threads / EDM |
| 影片給 Claude Design 看 | 當 reference 餵回 · 比文字更精確傳達動感 / 節奏 / camera dolly |

## 結構

```
output-bridge/
├── KIT-TO-VIDEO.md
├── examples/
│   ├── lusion-scroll-30s/
│   ├── opal-product-reveal/
│   └── villeneuve-camera-dolly/
└── adapters/
    └── hyperframes-bridge.md
```

## 安裝

```
Node ≥ 22 · bun · FFmpeg
npx hyperframes init my-video
npx hyperframes preview
npx hyperframes render
```
