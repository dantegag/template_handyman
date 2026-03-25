-- ═══════════════════════════════════════
-- SUPABASE SETUP - Template Handyman
-- ═══════════════════════════════════════
-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

-- 1. CMS content per site
create table if not exists site_content (
  slug text primary key,
  content jsonb not null default '{}',
  updated_at timestamptz default now()
);

-- 2. Contact form submissions
create table if not exists consultas (
  id uuid default gen_random_uuid() primary key,
  slug text not null,
  nombre text default '',
  telefono text default '',
  email text default '',
  servicio text default '',
  zona text default '',
  mensaje text default '',
  created_at timestamptz default now()
);

create index if not exists idx_consultas_slug on consultas(slug);

-- 3. Site settings (admin password, etc.)
create table if not exists site_settings (
  slug text primary key,
  admin_pass text default 'admin',
  updated_at timestamptz default now()
);

-- 4. Enable Row Level Security
alter table site_content enable row level security;
alter table consultas enable row level security;
alter table site_settings enable row level security;

-- 5. Drop old policies if they exist, then recreate
do $$ begin
  -- site_content
  drop policy if exists "Allow public read site_content" on site_content;
  drop policy if exists "Allow public insert site_content" on site_content;
  drop policy if exists "Allow public update site_content" on site_content;
  drop policy if exists "Allow public delete site_content" on site_content;
  -- consultas
  drop policy if exists "Allow public read consultas" on consultas;
  drop policy if exists "Allow public insert consultas" on consultas;
  drop policy if exists "Allow public delete consultas" on consultas;
  -- site_settings
  drop policy if exists "Allow public read site_settings" on site_settings;
  drop policy if exists "Allow public insert site_settings" on site_settings;
  drop policy if exists "Allow public update site_settings" on site_settings;
end $$;

-- 6. Create public access policies
create policy "Allow public read site_content" on site_content for select using (true);
create policy "Allow public insert site_content" on site_content for insert with check (true);
create policy "Allow public update site_content" on site_content for update using (true);
create policy "Allow public delete site_content" on site_content for delete using (true);

create policy "Allow public read consultas" on consultas for select using (true);
create policy "Allow public insert consultas" on consultas for insert with check (true);
create policy "Allow public delete consultas" on consultas for delete using (true);

create policy "Allow public read site_settings" on site_settings for select using (true);
create policy "Allow public insert site_settings" on site_settings for insert with check (true);
create policy "Allow public update site_settings" on site_settings for update using (true);
