# Template Config System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the handyman template into a reusable system where only `config.js` needs editing to create a new business website.

**Architecture:** A shared `config.js` file defines a global `CONFIG` object with all business data (identity, colors, contact, services, testimonials, etc.). All HTML pages load this file first, then use `CONFIG` for Tailwind theme colors and dynamic JS rendering. Sub-pages are migrated from the broken `data-cms` pattern to the same JS-rendered approach as `index.html`. A new `about.html` page and Google Maps embed are added.

**Tech Stack:** Tailwind CSS (CDN), vanilla JS, Google Maps iframe embed

**Spec:** `docs/superpowers/specs/2026-03-20-template-config-system-design.md`

**Important Notes:**
- **Shared code on every page:** Each HTML page must include the ICONS map, helper functions (`esc`, `icon`, `iconLg`, `shimmerCard`, `closeMobile`), and a `renderAll()` function. Copy these from `index.html` after Task 2 is complete.
- **Testimonial data:** CONFIG has 9 fully-written testimonials (enriched from the 12 in current DEFAULTS, removing 6 placeholders). This is intentional.
- **Extended service fields** (`detailDesc`, `bulletItems`, `image`) and `gallery` are only editable via `config.js`, not the admin panel. The admin panel edits the basic fields (`title`, `desc`, `tags`, `icon`) that display on `index.html`.

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `config.js` | CREATE | Single source of truth for all business data, colors, nav config |
| `about.html` | CREATE | About/Nosotros page reading from `CONFIG.about` |
| `index.html` | MODIFY | Remove inline DEFAULTS, load config.js, add map embed, dynamic nav/colors |
| `servicios.html` | MODIFY | Migrate from data-cms to JS-rendered, load config.js |
| `proceso.html` | MODIFY | Migrate from data-cms to JS-rendered, load config.js |
| `opiniones.html` | MODIFY | Migrate from data-cms to JS-rendered, load config.js |
| `contacto.html` | MODIFY | Migrate from data-cms to JS-rendered, replace map placeholder with iframe, load config.js |
| `admin.html` | MODIFY | Remove inline DEFAULTS, load config.js, add About tab + Maps/Social fields |

---

### Task 1: Create `config.js`

**Files:**
- Create: `config.js`

- [ ] **Step 1: Create the config.js file with all business data**

Create `config.js` at project root. This is the complete CONFIG object extracted from the current `DEFAULTS` in `index.html` (lines 244-313), enriched with new fields from the spec (identity, colors, maps, social, about, nav). The data values must match the current DEFAULTS exactly for existing fields.

```js
const CONFIG = {
  // ─── Identity ───
  businessName: "ReparMax",
  tagline: "Reparaciones Integrales",
  location: "La Plata y Gran La Plata",
  slug: "reparmax",

  // ─── Google Maps ───
  googleMapsUrl: "",
  googleMapsEmbed: "",

  // ─── Theme Colors ───
  colors: {
    accent: "#f5a623",
    accent2: "#e8891b",
    bg: "#0c0c0c",
    bg2: "#141414",
    bg3: "#1a1a1a",
    textMain: "#f0ede8",
    muted: "#777"
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
    description: "Reparaciones profesionales en La Plata y Gran La Plata: electricidad, pintura, carpintería, durlock, plomería y reformas."
  },

  // ─── Hero ───
  hero: {
    badge: "Reparaciones Profesionales · La Plata y Gran La Plata",
    heading1: "TODO LO QUE TU",
    heading2: "HOGAR NECESITA",
    subtitle: "Electricidad · Pintura · Madera · Durlock · Plomería",
    description: "Reparaciones en La Plata y Gran La Plata: profesionales especializados en cada área. Trabajo prolijo, puntualidad y garantía escrita en todos nuestros trabajos."
  },

  // ─── Stats ───
  stats: [
    { value: "+500", label: "Trabajos Realizados" },
    { value: "8+", label: "Años de Experiencia" },
    { value: "100%", label: "Estimación Garantizada" }
  ],

  // ─── Services ───
  serviciosSubtitle: "Profesionales especializados en cada área para darte la mejor solución, todo en un solo lugar.",
  services: [
    {
      title: "Electricidad",
      desc: "Instalaciones y reparaciones eléctricas en La Plata para hogar o comercio. Certificaciones y materiales de primera calidad.",
      icon: "bolt",
      tags: "Tableros, Iluminación, Enchufes, Cableado",
      detailDesc: "Instalaciones eléctricas completas y reparaciones para hogares y comercios en La Plata. Trabajamos con materiales certificados y cumplimos todas las normativas vigentes para garantizar la seguridad de tu familia y tu negocio.",
      bulletItems: [
        "Instalación y reparación de tableros eléctricos",
        "Cableado completo y parcial",
        "Iluminación interior y exterior LED",
        "Colocación de enchufes, llaves y tomas",
        "Puesta a tierra y disyuntores"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Electricidad"
    },
    {
      title: "Pintura",
      desc: "Pintura interior y exterior en La Plata y zona. Preparación de superficies, trazados y acabados con pinturas de alta durabilidad.",
      icon: "paint",
      tags: "Interior, Exterior, Texturado, Impermeabilizante",
      detailDesc: "Pintura profesional para interiores y exteriores. Preparamos las superficies con dedicación, utilizamos pinturas de alta durabilidad y garantizamos acabados impecables que transforman cualquier ambiente.",
      bulletItems: [
        "Pintura interior (latex, satinado, mate)",
        "Pintura exterior resistente al clima",
        "Texturados y revestimientos decorativos",
        "Impermeabilización de paredes y techos",
        "Reparación de humedad y fisuras"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Pintura"
    },
    {
      title: "Madera & Carpintería",
      desc: "Carpinteros en La Plata: reparación y fabricación de muebles, puertas, ventanas y aberturas con terminaciones impecables.",
      icon: "wood",
      tags: "Puertas, Muebles, Pisos, Ventanas",
      detailDesc: "Carpinteros profesionales en La Plata especializados en reparación y fabricación de muebles, puertas, ventanas y todo tipo de trabajos en madera con terminaciones de alta calidad.",
      bulletItems: [
        "Reparación y ajuste de puertas y ventanas",
        "Fabricación de muebles a medida",
        "Colocación y reparación de pisos de madera",
        "Restauración de muebles antiguos",
        "Instalación de placards y vestidores"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Carpintería"
    },
    {
      title: "Durlock & Drywall",
      desc: "Durlock y drywall en La Plata: tabiques divisorios, cielorrasos, revestimientos y estructuras de yeso con acabado perfecto.",
      icon: "grid",
      tags: "Tabiques, Cielorrasos, Nichos, Molduras",
      detailDesc: "Especialistas en construcción en seco. Creamos divisiones, cielorrasos, nichos y revestimientos con placas de yeso de máxima calidad y acabado perfecto.",
      bulletItems: [
        "Tabiques divisorios y medianeras",
        "Cielorrasos lisos y desmontables",
        "Nichos decorativos con iluminación",
        "Molduras y detalles arquitectónicos",
        "Revestimientos resistentes a humedad"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Durlock"
    },
    {
      title: "Plomería",
      desc: "Plomeros en La Plata: reparación de pérdidas, desobstrucciones, instalación de sanitarios y griferías en el día.",
      icon: "pipe",
      tags: "Pérdidas, Cañerías, Sanitarios, Desagües",
      detailDesc: "Plomeros profesionales con respuesta rápida. Solucionamos pérdidas, desobstrucciones, instalaciones de sanitarios y todo tipo de reparaciones de cañerías.",
      bulletItems: [
        "Reparación de pérdidas de agua y gas",
        "Desobstrucción de cañerías y desagües",
        "Instalación de sanitarios y griferías",
        "Tendido de cañerías nuevas",
        "Instalación de termotanques y calefones"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Plomería"
    },
    {
      title: "Reformas & Obras",
      desc: "Refacciones y reformas en La Plata: baños, cocinas y ambientes. Albañilería y obras integrales en Gran La Plata.",
      icon: "house",
      tags: "Baños, Cocinas, Revestimientos, Pisos",
      detailDesc: "Reformas integrales en La Plata y Gran La Plata. Renovamos baños, cocinas y ambientes completos con albañilería de primera, coordinando todos los gremios en un solo presupuesto.",
      bulletItems: [
        "Reformas completas de baños y cocinas",
        "Colocación de pisos y revestimientos",
        "Albañilería general y mampostería",
        "Ampliaciones y construcción en seco",
        "Coordinación integral de gremios"
      ],
      image: "https://placehold.co/600x400/1a1a1a/f5a623?text=Reformas"
    }
  ],

  // ─── Gallery (servicios.html) ───
  gallery: [
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+1",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+2",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+3",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+4",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+5",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+6",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+7",
    "https://placehold.co/300x300/1a1a1a/f5a623?text=Trabajo+8"
  ],

  // ─── Process ───
  procesoDesc: "Desde el primer mensaje hasta la entrega final, todo bajo control y sin sorpresas.",
  process: [
    { title: "Contacto", desc: "Nos escribís por WhatsApp o llamás. Contanos qué necesitás y acordamos una visita sin compromiso." },
    { title: "Diagnóstico Gratuito", desc: "Visitamos el lugar, analizamos el trabajo y te entregamos un presupuesto detallado sin cargo." },
    { title: "Ejecución", desc: "Arrancamos en la fecha pactada con materiales de calidad y personal capacitado. Cero impacto en tu rutina." },
    { title: "Garantía Escrita", desc: "Entregamos el trabajo con garantía documentada. Si algo falla, volvemos sin costo adicional." }
  ],
  processDetail: [
    {
      title: "Contacto Inicial",
      desc: "Nos contactás por WhatsApp, teléfono o a través del formulario de contacto. Contanos qué necesitás: puede ser una reparación puntual, una instalación nueva o una reforma completa. Respondemos en menos de 2 horas.",
      image: "https://placehold.co/700x300/1a1a1a/f5a623?text=Contacto+Inicial"
    },
    {
      title: "Visita y Diagnóstico Gratuito",
      desc: "Coordinamos una visita sin cargo a tu domicilio en La Plata o Gran La Plata. Nuestros profesionales evalúan el trabajo in situ, toman medidas y te asesoran sobre la mejor solución. Sin compromiso.",
      image: "https://placehold.co/700x300/1a1a1a/f5a623?text=Diagnóstico+Gratuito"
    },
    {
      title: "Presupuesto Detallado",
      desc: "Te enviamos un presupuesto por escrito con el detalle de materiales, mano de obra, plazos de ejecución y forma de pago. Todo claro y sin letras chicas. Si aceptás, coordinamos la fecha de inicio.",
      image: "https://placehold.co/700x300/1a1a1a/f5a623?text=Presupuesto+Detallado"
    },
    {
      title: "Ejecución del Trabajo",
      desc: "Arrancamos en la fecha pactada con materiales de calidad y personal capacitado. Mantenemos tu espacio limpio y ordenado. Te mantenemos informado del avance en todo momento.",
      image: "https://placehold.co/700x300/1a1a1a/f5a623?text=Ejecución+del+Trabajo"
    },
    {
      title: "Entrega y Garantía Escrita",
      desc: "Entregamos el trabajo terminado con una revisión conjunta. Te damos un certificado de garantía por escrito. Si algo no te convence o falla, volvemos a resolverlo sin costo adicional.",
      image: "https://placehold.co/700x300/1a1a1a/f5a623?text=Garantía+Escrita"
    }
  ],

  // ─── Guarantees ───
  guarantees: [
    { title: "Puntualidad", desc: "Cumplimos con los plazos pactados. Si hay un imprevisto, te avisamos de inmediato.", icon: "clock" },
    { title: "Garantía Escrita", desc: "Todos los trabajos incluyen certificado de garantía. Si algo falla, lo resolvemos sin costo.", icon: "shield" },
    { title: "Precio Justo", desc: "Presupuesto detallado y sin sorpresas. El precio que te damos es el precio final.", icon: "money" },
    { title: "Limpieza Total", desc: "Dejamos tu espacio impecable al terminar. Trabajamos con respeto por tu hogar.", icon: "thumb" }
  ],

  // ─── Opinion Stats ───
  opinionStats: [
    { value: "4.9/5", label: "Calificación Promedio" },
    { value: "+500", label: "Trabajos Completados" },
    { value: "98%", label: "Clientes Satisfechos" },
    { value: "85%", label: "Nos Recomiendan" }
  ],

  // ─── Testimonials ───
  testimonials: [
    { text: "Hicieron el cielorraso de durlock en tiempo récord y con un terminado impecable. Súper recomendables, ya los contraté para la cocina.", name: "Marcela R.", loc: "Centro, La Plata", color: "red", initial: "M", service: "Durlock" },
    { text: "Renovaron toda la instalación eléctrica del local. Trabajo prolijo, sin cortes innecesarios y con certificado de garantía.", name: "Javier C.", loc: "Tolosa, La Plata", color: "purple", initial: "J", service: "Electricidad" },
    { text: "Pintaron todo el departamento en dos días. Puntualísimos, buen precio y un resultado que superó todas mis expectativas.", name: "Laura P.", loc: "Gonnet, Gran La Plata", color: "orange", initial: "L", service: "Pintura" },
    { text: "Nos arreglaron una pérdida de agua que otros plomeros no pudieron solucionar. Vinieron rápido y lo resolvieron en el día.", name: "Roberto M.", loc: "City Bell", color: "blue", initial: "R", service: "Plomería" },
    { text: "Reformaron el baño completo: plomería, revestimientos, mueble y grifería. Coordinaron todo y quedó espectacular.", name: "Ana S.", loc: "La Plata Centro", color: "green", initial: "A", service: "Reformas" },
    { text: "Hicieron todas las puertas de madera del departamento nuevo. Ajuste perfecto, pintadas y con herrajes de calidad.", name: "Diego F.", loc: "Ensenada", color: "yellow", initial: "D", service: "Carpintería" },
    { text: "Excelente servicio de principio a fin. Presupuesto claro, materiales de calidad y cumplieron con los tiempos. Los voy a seguir llamando.", name: "Carolina V.", loc: "Los Hornos", color: "pink", initial: "C", service: "Electricidad" },
    { text: "Impermeabilizaron toda la terraza y pintaron el frente. Ya pasaron dos temporadas de lluvia y cero filtraciones. Garantía real.", name: "Pablo G.", loc: "Villa Elisa", color: "teal", initial: "P", service: "Pintura" },
    { text: "Armaron un cielorraso con iluminación indirecta que quedó increíble. Muy detallistas con el diseño y la terminación. Recomendado 100%.", name: "Valeria T.", loc: "Berisso", color: "indigo", initial: "V", service: "Durlock" }
  ],

  // ─── FAQ ───
  faq: [
    { q: "¿Hacen presupuesto sin cargo?", a: "Sí. El presupuesto es gratuito y sin compromiso. Visitamos el lugar en La Plata o Gran La Plata, evaluamos el trabajo y te pasamos un detalle por escrito." },
    { q: "¿Trabajan en toda La Plata y Gran La Plata?", a: "Sí. Atendemos La Plata capital y toda la zona de Gran La Plata. Sin costo adicional por desplazamiento dentro del área." },
    { q: "¿Dan garantía por escrito?", a: "Sí. Todos los trabajos se entregan con garantía documentada. Si algo falla, volvemos a resolverlo sin costo adicional." },
    { q: "¿Cuánto tarda el presupuesto?", a: "Respondemos en menos de 2 horas. Coordinamos la visita en La Plata o Gran La Plata y te lo enviamos por escrito." }
  ],

  // ─── Contact ───
  contact: {
    whatsapp: { desc: "Escribinos y te respondemos al toque", num: "+54 221 123-4567" },
    tel: { desc: "Lunes a sábado de 8 a 20hs", num: "+54 221 123-4567" },
    email: { desc: "Para consultas detalladas", addr: "info@reparmax.com.ar" },
    zona: "La Plata, Gonnet, City Bell, Villa Elisa, Tolosa, Los Hornos, Ensenada, Berisso y toda la zona de Gran La Plata.",
    horarios: "Lunes a Viernes: 8:00 – 20:00 · Sábados: 8:00 – 14:00 · Urgencias: 24hs"
  },

  // ─── About ───
  about: {
    heading1: "CONOCÉ",
    heading2: "NUESTRA HISTORIA",
    description: "Somos un equipo de profesionales especializados en reparaciones y mantenimiento del hogar. Con años de experiencia en La Plata y Gran La Plata, nos dedicamos a brindar soluciones integrales con calidad, puntualidad y garantía escrita en cada trabajo.",
    mission: "Brindar un servicio integral, confiable y accesible para el mantenimiento y mejora de tu hogar, con profesionales capacitados y materiales de primera calidad.",
    vision: "Ser la empresa de referencia en reparaciones del hogar en La Plata y Gran La Plata, reconocida por la calidad de nuestro trabajo y la satisfacción de nuestros clientes.",
    values: [
      { title: "Profesionalismo", desc: "Cada trabajo es realizado por especialistas capacitados en su área.", icon: "star" },
      { title: "Compromiso", desc: "Cumplimos con lo pactado en tiempo, forma y calidad.", icon: "shield" },
      { title: "Transparencia", desc: "Presupuestos claros y detallados, sin costos ocultos ni sorpresas.", icon: "check" }
    ],
    teamDescription: "Contamos con un equipo multidisciplinario de electricistas, pintores, carpinteros, durlockers, plomeros y albañiles con años de experiencia en cada especialidad."
  },

  // ─── CTA ───
  ctaSubtitle: "Respondemos en menos de 2 horas · Presupuesto gratuito · Sin compromiso",

  // ─── Nav ───
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

- [ ] **Step 2: Commit**

```bash
git add config.js
git commit -m "feat: create shared config.js with all business data"
```

---

### Task 2: Update `index.html` to use `config.js`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update `<head>` to load config.js before Tailwind and use dynamic colors**

In `index.html`, change the `<head>` section (lines 3-51). Key changes:
- Add `<script src="config.js"></script>` BEFORE Tailwind CDN
- Update `tailwind.config` to read from `CONFIG.colors`
- Update `<title>` to be set dynamically
- Add CSS custom properties setup for hardcoded colors in `<style>`
- Replace hardcoded hex colors in `<style>` with CSS variables

The `<head>` should become:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <meta name="description" content="">
    <script src="config.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
    <script>
        document.title = CONFIG.meta.title;
        document.querySelector('meta[name="description"]').content = CONFIG.meta.description;
        tailwind.config = {
            theme: { extend: {
                colors: { bg: CONFIG.colors.bg, bg2: CONFIG.colors.bg2, bg3: CONFIG.colors.bg3, accent: CONFIG.colors.accent, accent2: CONFIG.colors.accent2, textMain: CONFIG.colors.textMain, muted: CONFIG.colors.muted, borderC: 'rgba(255,255,255,0.07)' },
                fontFamily: { sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'] },
                animation: { /* keep existing shimmer-slide and spin-around */ },
                keyframes: { /* keep existing */ }
            }}
        }
    </script>
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0c0c0c; color: #f0ede8; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        /* ... keep all existing styles as-is (they work with Tailwind classes which are now dynamic) */
    </style>
</head>
```

Note: The hardcoded `body` colors in `<style>` serve as a flash-prevention fallback. They get overridden by Tailwind classes on the actual elements. The `body` background/color will be updated to match CONFIG at the start of `renderAll()` (which runs after `<body>` exists):

```js
// At the very start of renderAll():
document.body.style.background = CONFIG.colors.bg;
document.body.style.color = CONFIG.colors.textMain;
```

- [ ] **Step 2: Replace hardcoded navbar with dynamic nav from CONFIG**

Replace the navbar HTML (lines 56-81) to render from `CONFIG.nav`. The navbar still uses HTML but populated via a small inline script that runs after page load. Alternatively, keep the HTML structure but replace the hardcoded links with `id` placeholders, and populate them in `renderAll()`.

Approach: Add `id="navLinks"`, `id="navLogo"`, `id="mobileNavLinks"` to the relevant containers and populate them in `renderAll()`.

In the navbar, change the logo `<a>` to:
```html
<a href="#hero" class="text-accent font-extrabold text-xl tracking-tight uppercase" id="navLogo"></a>
```

Change the desktop nav links container to:
```html
<div class="hidden md:flex items-center gap-8 text-sm text-muted" id="navLinks"></div>
```

Change the mobile menu links container to:
```html
<div class="flex flex-col gap-6 text-sm" id="mobileNavLinks"></div>
```

- [ ] **Step 3: Add Google Maps embed placeholder in contact section**

After the `contactInfo` div (around line 210), add:
```html
<div id="mapEmbed" class="mt-8"></div>
```

- [ ] **Step 4: Update footer to use dynamic business name and year**

Replace the footer content with:
```html
<footer class="py-8 px-6 border-t border-borderC">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div id="footerLeft"></div>
        <div class="flex items-center gap-4" id="footerRight"></div>
    </div>
</footer>
```

- [ ] **Step 5: Replace DEFAULTS with CONFIG-based getData() and update renderAll()**

In the `<script>` section:
1. Remove the entire `const DEFAULTS = { ... }` block (lines 244-313)
2. Update `getData()` to use `CONFIG`:

```js
function getData() {
    const key = CONFIG.slug + '_cms';
    try {
        const stored = JSON.parse(localStorage.getItem(key) || 'null');
        if (stored && stored.services) return stored;
    } catch(e) {}
    return JSON.parse(JSON.stringify(CONFIG));
}
```

3. Add navbar/footer rendering to `renderAll()`:

```js
// At the very start of renderAll():
document.body.style.background = CONFIG.colors.bg;
document.body.style.color = CONFIG.colors.textMain;

const isIndex = location.pathname.endsWith('index.html') || location.pathname.endsWith('/');

// Nav logo
document.getElementById('navLogo').textContent = CONFIG.businessName;

// Desktop nav
document.getElementById('navLinks').innerHTML =
    CONFIG.nav.links.map(l =>
        '<a href="' + (isIndex ? l.href : l.page) + '" class="hover:text-textMain transition">' + esc(l.label) + '</a>'
    ).join('') +
    '<a href="' + (isIndex ? CONFIG.nav.ctaHref : CONFIG.nav.ctaPage) + '" class="bg-accent hover:bg-accent2 text-bg font-semibold px-5 py-2 rounded-lg transition">' + esc(CONFIG.nav.ctaLabel) + '</a>';

// Mobile nav
document.getElementById('mobileNavLinks').innerHTML =
    '<a href="' + (isIndex ? '#hero' : 'index.html') + '" class="text-accent font-semibold" onclick="closeMobile()">Inicio</a>' +
    CONFIG.nav.links.map(l =>
        '<a href="' + (isIndex ? l.href : l.page) + '" class="text-muted hover:text-textMain transition" onclick="closeMobile()">' + esc(l.label) + '</a>'
    ).join('') +
    '<a href="' + (isIndex ? CONFIG.nav.ctaHref : CONFIG.nav.ctaPage) + '" class="bg-accent hover:bg-accent2 text-bg font-semibold px-5 py-2 rounded-lg transition text-center" onclick="closeMobile()">' + esc(CONFIG.nav.ctaLabel) + '</a>';

// Footer
document.getElementById('footerLeft').innerHTML =
    '<span class="text-accent font-extrabold text-sm uppercase">' + esc(CONFIG.businessName) + '</span>' +
    '<span class="text-muted text-xs ml-3">' + esc(CONFIG.tagline) + ' · ' + esc(CONFIG.location) + '</span>';
document.getElementById('footerRight').innerHTML =
    '<a href="admin.html" class="text-muted hover:text-accent text-xs transition">Admin</a>' +
    '<p class="text-muted text-xs">© ' + new Date().getFullYear() + ' ' + esc(CONFIG.businessName) + '. Todos los derechos reservados.</p>';
```

4. Add map rendering at the end of `renderAll()`:

```js
// Google Maps
var mapEl = document.getElementById('mapEmbed');
if (mapEl && CONFIG.googleMapsEmbed) {
    mapEl.innerHTML =
        '<a href="' + esc(CONFIG.googleMapsUrl || CONFIG.googleMapsEmbed) + '" target="_blank" rel="noopener">' +
        '<div class="bg-bg2 border border-borderC rounded-2xl overflow-hidden">' +
        '<iframe src="' + esc(CONFIG.googleMapsEmbed) + '" width="100%" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        '</div></a>';
}
```

5. Update the hero canvas path color to use CONFIG:

In the canvas drawing code, replace `rgba(245,166,35,` with a dynamic hex-to-rgb conversion:
```js
// Add this helper before the canvas IIFE:
function hexToRgb(hex) {
    var r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return r+','+g+','+b;
}
```

Then in the draw function, replace:
```js
ctx.strokeStyle='rgba(245,166,35,'+p.alpha+')';
```
with:
```js
ctx.strokeStyle='rgba('+hexToRgb(CONFIG.colors.accent)+','+p.alpha+')';
```

6. Update `shimmerCard()` to use CONFIG colors:
```js
function shimmerCard(content, extraClass) {
    return '<div class="group relative z-0 overflow-hidden rounded-2xl border border-borderC hover:border-accent/30 transition-colors duration-500 ' + (extraClass || '') + '" style="--spread:90deg;--shimmer-color:' + CONFIG.colors.accent + ';--radius:1rem;--speed:3s;--cut:1px;--bg:' + CONFIG.colors.bg2 + ';">' +
    // ... rest unchanged
}
```

- [ ] **Step 6: Verify index.html renders correctly**

Open `index.html` in a browser. Verify:
- All sections render with same content as before
- Navbar shows dynamic business name and links
- Footer shows dynamic year and business name
- No JavaScript errors in console

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "feat: index.html uses shared config.js for all business data"
```

---

### Task 3: Migrate `servicios.html` to JS-rendered

**Files:**
- Modify: `servicios.html`

- [ ] **Step 1: Update head to load config.js and use dynamic colors**

Same `<head>` pattern as index.html: add `config.js` before Tailwind, dynamic title (`CONFIG.meta.title.split('–')[0] + '– Servicios'`), dynamic Tailwind colors.

- [ ] **Step 2: Replace hardcoded content with id placeholders + renderAll()**

Replace the entire body content with an HTML shell that has `id` placeholders, then add a `<script>` with: ICONS map, helper functions (`esc`, `icon`, `iconLg`, `shimmerCard`), `closeMobile()` function, `getData()`, and a `renderAll()` function that:

1. Renders navbar from CONFIG (using `page` links since this is a sub-page)
2. Renders the hero section badge/heading/desc
3. Renders each service in alternating layout (image left/right) with icon, title, detailDesc, bulletItems, and CTA link
4. Renders the gallery grid from `CONFIG.gallery`
5. Renders CTA section
6. Renders footer

Key HTML structure:
```html
<section id="serviciosHero" class="pt-32 pb-16 px-6">...</section>
<section class="py-16 px-6"><div class="max-w-7xl mx-auto space-y-20" id="serviciosDetail"></div></section>
<section class="py-24 px-6 border-t border-borderC"><div class="max-w-7xl mx-auto text-center" id="gallerySection"></div></section>
<!-- CTA + Footer with ids -->
```

- [ ] **Step 3: Remove old data-cms script at the bottom**

Delete the entire `<script>` block at the end that does `data-cms` attribute processing.

- [ ] **Step 4: Verify servicios.html renders correctly**

Open in browser. Verify all 6 services render with images, bullet items, and CTA buttons.

- [ ] **Step 5: Commit**

```bash
git add servicios.html
git commit -m "feat: migrate servicios.html from data-cms to config.js rendering"
```

---

### Task 4: Migrate `proceso.html` to JS-rendered

**Files:**
- Modify: `proceso.html`

- [ ] **Step 1: Update head, migrate to JS rendering**

Same `<head>` pattern. The `<script>` section must include: ICONS map, helper functions (`esc`, `icon`, `iconLg`), `closeMobile()` function, `getData()`, and a `renderAll()` function.

Replace body with HTML shell + `renderAll()` that:
1. Renders navbar (sub-page mode, highlight "Proceso")
2. Renders hero
3. Renders timeline from `CONFIG.processDetail` (5 steps with images, numbered circles, connecting border-l line)
4. Renders guarantees grid from `CONFIG.guarantees`
5. Renders CTA
6. Renders footer

- [ ] **Step 2: Remove old data-cms script**

- [ ] **Step 3: Verify and commit**

```bash
git add proceso.html
git commit -m "feat: migrate proceso.html from data-cms to config.js rendering"
```

---

### Task 5: Migrate `opiniones.html` to JS-rendered

**Files:**
- Modify: `opiniones.html`

- [ ] **Step 1: Update head, migrate to JS rendering**

Same `<head>` pattern. The `<script>` section must include: ICONS map, helper functions (`esc`, `icon`, `iconLg`), `closeMobile()` function, `getData()`, and a `renderAll()` function.

Replace body with HTML shell + `renderAll()` that:
1. Renders navbar (sub-page mode, highlight "Opiniones")
2. Renders hero
3. Renders opinion stats grid from `CONFIG.opinionStats`
4. Renders all testimonials in a 3-column grid (not scrolling columns - the detail page uses a static grid). Each card includes `service` tag in the location if present (e.g., "Centro, La Plata · Durlock")
5. Renders CTA
6. Renders footer

- [ ] **Step 2: Remove old data-cms script**

- [ ] **Step 3: Verify and commit**

```bash
git add opiniones.html
git commit -m "feat: migrate opiniones.html from data-cms to config.js rendering"
```

---

### Task 6: Migrate `contacto.html` to JS-rendered + Maps iframe

**Files:**
- Modify: `contacto.html`

- [ ] **Step 1: Update head, migrate to JS rendering**

Same `<head>` pattern. The `<script>` section must include: ICONS map, helper functions (`esc`, `icon`), `closeMobile()` function, `handleSubmit()`, `getData()`, and a `renderAll()` function.

Replace body with HTML shell + `renderAll()` that:
1. Renders navbar (sub-page mode)
2. Renders hero
3. Renders contact form (keep the existing form structure but populate the service `<select>` from `CONFIG.services`)
4. Renders contact info cards from `CONFIG.contact`
5. **Replaces the map placeholder** with a Google Maps iframe: if `CONFIG.googleMapsEmbed` is set, render an iframe; otherwise keep the placeholder image
6. Renders footer

Key change for the map section:
```js
var mapSection = document.getElementById('mapSection');
if (CONFIG.googleMapsEmbed) {
    mapSection.innerHTML =
        '<a href="' + esc(CONFIG.googleMapsUrl || CONFIG.googleMapsEmbed) + '" target="_blank" rel="noopener">' +
        '<iframe src="' + esc(CONFIG.googleMapsEmbed) + '" width="100%" height="400" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></a>';
} else {
    mapSection.innerHTML = '<img src="https://placehold.co/1200x400/1a1a1a/f5a623?text=Mapa" alt="Mapa" class="w-full h-full object-cover">';
}
```

- [ ] **Step 2: Remove old data-cms script**

- [ ] **Step 3: Verify and commit**

```bash
git add contacto.html
git commit -m "feat: migrate contacto.html to config.js + Google Maps iframe"
```

---

### Task 7: Create `about.html`

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create the about page**

Create `about.html` following the same design system. Sections rendered from `CONFIG.about`:

1. **Head** - Same pattern as other sub-pages (config.js + Tailwind + DM Sans + dynamic colors)
2. **Navbar** - Dynamic from CONFIG (sub-page mode, highlight "Nosotros")
3. **Hero** - Badge "Nosotros" + `heading1`/`heading2` + `description`
4. **Mission & Vision** - Two cards side by side in a 2-col grid
5. **Values** - 3-col grid using shimmerCard pattern with icons from ICONS map
6. **Team** - Section with `teamDescription`
7. **CTA** - "Pedir Presupuesto" linking to contacto.html
8. **Footer** - Dynamic from CONFIG

The page must include the ICONS map and helper functions (esc, icon, shimmerCard).

- [ ] **Step 2: Verify and commit**

```bash
git add about.html
git commit -m "feat: create about.html page reading from config.js"
```

---

### Task 8: Update `admin.html` to use `config.js`

**Files:**
- Modify: `admin.html`

- [ ] **Step 1: Update head to load config.js**

Add `<script src="config.js"></script>` before Tailwind. Update Tailwind colors to read from CONFIG. Add dynamic title.

- [ ] **Step 2: Remove the inline DEFAULTS object**

Remove the `const DEFAULTS = { ... }` block (lines 220-271 of admin.html). Update `loadData()` to use CONFIG:

```js
function loadData() {
    const key = CONFIG.slug + '_cms';
    try {
        const s = JSON.parse(localStorage.getItem(key) || 'null');
        if (s && s.services) { data = s; return; }
    } catch(e) {}
    data = JSON.parse(JSON.stringify(CONFIG));
}
```

Update `saveAll()`:
```js
function saveAll() {
    collectFields();
    localStorage.setItem(CONFIG.slug + '_cms', JSON.stringify(data));
    showToast('Cambios guardados correctamente');
}
```

Update `resetAll()`:
```js
function resetAll() {
    if (!confirm('¿Resetear TODO al contenido original?')) return;
    localStorage.removeItem(CONFIG.slug + '_cms');
    data = JSON.parse(JSON.stringify(CONFIG));
    renderAllFields();
    showToast('Contenido reseteado');
}
```

Update login to use `CONFIG.slug`:
```js
const stored = localStorage.getItem(CONFIG.slug + '_admin_pass') || 'admin';
```

- [ ] **Step 3: Add "Nosotros" tab**

Add new tab button after "Contacto":
```html
<button class="tab-btn" onclick="switchTab('about',this)">Nosotros</button>
```

Add new panel after `p-contact`:
```html
<div id="p-about" class="panel">
    <div class="card">
        <div class="section-title">Hero de Nosotros</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="fg"><label class="fl">Título línea 1</label><input id="ab-h1"></div>
            <div class="fg"><label class="fl">Título línea 2 (accent)</label><input id="ab-h2"></div>
        </div>
        <div class="fg"><label class="fl">Descripción</label><textarea id="ab-desc"></textarea></div>
    </div>
    <div class="card">
        <div class="section-title">Misión y Visión</div>
        <div class="fg"><label class="fl">Misión</label><textarea id="ab-mission"></textarea></div>
        <div class="fg"><label class="fl">Visión</label><textarea id="ab-vision"></textarea></div>
    </div>
    <div class="card">
        <div class="section-title">Valores</div>
        <div id="valuesFields"></div>
        <button class="add-btn" onclick="addValue()">+ Agregar Valor</button>
    </div>
    <div class="card">
        <div class="section-title">Equipo</div>
        <div class="fg"><label class="fl">Descripción del equipo</label><textarea id="ab-team"></textarea></div>
    </div>
</div>
```

- [ ] **Step 4: Add Google Maps and Social Media fields to Contact tab**

In the contact panel (`p-contact`), add after the "Zona y Horarios" card:

```html
<div class="card">
    <div class="section-title">Google Maps</div>
    <div class="fg"><label class="fl">URL de Google Maps (link para abrir)</label><input id="c-maps-url" placeholder="https://maps.google.com/?q=..."></div>
    <div class="fg"><label class="fl">URL de Embed (iframe)</label><input id="c-maps-embed" placeholder="https://www.google.com/maps/embed?pb=..."></div>
</div>
<div class="card">
    <div class="section-title">Redes Sociales</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="fg"><label class="fl">Instagram</label><input id="c-social-ig" placeholder="https://instagram.com/..."></div>
        <div class="fg"><label class="fl">Facebook</label><input id="c-social-fb" placeholder="https://facebook.com/..."></div>
        <div class="fg"><label class="fl">TikTok</label><input id="c-social-tt" placeholder="https://tiktok.com/@..."></div>
        <div class="fg"><label class="fl">YouTube</label><input id="c-social-yt" placeholder="https://youtube.com/..."></div>
    </div>
</div>
```

- [ ] **Step 5: Add General tab fields for business identity**

In the hero/general panel (`p-hero`), add a new card at the top:

```html
<div class="card">
    <div class="section-title">Identidad del Negocio</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="fg"><label class="fl">Nombre del negocio</label><input id="h-bname"></div>
        <div class="fg"><label class="fl">Eslogan</label><input id="h-tagline"></div>
        <div class="fg"><label class="fl">Ubicación</label><input id="h-location"></div>
    </div>
</div>
```

- [ ] **Step 6: Add render/collect functions for new fields**

Add `renderAbout()` and about-related functions:

```js
function renderAbout() {
    var ab = data.about || CONFIG.about;
    document.getElementById('ab-h1').value = ab.heading1 || '';
    document.getElementById('ab-h2').value = ab.heading2 || '';
    document.getElementById('ab-desc').value = ab.description || '';
    document.getElementById('ab-mission').value = ab.mission || '';
    document.getElementById('ab-vision').value = ab.vision || '';
    document.getElementById('ab-team').value = ab.teamDescription || '';
    renderValues();
}

function renderValues() {
    var vals = (data.about || CONFIG.about).values || [];
    document.getElementById('valuesFields').innerHTML = vals.map((v, i) =>
        '<div class="card"><button class="del-btn" onclick="removeValue(' + i + ')">&times;</button>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">' +
        '<div class="fg"><label class="fl">Título</label><input class="val-title" value="' + esc(v.title) + '"></div>' +
        '<div class="fg"><label class="fl">Descripción</label><textarea class="val-desc">' + esc(v.desc) + '</textarea></div>' +
        '</div>' +
        '<div class="fg"><label class="fl mb-2">Ícono</label>' + iconPickerHtml(v.icon, 'val-icon-' + i) + '</div>' +
        '</div>'
    ).join('');
}

function addValue() {
    if (!data.about) data.about = JSON.parse(JSON.stringify(CONFIG.about));
    data.about.values.push({title:"Nuevo Valor",desc:"Descripción.",icon:"star"});
    renderValues();
}

function removeValue(i) {
    if (!data.about) data.about = JSON.parse(JSON.stringify(CONFIG.about));
    data.about.values.splice(i,1);
    renderValues();
}
```

Update `renderAllFields()` to call the new functions:
```js
// Add at the end of renderAllFields():
renderAbout();

// Business identity fields
document.getElementById('h-bname').value = data.businessName || CONFIG.businessName;
document.getElementById('h-tagline').value = data.tagline || CONFIG.tagline;
document.getElementById('h-location').value = data.location || CONFIG.location;

// Maps & social
document.getElementById('c-maps-url').value = data.googleMapsUrl || CONFIG.googleMapsUrl || '';
document.getElementById('c-maps-embed').value = data.googleMapsEmbed || CONFIG.googleMapsEmbed || '';
document.getElementById('c-social-ig').value = (data.socialMedia || CONFIG.socialMedia || {}).instagram || '';
document.getElementById('c-social-fb').value = (data.socialMedia || CONFIG.socialMedia || {}).facebook || '';
document.getElementById('c-social-tt').value = (data.socialMedia || CONFIG.socialMedia || {}).tiktok || '';
document.getElementById('c-social-yt').value = (data.socialMedia || CONFIG.socialMedia || {}).youtube || '';
```

Update `collectFields()` to collect new fields:
```js
// Add at the end of collectFields():

// Business identity
data.businessName = document.getElementById('h-bname').value;
data.tagline = document.getElementById('h-tagline').value;
data.location = document.getElementById('h-location').value;

// Maps
data.googleMapsUrl = document.getElementById('c-maps-url').value;
data.googleMapsEmbed = document.getElementById('c-maps-embed').value;

// Social
data.socialMedia = {
    instagram: document.getElementById('c-social-ig').value,
    facebook: document.getElementById('c-social-fb').value,
    tiktok: document.getElementById('c-social-tt').value,
    youtube: document.getElementById('c-social-yt').value
};

// About
if (!data.about) data.about = JSON.parse(JSON.stringify(CONFIG.about));
data.about.heading1 = document.getElementById('ab-h1').value;
data.about.heading2 = document.getElementById('ab-h2').value;
data.about.description = document.getElementById('ab-desc').value;
data.about.mission = document.getElementById('ab-mission').value;
data.about.vision = document.getElementById('ab-vision').value;
data.about.teamDescription = document.getElementById('ab-team').value;

// Values
var vT = document.querySelectorAll('.val-title');
var vD = document.querySelectorAll('.val-desc');
data.about.values = Array.from(vT).map(function(el, i) {
    return { title: el.value, desc: vD[i]?.value || '', icon: getPickedIcon('val-icon-' + i) };
});
```

- [ ] **Step 7: Update admin navbar logo and CMS_KEY**

Replace hardcoded "ReparMax" in the admin top bar with dynamic:
```html
<a href="index.html" class="text-accent font-extrabold text-lg uppercase" id="adminLogo"></a>
```

In init, after `loadData()`:
```js
document.getElementById('adminLogo').textContent = CONFIG.businessName;
```

Update the `CMS_KEY` to use CONFIG:
```js
// Remove: const CMS_KEY = 'reparmax_cms';
// All references now use CONFIG.slug + '_cms' directly
```

- [ ] **Step 8: Verify admin panel works**

Open `admin.html`. Verify:
- All existing tabs still work
- New "Nosotros" tab appears and shows about fields
- Contact tab has Maps and Social fields
- General tab has business identity fields
- Save and reset work correctly
- Changes persist in localStorage

- [ ] **Step 9: Commit**

```bash
git add admin.html
git commit -m "feat: admin.html uses config.js + About/Maps/Social panels"
```

---

### Task 9: End-to-end Verification

- [ ] **Step 1: Test config change propagation**

1. Edit `config.js`: change `businessName` to "TestBrand"
2. Open each page in browser and verify navbar logo and footer show "TestBrand"
3. Revert `businessName` back to "ReparMax"

- [ ] **Step 2: Test color change propagation**

1. Edit `config.js`: change `accent` to "#e74c3c" (red)
2. Open `index.html` and verify accent colors change (hero heading, CTA buttons, shimmer cards, tags, hero canvas paths)
3. Revert back to "#f5a623"

- [ ] **Step 3: Test Google Maps embed**

1. Edit `config.js`: set `googleMapsEmbed` to a real embed URL (e.g., `"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26092.0!2d-57.95!3d-34.92!..."`)
2. Open `index.html` - verify map appears in contact section
3. Open `contacto.html` - verify map appears in location section
4. Click the map - verify it opens Google Maps

- [ ] **Step 4: Test admin → public page flow**

1. Open `admin.html`, edit a testimonial text
2. Click "Guardar"
3. Open `index.html` - verify the edited testimonial appears
4. Open `opiniones.html` - verify the edited testimonial appears there too
5. Click "Resetear" in admin - verify all pages revert to CONFIG defaults

- [ ] **Step 5: Test mobile responsiveness**

Open all pages in mobile viewport (375px). Verify:
- Hamburger menu works
- Content doesn't overflow
- Cards stack vertically
- Map is responsive

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: complete template config system - all pages use config.js"
```

---

## Verification Summary

| Check | Pages |
|---|---|
| Business name in navbar/footer | ALL |
| Dynamic accent colors | ALL |
| Google Maps embed | index.html, contacto.html |
| Nav links (anchors vs file links) | ALL |
| About page renders | about.html |
| Admin About tab | admin.html |
| Admin Maps/Social fields | admin.html |
| localStorage save/load | admin.html → all pages |
| Mobile responsive | ALL |
| Dynamic copyright year | ALL |
| Services detail page | servicios.html |
| Process timeline | proceso.html |
| Testimonials grid | opiniones.html |
| Contact form service select | index.html, contacto.html |
