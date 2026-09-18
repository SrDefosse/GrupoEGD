const specialties = ["Selección", "Protección", "Cuidado", "Seguridad"];

/**
 * Antes todo el bloque vivía dentro de un `max-w-5xl` sobre un contenedor de
 * 1400 px: el contenido se apilaba contra el borde izquierdo y sobraban casi
 * 400 px muertos a la derecha. Ahora la composición ocupa el ancho completo y
 * las especialidades se alinean al extremo derecho, de modo que el titular y la
 * lista sostienen la sección por los dos lados.
 */
export function GroupStatementSection() {
  return <section aria-labelledby="vision-title" className="border-y border-white/10 bg-egd-raised">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <h2 id="vision-title" className="max-w-[62rem] font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.5vw,4.6rem)] font-semibold leading-[.97] tracking-[-.075em]">Más de veinte años de experiencia nos permiten acompañar cada decisión desde distintas especialidades.</h2>

      <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
        <p className="max-w-xl text-lg leading-8 text-white/65">Grupo EGD reúne empresas que comparten una exigencia: atención profesional, información transparente y una solución acorde con cada persona y su vehículo.</p>
        <ul aria-label="Especialidades de Grupo EGD" className="grid grid-cols-2 gap-x-14 gap-y-4 text-sm text-white/70 sm:grid-cols-4 lg:justify-self-end">
          {specialties.map((specialty, index) => <li key={specialty} className="flex items-center gap-3 border-b border-white/10 pb-3"><span className="text-white/35">0{index + 1}</span>{specialty}</li>)}
        </ul>
      </div>
    </div>
  </section>;
}
