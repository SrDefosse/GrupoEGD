import { Link } from "react-router";

import { grupo } from "../../../shared/content/grupo";
import { companyBySlug } from "../companies";
import { CompanyBusinessSection, CompanyOverviewSection, CompanyPhilosophySection, CompanySwitchSection } from "../CompanySections";

const company = companyBySlug("centur-blindajes")!;

/**
 * No se publican certificaciones ni un catálogo de niveles a nombre de CENTUR:
 * no hay material aprobado (ver `docs/GOTCHAS.md`, G01 y G02). Lo que sigue
 * explica cómo se decide un nivel de protección, sin atribuir normas concretas.
 */
const criterios = [
  { titulo: "Perfil de riesgo", detalle: "Quién usa la unidad, por dónde circula y con qué frecuencia. El nivel adecuado es el que responde a ese uso, no el más alto disponible." },
  { titulo: "Tipo de unidad", detalle: "Cada carrocería admite una configuración distinta. Se revisa peso, suspensión y comportamiento antes de proponer una solución." },
  { titulo: "Diseño original", detalle: "La instalación se plantea para conservar el interior, los acabados y la percepción de la unidad desde afuera." },
  { titulo: "Vida posterior", detalle: "Un auto protegido necesita mantenimiento específico. El grupo se hace cargo de esa continuidad a través de EGD Aftersale." },
];

export function CenturBlindajesPage() {
  return <main className="bg-egd-base">
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden"><img src={company.image} alt="Unidad protegida en una llegada privada" className="absolute inset-0 -z-20 size-full object-cover" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,27,39,.94),rgba(21,27,39,.56)_45%,rgba(21,27,39,.08))]" /><div className="absolute -bottom-40 -left-32 -z-10 size-[34rem] border border-white/15" /><div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-[1400px] items-end px-5 pb-16 pt-24 sm:px-8 lg:items-center lg:pb-8"><div className="max-w-3xl"><img src={company.logo} alt={company.nombre} className="max-h-16 max-w-64 brightness-0 invert" /><h1 className="mt-10 text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[.96] tracking-[-.07em]">{company.promesa}</h1><p className="mt-7 max-w-xl leading-8 text-white/75">La empresa de blindaje de Grupo EGD, un grupo con {grupo.aniosExperiencia} años de experiencia en el sector automotriz premium. Protección configurada por nivel, con cuidado del diseño original de cada unidad.</p><Link to="/contacto" className="mt-9 inline-flex rounded-full border border-white/35 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-egd-base">Solicitar asesoría</Link></div></div></section>

    <CompanyOverviewSection company={company} imagen="/images/services/blindaje.png" />

    <section aria-labelledby="centur-criterios" className="border-t border-white/15 bg-white/[0.03]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <p className="text-sm text-white/45">Cómo se define una protección</p>
        <h2 id="centur-criterios" className="mt-5 max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.02] tracking-[-.06em]">El nivel correcto se decide con información.</h2>
        <div className="mt-14 grid gap-x-12 md:grid-cols-2">
          {criterios.map((criterio, index) => <article key={criterio.titulo} className="border-t border-white/25 py-8">
            <p className="text-sm text-white/40">0{index + 1}</p>
            <h3 className="mt-5 text-xl font-medium tracking-[-.04em]">{criterio.titulo}</h3>
            <p className="mt-4 max-w-md leading-7 text-white/60">{criterio.detalle}</p>
          </article>)}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/45">Los niveles de protección disponibles y sus especificaciones se confirman en una asesoría previa, de acuerdo con la unidad y el uso que se le dará.</p>
      </div>
    </section>

    <CompanyPhilosophySection company={company} />
    <CompanyBusinessSection company={company} />
    <CompanySwitchSection slug={company.slug} />
  </main>;
}
