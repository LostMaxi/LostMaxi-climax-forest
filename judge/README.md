---
name: Judge · 評分台
description: 把產出貼進來、看系統協助判定的 5 維評分（1-10 星）· 屬客觀判斷
status: skeleton
---

# Judge · 評分台

把任何極相林流程產出的 HTML 貼進來、系統跑 5 維評分、輸出星卡。

## 5 維（v0.1）

| 維 | 內容 |
|---|---|
| 協調性 | 元素是否互相支撐 |
| 風格一致 | Kit 語法是否守住 |
| 2D 視覺力 | 字體 / 構圖 / 色彩 |
| 3D 視覺力 | 空間 / 鏡頭 / 材質 |
| 獨創性 | 是否有 signature moment |

詳細判定條 → [skills/quality-rubric/SKILL.md](../skills/quality-rubric/SKILL.md)

## 使用

### 在 AI agent 內

```
/quality-rubric
"評分這個輸出: <貼 HTML 或 URL>"
```

### Web UI（規劃中）

```
judge/
├── README.md
└── index.html      ← 拖入 HTML / 貼 URL → 即時星卡（待實作）
```

## 立場

評分為**判定參考**、屬系統客觀判斷、非絕對判決。創作者保留所有最終決策權。
