import { Link } from "react-router";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../shared/lib/gsap.client";

import { companies } from "../empresas/companies";

/**
 * Retícula de empresas.
 *
 * Sustituye a la composición escalonada anterior. El escalonado se leía como
 * cuatro piezas sueltas y dejaba muy poco espacio para explicar a qué se dedica
 * cada empresa, que es justo lo que un visitante, y sobre todo un cliente
 * empresarial, necesita resolver en esta sección. Ahora las cuatro tarjetas
 * comparten altura y estructura, y cada una declara categoría, resumen y tres
 * servicios concretos.
 *
 * El color de marca llega por `company.accent` y se aplica en línea: ninguna
 * paleta de empresa queda escrita dentro de este componente.
 */
export function CompanyStackSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-company-piece]", { y: 44, opacity: 0, duration: 0.8, stagger: 0.09, ease: "power3.out", scrollTrigger: { trigger: "[data-company-grid]", start: "top 80%" } });
  }, { scope: root });

  return <section ref={root} aria-labelledby="empresas-title" className="relative isolate overflow-hidden bg-egd-deep py-28 sm:py-36">
    <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
      <div>
        <p className="text-sm text-white/45">Empresas</p>
        <h2 id="empresas-title" className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.8rem,5.2vw,5.2rem)] font-semibold leading-[.9] tracking-[-.08em]">Las empresas<br />del grupo<span className="text-egd-accent">.</span></h2>
        <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">Cuatro especialidades conectadas. Cada una resuelve una parte concreta del ciclo de un vehículo y puede trabajar sola o junto con las demás.</p>
      </div>

      <ul data-company-grid className="mt-16 grid gap-3 md:grid-cols-2">
        {companies.map((company) => <li key={company.slug} data-company-piece>
          <Link to={company.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-egd-base transition-colors duration-500 hover:border-white/35">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={company.image} alt="" aria-hidden="true" loading="lazy" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(21,27,39,.92),rgba(21,27,39,.15)_58%,transparent)]" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `linear-gradient(to top, ${company.accent}8c, transparent 62%)` }} />
              <span className="absolute left-7 top-6 text-sm text-white/60">{company.numero}</span>
              <img src={company.logo} alt={company.nombre} className="absolute bottom-7 left-7 max-h-7 max-w-[180px] object-contain object-left brightness-0 invert" />
            </div>

            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <span aria-hidden="true" className="block h-0.5 w-10 transition-[width] duration-500 ease-out group-hover:w-24" style={{ backgroundColor: company.accent === "#6f7479" ? "rgba(255,255,255,.55)" : company.accent }} />
              <p className="mt-6 text-sm text-white/45">{company.categoria}</p>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/70">{company.resumen}</p>
              <ul className="mt-7 flex flex-wrap gap-2">{company.servicios.slice(0, 3).map((servicio) => <li key={servicio.titulo} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/55">{servicio.titulo}</li>)}</ul>
              <span className="mt-auto flex items-center gap-3 pt-9 text-sm font-medium text-egd-accent">
                Conocer {company.nombreCorto}
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </li>)}
      </ul>

    </div>
  </section>;
}
