import { Link } from "react-router";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../shared/lib/gsap.client";

const companies = [
  { name: "Enlace GD", description: "Autos premium y unidades seleccionadas.", href: "/empresas/enlace-gd", image: "/enlace-egd/imgs/2.0.png", logo: "/enlace-egd/logotipo-enlace-gd.svg", grid: "md:col-span-7" },
  { name: "EGD Aftersale", description: "Protección, mantenimiento y detallado especializado.", href: "/empresas/egd-aftersale", image: "/egd-aftersale/imgs/2.0.png", logo: "/egd-aftersale/logotipo-egd-aftersale.svg", grid: "md:col-span-5 md:mt-28" },
  { name: "EB Cars", description: "Una forma cercana de encontrar el auto indicado.", href: "/empresas/eb-cars", image: "/eb-cars/imgs/2.0.png", logo: "/eb-cars/logotipo-eb-cars.svg", grid: "md:col-span-5 md:-mt-12" },
  { name: "CENTUR Blindajes", description: "Seguridad vehicular desarrollada con precisión.", href: "/empresas/centur-blindajes", image: "/egd-aftersale/imgs/7.0.png", logo: "/centur/logotipo-centur.svg", grid: "md:col-span-7 md:mt-20" },
];

export function CompanyStackSection() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.utils.toArray<HTMLElement>("[data-company-piece]").forEach((piece) => {
      const image = piece.querySelector("img[data-company-image]");
      gsap.from(piece, { y: 56, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: piece, start: "top 82%" } });
      if (image) gsap.fromTo(image, { scale: 0.88, opacity: 0.45 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: piece, start: "top bottom", end: "bottom top", scrub: true } });
    });
  }, { scope: root });

  return <section ref={root} aria-labelledby="empresas-title" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36"><div className="max-w-3xl"><h2 id="empresas-title" className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.7vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.075em]">Las empresas del grupo.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Cada marca responde a una necesidad distinta y comparte una manera precisa de atenderla.</p></div><div className="mt-16 grid grid-flow-dense grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">{companies.map((company) => <article key={company.name} data-company-piece className={company.grid}><Link to={company.href} className="group block"><div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#1a1b1e] ring-1 ring-white/10 transition-shadow duration-500 group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"><img data-company-image src={company.image} alt="" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" /></div><div className="mt-6 flex items-start justify-between gap-6"><div><img src={company.logo} alt={company.name} className="max-h-8 max-w-[170px] object-contain object-left brightness-0 invert" /><p className="mt-5 max-w-sm text-base leading-7 text-white/60">{company.description}</p></div><span aria-hidden="true" className="pt-1 text-lg text-white/60 transition-transform duration-300 group-hover:translate-x-1">+</span></div></Link></article>)}</div></section>;
}
