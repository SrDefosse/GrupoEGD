import { Link } from "react-router";

import { companyBySlug } from "../companies";
import { CompanyBusinessSection, CompanyOverviewSection, CompanyPhilosophySection, CompanySwitchSection } from "../CompanySections";

const company = companyBySlug("egd-aftersale")!;

const lineas = [
  { titulo: "Protección XPEL", detalle: "PPF, recubrimiento cerámico, polarizado premium y protección para parabrisas: soluciones de última generación para conservar la apariencia y el valor del vehículo.", items: ["PPF, película protectora de pintura", "Recubrimiento cerámico", "Polarizado premium", "WPF, protección para parabrisas"] },
  { titulo: "Lavado y detallado", detalle: "Limpieza, restauración y cuidado estético para mantener la unidad impecable y recuperar profundidad y uniformidad en los acabados.", items: ["Lavado premium", "Detallado interior y exterior", "Corrección de pintura", "Descontaminado y protección"] },
  { titulo: "Mecánica y diagnóstico", detalle: "Atención mecánica para sostener el desempeño, la seguridad y la durabilidad de cada unidad, con diagnóstico previo a cualquier intervención.", items: ["Mecánica general", "Diagnóstico especializado", "Servicio menor y mayor", "Reemplazo de calipers"] },
];

export function EgdAftersalePage() {
  return <main className="bg-[#0c2447]">
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden"><img src={company.image} alt="Cuidado especializado sobre la carrocería de un automóvil" className="absolute inset-0 -z-20 size-full object-cover" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,29,62,.96),rgba(7,29,62,.68)_47%,rgba(7,29,62,.12))]" /><div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-[1400px] items-end px-5 pb-16 pt-24 sm:px-8 lg:items-center lg:pb-8"><div className="max-w-3xl"><img src={company.logo} alt={company.nombre} className="max-h-14 max-w-72 brightness-0 invert" /><h1 className="mt-10 text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[.96] tracking-[-.07em]">Cuidado técnico para que cada detalle se mantenga en su lugar.</h1><p className="mt-7 max-w-xl leading-8 text-white/75">El cuidado posterior de un vehículo se define en los procesos, materiales y manos que intervienen. Aquí, cada servicio busca extender su mejor versión.</p><Link to="/contacto" className="mt-9 inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-[#0c2447]">Agenda una cita</Link></div></div></section>

    <CompanyOverviewSection company={company} mostrarServicios={false} imagen="/images/services/proteccion-detallado.png" />

    <section aria-labelledby="aftersale-lineas" className="border-t border-white/15 bg-white/[0.03]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <h2 id="aftersale-lineas" className="max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.02] tracking-[-.06em]">Tres líneas de trabajo en un mismo centro.</h2>
        <div className="mt-16 grid gap-3 lg:grid-cols-12">
          <article className="relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/15 p-8 sm:p-10 lg:col-span-7">
            <img src="/egd-aftersale/imgs/2.0.png" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(37,45,133,.95)_18%,rgba(37,45,133,.6)_58%,transparent)]" />
            <h3 className="text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold leading-[1.05] tracking-[-.055em]">{lineas[0].titulo}</h3>
            <p className="mt-5 max-w-lg leading-7 text-white/80">{lineas[0].detalle}</p>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/65">{lineas[0].items.join(" / ")}</p>
          </article>

          <div className="grid gap-3 lg:col-span-5">
            {lineas.slice(1).map((linea) => <article key={linea.titulo} className="flex flex-col rounded-2xl border border-white/15 p-8 sm:p-9">
              <h3 className="text-2xl font-medium tracking-[-.05em]">{linea.titulo}</h3>
              <p className="mt-5 leading-7 text-white/60">{linea.detalle}</p>
              <p className="mt-6 text-sm leading-7 text-white/70">{linea.items.join(" / ")}</p>
            </article>)}
          </div>
        </div>
      </div>
    </section>

    <CompanyPhilosophySection company={company} />
    <CompanyBusinessSection company={company} />

    <section aria-label="Trabajo de EGD Aftersale" className="border-t border-white/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-5 py-20 sm:px-8 lg:grid-cols-3">
        {company.galeria.map((src) => <img key={src} src={src} alt="" aria-hidden="true" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />)}
      </div>
    </section>

    <CompanySwitchSection slug={company.slug} />
  </main>;
}
