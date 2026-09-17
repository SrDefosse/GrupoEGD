import { Link } from "react-router";

const categories = ["SUV", "Clásicos", "Deportivos", "Blindados", "Convertibles"];

export function EnlaceGdPage() {
  return <main className="bg-[#111538]">
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden">
      <img src="/images/enlace-gd/hero-seleccion.png" alt="Automóvil seleccionado en showroom" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,11,40,.98),rgba(5,11,40,.78)_46%,rgba(5,11,40,.22))]" />
      <div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-[1400px] items-end px-5 pb-16 pt-24 sm:px-8 lg:items-center lg:pb-8"><div className="max-w-2xl"><img src="/enlace-egd/logotipo-enlace-gd.svg" alt="Enlace GD" className="max-h-16 max-w-64 brightness-0 invert" /><h1 className="mt-10 text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[.96] tracking-[-.07em]">Autos seleccionados para decisiones que importan.</h1><p className="mt-7 max-w-xl leading-8 text-white/80">Enlace GD acompaña la compra y venta de vehículos seleccionados con una conversación directa: entender el perfil que buscas, revisar alternativas y avanzar con información clara en cada etapa.</p><Link to="/contacto" className="mt-9 inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-[#111538]">Hablar con Enlace GD</Link></div></div>
    </section>
    <section className="border-y border-white/15 bg-[#1a2368]"><div className="mx-auto grid max-w-[1400px] gap-3 px-5 py-16 sm:px-8 md:grid-cols-3"><p className="p-6 text-xl">Compra con respaldo.</p><p className="border-x border-white/15 p-6 text-xl">Vende con confianza.</p><p className="p-6 text-xl">Construye una relación.</p></div></section>
    <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-28 sm:px-8 lg:grid-cols-[.9fr_1.1fr]"><h2 className="text-4xl font-bold leading-tight tracking-[-.06em]">Una búsqueda con más posibilidades.</h2><div><p className="max-w-2xl leading-8 text-white/70">El catálogo público de Enlace GD contempla perfiles distintos de movilidad, desde SUVs y convertibles hasta vehículos deportivos, clásicos y unidades blindadas. La selección se presenta como un punto de partida para comparar con criterio y encontrar una unidad que se ajuste a la forma en que quieres moverte.</p><div className="mt-10 flex flex-wrap gap-2">{categories.map((category) => <span key={category} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">{category}</span>)}</div></div></section>
  </main>;
}
