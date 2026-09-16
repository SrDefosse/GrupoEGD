const principles = [
  { title: "Criterio", detail: "Recomendaciones basadas en las necesidades reales de cada unidad y de cada persona." },
  { title: "Seguimiento", detail: "Procesos claros para acompañar el auto antes, durante y después de cada servicio." },
  { title: "Especialización", detail: "Empresas enfocadas en resolver una parte concreta de la experiencia automotriz." },
];

export function StandardsSection() {
  return <section className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36"><div className="max-w-2xl"><h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.07em]">La forma en que trabajamos importa.</h2></div><div className="mt-16 grid gap-3 lg:grid-cols-[1.2fr_0.9fr_0.9fr]"><article className="rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.08] sm:p-9"><p className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.06em]">{principles[0].title}</p><p className="mt-16 max-w-sm leading-7 text-white/60">{principles[0].detail}</p></article>{principles.slice(1).map((principle) => <article key={principle.title} className="rounded-2xl border border-white/15 bg-[#17191d] p-7 transition-colors hover:border-white/35 sm:p-9"><p className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.06em]">{principle.title}</p><p className="mt-12 leading-7 text-white/60">{principle.detail}</p></article>)}</div></section>;
}
