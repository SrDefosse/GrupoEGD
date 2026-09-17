import { Link } from "react-router";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../shared/lib/gsap.client";

export function HomeHeroSection() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-hero-reveal]", { y: 34, opacity: 0, duration: 1.05, stagger: 0.12, ease: "power3.out" });
  }, { scope: root });

  return <section ref={root} className="relative isolate min-h-[calc(100dvh-68px)] overflow-hidden"><img src="/images/grupo-egd/hero-showroom.png" alt="Showroom automotriz de Grupo EGD al anochecer" className="absolute inset-0 -z-20 size-full object-cover" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,11,18,.91)_0%,rgba(7,11,18,.64)_42%,rgba(7,11,18,.16)_78%),linear-gradient(0deg,rgba(7,11,18,.46),transparent_55%)]" /><div className="mx-auto flex min-h-[calc(100dvh-68px)] max-w-[1400px] items-end px-5 pb-14 pt-24 sm:px-8 sm:pb-20 lg:items-center lg:pb-8"><div className="max-w-4xl"><p data-hero-reveal className="text-sm text-white/70">Grupo EGD</p><h1 data-hero-reveal className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.7rem,5.6vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.075em]">Una visión para vivir el mundo automotriz.</h1><p data-hero-reveal className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">Compra, protección, cuidado y movilidad especializada con atención a cada detalle.</p><div data-hero-reveal className="mt-9 flex flex-wrap gap-3"><Link className="rounded-full bg-[#f2f0eb] px-5 py-3 text-sm font-semibold text-[#101113] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0" to="/empresas">Conoce el grupo</Link><Link className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101113]" to="/contacto">Contacto</Link></div></div></div></section>;
}
