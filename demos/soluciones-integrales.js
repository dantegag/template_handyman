const CONFIG = {
  // ─── Identity ───
  businessName: "Soluciones Integrales",
  tagline: "Construcción, Pintura y Plomería",
  location: "CABA y alrededores",
  slug: "soluciones-integrales",

  // ─── Google Maps ───
  googleMapsUrl: "https://maps.app.goo.gl/Z3QnzUuD1qDrRdve6",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135!2d-58.4212746!3d-34.5853766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5811475bcaf%3A0xce34f3fb7dfbd279!2sSoluciones%20Integrales!5e0!3m2!1ses!2sar",

  // ─── Theme Colors ───
  colors: {
    accent: "#38bdf8",
    accent2: "#0ea5e9",
    bg: "#0b1222",
    bg2: "#111c32",
    bg3: "#182540",
    textMain: "#f0ede8",
    muted: "#8892a4"
  },

  // ─── Social Media ───
  socialMedia: {
    instagram: "",
    facebook: "https://www.facebook.com/solucionesintegrales.com.ar/",
    tiktok: "",
    youtube: ""
  },

  // ─── SEO / Meta ───
  meta: {
    title: "Soluciones Integrales – Construcción, Pintura y Plomería en Buenos Aires",
    description: "Profesionales con 30 años de experiencia en construcción, pintura, plomería y reformas integrales en CABA y alrededores. Presupuesto sin cargo."
  },

  // ─── Hero ───
  hero: {
    badge: "30 Años de Experiencia · CABA y alrededores",
    heading1: "SOLUCIONES PARA",
    heading2: "TU HOGAR Y NEGOCIO",
    subtitle: "Construcción · Pintura · Plomería · Albañilería · Impermeabilización",
    description: "Somos un grupo de profesionales capacitados para brindar soluciones inteligentes en cualquier rubro de la construcción. Presupuesto sin cargo y garantía de 30 días."
  },

  // ─── Stats ───
  stats: [
    { value: "30+", label: "Años de Experiencia" },
    { value: "24hs", label: "Urgencias" },
    { value: "100%", label: "Presupuesto Garantizado" }
  ],

  // ─── Services ───
  serviciosSubtitle: "Profesionales capacitados para brindar soluciones inteligentes en cualquier rubro de la construcción.",
  services: [
    {
      title: "Construcción & Arquitectura",
      desc: "Obras nuevas, reformas, ampliaciones y construcción en seco. Steel framing, hormigón armado y piletas.",
      icon: "house",
      tags: "Obras nuevas, Reformas, Steel framing, Piletas",
      detailDesc: "Construcción integral con más de 30 años de experiencia. Obras nuevas, reformas completas, ampliaciones, steel framing, hormigón armado y construcción de piletas.",
      bulletItems: [
        "Obras nuevas y ampliaciones",
        "Hormigón armado y piletas",
        "Steel framing y aislación térmica/acústica",
        "Planos y diseño arquitectónico",
        "Home staging y decoración"
      ],
      image: "https://placehold.co/600x400/182540/38bdf8?text=Construcción"
    },
    {
      title: "Pintura",
      desc: "Pintura interior y exterior, impermeabilización, tratamiento de maderas y pintura de techos y fachadas.",
      icon: "paint",
      tags: "Interior, Exterior, Impermeabilización, Techos",
      detailDesc: "Pintura profesional para interiores y exteriores. Impermeabilización, pintura de piletas, trabajo en altura, tratamiento de maderas y fachadas.",
      bulletItems: [
        "Pintura interior y exterior",
        "Impermeabilización de techos y paredes",
        "Pintura de piletas y fachadas",
        "Tratamiento de maderas",
        "Trabajos en altura"
      ],
      image: "https://placehold.co/600x400/182540/38bdf8?text=Pintura"
    },
    {
      title: "Plomería",
      desc: "Instalación de termotanques, reparaciones, desobstrucciones 24hs, detección de pérdidas y conexión de artefactos.",
      icon: "pipe",
      tags: "Termotanques, Desobstrucciones, Pérdidas, Artefactos",
      detailDesc: "Plomeros con respuesta rápida y servicio de emergencia 24hs. Instalación de termotanques, calefones solares, reparaciones y desobstrucciones.",
      bulletItems: [
        "Instalación de termotanques y calefones",
        "Desobstrucciones de emergencia 24hs",
        "Detección y reparación de pérdidas",
        "Conexión de artefactos y griferías",
        "Plomería para obras nuevas"
      ],
      image: "https://placehold.co/600x400/182540/38bdf8?text=Plomería"
    },
    {
      title: "Albañilería",
      desc: "Mampostería, hormigón armado, reformas de baños y cocinas, colocación de pisos y revestimientos.",
      icon: "grid",
      tags: "Mampostería, Hormigón, Pisos, Revestimientos",
      detailDesc: "Albañilería general y especializada. Mampostería, hormigón armado, reformas de baños y cocinas, colocación de pisos y revestimientos cerámicos.",
      bulletItems: [
        "Mampostería y hormigón armado",
        "Reformas completas de baños y cocinas",
        "Colocación de pisos y revestimientos",
        "Construcción de piletas",
        "Reparaciones generales"
      ],
      image: "https://placehold.co/600x400/182540/38bdf8?text=Albañilería"
    },
    {
      title: "Durlock & Construcción en Seco",
      desc: "Tabiques divisorios, cielorrasos, revestimientos y aislación térmica y acústica con placas de yeso.",
      icon: "wrench",
      tags: "Tabiques, Cielorrasos, Aislación, Revestimientos",
      detailDesc: "Construcción en seco con placas de yeso. Tabiques divisorios, cielorrasos, aislación térmica y acústica, y revestimientos.",
      bulletItems: [
        "Tabiques divisorios y medianeras",
        "Cielorrasos lisos y desmontables",
        "Aislación térmica y acústica",
        "Revestimientos decorativos",
        "Steel framing completo"
      ],
      image: "https://placehold.co/600x400/182540/38bdf8?text=Durlock"
    },
    {
      title: "Impermeabilización",
      desc: "Impermeabilización de techos, terrazas, paredes y piletas. Soluciones definitivas contra la humedad.",
      icon: "shield",
      tags: "Techos, Terrazas, Paredes, Piletas",
      detailDesc: "Impermeabilización profesional para techos, terrazas, paredes y piletas. Soluciones definitivas contra filtraciones y humedad.",
      bulletItems: [
        "Impermeabilización de techos y terrazas",
        "Tratamiento de paredes con humedad",
        "Impermeabilización de piletas",
        "Membrana líquida y asfáltica",
        "Pintura impermeabilizante"
      ],
      image: "https://placehold.co/600x400/182540/38bdf8?text=Impermeabilización"
    }
  ],

  // ─── Gallery ───
  gallery: [
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+1",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+2",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+3",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+4",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+5",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+6",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+7",
    "https://placehold.co/300x300/182540/38bdf8?text=Trabajo+8"
  ],

  // ─── Process ───
  procesoDesc: "Desde el primer mensaje hasta la entrega final, todo bajo control y sin sorpresas.",
  process: [
    { title: "Contacto", desc: "Nos escribís por WhatsApp o llamás. Contanos qué necesitás y acordamos una visita sin compromiso." },
    { title: "Presupuesto Gratis", desc: "Visitamos el lugar, analizamos el trabajo y te entregamos un presupuesto detallado sin cargo." },
    { title: "Ejecución", desc: "Arrancamos en la fecha pactada con materiales de calidad y personal capacitado." },
    { title: "Garantía 30 Días", desc: "Entregamos el trabajo con 30 días de garantía en mano de obra. Si algo falla, volvemos sin costo." }
  ],
  processDetail: [
    {
      title: "Contacto Inicial",
      desc: "Nos contactás por WhatsApp, teléfono o a través del formulario de contacto. Contanos qué necesitás: puede ser una reparación puntual, una instalación nueva o una reforma completa.",
      image: "https://placehold.co/700x300/182540/38bdf8?text=Contacto+Inicial"
    },
    {
      title: "Visita y Presupuesto Sin Cargo",
      desc: "Coordinamos una visita sin cargo a tu domicilio en CABA y alrededores. Nuestros profesionales evalúan el trabajo in situ y te asesoran sobre la mejor solución.",
      image: "https://placehold.co/700x300/182540/38bdf8?text=Presupuesto+Gratis"
    },
    {
      title: "Presupuesto Detallado",
      desc: "Te enviamos un presupuesto por escrito con el detalle de materiales, mano de obra, plazos de ejecución y forma de pago. Todo claro y sin letras chicas. Aceptamos tarjeta de crédito.",
      image: "https://placehold.co/700x300/182540/38bdf8?text=Presupuesto+Detallado"
    },
    {
      title: "Ejecución del Trabajo",
      desc: "Arrancamos en la fecha pactada con materiales de calidad y personal capacitado. Mantenemos tu espacio limpio y ordenado. Te mantenemos informado del avance en todo momento.",
      image: "https://placehold.co/700x300/182540/38bdf8?text=Ejecución+del+Trabajo"
    },
    {
      title: "Entrega y Garantía de 30 Días",
      desc: "Entregamos el trabajo terminado con una revisión conjunta. Todos nuestros trabajos incluyen 30 días de garantía en mano de obra. Si algo falla, volvemos sin costo adicional.",
      image: "https://placehold.co/700x300/182540/38bdf8?text=Garantía+30+Días"
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
    { text: "Impermeabilizaron la terraza completa y pintaron todo el frente. Ya pasaron dos temporadas de lluvia y cero filtraciones. Garantía real.", name: "Marcela R.", loc: "Palermo, CABA", color: "red", initial: "M", service: "Impermeabilización" },
    { text: "Reformaron el baño completo: plomería, revestimientos y grifería. Coordinaron todo y quedó espectacular. Muy profesionales.", name: "Javier C.", loc: "Belgrano, CABA", color: "purple", initial: "J", service: "Construcción" },
    { text: "Pintaron todo el departamento en tiempo récord. Puntualísimos, buen precio y un resultado que superó todas mis expectativas.", name: "Laura P.", loc: "Recoleta, CABA", color: "orange", initial: "L", service: "Pintura" },
    { text: "Nos arreglaron una pérdida de agua que otros plomeros no pudieron solucionar. Vinieron con el servicio de urgencia y lo resolvieron en el día.", name: "Roberto M.", loc: "Vicente López", color: "blue", initial: "R", service: "Plomería" },
    { text: "Hicieron la pileta completa con hormigón armado. Excelente terminación y cumplieron con los plazos. Los recomiendo totalmente.", name: "Ana S.", loc: "San Isidro", color: "green", initial: "A", service: "Construcción" },
    { text: "Instalaron el termotanque y arreglaron toda la grifería del baño. Rápidos, prolijos y con garantía de 30 días. Muy conformes.", name: "Diego F.", loc: "Núñez, CABA", color: "yellow", initial: "D", service: "Plomería" },
    { text: "Excelente servicio de principio a fin. Presupuesto sin cargo, materiales de calidad y cumplieron con los tiempos. Los voy a seguir llamando.", name: "Carolina V.", loc: "Olivos", color: "pink", initial: "C", service: "Construcción" },
    { text: "Hicieron los tabiques de durlock y la aislación acústica del departamento. Trabajo impecable y muy buena atención.", name: "Pablo G.", loc: "Caballito, CABA", color: "teal", initial: "P", service: "Durlock" },
    { text: "Pintaron el frente del edificio trabajando en altura. Profesionales, seguros y con un resultado excelente. 100% recomendados.", name: "Valeria T.", loc: "Morón", color: "indigo", initial: "V", service: "Pintura" }
  ],

  // ─── FAQ ───
  faq: [
    { q: "¿Hacen presupuesto sin cargo?", a: "Sí. El presupuesto es gratuito y sin compromiso. Visitamos el lugar en CABA y alrededores, evaluamos el trabajo y te pasamos un detalle por escrito." },
    { q: "¿En qué zonas trabajan?", a: "Atendemos CABA y alrededores. Sin costo adicional por desplazamiento dentro del área." },
    { q: "¿Dan garantía?", a: "Sí. Todos los trabajos incluyen 30 días de garantía en mano de obra. Si algo falla, volvemos a resolverlo sin costo adicional." },
    { q: "¿Atienden urgencias?", a: "Sí. Contamos con servicio de emergencia 24hs para desobstrucciones y problemas de plomería urgentes. Llamanos y te asistimos." }
  ],

  // ─── Contact ───
  contact: {
    whatsapp: { desc: "Escribinos y te respondemos al toque", num: "+54 9 11 3245-2445" },
    tel: { desc: "Lunes a sábado de 8 a 18hs", num: "+54 11 3276-0440" },
    email: { desc: "Para consultas detalladas", addr: "solucionesintegrales.caba@gmail.com" },
    zona: "CABA y alrededores.",
    horarios: "Lunes a Viernes: 8:00 – 18:00 · Sábados: 8:00 – 14:00 · Urgencias: 24hs"
  },

  // ─── About ───
  about: {
    heading1: "CONOCÉ",
    heading2: "NUESTRA HISTORIA",
    description: "Somos un grupo de profesionales capacitados para brindar soluciones inteligentes en cualquier rubro de la construcción. Con más de 30 años de experiencia en CABA y alrededores, ofrecemos servicios integrales con garantía de 30 días en todos nuestros trabajos.",
    mission: "Brindar soluciones inteligentes e integrales en construcción, pintura y plomería, con profesionales capacitados, materiales de calidad y presupuestos sin cargo.",
    vision: "Ser la empresa de referencia en soluciones integrales para el hogar y comercio en Buenos Aires, reconocida por nuestros 30 años de experiencia y la satisfacción de nuestros clientes.",
    values: [
      { title: "Experiencia", desc: "Más de 30 años brindando soluciones inteligentes en el rubro de la construcción.", icon: "star" },
      { title: "Garantía", desc: "30 días de garantía en mano de obra en todos nuestros trabajos.", icon: "shield" },
      { title: "Transparencia", desc: "Presupuestos sin cargo, detallados y sin costos ocultos.", icon: "check" }
    ],
    teamDescription: "Contamos con un equipo multidisciplinario de albañiles, pintores, plomeros, durlockers e impermeabilizadores con más de 30 años de experiencia combinada."
  },

  // ─── CTA ───
  ctaSubtitle: "Respondemos en menos de 2 horas · Presupuesto gratuito · Sin compromiso",

  // ─── Nav ───
  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Opiniones", href: "#opiniones" }
    ],
    ctaLabel: "Consultar",
    ctaHref: "#contacto"
  }
};
