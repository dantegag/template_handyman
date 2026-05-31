# Handyman Landing Page Template

Template de landing page configurable para negocios de servicios (plomeros, electricistas, gasistas, etc.).
Diseñado para ser adaptable a cualquier rubro con solo editar un archivo de configuración.

## Tecnologías
- HTML + JavaScript vanilla
- Tailwind CSS (CDN)
- Supabase (base de datos para consultas y contenido)

## Funcionalidades
- Landing page completa: hero, servicios, proceso, testimonios, FAQ y contacto
- Formulario de contacto con rate limiting y guardado en Supabase
- Panel de administración para gestionar consultas recibidas
- Contenido 100% configurable desde `config.js` (colores, textos, servicios, etc.)
- Animaciones SVG en hero, columnas de testimonios con scroll automático
- Botón flotante de WhatsApp
- Responsive y optimizado para mobile

## Cómo usar
1. Clonar el repositorio
2. Configurar Supabase: crear un proyecto y ejecutar `supabase-setup.sql`
3. Editar `config.js` con los datos del negocio (nombre, servicios, colores, contacto)
4. Abrir `index.html` en el navegador o deployar en cualquier hosting estático

## Estructura
```
├── index.html        # Landing page principal
├── admin.html        # Panel de administración
├── config.js         # Configuración del negocio (editar esto dependiendo del negocio)
├── db.js             # Conexión con Supabase
└── supabase-setup.sql # Schema de base de datos
```
