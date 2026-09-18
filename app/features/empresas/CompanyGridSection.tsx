import { Link } from "react-router";

import { companies } from "./companies";

/**
 * Índice editorial de las cuatro empresas.
 *
 * Antes alternaba imagen izquierda / imagen derecha cuatro veces seguidas. Ese
 * zigzag es la retícula más previsible que existe y, con cuatro repeticiones,
 * hacía que las empresas se leyeran como el mismo bloque cambiado de lado.
 *
 * Ahora es un índice: entradas apiladas del mismo lado, separadas por filetes,
 * con el peso en la tipografía. La fotografía entra en pequeño, como referencia,
 * no como mitad de la composición. Inicio presenta en tarjetas; aquí se lee.
 */
export function CompanyGridSection() {
  return <section aria-label="Empresas de Grupo EGD" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
    <ul>
      {companies.map((company) => <li key={company.slug}>
        <Link to={company.href} className="group grid gap-x-10 gap-y-7 border-t py-12 transition-colors hover:bg-white/[0.03] sm:py-16 lg:grid-cols-[.42fr_1fr_.5fr]" style={{ borderColor: company.accent === "#6f7479" ? "rgba(255,255,255,.45)" : company.accent }}>
          <div>
            <div className="flex items-center gap-6">
              <span className="font-[family-name:var(--font-display)] text-3xl tracking-[-.06em] text-white/35">{company.numero}</span>
              <img src={company.logo} alt={company.nombre} className="max-h-7 max-w-[170px] object-contain object-left brightness-0 invert" />
            </div>
            <img src={company.image} alt="" aria-hidden="true" loading="lazy" className="mt-8 aspect-[4/3] w-full max-w-72 rounded-lg object-cover transition-opacity duration-500 group-hover:opacity-80" />
          </div>

          <div>
            <p className="text-sm text-white/45">{company.categoria}</p>
            <p className="mt-5 max-w-xl text-[clamp(1.5rem,2.6vw,2.6rem)] font-semibold leading-[1.08] tracking-[-.06em]">{company.promesa}</p>
            <p className="mt-6 max-w-xl leading-8 text-white/60">{company.queHace[0]}</p>
            <span className="mt-8 flex items-center gap-3 text-sm font-medium text-egd-accent">
              Conocer {company.nombreCorto}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>

          <ul className="space-y-3 lg:pt-11">{company.servicios.slice(0, 4).map((servicio) => <li key={servicio.titulo} className="leading-7 text-white/70">{servicio.titulo}</li>)}</ul>
        </Link>
      </li>)}
    </ul>
  </section>;
}
