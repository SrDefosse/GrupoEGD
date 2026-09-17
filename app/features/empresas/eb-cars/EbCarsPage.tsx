import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../shared/lib/gsap.client";

import { companyBySlug } from "../companies";
import { CompanyBusinessSection, CompanyCatalogSection, CompanyLocationSection, CompanyOverviewSection, CompanyPhilosophySection, CompanyProcessSection, CompanySwitchSection } from "../CompanySections";

const company = companyBySlug("eb-cars")!;

const values = ["Conversaciones reales", "Asesoría con criterio", "Una experiencia confiable"];

const proceso = [
  { titulo: "Cuéntanos qué buscas", detalle: "Uso, presupuesto y prioridades. Sin formularios largos ni tecnicismos innecesarios." },
  { titulo: "Comparamos opciones", detalle: "Se ponen las alternativas sobre la mesa con sus diferencias reales, ventajas y límites." },
  { titulo: "Revisas la unidad", detalle: "Condiciones, historial y documentación explicados en un lenguaje que se entiende a la primera." },
  { titulo: "Decides sin prisa", detalle: "El acompañamiento sigue después de la entrega, con el respaldo técnico del grupo." },
];

export function EbCarsPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-eb-intro]", { y: 28, opacity: 0, stagger: 0.1, duration: 0.75, ease: "power3.out" });
    gsap.from("[data-eb-piece]", { y: 42, opacity: 0, stagger: 0.12, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: "[data-eb-mosaic]", start: "top 78%" } });
  }, { scope: root });

  return <main ref={root} className="bg-[#072630] text-egd-ink">
    <section className="mx-auto max-w-[1400px] px-5 pb-5 pt-24 sm:px-8 sm:pb-8 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.72fr] lg:items-end">
        <div data-eb-intro><img src={company.logo} alt={company.nombre} className="max-h-10 max-w-52 brightness-0 invert" /><h1 className="mt-8 max-w-4xl text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[.95] tracking-[-.075em]">El auto correcto se encuentra con una conversación clara.</h1></div>
      </div>
    </section>
    <section data-eb-mosaic className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 px-5 pb-24 sm:px-8 sm:pb-32 md:grid-cols-2">
      <figure data-eb-piece className="relative min-h-[26rem] overflow-hidden rounded-2xl border border-white/15 md:min-h-[32rem]"><img src="/eb-cars/imgs/5.0.png" alt="Interior de una unidad seleccionada por EB Cars" className="size-full object-cover" /></figure>
      <article data-eb-piece className="flex min-h-[26rem] flex-col rounded-2xl border border-white/20 bg-[#0a303a] p-8 sm:p-10 md:min-h-[32rem]"><h2 className="max-w-md text-[clamp(2.3rem,3.5vw,4rem)] font-semibold leading-[.96] tracking-[-.07em]">Cercanía sin perder criterio.</h2><p className="mt-6 max-w-md text-lg leading-8 text-white/75">Una selección pensada para acompañar a personas que valoran el auto, el camino y una elección con sentido.</p><ul className="mt-auto space-y-5 pt-8 text-white/80">{values.map((value, index) => <li key={value} className="flex items-center gap-5"><span className="grid size-8 place-items-center rounded-full border border-white/45 text-xs text-[#d5a952]">0{index + 1}</span><span>{value}</span></li>)}</ul></article>
      <article data-eb-piece className="flex min-h-[21rem] flex-col rounded-2xl bg-egd-bone p-8 text-egd-deep sm:p-10"><h2 className="max-w-sm text-[clamp(2.2rem,3.4vw,3.8rem)] font-semibold leading-[.95] tracking-[-.07em]">Descubre una manera distinta de elegir.</h2><div className="mt-auto pt-8"><Link to="/contacto" className="rounded-full bg-[#082731] px-6 py-3 text-sm text-white transition-colors hover:bg-[#0c3d4a]">Contacta EB Cars →</Link></div></article>
      <figure data-eb-piece className="relative min-h-[21rem] overflow-hidden rounded-2xl border border-white/15"><img src="/eb-cars/imgs/6.0.png" alt="Detalle de una unidad EB Cars" className="size-full object-cover object-center" /></figure>
    </section>

    <CompanyOverviewSection company={company} />
    <CompanyCatalogSection company={company} />

    <CompanyProcessSection company={company} titulo="Cuatro pasos, sin letras chiquitas." pasos={proceso} />

    <CompanyPhilosophySection company={company} />
    <CompanyBusinessSection company={company} />
    <CompanyLocationSection company={company} />
    <CompanySwitchSection slug={company.slug} />
  </main>;
}
