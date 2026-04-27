---
name: Climax Forest Skills
description: SKILL.md 格式（YAML frontmatter + 指令 .md）· 跨 6+ AI agent 立即可用
status: skeleton
---

# Skills

Skills 是給 AI agent 讀的 .md 文件、教 agent 怎麼用極相林。

採 [Anthropic skills](https://github.com/anthropics/skills) 公開標準（Apache 2.0）· 跨 Claude Code / Codex / ChatGPT / Cursor / Gemini CLI / GitHub Copilot 6+ agent 不用改。

## 結構

```
skills/
├── climax-forest/
│   └── SKILL.md         (主 skill · 引導 agent 用 Kit + Spine)
├── kit-author/
│   └── SKILL.md         (教 agent 怎麼寫新 Kit)
└── token-author/
    └── SKILL.md         (教 agent 怎麼寫新 Token)
```

## 使用

在你的 AI agent（如 Claude Code）：

```bash
/climax-forest                       # 載入主 skill
"幫我做一個 Lusion-tier 的工作室 portfolio"
```

Agent 會：
1. 讀 `/kits/lusion-cinematic/KIT.md`
2. 讀 `/tokens/` 對應 token 卡
3. 用 `/spine/SPEC.md` 編譯 prompt
4. 餵自己（或建議貼進 Claude Design）

## 進 Marketplace

寫好 SKILL.md → submit → 進 [anthropics/skills marketplace](https://github.com/anthropics/skills) 後全球可用、跨 agent。
