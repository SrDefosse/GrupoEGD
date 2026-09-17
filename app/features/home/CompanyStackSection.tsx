import { Link } from "react-router";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../shared/lib/gsap.client";

const companies = [
  { number: "01", name: "Enlace GD", eyebrow: "Compra y venta", description: "Unidades seleccionadas, valuación y acompañamiento para comprar o vender con información clara durante todo el proceso.", href: "/empresas/enlace-gd", image: "/enlace-egd/imgs/1.2.png", logo: "/enlace-egd/logotipo-enlace-gd.svg", layout: "md:col-span-7" },
  { number: "02", name: "EGD Aftersale", eyebrow: "Cuidado automotriz", description: "PPF, recubrimientos, polarizado, detallado, corrección de pintura y atención mecánica para preservar apariencia, protección y desempeño.", href: "/empresas/egd-aftersale", image: "/images/egd-aftersale/detalle-en-proceso.png", logo: "/egd-aftersale/logotipo-egd-aftersale.svg", layout: "md:col-span-5 md:mt-24" },
  { number: "03", name: "EB Cars", eyebrow: "Movilidad seleccionada", description: "Una atención cercana para explorar opciones de movilidad y encontrar una unidad que haga sentido para cada siguiente paso.", href: "/empresas/eb-cars", image: "/eb-cars/imgs/5.0.png", logo: "/eb-cars/logotipo-eb-cars.svg", layout: "md:col-span-5 md:-mt-10" },
  { number: "04", name: "CENTUR Blindajes", eyebrow: "Seguridad vehicular", description: "Blindaje automotriz con materiales certificados, distintos niveles de protección y acompañamiento de mantenimiento especializado.", href: "/empresas/centur-blindajes", image: "/images/centur/hero-seguridad.png", logo: "/centur/logotipo-centur.svg", layout: "md:col-span-7 md:mt-20" },
];

export function CompanyStackSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.utils.toArray<HTMLElement>("[data-company-piece]").forEach((piece) => {
      gsap.from(piece, { y: 48, opacity: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: piece, start: "top 82%" } });
    });
  }, { scope: root });

  return <section ref={root} aria-labelledby="empresas-title" className="relative isolate overflow-hidden bg-[#0c0d0f] py-28 sm:py-36">
    <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
      <div className="max-w-3xl"><p className="text-sm text-white/45">Empresas</p><h2 id="empresas-title" className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.8rem,5.2vw,5.2rem)] font-semibold leading-[.9] tracking-[-.08em]">Las empresas<br />del grupo<span className="text-[#3c8cff]">.</span></h2><p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Cuatro especialidades conectadas para acompañar la compra, el cuidado, la protección y la seguridad de un vehículo.</p></div>
      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12 md:gap-y-24">
        {companies.map((company) => <article key={company.name} data-company-piece className={company.layout}>
          <Link to={company.href} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/15 bg-[#17191c]">
              <img src={company.image} alt="" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,.12))]" />
            </div>
            <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5"><p className="text-lg text-white/75">{company.number}</p><div><div className="flex items-start justify-between gap-5 border-b border-white/15 pb-4"><img src={company.logo} alt={company.name} className="max-h-7 max-w-[180px] object-contain object-left brightness-0 invert" /><span aria-hidden="true" className="text-xl text-[#3c8cff] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div><p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-white/45">{company.eyebrow}</p><p className="mt-4 max-w-md leading-7 text-white/60">{company.description}</p><span className="mt-5 inline-block text-sm font-medium text-[#3c8cff]">Conocer empresa</span></div></div>
          </Link>
        </article>)}
      </div>
      <p className="mt-20 max-w-48 border-t border-white/30 pt-5 text-xs uppercase leading-6 tracking-[0.24em] text-white/45">Más que empresas. Movemos lo que importa.</p>
    </div>
  </section>;
}
