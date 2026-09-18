import type { ComponentType } from "react";
import { Link } from "react-router";
import { PiArrowRight, PiCarProfile, PiChatCircleText, PiFileText, PiKey, PiListChecks, PiMegaphoneSimple, PiShieldCheck, PiSparkle, PiStack, PiSun, PiWrench } from "react-icons/pi";

import { otherCompanies, type Company, type ServicioIcono } from "./companies";

/**
 * Bloques que comparten las cuatro páginas de empresa. Cada uno responde a una
 * pregunta que el cliente pidió explícitamente: qué hace, con qué filosofía,
 * dónde está, cómo atiende a otra empresa y a qué otra empresa del grupo llevar
 * al visitante.
 *
 * Cada bloque usa una familia de retícula distinta, para que una página de
 * empresa no sea la misma composición repetida: texto a dos columnas, nube de
 * etiquetas, cita destacada, banda a sangre y lista de filetes.
 *
 * La ubicación no vive aquí. Las cuatro empresas comparten hoy la sede del
 * grupo, así que repetirla en cada página era el mismo bloque cinco veces:
 * quedó solo en Nosotros y en Contacto.
 *
 * El color de marca llega por `company.accent` y se aplica en línea: así ninguna
 * paleta de empresa queda escrita dentro de un componente compartido.
 */

/** CENTUR no tiene color de marca aprobado; su acento cae a blanco translúcido. */
const trazo = (company: Company) => (company.accent === "#6f7479" ? "rgba(255,255,255,.45)" : company.accent);

/**
 * Logotipos de marca, por nombre exacto tal como aparece en `companies.ts`.
 *
 * Vacío a propósito: mientras no haya assets aprobados, cada celda rinde el
 * nombre como marca denominativa. Para activar un logotipo, coloca el SVG en
 * `public/marcas/` y agrégalo aquí. No uses un CDN de terceros sin pedirlo:
 * son marcas registradas de otras empresas.
 */
const logotiposDeMarca: Record<string, string | undefined> = {};

/** Familia única en el sitio: Phosphor. La clave la declara cada servicio en `companies.ts`. */
const iconosDeServicio: Record<ServicioIcono, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  auto: PiCarProfile,
  documento: PiFileText,
  escudo: PiShieldCheck,
  megafono: PiMegaphoneSimple,
  llave: PiKey,
  herramienta: PiWrench,
  brillo: PiSparkle,
  pelicula: PiStack,
  ventana: PiSun,
  chat: PiChatCircleText,
  lista: PiListChecks,
};

/**
 * Qué hace la empresa y, debajo, sus servicios.
 *
 * Una sola sección con dos bloques: arriba el texto con una fotografía a la
 * derecha, abajo el catálogo de servicios en tarjetas con icono. El segundo
 * bloque desarrolla lo que el primero enuncia, así que no se separan.
 *
 * - `mostrarServicios` se apaga cuando la página desarrolla los servicios en una
 *   sección propia: listarlos dos veces repite contenido y retícula.
 * - `leyenda` es un acento editorial opcional sobre la fotografía.
 * - `imagen` evita repetir la del hero en las páginas que usan `company.image`
 *   arriba.
 */
export function CompanyOverviewSection({ company, mostrarServicios = true, leyenda, imagen = company.image, tituloServicios = "Soluciones en cada etapa.", introServicios = "Un servicio integral para quienes valoran el tiempo, la seguridad y la excelencia." }: { company: Company; mostrarServicios?: boolean; leyenda?: string; imagen?: string; tituloServicios?: string; introServicios?: string }) {
  const servicios = company.servicios;

  return <section aria-labelledby={`${company.slug}-que-hace`} className="border-t border-white/15">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Qué hace</p>
          <h2 id={`${company.slug}-que-hace`} className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-.065em]">{company.promesa}</h2>
          <div className="mt-8 max-w-xl space-y-6 leading-8 text-white/65">{company.queHace.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}</div>
        </div>

        <figure className="relative isolate overflow-hidden rounded-2xl border border-white/12">
          <img src={imagen} alt="" aria-hidden="true" loading="lazy" className="aspect-[16/9] w-full object-cover" />
          {leyenda ? <>
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,transparent_42%,rgba(9,13,26,.9))]" />
            <figcaption className="absolute bottom-10 right-8 max-w-[11rem] text-right text-[0.6rem] uppercase leading-[2] tracking-[0.28em] text-white/70 sm:right-10">
              {leyenda}
              <span aria-hidden="true" className="ml-auto mt-5 block h-px w-10 bg-white/40" />
            </figcaption>
          </> : null}
        </figure>
      </div>

      {mostrarServicios ? <div className="mt-24 grid gap-12 sm:mt-28 lg:grid-cols-[.42fr_1.58fr] lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Servicios</p>
          <h3 id={`${company.slug}-servicios`} className="mt-6 max-w-xs font-[family-name:var(--font-display)] text-[clamp(1.9rem,2.8vw,2.8rem)] font-semibold leading-[1.06] tracking-[-.065em]">{tituloServicios}</h3>
          <p className="mt-7 max-w-xs leading-7 text-white/55">{introServicios}</p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {servicios.map((servicio, index) => {
            const Icono = iconosDeServicio[servicio.icono];
            // Con un número impar de servicios, el último ocupa la fila completa
            // en lugar de dejar una celda vacía.
            const ocupaLaFila = servicios.length % 2 === 1 && index === servicios.length - 1;

            return <li key={servicio.titulo} className={ocupaLaFila ? "sm:col-span-2" : undefined}>
              <Link to="/contacto" aria-label={`Consultar sobre ${servicio.titulo.toLowerCase()}`} className="group flex h-full items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/30 hover:bg-white/[0.07] sm:p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.05]">
                  <Icono aria-hidden className="size-5 text-white/80" />
                </span>
                <span className="flex-1 leading-6 text-white/90">{servicio.titulo}</span>
                <PiArrowRight aria-hidden className="size-4 shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>;
          })}
        </ul>
      </div> : null}
    </div>
  </section>;
}

/**
 * Qué tipo de autos vende. Solo para las empresas que comercializan unidades.
 *
 * El muro de marcas usa `flex-wrap` con celdas que crecen: con 19 marcas, cada
 * fila se reparte el ancho completo y no queda ninguna celda vacía, que es lo
 * que pasaría con un número fijo de columnas.
 */
export function CompanyCatalogSection({ company }: { company: Company }) {
  if (!company.catalogo) return null;
  const { titulo, nota, categorias, marcas } = company.catalogo;

  return <section aria-labelledby={`${company.slug}-catalogo`} className="border-t border-white/15 bg-white/[0.03]">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <h2 id={`${company.slug}-catalogo`} className="max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.02] tracking-[-.06em]">{titulo}</h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">{nota}</p>

      <div className="mt-12 flex flex-wrap gap-2">
        {categorias.map((categoria) => <span key={categoria} className="rounded-full border px-5 py-2.5 text-base text-white/85" style={{ borderColor: trazo(company) }}>{categoria}</span>)}
      </div>

      {marcas.length > 0 ? <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-8 sm:px-10 sm:py-10">
        <h3 className="text-[0.62rem] uppercase tracking-[0.3em] text-white/45">Marcas que ha comercializado</h3>
        <ul className="-ml-px -mt-px mt-8 flex flex-wrap">
          {marcas.map((marca) => {
            const logo = logotiposDeMarca[marca];
            return <li key={marca} className="group flex grow basis-[7.5rem] items-center justify-center border-l border-t border-white/[0.07] px-4 py-8">
              {logo
                ? <img src={logo} alt={marca} loading="lazy" className="h-7 w-auto max-w-[6.5rem] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                : <span className="text-center text-[0.7rem] uppercase leading-5 tracking-[0.16em] text-white/60 transition-colors duration-300 group-hover:text-white">{marca}</span>}
            </li>;
          })}
        </ul>
      </div> : null}
    </div>
  </section>;
}

/**
 * Filosofía: el porqué y el cómo declarados en el brandbook de la marca.
 *
 * Tratamiento clásico de cita: columna centrada, filetes simétricos, comillas
 * tipográficas y atribución debajo. Es la única sección centrada del sitio, y
 * funciona justamente porque rompe con la retícula alineada a la izquierda.
 */
export function CompanyPhilosophySection({ company }: { company: Company }) {
  return <section aria-labelledby={`${company.slug}-filosofia`} className="border-t border-white/15">
    <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id={`${company.slug}-filosofia`} className="text-xs font-normal uppercase tracking-[0.3em] text-white/45">Filosofía</h2>
        <span aria-hidden="true" className="mx-auto mt-9 block h-px w-14" style={{ backgroundColor: trazo(company) }} />

        <blockquote className="mt-10 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium leading-[1.3] tracking-[-.045em]">
          <p>&ldquo;{company.filosofia.enunciado}&rdquo;</p>
        </blockquote>
        <p className="mt-9 text-xs uppercase tracking-[0.26em] text-white/50">{company.filosofia.arquetipo}</p>

        <span aria-hidden="true" className="mx-auto mt-14 block h-px w-14 bg-white/20" />
        <p className="mx-auto mt-10 max-w-xl leading-8 text-white/60">{company.filosofia.como}</p>
      </div>
    </div>
  </section>;
}

/** Cómo esta empresa atiende a otra empresa: agencias, flotillas, corporativos. */
export function CompanyBusinessSection({ company }: { company: Company }) {
  return <section aria-labelledby={`${company.slug}-empresas`} className="relative isolate overflow-hidden border-t border-white/15">
    <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: `linear-gradient(105deg, ${company.accent}4d, transparent 58%)` }} />
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
      <h2 id={`${company.slug}-empresas`} className="max-w-3xl text-[clamp(1.6rem,2.6vw,2.6rem)] font-medium leading-[1.2] tracking-[-.05em]">Para empresas: {company.paraEmpresas.necesidad.charAt(0).toLowerCase()}{company.paraEmpresas.necesidad.slice(1)}.</h2>
      <p className="mt-6 max-w-2xl leading-8 text-white/70">{company.paraEmpresas.respuesta}</p>
      <Link to="/servicios" className="mt-9 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-egd-base">Ver todas las soluciones del grupo</Link>
    </div>
  </section>;
}

/** Navegación cruzada: a qué otra empresa del grupo puede pasar el visitante. */
export function CompanySwitchSection({ slug }: { slug: string }) {
  const others = otherCompanies(slug);

  return <section aria-labelledby={`${slug}-otras-empresas`} className="border-t border-white/15 bg-black/25">
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
      <h2 id={`${slug}-otras-empresas`} className="max-w-xl text-[clamp(1.7rem,2.6vw,2.6rem)] font-semibold leading-[1.05] tracking-[-.055em]">El resto del grupo también puede ayudarte.</h2>

      <ul className="mt-12 border-t border-white/20">
        {others.map((company) => <li key={company.slug}>
          <Link to={company.href} className="group grid items-center gap-x-10 gap-y-3 border-b border-white/20 py-7 transition-colors hover:bg-white/[0.05] md:grid-cols-[.55fr_1fr_auto]">
            <img src={company.logo} alt={company.nombre} className="max-h-6 max-w-[160px] object-contain object-left brightness-0 invert" />
            <p className="leading-7 text-white/65">{company.resumen}</p>
            <span className="flex items-center gap-3 text-sm font-medium text-white/85">
              Conocer {company.nombreCorto}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </li>)}
      </ul>

      <Link to="/empresas" className="mt-10 inline-block text-sm text-white/60 underline-offset-4 hover:text-white hover:underline">Ver las cuatro empresas</Link>
    </div>
  </section>;
}

/**
 * Proceso paso a paso, compartido por las empresas que venden unidades.
 *
 * Tira numerada bajo un filete continuo, sin cajas: las cuatro etapas se leen
 * como una secuencia y no como cuatro tarjetas sueltas.
 */
export function CompanyProcessSection({ company, titulo, pasos }: { company: Company; titulo: string; pasos: { titulo: string; detalle: string }[] }) {
  return <section aria-labelledby={`${company.slug}-proceso`} className="border-t border-white/15">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <h2 id={`${company.slug}-proceso`} className="max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.02] tracking-[-.06em]">{titulo}</h2>
      <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
        {pasos.map((paso, index) => <li key={paso.titulo} className="group relative pt-7">
          {/* Dos filetes superpuestos: el de marca abajo y uno claro que aparece
              al pasar el cursor. Así el realce no depende del color de cada
              empresa, que en Enlace GD es casi negro sobre el fondo. */}
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5" style={{ backgroundColor: trazo(company) }} />
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-[-.06em] text-white/35 transition-colors duration-300 group-hover:text-white/70">0{index + 1}</span>
          <p className="mt-5 text-xl font-medium tracking-[-.04em]">{paso.titulo}</p>
          <p className="mt-4 leading-7 text-white/60 transition-colors duration-300 group-hover:text-white/80">{paso.detalle}</p>
        </li>)}
      </ol>
    </div>
  </section>;
}
