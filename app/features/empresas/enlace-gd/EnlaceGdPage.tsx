import { Link } from "react-router";
import { PiCarProfile, PiHandshake, PiShieldCheck } from "react-icons/pi";

import { companyBySlug } from "../companies";
import { CompanyBusinessSection, CompanyCatalogSection, CompanyOverviewSection, CompanyPhilosophySection, CompanyProcessSection, CompanySwitchSection } from "../CompanySections";

const company = companyBySlug("enlace-gd")!;

/** Los tres pilares de la agencia, sobre el azul marino de su brandbook. */
const pilares = [
  { Icono: PiShieldCheck, texto: "Compra con respaldo." },
  { Icono: PiCarProfile, texto: "Vende con confianza." },
  { Icono: PiHandshake, texto: "Construye una relación." },
];

const proceso = [
  { titulo: "Diagnóstico", detalle: "Revisión física, mecánica y legal de la unidad, con resultado en un plazo no mayor a tres horas." },
  { titulo: "Valor comercial", detalle: "Se entrega el valor real de la unidad en el mercado y se acuerda un precio de trabajo." },
  { titulo: "Convenio", detalle: "Si hay acuerdo, se firma un convenio y la unidad se promueve en las plataformas de la agencia." },
  { titulo: "Cierre y entrega", detalle: "Acompañamiento en trámites, documentación y entrega de la unidad." },
];

export function EnlaceGdPage() {
  return <main className="bg-[#111538]">
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden">
      <img src="/images/enlace-gd/hero-seleccion.png" alt="Automóvil seleccionado en showroom" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,11,40,.98),rgba(5,11,40,.78)_46%,rgba(5,11,40,.22))]" />
      <div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-[1400px] items-end px-5 pb-16 pt-24 sm:px-8 lg:items-center lg:pb-8"><div className="max-w-2xl"><img src={company.logo} alt={company.nombre} className="max-h-16 max-w-64 brightness-0 invert" /><h1 className="mt-10 text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[.96] tracking-[-.07em]">{company.promesa}</h1><p className="mt-7 max-w-xl leading-8 text-white/80">Enlace GD acompaña la compra y venta de vehículos seleccionados con una conversación directa: entender el perfil que buscas, revisar alternativas y avanzar con información clara en cada etapa.</p><Link to="/contacto" className="mt-9 inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-[#111538]">Hablar con Enlace GD</Link></div></div>
    </section>

    <section aria-label="Pilares de Enlace GD" className="border-y border-white/15 bg-[#1a2368]">
      <ul className="mx-auto grid max-w-[1400px] px-5 sm:px-8 md:grid-cols-3">
        {pilares.map((pilar, index) => <li key={pilar.texto} className={`flex items-center gap-6 py-10 sm:gap-8 md:py-16 ${index > 0 ? "border-t border-white/15 md:border-l md:border-t-0 md:pl-10 lg:pl-14" : ""} ${index < pilares.length - 1 ? "md:pr-10 lg:pr-14" : ""}`}>
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white/[0.07] sm:size-20">
            <pilar.Icono aria-hidden className="size-7 text-white/85 sm:size-8" />
          </span>
          <div>
            <span aria-hidden="true" className="block h-0.5 w-7 bg-egd-accent" />
            <p className="mt-4 text-lg leading-tight text-white/90 sm:text-xl">{pilar.texto}</p>
          </div>
        </li>)}
      </ul>
    </section>

    <CompanyOverviewSection company={company} leyenda="Más que autos, historias que continúan" />
    <CompanyCatalogSection company={company} />

    <CompanyProcessSection company={company} titulo="Vender tu auto con Enlace GD, paso a paso." pasos={proceso} />

    <CompanyPhilosophySection company={company} />
    <CompanyBusinessSection company={company} />

    <section aria-label="Unidades de Enlace GD" className="border-t border-white/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-5 py-20 sm:px-8 lg:grid-cols-3">
        {company.galeria.map((src) => <img key={src} src={src} alt="" aria-hidden="true" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />)}
      </div>
    </section>

    <CompanySwitchSection slug={company.slug} />
  </main>;
}
