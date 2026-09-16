const services = ["Compra y venta", "Blindaje automotriz", "Protección y detallado", "Mantenimiento especializado"];

export function GroupServicesSection() {
  return <section className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36"><h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.96] tracking-[-0.065em]">Un grupo preparado para acompañar el ciclo completo de tu auto.</h2><div className="mt-14 grid grid-cols-1 gap-px rounded-2xl bg-white/20 md:grid-cols-2">{services.map((service) => <p key={service} className="bg-[#101113] px-5 py-7 text-lg text-white/80 sm:px-8 sm:text-xl">{service}</p>)}</div></section>
}
