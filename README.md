# 🔧 Template Handyman

Landing page + panel de administración para profesionales de servicios (plomeros, electricistas, constructores, etc.). Multi-negocio: una sola codebase sirve múltiples clientes, cada uno con su propio config, colores y contenido.

---

## 📁 Estructura

```
template_handyman/
├── index.html             # Landing page pública
├── admin.html             # Panel de administración
├── config.js              # Datos del negocio por defecto
├── db.js                  # Capa de datos (Supabase + fallback localStorage)
├── server.js              # Servidor Node.js (sin dependencias externas)
├── supabase-setup.sql     # Script para crear las tablas en Supabase
└── demos/
    ├── electricista-juan.js       # Demo: Juan Electricista
    └── soluciones-integrales.js   # Demo: Soluciones Integrales
```

---

## 🚀 Cómo correrlo

**Requisito:** tener [Node.js](https://nodejs.org) instalado. No hace falta ninguna dependencia extra (`npm install` no es necesario).

```bash
# 1. Clonar el repo
git clone https://github.com/dantegag/template_handyman.git
cd template_handyman

# 2. Iniciar el servidor
node server.js
```

Esto levanta el servidor en `http://localhost:3000`. Las rutas disponibles son:

| URL | Qué muestra |
|---|---|
| `localhost:3000` | Lista de todos los demos |
| `localhost:3000/demo/{slug}/` | Landing page del negocio |
| `localhost:3000/demo/{slug}/admin.html` | Panel de administración |

Por ejemplo, para el demo de Soluciones Integrales:
- Web: `http://localhost:3000/demo/soluciones-integrales/`
- Admin: `http://localhost:3000/demo/soluciones-integrales/admin.html`

Para cambiar el puerto:
```bash
PORT=8080 node server.js
```

---

## ➕ Agregar un nuevo cliente

1. Copiá un demo existente y renombralo con el slug del nuevo negocio:
   ```bash
   cp demos/electricista-juan.js demos/mi-cliente.js
   ```
2. Editá `demos/mi-cliente.js` con los datos del negocio (nombre, servicios, colores, contacto, etc.)
3. Reiniciá el servidor — el nuevo cliente aparece automáticamente.

---

## 🖥️ Panel de administración

El panel de admin (`/admin.html`) permite que **el propio usuario final edite todo el contenido de su página sin intervención técnica**: textos, servicios, testimonios, información de contacto y más. Los cambios se guardan en Supabase (o en localStorage si no está configurado) y se reflejan en la landing page de inmediato.

La contraseña por defecto es `admin`.

---

## 🗄️ Configurar Supabase (opcional)

Sin Supabase, todo funciona pero los datos se guardan en el localStorage del navegador (se pierden al limpiar caché).

Para persistencia real:
1. Creá un proyecto en [supabase.com](https://supabase.com)
2. Ejecutá `supabase-setup.sql` en el SQL Editor del dashboard
3. Pegá la URL y `anon key` de tu proyecto en `db.js`
