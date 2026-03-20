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
