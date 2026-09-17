import { Link } from "react-router";

import { BusinessSolutionsSection } from "../empresas/BusinessSolutionsSection";
import { companies } from "../empresas/companies";

/**
 * Catálogo de servicios del grupo. Cada área declara qué empresa la ejecuta,
 * que es la pregunta que el cliente quiere resolver aquí: si necesitas blindar,
 * es CENTUR; si necesitas postventa, es EGD Aftersale.
 */
const areas = [
  { slug: "enlace-gd", titulo: "Compra y venta premium", detalle: "Selección, compra directa y consignación de unidades de alta gama, con valuación física, mecánica y legal." },
  { slug: "eb-cars", titulo: "Compra y venta accesible", detalle: "Unidades prácticas y acompañamiento claro para una primera compra o un cambio de auto." },
  { slug: "egd-aftersale", titulo: "Protección y detallado", detalle: "PPF, recubrimiento cerámico, polarizado premium, corrección de pintura y detallado interior y exterior." },
  { slug: "egd-aftersale", titulo: "Mantenimiento y mecánica", detalle: "Diagnóstico, servicio menor y mayor, y reemplazo de componentes para sostener el desempeño de la unidad." },
  { slug: "centur-blindajes", titulo: "Blindaje automotriz", detalle: "Protección por niveles para unidades nuevas o en uso, con asesoría previa y mantenimiento posterior." },
];

export function ServiciosPage() {
  return <div>
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.075em]">Servicios que acompañan a tu auto en cada etapa.</h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Cada servicio lo ejecuta la empresa del grupo que se especializa en él. Aquí puedes ver cuál atiende lo que necesitas.</p>
    </section>

    <section aria-label="Áreas de servicio" className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 sm:pb-28">
      <ul className="border-t border-white/20">
        {areas.map((area) => {
          const company = companies.find((item) => item.slug === area.slug)!;
          return <li key={area.titulo}>
            <Link to={company.href} className="group grid items-start gap-5 border-b border-white/20 py-8 transition-colors hover:bg-white/[0.04] md:grid-cols-[.85fr_1.15fr_auto] md:gap-10 md:py-9">
              <div>
                <h2 className="max-w-sm text-[clamp(1.4rem,2vw,2rem)] font-medium leading-tight tracking-[-.05em]">{area.titulo}</h2>
                <p className="mt-4 text-sm text-white/45">Lo ejecuta {company.nombreCorto}</p>
              </div>
              <p className="max-w-xl leading-8 text-white/60">{area.detalle}</p>
              <span aria-hidden="true" className="hidden text-2xl text-egd-accent transition-transform duration-300 group-hover:translate-x-1 md:block">→</span>
            </Link>
          </li>;
        })}
      </ul>
    </section>

    <BusinessSolutionsSection />
  </div>;
}
