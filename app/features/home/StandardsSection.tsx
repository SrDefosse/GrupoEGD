const principles = [
  { title: "Criterio", detail: "Recomendaciones basadas en las necesidades reales de cada unidad y de cada persona." },
  { title: "Seguimiento", detail: "Procesos claros para acompañar el auto antes, durante y después de cada servicio." },
  { title: "Especialización", detail: "Empresas enfocadas en resolver una parte concreta de la experiencia automotriz." },
];

/**
 * Tres principios en tipografía grande y sangrado progresivo.
 *
 * Antes eran tres tarjetas iguales en fila, la retícula más repetida del sitio y
 * la que menos jerarquía aporta. Aquí el peso lo dan el tamaño del tipo y el
 * aire; los filetes separan sin encajonar.
 */
export function StandardsSection() {
  return <section aria-labelledby="estandares-title" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36">
    <h2 id="estandares-title" className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.07em]">La forma en que trabajamos importa.</h2>

    <dl className="mt-20">
      {principles.map((principle, index) => <div key={principle.title} className="grid gap-x-10 gap-y-4 border-t border-white/20 py-10 sm:py-12 md:grid-cols-[1fr_1.05fr]" style={{ paddingLeft: `calc(${index} * 4vw)` }}>
        <dt className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-none tracking-[-0.07em]">{principle.title}</dt>
        <dd className="max-w-md self-end text-lg leading-8 text-white/60">{principle.detail}</dd>
      </div>)}
    </dl>
  </section>;
}
