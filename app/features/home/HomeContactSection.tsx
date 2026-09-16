import { Link } from "react-router";

export function HomeContactSection() {
  return <section className="border-y border-white/15 bg-[#d8d5ce] text-[#101113]"><div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32"><h2 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.075em]">Comencemos la conversación.</h2><Link className="mt-8 inline-block rounded-full bg-[#101113] px-5 py-3 text-sm font-semibold text-[#f2f0eb] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0" to="/contacto">Contactar a Grupo EGD</Link></div></section>
}
