# Supabase Setup · 森林對話池

◎ 一次性設定 · 完成後 Climax Forest 的 /pool 公開分享池就能上線

---

## Step 1 · 建立 Supabase project

1. 開 [supabase.com](https://supabase.com) · 用 GitHub 帳號登入（免費）
2. 點 **New project** · 填入：
   - **Project name**: `climax-forest`（或任意）
   - **Database password**: 隨機強密碼（自己存好）
   - **Region**: 選離台灣最近的（Tokyo / Singapore）
   - **Pricing plan**: **Free**
3. 等 ~2 分鐘 project 建好

## Step 2 · 建 table + RLS policy

進 project 後 · 左側選 **SQL Editor** · 貼以下 SQL 跑一次：

```sql
-- 森林對話池 table
create table public.forest_shares (
  id          uuid primary key default gen_random_uuid(),
  prompt      text not null check (char_length(prompt) between 50 and 8000),
  brand_name  text check (char_length(brand_name) <= 80),
  primary_color text check (primary_color ~ '^#[0-9A-Fa-f]{6}$'),
  deep_color    text check (deep_color ~ '^#[0-9A-Fa-f]{6}$'),
  font_en       text check (char_length(font_en) <= 60),
  font_zh       text check (char_length(font_zh) <= 60),
  six_axes      jsonb,
  fire_seeds    text[],
  share_dna     boolean default true,
  honeypot      text check (honeypot is null or honeypot = ''),
  created_at    timestamptz default now()
);

-- 索引: 按時間排序展示
create index forest_shares_created_at_idx on public.forest_shares (created_at desc);

-- 啟動 Row Level Security
alter table public.forest_shares enable row level security;

-- 允許 anon 公開讀
create policy "anyone can read" on public.forest_shares
  for select using (true);

-- 允許 anon 插入 (有 honeypot 約束擋簡單機器人)
create policy "anyone can insert" on public.forest_shares
  for insert with check (true);

-- 不允許 update / delete (一旦留下不可改 · 池的紀律)
```

跑完應該看到「Success. No rows returned」。

## Step 3 · 取 anon key + URL

左側選 **Project Settings** → **API**：

```
Project URL:  https://xxxxxxxxxxxx.supabase.co       ← 複製這個
anon public:  eyJhbGciOiJIUzI1NiIsIn...               ← 複製這個 (很長 · JWT token)
```

## Step 4 · 把這兩個值貼給 Claude

回到我們對話框 · 直接貼 (簡短即可):

```
Project URL: https://xxxxxxxxxxxx.supabase.co
anon key: eyJhbGci...
```

我接著替換 placeholder · 完成 share button + /pool 真實邏輯 · push + 追 Vercel。

---

## 安全考量

```
✓ Row Level Security 啟動 · public 只能 select + insert
✓ honeypot column 攔截最低階機器人
✓ check constraint 強制 prompt 長度 50-8000 · 防超長 spam
✓ HEX color regex 防注入
✗ 沒 captcha · 真有 spam 再加 (Cloudflare Turnstile)
✗ 沒 IP rate limit (Supabase free 沒原生 · 真要可用 Vercel Edge Function)
```

## Free tier 額度（足夠初期）

```
Database:       500 MB Postgres · 約 100 萬筆 prompt
Bandwidth:      5 GB / month
API requests:   無限 (only DB egress 算)
監控:           Supabase Studio Dashboard 直接看 query
```

## 未來升級觸發點

```
· 月活躍用戶 > 50K → 升 Pro ($25/mo)
· DB > 500 MB → 升 Pro
· 收到大量 spam → 加 Turnstile + Vercel Edge Function rate limit
```
