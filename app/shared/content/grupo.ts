/**
 * Datos institucionales de Grupo EGD.
 *
 * ORIGEN: transcritos de `egdautomoviles.com` (sitio vigente del cliente) el
 * 2026-09-17, salvo donde se indica. Todo lo marcado como `porConfirmar` no debe
 * publicarse hasta que el cliente lo apruebe: ver `docs/HANDOFF.md`.
 */

export const grupo = {
  nombre: "Grupo EGD",
  aniosExperiencia: 20,
  ciudad: "León",
  estado: "Guanajuato",
  pais: "México",
  /** Frase del propio cliente en `egdautomoviles.com/egd/nosotros`. */
  queHacemos: "Compramos, vendemos, blindamos, reparamos y personalizamos.",
  segmento: "Segmento premium",
};

export const matriz = {
  etiqueta: "Oficinas y showroom",
  calle: "Circunvalación Pte 798-A",
  colonia: "Jardines del Moral",
  ciudad: "León",
  estado: "Guanajuato",
  codigoPostal: "37160",
  pais: "México",
  /** Enlace exacto proporcionado por el cliente. No lo sustituyas por una búsqueda armada a mano. */
  mapa: "https://maps.app.goo.gl/ucSyJnNTKgnWPoWCA",
};

export const direccionCompleta = `${matriz.calle}, ${matriz.colonia}. ${matriz.ciudad}, ${matriz.estado}, ${matriz.pais} ${matriz.codigoPostal}`;

export const horarios = [
  { dias: "Lunes a viernes", horas: "9:00 a 14:00 h y 16:00 a 19:00 h" },
  { dias: "Sábado", horas: "10:00 a 15:00 h" },
];

export const contacto = {
  oficina: { etiqueta: "Oficina", valor: "477 779 76 38", href: "tel:+524777797638" },
  whatsapp: { etiqueta: "WhatsApp", valor: "477 434 10 32", href: "https://wa.me/524774341032" },
  ventasWhatsapp: { etiqueta: "WhatsApp de ventas", valor: "477 153 79 77", href: "https://wa.me/524771537977" },
  gerencia: { etiqueta: "Gerencia", valor: "gerencia@egdautomoviles.com", href: "mailto:gerencia@egdautomoviles.com" },
  ventas: { etiqueta: "Ventas", valor: "ventas@egdautomoviles.com", href: "mailto:ventas@egdautomoviles.com" },
  administracion: { etiqueta: "Administración", valor: "admon@egdautomoviles.com", href: "mailto:admon@egdautomoviles.com" },
};

export const redes = [
  { nombre: "Instagram", href: "https://www.instagram.com/egdautomoviles/" },
  { nombre: "Facebook", href: "https://www.facebook.com/enlaceGD/" },
  { nombre: "YouTube", href: "https://www.youtube.com/@enlacegd" },
];

/**
 * Misión, visión y valores.
 *
 * BORRADOR: redactados a partir del Golden Circle de los brandbooks aprobados y
 * del texto institucional del sitio vigente. Requieren aprobación del cliente
 * antes de considerarse definitivos.
 */
export const mision =
  "Acompañar cada decisión automotriz (comprar, vender, proteger, mantener y personalizar) con criterio, transparencia y un estándar de servicio parejo en las cuatro empresas del grupo.";

export const vision =
  "Ser el grupo automotriz de referencia en el Bajío para quienes valoran su auto: un solo interlocutor capaz de resolver el ciclo completo de una unidad, con la especialización de cuatro empresas detrás.";

/** El `id` permite asociar un icono en la vista sin acoplar este módulo a React. */
export const valores = [
  { id: "transparencia", titulo: "Transparencia", detalle: "Información directa y verificable en cada operación, sin lenguaje de lote ni presión de venta." },
  { id: "criterio", titulo: "Criterio", detalle: "Cada unidad y cada servicio se revisan con un estándar propio antes de recomendarlos." },
  { id: "especializacion", titulo: "Especialización", detalle: "Cuatro empresas enfocadas, cada una experta en una parte concreta del ciclo del vehículo." },
  { id: "respaldo", titulo: "Respaldo", detalle: "La relación continúa después de la entrega: mantenimiento, protección y seguimiento." },
] as const;

/** Hitos verificables del sitio vigente del cliente. */
export const cifras = [
  { valor: "20", unidad: "años", detalle: "de experiencia en el sector automotriz premium" },
  { valor: "4", unidad: "empresas", detalle: "especializadas bajo una misma dirección" },
  { valor: "1", unidad: "sede", detalle: "en León, Guanajuato, con atención en todo el Bajío" },
];
