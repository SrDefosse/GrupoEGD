import { Link } from "react-router";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "../../shared/lib/gsap.client";
import { companies } from "./companies";

/**
 * Mapa de soluciones para clientes empresariales.
 *
 * Responde a la pregunta que planteó el cliente: si llega un grupo de agencias
 * de autos nuevos, ¿de qué manera puede ayudarle Grupo EGD y con qué empresa se
 * resuelve cada necesidad?
 *
 * Dos formas, porque aparece en tres páginas y no puede repetir la retícula de
 * la página que lo hospeda:
 * - `compact` (Inicio): tira de cuatro columnas separadas por filetes. Inicio ya
 *   presenta a las empresas en tarjetas justo arriba; aquí solo se nombra la
 *   ruta.
 * - `full` (Empresas y Servicios): retícula asimétrica de cuatro celdas, dos con
 *   fotografía y dos con el color de la marca. Difiere del directorio de filas
 *   de Servicios y del índice apilado de Empresas.
 */

export function BusinessSolutionsSection({ variant = "full" }: { variant?: "full" | "compact" }) {
  const root = useRef<HTMLElement>(null);

  // Revela la ruta en el orden en que se lee: la secuencia es el mensaje.
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-solution]", { y: 32, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: "[data-solutions]", start: "top 82%" } });
  }, { scope: root });

  if (variant === "compact") {
    return <section ref={root} aria-labelledby="soluciones-empresas" className="border-y border-white/15">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <h2 id="soluciones-empresas" className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,3.8vw,3.8rem)] font-semibold leading-[1] tracking-[-.07em]">Si tu empresa necesita resolver algo con sus autos, hay una puerta de entrada para cada cosa.</h2>

        <div data-solutions className="mt-16 grid gap-x-10 gap-y-10 border-t border-white/25 pt-10 md:grid-cols-2 xl:grid-cols-4">
          {companies.map((company) => <div key={company.slug} data-solution>
            <p className="text-lg leading-7 text-white/85">{company.paraEmpresas.necesidad}.</p>
            <Link to={company.href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-egd-accent underline-offset-4 hover:underline">
              Lo resuelve {company.nombreCorto}
              <span aria-hidden="true">→</span>
            </Link>
          </div>)}
        </div>

        <Link to="/servicios" className="mt-14 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-egd-base">Ver cómo trabajamos con empresas</Link>
      </div>
    </section>;
  }

  return <section ref={root} aria-labelledby="soluciones-empresas" className="border-y border-white/15 bg-egd-deep">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <h2 id="soluciones-empresas" className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-[.98] tracking-[-.07em]">¿Tu empresa necesita resolver algo con sus autos?</h2>
      <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Agencias de autos nuevos, flotillas y corporativos pueden trabajar con una empresa del grupo o con varias a la vez. Un mismo interlocutor coordina todo.</p>

      <div data-solutions className="mt-16 grid gap-3 lg:grid-cols-12">
        {companies.map((company, index) => {
          const conFoto = index === 0 || index === 3;
          const ancho = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";

          return <article key={company.slug} data-solution className={`${ancho} relative isolate flex min-h-[19rem] flex-col justify-end overflow-hidden rounded-2xl p-8 sm:p-10`}>
            {conFoto ? <>
              <img src={company.image} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
              <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(120deg, ${company.accent}f2 12%, ${company.accent}b3 52%, transparent)` }} />
            </> : <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(140deg, ${company.accent}59, rgba(255,255,255,.04))` }} />}
            <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-2xl border border-white/15" />

            <p className="max-w-md text-[clamp(1.25rem,1.8vw,1.6rem)] font-medium leading-[1.3] tracking-[-.035em] text-white">{company.paraEmpresas.necesidad}.</p>
            <p className="mt-5 max-w-lg leading-7 text-white/70">{company.paraEmpresas.respuesta}</p>
            <Link to={company.href} className="mt-8 inline-flex w-fit items-center gap-3 border-b border-white/40 pb-1 text-sm font-medium text-white transition-colors hover:border-white">
              Lo resuelve {company.nombreCorto}
              <span aria-hidden="true">→</span>
            </Link>
          </article>;
        })}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-6">
        <Link to="/contacto" className="rounded-full bg-egd-ink px-5 py-3 text-sm font-semibold text-egd-base transition-transform duration-300 hover:-translate-y-1 active:translate-y-0">Plantear un proyecto</Link>
        <p className="max-w-sm text-sm leading-7 text-white/50">Si no sabes con cuál empezar, escríbenos: el grupo determina la ruta y coordina a las empresas que participen.</p>
      </div>
    </div>
  </section>;
}
