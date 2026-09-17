import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../shared/lib/gsap.client";

const values = ["Conversaciones reales", "Asesoría con criterio", "Una experiencia confiable"];

export function EbCarsPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-eb-intro]", { y: 28, opacity: 0, stagger: 0.1, duration: 0.75, ease: "power3.out" });
    gsap.from("[data-eb-piece]", { y: 42, opacity: 0, stagger: 0.12, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: "[data-eb-mosaic]", start: "top 78%" } });
  }, { scope: root });

  return <main ref={root} className="bg-[#072630] text-[#f2f0eb]">
    <section className="mx-auto max-w-[1400px] px-5 pb-5 pt-24 sm:px-8 sm:pb-8 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.72fr] lg:items-end">
        <div data-eb-intro><img src="/eb-cars/logotipo-eb-cars.svg" alt="EB Cars" className="max-h-10 max-w-52 brightness-0 invert" /><h1 className="mt-8 max-w-4xl text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[.95] tracking-[-.075em]">El auto correcto se encuentra con una conversación clara.</h1></div>
        <div data-eb-intro className="border-l border-[#d5a952]/70 pl-7 lg:mb-4"><p className="max-w-md text-lg leading-8 text-white/80">En EB Cars buscamos que cada búsqueda se sienta cercana, simple y respaldada desde el primer contacto.</p><p className="mt-8 text-[0.62rem] uppercase tracking-[0.3em] text-white/55">Personas&nbsp; / &nbsp;Autos&nbsp; / &nbsp;Confianza</p></div>
      </div>
    </section>
    <section data-eb-mosaic className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 px-5 pb-24 sm:px-8 sm:pb-32 md:grid-cols-2">
      <figure data-eb-piece className="relative min-h-[26rem] overflow-hidden rounded-2xl border border-white/15 md:min-h-[32rem]"><img src="/eb-cars/imgs/5.0.png" alt="Interior de una unidad seleccionada por EB Cars" className="size-full object-cover" /><figcaption className="absolute bottom-7 left-7 text-[0.6rem] uppercase leading-5 tracking-[0.28em] text-white/70">Detalles<br />que conectan</figcaption></figure>
      <article data-eb-piece className="flex min-h-[26rem] flex-col rounded-2xl border border-white/20 bg-[#0a303a] p-8 sm:p-10 md:min-h-[32rem]"><div className="text-[0.62rem] uppercase tracking-[0.28em] text-white/60">Nuestra esencia</div><h2 className="mt-8 max-w-md text-[clamp(2.3rem,3.5vw,4rem)] font-semibold leading-[.96] tracking-[-.07em]">Cercanía sin perder criterio.</h2><p className="mt-6 max-w-md text-lg leading-8 text-white/75">Una selección pensada para acompañar a personas que valoran el auto, el camino y una elección con sentido.</p><ul className="mt-auto space-y-5 pt-8 text-white/80">{values.map((value, index) => <li key={value} className="flex items-center gap-5"><span className="grid size-8 place-items-center rounded-full border border-white/45 text-xs text-[#d5a952]">0{index + 1}</span><span>{value}</span></li>)}</ul></article>
      <article data-eb-piece className="flex min-h-[21rem] flex-col rounded-2xl bg-[#e6e2d9] p-8 text-[#0c1113] sm:p-10"><div className="text-[0.62rem] uppercase tracking-[0.28em] text-[#26343a]/70">Tu próximo paso</div><h2 className="mt-8 max-w-sm text-[clamp(2.2rem,3.4vw,3.8rem)] font-semibold leading-[.95] tracking-[-.07em]">Descubre una manera distinta de elegir.</h2><div className="mt-auto flex flex-wrap items-end justify-between gap-7 pt-8"><Link to="/contacto" className="rounded-full bg-[#082731] px-6 py-3 text-sm text-white transition-colors hover:bg-[#0c3d4a]">Contacta EB Cars&nbsp; →</Link><p className="max-w-40 border-l border-[#b58b3e]/80 pl-5 text-[0.6rem] uppercase leading-5 tracking-[0.22em] text-[#26343a]/70">Más que autos, mejores conversaciones.</p></div></article>
      <figure data-eb-piece className="relative min-h-[21rem] overflow-hidden rounded-2xl border border-white/15"><img src="/eb-cars/imgs/6.0.png" alt="Detalle de una unidad EB Cars" className="size-full object-cover object-center" /><figcaption className="absolute bottom-7 left-7 text-[0.6rem] uppercase leading-5 tracking-[0.28em] text-white/70">Personas<br />que suman</figcaption></figure>
    </section>
  </main>;
}
