/**
 * Ficha de cada empresa del grupo. Es la fuente única para la retícula de
 * Inicio, el índice de Empresas, el bloque de navegación entre empresas y el
 * mapa de soluciones para clientes empresariales.
 *
 * ORIGEN DEL CONTENIDO
 * - Filosofía, promesa y palabras clave: brandbooks aprobados
 *   (`Brandings_Grupo_EGD.md`).
 * - Servicios, marcas y categorías: sitio vigente del cliente
 *   (`egdautomoviles.com`), consultado el 2026-09-17.
 * - CENTUR no tiene brandbook (ver `docs/GOTCHAS.md`, G01): su voz es la
 *   personalidad provisional autorizada y no se le asigna color de marca.
 *
 * `ubicacionPropiaPorConfirmar` marca a las empresas cuya dirección individual
 * no está confirmada. Hoy no se renderiza: las cuatro comparten la sede del
 * grupo, así que la ubicación vive solo en Nosotros y en Contacto. El campo se
 * conserva porque el cliente pidió ubicaciones por empresa y volverá a hacer
 * falta en cuanto entregue direcciones propias.
 */

/** Clave de icono para cada servicio. El mapa a componentes vive en la vista. */
export type ServicioIcono = "auto" | "documento" | "escudo" | "megafono" | "llave" | "herramienta" | "brillo" | "pelicula" | "ventana" | "chat" | "lista";

export type Servicio = { titulo: string; icono: ServicioIcono };

export type Company = {
  slug: string;
  nombre: string;
  nombreCorto: string;
  href: string;
  numero: string;
  categoria: string;
  promesa: string;
  /** Qué hace la empresa, en una frase utilizable como resumen. */
  resumen: string;
  /** Qué hace la empresa, desarrollado. */
  queHace: string[];
  servicios: Servicio[];
  filosofia: { arquetipo: string; enunciado: string; como: string };
  /** Cómo puede esta empresa atender a otra empresa (agencias, flotillas, corporativos). */
  paraEmpresas: { necesidad: string; respuesta: string };
  /** Solo para las empresas que comercializan unidades. */
  catalogo?: { titulo: string; nota: string; categorias: string[]; marcas: string[] };
  ubicacionPropiaPorConfirmar: boolean;
  accent: string;
  logo: string;
  isotipo?: string;
  image: string;
  galeria: string[];
};

export const companies: Company[] = [
  {
    slug: "enlace-gd",
    nombre: "Enlace GD",
    nombreCorto: "Enlace GD",
    href: "/empresas/enlace-gd",
    numero: "01",
    categoria: "Compra y venta premium",
    promesa: "Autos seleccionados para decisiones que importan.",
    resumen: "Compra, venta y consignación de autos premium y unidades seleccionadas.",
    queHace: [
      "Enlace GD es la agencia del grupo especializada en el segmento premium: selecciona, compra, vende y consigna unidades de alta gama, deportivos, clásicos, convertibles y vehículos blindados.",
      "Cada unidad se revisa en sus condiciones físicas, mecánicas y legales antes de integrarse al catálogo. Para quien vende, el diagnóstico se entrega en un plazo no mayor a tres horas, con el valor comercial real de la unidad y un convenio de promoción si la persona está de acuerdo.",
    ],
    servicios: [
      { titulo: "Venta de autos premium seleccionados", icono: "auto" },
      { titulo: "Compra directa de unidades", icono: "documento" },
      { titulo: "Valuación física, mecánica y legal", icono: "escudo" },
      { titulo: "Acompañamiento en trámites y entrega", icono: "llave" },
      { titulo: "Consignación y promoción en catálogo", icono: "megafono" },
    ],
    filosofia: {
      arquetipo: "El Gobernante",
      enunciado: "Comprar o vender un auto debe sentirse seguro, transparente y respaldado por personas que conocen la industria.",
      como: "Selección con estándar minucioso, atención personalizada, precios justos y relaciones de largo plazo por encima de la operación puntual.",
    },
    paraEmpresas: {
      necesidad: "Vender, renovar o liquidar unidades premium de una flotilla o un inventario",
      respuesta: "Enlace GD valúa, compra directo o consigna las unidades y las promueve ante una comunidad ya formada en el segmento premium.",
    },
    catalogo: {
      titulo: "Qué tipo de autos vende",
      nota: "Catálogo vigente en egdautomoviles.com. La disponibilidad cambia de forma constante.",
      categorias: ["SUV", "Deportivo", "Clásico", "Blindado", "Convertible"],
      marcas: ["Porsche", "Mercedes-Benz", "BMW", "Audi", "Land Rover", "Jaguar", "Ferrari", "Lamborghini", "Aston Martin", "Rolls-Royce", "Cadillac", "Volvo", "Jeep", "Chevrolet", "Ford", "GMC", "Toyota", "Volkswagen", "Mini"],
    },
    ubicacionPropiaPorConfirmar: false,
    accent: "#1a2368",
    logo: "/enlace-egd/logotipo-enlace-gd.svg",
    isotipo: "/enlace-egd/isotipo-enlace-gd.svg",
    image: "/enlace-egd/imgs/1.2.png",
    galeria: ["/enlace-egd/imgs/4.0.png", "/enlace-egd/imgs/5.0.png", "/enlace-egd/imgs/7.0.png"],
  },
  {
    slug: "egd-aftersale",
    nombre: "EGD Aftersale & Detailing Center",
    nombreCorto: "EGD Aftersale",
    href: "/empresas/egd-aftersale",
    numero: "02",
    categoria: "Postventa y detailing",
    promesa: "El cuidado que sostiene el valor de cada unidad.",
    resumen: "Centro de servicio, protección y detallado para conservar apariencia, desempeño y valor.",
    queHace: [
      "EGD Aftersale & Detailing Center es el taller del grupo: concentra la protección de superficies, el detallado y la atención mecánica de las unidades, tanto de clientes particulares como de las demás empresas del grupo.",
      "Trabaja con soluciones XPEL para proteger pintura, cristales y acabados, y complementa con lavado premium, corrección de pintura, descontaminado, mecánica general y reemplazo de componentes específicos.",
    ],
    servicios: [
      { titulo: "PPF, película protectora de pintura", icono: "pelicula" },
      { titulo: "Recubrimiento cerámico", icono: "brillo" },
      { titulo: "Polarizado premium", icono: "ventana" },
      { titulo: "WPF, protección para parabrisas", icono: "escudo" },
      { titulo: "Lavado premium y detallado interior y exterior", icono: "brillo" },
      { titulo: "Corrección de pintura", icono: "pelicula" },
      { titulo: "Descontaminado y protección", icono: "escudo" },
      { titulo: "Mecánica general y diagnóstico", icono: "herramienta" },
      { titulo: "Reemplazo de calipers", icono: "herramienta" },
    ],
    filosofia: {
      arquetipo: "El Cuidador",
      enunciado: "Cada auto debe recibir el cuidado, mantenimiento y respaldo que necesita en un espacio profesional y confiable.",
      como: "Procesos claros, atención al detalle y comunicación constante durante cada etapa del servicio.",
    },
    paraEmpresas: {
      necesidad: "Dar servicio postventa, protección o preparación estética a las unidades de una agencia o flotilla",
      respuesta: "EGD Aftersale atiende el volumen con procesos documentados: protección XPEL, detallado de entrega, corrección de pintura y mantenimiento programado.",
    },
    ubicacionPropiaPorConfirmar: true,
    accent: "#252d85",
    logo: "/egd-aftersale/logotipo-egd-aftersale.svg",
    isotipo: "/egd-aftersale/isotipo-egd-aftersale.svg",
    image: "/images/egd-aftersale/detalle-en-proceso.png",
    galeria: ["/images/services/mantenimiento.png", "/egd-aftersale/imgs/4.0.png", "/egd-aftersale/imgs/6.0.png"],
  },
  {
    slug: "eb-cars",
    nombre: "EB Cars",
    nombreCorto: "EB Cars",
    href: "/empresas/eb-cars",
    numero: "03",
    categoria: "Compra y venta accesible",
    promesa: "Autos fáciles de comprar.",
    resumen: "Compra y venta de autos accesibles con un proceso práctico, claro y cercano.",
    queHace: [
      "EB Cars es la agencia del grupo enfocada en autos accesibles: unidades prácticas para quien compra su primer auto, cambia de vehículo o busca una opción confiable sin entrar al segmento premium.",
      "Su diferencia está en el trato. Explica cada paso con un lenguaje simple, compara opciones abiertamente y acompaña la decisión sin presión de venta, apoyada en el mismo respaldo técnico del grupo.",
    ],
    servicios: [
      { titulo: "Venta de autos seminuevos y accesibles", icono: "auto" },
      { titulo: "Compra y recepción de unidades", icono: "documento" },
      { titulo: "Asesoría para primera compra", icono: "chat" },
      { titulo: "Comparativa de opciones por presupuesto", icono: "lista" },
      { titulo: "Acompañamiento en trámites", icono: "llave" },
    ],
    filosofia: {
      arquetipo: "El Amigo",
      enunciado: "Comprar o vender un auto debe ser claro, accesible y confiable, para que cada persona se sienta segura durante el proceso.",
      como: "Comunicación sencilla, variedad de opciones y acompañamiento en cada paso, sin lenguaje de lote ni presión de venta.",
    },
    paraEmpresas: {
      necesidad: "Colocar unidades de entrada o resolver la movilidad de un equipo con presupuestos acotados",
      respuesta: "EB Cars maneja el segmento accesible con el mismo estándar de revisión del grupo y un proceso pensado para explicarse rápido a muchas personas.",
    },
    catalogo: {
      titulo: "Qué tipo de autos vende",
      nota: "Perfil de unidades del segmento accesible. El inventario específico está pendiente de confirmación del cliente.",
      categorias: ["Seminuevos", "Compactos", "Sedán", "SUV de entrada", "Primera compra"],
      marcas: [],
    },
    ubicacionPropiaPorConfirmar: true,
    accent: "#00568e",
    logo: "/eb-cars/logotipo-eb-cars.svg",
    isotipo: "/eb-cars/isotipo-eb-cars.svg",
    image: "/eb-cars/imgs/5.0.png",
    galeria: ["/eb-cars/imgs/4.0.png", "/eb-cars/imgs/6.0.png", "/eb-cars/imgs/7.0.png"],
  },
  {
    slug: "centur-blindajes",
    nombre: "CENTUR Blindajes",
    nombreCorto: "CENTUR",
    href: "/empresas/centur-blindajes",
    numero: "04",
    categoria: "Blindaje automotriz",
    promesa: "Seguridad vehicular diseñada con precisión.",
    resumen: "Blindaje automotriz por niveles, con instalación que respeta el diseño original de la unidad.",
    queHace: [
      "CENTUR es la empresa de blindaje del grupo. Protege unidades nuevas o ya en uso ajustando el nivel de protección al riesgo real de cada persona, ruta y vehículo.",
      "El trabajo se plantea para que el auto conserve su comportamiento y su interior: la instalación cuida el diseño original, y el grupo se queda a cargo del mantenimiento posterior de la unidad protegida.",
    ],
    servicios: [
      { titulo: "Blindaje de unidades nuevas", icono: "escudo" },
      { titulo: "Blindaje de unidades en uso", icono: "pelicula" },
      { titulo: "Asesoría de nivel de protección", icono: "chat" },
      { titulo: "Venta de unidades ya blindadas", icono: "auto" },
      { titulo: "Mantenimiento de vehículos protegidos", icono: "herramienta" },
    ],
    filosofia: {
      arquetipo: "Personalidad provisional autorizada",
      enunciado: "La protección se decide con información, no con miedo: el nivel adecuado es el que corresponde al riesgo real de cada persona.",
      como: "Asesoría técnica previa, materiales de proveedores reconocidos y un proceso que respeta las prestaciones y el diseño original del vehículo.",
    },
    paraEmpresas: {
      necesidad: "Proteger directivos, unidades de traslado o una flotilla completa",
      respuesta: "CENTUR define el nivel por perfil de riesgo, blinda las unidades y las deja integradas al mantenimiento especializado del grupo.",
    },
    ubicacionPropiaPorConfirmar: true,
    accent: "#6f7479",
    logo: "/centur/logotipo-centur.svg",
    image: "/images/centur/hero-seguridad.png",
    galeria: ["/images/services/blindaje.png", "/images/centur/hero-seguridad.png"],
  },
];

export const companyBySlug = (slug: string) => companies.find((company) => company.slug === slug);

/** Las otras empresas del grupo, para el bloque de navegación cruzada. */
export const otherCompanies = (slug: string) => companies.filter((company) => company.slug !== slug);
