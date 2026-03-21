# Template Config System Design

## Context

The current handyman template (ReparMax) has business data managed in two different patterns:
- **index.html & admin.html**: Use a JS `DEFAULTS` object + `getData()` + `renderAll()` for dynamic rendering
- **Sub-pages (servicios, proceso, opiniones, contacto)**: Use hardcoded HTML with `data-cms` attributes for localStorage overrides

To reuse this template for multiple businesses, we need a single shared `config.js` file. The user also wants a Google Maps embed in the contact section, a new About page, and About integration in the admin panel.

## Architecture

### Core Change: Shared `config.js`

Create a `config.js` file loaded by all pages via `<script src="config.js"></script>`. It defines a global `CONFIG` object with all business data.

**Why `config.js` over `config.json`**: Works with `file://` protocol (no CORS), instant load, no async complexity.

### Sub-Page Migration Strategy

The 4 sub-pages currently use `data-cms` attributes with hardcoded HTML. **They will be migrated to the same JS-rendered approach as index.html**, using `CONFIG` as the data source and `renderAll()` functions. This unifies the architecture and eliminates the broken `data-cms` flat-key system (which doesn't properly receive admin edits since admin saves nested objects, not flat keys).

Each sub-page will:
1. Load `config.js` first
2. Have HTML shell with `id` placeholders (like index.html does)
3. Use a `renderAll()` function that reads from `getData()` (which merges CONFIG + localStorage)
4. Remove all `data-cms` attributes and hardcoded content

### Config Structure

```js
const CONFIG = {
  // ─── Identity ───
  businessName: "ReparMax",
  tagline: "Reparaciones Integrales",
  location: "La Plata y Gran La Plata",
  slug: "reparmax",  // localStorage key prefix

  // ─── Google Maps ───
  googleMapsUrl: "https://maps.google.com/?q=...",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",

  // ─── Theme Colors ───
  colors: {
    accent: "#f5a623",
    accent2: "#e8891b",
    bg: "#0c0c0c",
    bg2: "#141414",
    bg3: "#1a1a1a",      // used by admin inputs
    textMain: "#f0ede8",
    muted: "#777"
  },

  // ─── Contact ───
  contact: {
    whatsapp: { desc: "Escribinos y te respondemos al toque", num: "+54 221 123-4567" },
    tel: { desc: "Lunes a sábado de 8 a 20hs", num: "+54 221 123-4567" },
    email: { desc: "Para consultas detalladas", addr: "info@reparmax.com.ar" },
    zona: "La Plata, Gonnet, City Bell, Villa Elisa, Tolosa, Los Hornos, Ensenada, Berisso y toda la zona de Gran La Plata.",
    horarios: "Lunes a Viernes: 8:00 – 20:00 · Sábados: 8:00 – 14:00 · Urgencias: 24hs"
  },

  // ─── Social Media ───
  socialMedia: {
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: ""
  },

  // ─── SEO / Meta ───
  meta: {
    title: "ReparMax – Reparaciones Integrales en La Plata",
    description: "Reparaciones profesionales en La Plata y Gran La Plata..."
  },

  // ─── Hero ───
  hero: {
    badge: "Reparaciones Profesionales · La Plata y Gran La Plata",
    heading1: "TODO LO QUE TU",
    heading2: "HOGAR NECESITA",
    subtitle: "Electricidad · Pintura · Madera · Durlock · Plomería",
    description: "Reparaciones en La Plata y Gran La Plata: profesionales especializados..."
  },

  // ─── Stats ───
  stats: [
    { value: "+500", label: "Trabajos Realizados" },
    { value: "8+", label: "Años de Experiencia" },
    { value: "100%", label: "Estimación Garantizada" }
  ],

  // ─── Services (index summary + detail page) ───
  serviciosSubtitle: "Profesionales especializados en cada área...",
  services: [
    {
      title: "Electricidad",
      desc: "Instalaciones y reparaciones eléctricas...",
      icon: "bolt",
      tags: "Tableros, Iluminación, Enchufes, Cableado",
      // Extended fields for servicios.html detail page:
      detailDesc: "Servicio completo de electricidad para hogares y comercios...",
      bulletItems: [
        "Instalación y reparación de tableros eléctricos",
        "Cableado completo para construcciones nuevas",
        "Iluminación interior y exterior",
        "Reparación de cortocircuitos y fallas"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Electricidad"
    },
    // ... more services with same structure
  ],

  // ─── Process (index has 4 steps summary, proceso.html has 5 steps with detail) ───
  procesoDesc: "Desde el primer mensaje hasta la entrega final...",
  process: [
    { title: "Contacto", desc: "Nos escribís por WhatsApp o llamás..." },
    { title: "Diagnóstico Gratuito", desc: "Visitamos el lugar, analizamos..." },
    { title: "Ejecución", desc: "Arrancamos en la fecha pactada..." },
    { title: "Garantía Escrita", desc: "Entregamos el trabajo con garantía..." }
  ],
  // Extended process for proceso.html detail page:
  processDetail: [
    {
      title: "Contacto Inicial",
      desc: "Nos escribís por WhatsApp, llamás o completás el formulario...",
      detailDesc: "Contanos qué necesitás y te asesoramos sin compromiso...",
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Contacto"
    },
    {
      title: "Visita y Diagnóstico Gratuito",
      desc: "Coordinamos una visita sin cargo...",
      detailDesc: "Nuestro equipo visita tu hogar para evaluar...",
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Diagnostico"
    },
    {
      title: "Presupuesto Detallado",
      desc: "Te entregamos un presupuesto por escrito...",
      detailDesc: "Detallamos materiales, mano de obra y tiempos...",
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Presupuesto"
    },
    {
      title: "Ejecución del Trabajo",
      desc: "Arrancamos en la fecha pactada...",
      detailDesc: "Trabajamos con materiales de primera calidad...",
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Ejecucion"
    },
    {
      title: "Entrega y Garantía Escrita",
      desc: "Entregamos el trabajo terminado...",
      detailDesc: "Revisamos junto a vos que todo esté perfecto...",
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Garantia"
    }
  ],

  // ─── Guarantees ───
  guarantees: [
    { title: "Puntualidad", desc: "Cumplimos con los plazos pactados...", icon: "clock" },
    { title: "Garantía Escrita", desc: "Todos los trabajos incluyen certificado...", icon: "shield" },
    { title: "Precio Justo", desc: "Presupuesto detallado y sin sorpresas...", icon: "money" },
    { title: "Limpieza Total", desc: "Dejamos tu espacio impecable...", icon: "thumb" }
  ],

  // ─── Opinion Stats ───
  opinionStats: [
    { value: "4.9/5", label: "Calificación Promedio" },
    { value: "+500", label: "Trabajos Completados" },
    { value: "98%", label: "Clientes Satisfechos" },
    { value: "85%", label: "Nos Recomiendan" }
  ],

  // ─── Testimonials (unified list for both index and opiniones page) ───
  testimonials: [
    { text: "...", name: "Marcela R.", loc: "Centro, La Plata", color: "red", initial: "M", service: "Durlock" },
    // ... service field is optional, shown on opiniones.html detail page
  ],

  // ─── FAQ ───
  faq: [
    { q: "¿Hacen presupuesto sin cargo?", a: "Sí. El presupuesto es gratuito..." },
    // ...
  ],

  // ─── About Page ───
  about: {
    heading1: "CONOCÉ",
    heading2: "NUESTRA HISTORIA",
    description: "Somos un equipo de profesionales especializados en reparaciones y mantenimiento del hogar...",
    mission: "Brindar un servicio integral, confiable y accesible para el mantenimiento y mejora de tu hogar.",
    vision: "Ser la empresa de referencia en reparaciones del hogar en la región.",
    values: [
      { title: "Profesionalismo", desc: "Cada trabajo es realizado por especialistas capacitados.", icon: "star" },
      { title: "Compromiso", desc: "Cumplimos con lo pactado en tiempo y forma.", icon: "shield" },
      { title: "Transparencia", desc: "Presupuestos claros, sin costos ocultos.", icon: "check" }
    ],
    teamDescription: "Contamos con un equipo multidisciplinario con años de experiencia en cada especialidad."
  },

  // ─── CTA / UI Text ───
  ctaSubtitle: "Respondemos en menos de 2 horas · Presupuesto gratuito · Sin compromiso",

  // ─── Nav Customization ───
  nav: {
    links: [
      { label: "Servicios", href: "#servicios", page: "servicios.html" },
      { label: "Proceso", href: "#proceso", page: "proceso.html" },
      { label: "Opiniones", href: "#opiniones", page: "opiniones.html" },
      { label: "Nosotros", href: "about.html", page: "about.html" }
    ],
    ctaLabel: "Consultar",
    ctaHref: "#contacto",
    ctaPage: "contacto.html"
  }
};
```

### Key Design Decisions

**Nav links**: Each link has both `href` (anchor for index.html) and `page` (file link for sub-pages). The navbar renderer checks if we're on index.html to decide which to use.

**Services extended fields**: `detailDesc`, `bulletItems`, and `image` are used only by `servicios.html`. On index.html, only `title`, `desc`, `icon`, `tags` are used. This keeps backward compatibility.

**Process dual arrays**: `process` (4 steps) for the index summary, `processDetail` (5 steps with images) for the proceso.html detail page. This reflects the current state where the two pages show different content.

**Testimonials unified**: One array serves both index.html (scrolling columns) and opiniones.html (full grid with optional `service` category tag).

**Admin password**: Key changes from `reparmax_admin_pass` to `CONFIG.slug + '_admin_pass'`.

**Copyright year**: Rendered dynamically with `new Date().getFullYear()`.

## Dynamic Theme Colors

`config.js` loads before Tailwind CDN. All pages use this pattern:

```html
<script src="config.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: { extend: {
      colors: {
        bg: CONFIG.colors.bg,
        bg2: CONFIG.colors.bg2,
        accent: CONFIG.colors.accent,
        accent2: CONFIG.colors.accent2,
        textMain: CONFIG.colors.textMain,
        muted: CONFIG.colors.muted,
        borderC: 'rgba(255,255,255,0.07)'
      },
      fontFamily: { sans: ['DM Sans', ...] },
      // animations...
    }}
  }
</script>
```

**Hardcoded colors that must become dynamic:**
- `body { background; color }` in `<style>` → use CSS custom properties set from CONFIG
- `.tag` border/color → reference CSS vars
- shimmerCard `--shimmer-color` and `--bg` → set from CONFIG
- Hero canvas paths `rgba(245,166,35,...)` → read from CONFIG.colors.accent (parse hex to RGB)

Strategy: Set CSS custom properties on `:root` from CONFIG, reference them in `<style>` blocks:
```js
document.documentElement.style.setProperty('--accent', CONFIG.colors.accent);
document.documentElement.style.setProperty('--bg', CONFIG.colors.bg);
// etc.
```

## Google Maps Integration

### index.html (Contact Section)
Add map embed below contact info cards, rendered by `renderAll()`:
```js
// In renderAll(), after contact info rendering:
if (CONFIG.googleMapsEmbed) {
  document.getElementById('mapEmbed').innerHTML =
    '<a href="' + esc(CONFIG.googleMapsUrl) + '" target="_blank" rel="noopener">' +
    '<iframe src="' + esc(CONFIG.googleMapsEmbed) + '" width="100%" height="300" ' +
    'style="border:0;border-radius:1rem;" allowfullscreen loading="lazy"></iframe></a>';
}
```

### contacto.html
Replace the existing placeholder image in the "NUESTRA UBICACIÓN" section with a real Google Maps iframe, read from CONFIG.

## New Page: about.html

Follows the same design system. Sections rendered via JS from `CONFIG.about`:
1. **Hero** - `heading1` + `heading2` + `description`
2. **Mission & Vision** - Two shimmerCards side by side
3. **Values** - 3-column grid of shimmerCards with icons
4. **Team** - `teamDescription` text
5. **CTA** - "Pedir Presupuesto" linking to contacto.html

Same navbar, footer, and color scheme as other pages.

## Admin Panel Changes

### New "Nosotros" tab
Fields for: heading1, heading2, description, mission, vision, values (dynamic list with icon picker), teamDescription.

### Contact tab additions
- Google Maps URL field
- Google Maps Embed URL field
- Social media links section (Instagram, Facebook, TikTok, YouTube)

### General tab additions
- Business name, tagline, location fields (top of the tab)

## Files to Create/Modify

| File | Action |
|---|---|
| `config.js` | **CREATE** - Shared config with all business data |
| `about.html` | **CREATE** - New About/Nosotros page |
| `index.html` | **MODIFY** - Remove DEFAULTS, load config.js, add Maps embed, dynamic nav/colors |
| `servicios.html` | **MODIFY** - Migrate from data-cms to JS-rendered, load config.js |
| `proceso.html` | **MODIFY** - Migrate from data-cms to JS-rendered, load config.js |
| `opiniones.html` | **MODIFY** - Migrate from data-cms to JS-rendered, load config.js |
| `contacto.html` | **MODIFY** - Migrate from data-cms to JS-rendered, replace map placeholder, load config.js |
| `admin.html` | **MODIFY** - Remove DEFAULTS, load config.js, add About/Maps/Social fields |

## Workflow for Creating a New Site

1. Copy the entire template folder
2. Edit only `config.js` with the new business data
3. Done - all pages reflect the new data

**Token efficiency**: For each new business, only `config.js` needs to be rewritten. Zero HTML changes.

## Verification

1. Open `index.html` - all sections render correctly from config data
2. Change `CONFIG.businessName` → verify navbar, footer, and `<title>` update across ALL pages
3. Change `CONFIG.colors.accent` → verify accent color changes across ALL pages (including shimmer cards, hero canvas, tags)
4. Verify Google Maps iframe appears in contact section (index + contacto) and clicking opens Maps
5. Open `about.html` → verify all sections render from config
6. Open `admin.html` → verify About tab, Maps fields, Social fields exist
7. Edit content in admin → save → reload public pages → verify changes appear
8. Clear localStorage → reload → verify CONFIG defaults render correctly
9. Test mobile responsiveness on all pages
10. Verify nav links work correctly: anchors on index.html, file links on sub-pages
