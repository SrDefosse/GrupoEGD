const specialties = ["Selección", "Protección", "Cuidado", "Seguridad"];

export function GroupStatementSection() {
  return <section aria-labelledby="vision-title" className="border-y border-white/10 bg-egd-raised">
    <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-5xl">
        <h2 id="vision-title" className="max-w-5xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.5vw,4.6rem)] font-semibold leading-[.97] tracking-[-.075em]">Más de veinte años de experiencia nos permiten acompañar cada decisión desde distintas especialidades.</h2>
        <div className="mt-14 grid gap-8 border-t border-white/15 pt-7 md:grid-cols-[1fr_.85fr] md:items-end">
          <p className="max-w-xl text-lg leading-8 text-white/65">Grupo EGD reúne empresas que comparten una exigencia: atención profesional, información transparente y una solución acorde con cada persona y su vehículo.</p>
          <ul aria-label="Especialidades de Grupo EGD" className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-white/70">
            {specialties.map((specialty, index) => <li key={specialty} className="flex items-center gap-3 border-b border-white/10 pb-3"><span className="text-white/35">0{index + 1}</span>{specialty}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>;
}
