import { Link } from "react-router";

import { contacto, horarios, matriz, direccionCompleta } from "../../shared/content/grupo";
import { otherCompanies, type Company } from "./companies";

/**
 * Bloques que comparten las cuatro páginas de empresa. Cada uno responde a una
 * pregunta que el cliente pidió explícitamente: qué hace, con qué filosofía,
 * dónde está, cómo atiende a otra empresa y a qué otra empresa del grupo llevar
 * al visitante.
 *
 * Cada bloque usa una familia de retícula distinta, para que una página de
 * empresa no sea la misma composición repetida ocho veces: texto a dos columnas,
 * nube de etiquetas, cita destacada, banda a sangre, tira de datos y lista de
 * filetes.
 *
 * El color de marca llega por `company.accent` y se aplica en línea: así ninguna
 * paleta de empresa queda escrita dentro de un componente compartido.
 */

/** CENTUR no tiene color de marca aprobado; su acento cae a blanco translúcido. */
const trazo = (company: Company) => (company.accent === "#6f7479" ? "rgba(255,255,255,.45)" : company.accent);

/**
 * Qué hace la empresa, en texto corrido, con los servicios debajo.
 *
 * `mostrarServicios` se apaga cuando la página desarrolla los servicios en una
 * sección propia: listarlos dos veces repite contenido y retícula.
 */
export function CompanyOverviewSection({ company, mostrarServicios = true }: { company: Company; mostrarServicios?: boolean }) {
  return <section aria-labelledby={`${company.slug}-que-hace`} className="border-t border-white/15">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <p className="text-sm text-white/45">Qué hace</p>
      <h2 id={`${company.slug}-que-hace`} className="mt-5 max-w-3xl text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[1] tracking-[-.065em]">{company.promesa}</h2>
      <div className="mt-9 max-w-2xl space-y-6 leading-8 text-white/70">{company.queHace.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}</div>

      {mostrarServicios ? <>
        <h3 className="mt-20 border-t border-white/20 pt-10 text-lg text-white/50">Servicios</h3>
        <ul className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {company.servicios.map((servicio) => <li key={servicio} className="text-lg leading-7 text-white/85">{servicio}</li>)}
        </ul>
      </> : null}
    </div>
  </section>;
}

/** Qué tipo de autos vende. Solo para las empresas que comercializan unidades. */
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

      {marcas.length > 0 ? <div className="mt-16 border-t border-white/20 pt-10">
        <h3 className="text-lg text-white/50">Marcas que ha comercializado</h3>
        <p className="mt-7 max-w-5xl text-[clamp(1.1rem,1.9vw,1.7rem)] leading-[1.7] tracking-[-.02em] text-white/70">{marcas.join(", ")}.</p>
      </div> : null}
    </div>
  </section>;
}

/** Filosofía: el porqué y el cómo declarados en el brandbook de la marca. */
export function CompanyPhilosophySection({ company }: { company: Company }) {
  return <section aria-labelledby={`${company.slug}-filosofia`} className="border-t border-white/15">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <h2 id={`${company.slug}-filosofia`} className="text-sm font-normal text-white/45">Filosofía</h2>
      <blockquote className="mt-10 max-w-4xl border-l-2 pl-8 text-[clamp(1.6rem,3vw,3rem)] font-medium leading-[1.18] tracking-[-.05em] sm:pl-12" style={{ borderColor: trazo(company) }}>{company.filosofia.enunciado}</blockquote>
      <div className="mt-12 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-[.4fr_1fr]">
        <p className="text-white/50">{company.filosofia.arquetipo}</p>
        <p className="max-w-xl leading-8 text-white/65">{company.filosofia.como}</p>
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

/** Dónde está. Mientras la dirección propia no esté confirmada, se muestra la sede del grupo. */
export function CompanyLocationSection({ company }: { company: Company }) {
  const canales = [contacto.oficina, contacto.ventasWhatsapp, contacto.ventas];

  return <section aria-labelledby={`${company.slug}-ubicacion`} className="border-t border-white/15">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <p className="text-sm text-white/45">Dónde estamos</p>
      <h2 id={`${company.slug}-ubicacion`} className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.4vw,4.4rem)] font-semibold leading-[.98] tracking-[-.075em]">{matriz.ciudad}, {matriz.estado}</h2>
      <p className="mt-8 max-w-md text-lg leading-8 text-white/70">{direccionCompleta}</p>
      {company.ubicacionPropiaPorConfirmar ? <p className="mt-4 max-w-md leading-7 text-white/45">La atención de {company.nombreCorto} se coordina desde la sede de Grupo EGD.</p> : null}

      <div className="mt-14 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-2">
        <div>
          <h3 className="text-white/50">Horario</h3>
          <ul className="mt-5 space-y-2">{horarios.map((horario) => <li key={horario.dias} className="text-white/85">{horario.dias}: {horario.horas}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-white/50">Contacto</h3>
          <ul className="mt-5 space-y-2">{canales.map((canal) => <li key={canal.valor}><a href={canal.href} className="text-white/85 underline-offset-4 hover:underline">{canal.etiqueta}: {canal.valor}</a></li>)}</ul>
        </div>
      </div>

      <a href={matriz.mapa} target="_blank" rel="noreferrer" className="mt-12 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-egd-base">Ver en el mapa</a>
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
        {pasos.map((paso, index) => <li key={paso.titulo} className="border-t-2 pt-7" style={{ borderColor: trazo(company) }}>
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-[-.06em] text-white/35">0{index + 1}</span>
          <p className="mt-5 text-xl font-medium tracking-[-.04em]">{paso.titulo}</p>
          <p className="mt-4 leading-7 text-white/60">{paso.detalle}</p>
        </li>)}
      </ol>
    </div>
  </section>;
}
