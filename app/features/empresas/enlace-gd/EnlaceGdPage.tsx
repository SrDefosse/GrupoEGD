import { Link } from "react-router";

import { companyBySlug } from "../companies";
import { CompanyBusinessSection, CompanyCatalogSection, CompanyLocationSection, CompanyOverviewSection, CompanyPhilosophySection, CompanyProcessSection, CompanySwitchSection } from "../CompanySections";

const company = companyBySlug("enlace-gd")!;

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

    <section className="border-y border-white/15 bg-[#1a2368]"><div className="mx-auto grid max-w-[1400px] gap-3 px-5 py-16 sm:px-8 md:grid-cols-3"><p className="p-6 text-xl">Compra con respaldo.</p><p className="border-x border-white/15 p-6 text-xl">Vende con confianza.</p><p className="p-6 text-xl">Construye una relación.</p></div></section>

    <CompanyOverviewSection company={company} />
    <CompanyCatalogSection company={company} />

    <CompanyProcessSection company={company} titulo="Vender tu auto con Enlace GD, paso a paso." pasos={proceso} />

    <CompanyPhilosophySection company={company} />
    <CompanyBusinessSection company={company} />

    <section aria-label="Unidades de Enlace GD" className="border-t border-white/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-5 py-20 sm:px-8 lg:grid-cols-3">
        {company.galeria.map((src) => <img key={src} src={src} alt="" aria-hidden="true" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />)}
      </div>
    </section>

    <CompanyLocationSection company={company} />
    <CompanySwitchSection slug={company.slug} />
  </main>;
}
