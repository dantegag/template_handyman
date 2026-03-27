// ═══════════════════════════════════════
// SUPABASE DATABASE LAYER
// ═══════════════════════════════════════
// If SUPABASE_URL and SUPABASE_KEY are set, uses Supabase.
// Otherwise, falls back to localStorage silently.

const SUPABASE_URL = 'https://lnzqfgxojsvxzbgmnirt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuenFmZ3hvanN2eHpiZ21uaXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MDgxMTAsImV4cCI6MjA4OTk4NDExMH0.Frr0ZTlLcG_hVbyczZciAvkvpIQ3ArEpB7TrwYt3Oak';

let _sb = null;
function _initSB() {
  if (_sb) return _sb;
  if (SUPABASE_URL && SUPABASE_KEY && window.supabase) {
    _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return _sb;
}

// Hash helper (SHA-256 via Web Crypto)
async function hashPass(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const DB = {

  // ─── CMS Content ───
  async loadContent(slug) {
    const sb = _initSB();
    if (sb) {
      try {
        const { data, error } = await sb.from('site_content').select('content').eq('slug', slug).single();
        if (!error && data && data.content) {
          // Cache locally
          localStorage.setItem(slug + '_cms', JSON.stringify(data.content));
          return data.content;
        }
      } catch(e) { console.warn('Supabase loadContent error:', e); }
    }
    // Fallback to localStorage
    try {
      const s = JSON.parse(localStorage.getItem(slug + '_cms') || 'null');
      if (s && s.services) return s;
    } catch(e) {}
    return null;
  },

  async saveContent(slug, content) {
    // Always save to localStorage as cache
    localStorage.setItem(slug + '_cms', JSON.stringify(content));
    const sb = _initSB();
    if (sb) {
      try {
        await sb.from('site_content').upsert({
          slug: slug,
          content: content,
          updated_at: new Date().toISOString()
        }, { onConflict: 'slug' });
      } catch(e) { console.warn('Supabase saveContent error:', e); }
    }
  },

  async deleteContent(slug) {
    localStorage.removeItem(slug + '_cms');
    const sb = _initSB();
    if (sb) {
      try {
        await sb.from('site_content').delete().eq('slug', slug);
      } catch(e) { console.warn('Supabase deleteContent error:', e); }
    }
  },

  // ─── Consultas ───
  async getConsultas(slug) {
    const sb = _initSB();
    if (sb) {
      try {
        const { data, error } = await sb.from('consultas').select('*').eq('slug', slug).order('created_at', { ascending: false });
        if (!error && data) {
          // Cache locally
          localStorage.setItem(slug + '_consultas', JSON.stringify(data));
          return data;
        }
      } catch(e) { console.warn('Supabase getConsultas error:', e); }
    }
    try { return JSON.parse(localStorage.getItem(slug + '_consultas') || '[]'); } catch(e) { return []; }
  },

  async addConsulta(slug, entry) {
    const sb = _initSB();
    if (sb) {
      try {
        await sb.from('consultas').insert({
          slug: slug,
          nombre: entry.nombre || '',
          telefono: entry.telefono || '',
          email: entry.email || '',
          servicio: entry.servicio || '',
          zona: entry.zona || '',
          mensaje: entry.mensaje || '',
          created_at: entry.date || new Date().toISOString()
        });
        return;
      } catch(e) { console.warn('Supabase addConsulta error:', e); }
    }
    // Fallback
    var list = [];
    try { list = JSON.parse(localStorage.getItem(slug + '_consultas') || '[]'); } catch(e) {}
    list.unshift(entry);
    localStorage.setItem(slug + '_consultas', JSON.stringify(list));
  },

  async removeConsulta(slug, index) {
    const sb = _initSB();
    if (sb) {
      try {
        // Get the item to find its ID
        const { data } = await sb.from('consultas').select('id').eq('slug', slug).order('created_at', { ascending: false });
        if (data && data[index]) {
          await sb.from('consultas').delete().eq('id', data[index].id);
          return;
        }
      } catch(e) { console.warn('Supabase removeConsulta error:', e); }
    }
    var list = [];
    try { list = JSON.parse(localStorage.getItem(slug + '_consultas') || '[]'); } catch(e) {}
    list.splice(index, 1);
    localStorage.setItem(slug + '_consultas', JSON.stringify(list));
  },

  async clearConsultas(slug) {
    localStorage.removeItem(slug + '_consultas');
    const sb = _initSB();
    if (sb) {
      try {
        await sb.from('consultas').delete().eq('slug', slug);
      } catch(e) { console.warn('Supabase clearConsultas error:', e); }
    }
  },

  // ─── Admin Password ───
  async getPasswordHash(slug) {
    const sb = _initSB();
    if (sb) {
      try {
        const { data, error } = await sb.from('site_settings').select('admin_pass').eq('slug', slug).single();
        if (!error && data) return data.admin_pass;
      } catch(e) { console.warn('Supabase getPassword error:', e); }
    }
    var stored = localStorage.getItem(slug + '_admin_pass');
    if (!stored) {
      // First time: hash the default password and store it
      stored = await hashPass('admin');
      localStorage.setItem(slug + '_admin_pass', stored);
    }
    return stored;
  },

  async setPassword(slug, newPass) {
    var hashed = await hashPass(newPass);
    localStorage.setItem(slug + '_admin_pass', hashed);
    const sb = _initSB();
    if (sb) {
      try {
        await sb.from('site_settings').upsert({
          slug: slug,
          admin_pass: hashed,
          updated_at: new Date().toISOString()
        }, { onConflict: 'slug' });
      } catch(e) { console.warn('Supabase setPassword error:', e); }
    }
  },

  async checkPassword(slug, inputPass) {
    var hash = await hashPass(inputPass);
    var stored = await this.getPasswordHash(slug);
    // Migration: if stored is plain text (not a 64-char hex), rehash it
    if (stored.length !== 64) {
      if (inputPass === stored) {
        await this.setPassword(slug, inputPass); // migrate to hash
        return true;
      }
      return false;
    }
    return hash === stored;
  }
};
