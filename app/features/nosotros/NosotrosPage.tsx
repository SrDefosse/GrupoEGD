import { Link } from "react-router";

import { cifras, direccionCompleta, grupo, matriz, mision, valores, vision } from "../../shared/content/grupo";
import { companies } from "../empresas/companies";

/** Multimedia del grupo: material de las marcas con brandbook aprobado. */
const galeria = [
  { src: "/enlace-egd/imgs/1.2.png", alt: "Unidad seleccionada en el showroom del grupo" },
  { src: "/images/egd-aftersale/detalle-en-proceso.png", alt: "Proceso de detallado sobre la carrocería de un automóvil" },
  { src: "/eb-cars/imgs/5.0.png", alt: "Interior de una unidad del catálogo del grupo" },
  { src: "/enlace-egd/imgs/5.0.png", alt: "Detalle exterior de una unidad premium" },
  { src: "/egd-aftersale/imgs/4.0.png", alt: "Trabajo de protección de superficies en el taller" },
  { src: "/eb-cars/imgs/7.0.png", alt: "Entrega de una unidad a un cliente" },
];

export function NosotrosPage() {
  return <div>
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden"><img src="/images/grupo-egd/hero-nosotros-taller.png" alt="Equipo de especialistas junto a un vehículo en taller" className="absolute inset-0 -z-20 size-full object-cover object-[62%_center]" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,27,39,.96),rgba(21,27,39,.65)_52%,rgba(21,27,39,.16))]" /><div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-[1400px] items-end px-5 pb-16 pt-24 sm:px-8 lg:items-center lg:pb-8"><div className="max-w-4xl"><p className="text-sm text-white/65">Grupo EGD</p><h1 className="mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[.93] tracking-[-.08em]">Una visión que conecta cada decisión automotriz.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Reunimos especialidades para acompañar la búsqueda, adquisición, conservación y protección de un vehículo con atención a lo que cada etapa requiere.</p></div></div></section>

    <section aria-labelledby="quienes-somos" className="border-y border-white/10 bg-egd-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <h2 id="quienes-somos" className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1] tracking-[-.07em]">El valor está en la conexión entre especialidades.</h2>
        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-white/65">
          <p>Grupo EGD reúne empresas enfocadas en compra y venta, cuidado posterior, movilidad y seguridad vehicular. Cada una atiende una necesidad concreta y aporta conocimiento propio al recorrido de cada cliente.</p>
          <p>Son {grupo.aniosExperiencia} años en el sector automotriz, concentrados en el segmento premium: {grupo.queHacemos.toLowerCase()} Esa experiencia es la que sostiene el criterio con el que hoy trabajan las cuatro empresas.</p>
        </div>

        <dl className="mt-20 grid gap-x-10 gap-y-12 border-t border-white/20 pt-12 md:grid-cols-3">
          {cifras.map((cifra) => <div key={cifra.detalle}>
            <dt className="sr-only">{cifra.detalle}</dt>
            <dd>
              <p className="font-[family-name:var(--font-display)] text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-none tracking-[-.085em]">{cifra.valor}<span className="ml-3 text-xl tracking-[-.02em] text-white/40">{cifra.unidad}</span></p>
              <p className="mt-5 max-w-xs leading-7 text-white/55">{cifra.detalle}</p>
            </dd>
          </div>)}
        </dl>
      </div>
    </section>

    <section aria-labelledby="de-donde-somos" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <h2 id="de-donde-somos" className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[.98] tracking-[-.075em]">{matriz.ciudad}, {matriz.estado}.</h2>
          <p className="mt-8 max-w-lg text-lg leading-8 text-white/65">La operación del grupo se concentra en una sede en {matriz.ciudad}, desde donde se coordina la atención de las cuatro empresas para clientes de la ciudad y de la región.</p>
          <p className="mt-7 max-w-md leading-8 text-white/50">{direccionCompleta}</p>
          <a href={matriz.mapa} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-egd-base">Ver en el mapa</a>
        </div>
        <img src="/images/grupo-egd/hero-showroom.png" alt="Showroom de Grupo EGD" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
      </div>
    </section>

    <section aria-labelledby="mision-vision" className="border-y border-white/10 bg-egd-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <h2 id="mision-vision" className="sr-only">Misión, visión y valores</h2>

        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          <div>
            <h3 className="text-lg text-white/50">Misión</h3>
            <p className="mt-7 text-[clamp(1.3rem,2.1vw,2rem)] font-medium leading-[1.32] tracking-[-.04em]">{mision}</p>
          </div>
          <div>
            <h3 className="text-lg text-white/50">Visión</h3>
            <p className="mt-7 text-[clamp(1.3rem,2.1vw,2rem)] font-medium leading-[1.32] tracking-[-.04em]">{vision}</p>
          </div>
        </div>

        <dl className="mt-20 grid gap-x-10 gap-y-10 border-t border-white/20 pt-12 md:grid-cols-2 xl:grid-cols-4">
          {valores.map((valor) => <div key={valor.titulo}>
            <dt className="text-xl font-medium tracking-[-.04em]">{valor.titulo}</dt>
            <dd className="mt-4 leading-7 text-white/60">{valor.detalle}</dd>
          </div>)}
        </dl>
      </div>
    </section>

    <section aria-labelledby="multimedia" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <p className="text-sm text-white/45">Multimedia</p>
      <h2 id="multimedia" className="mt-5 max-w-xl text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[1] tracking-[-.065em]">El trabajo del grupo, en imágenes.</h2>
      <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {galeria.map((imagen) => <figure key={imagen.src} className="overflow-hidden rounded-xl border border-white/10">
          <img src={imagen.src} alt={imagen.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
        </figure>)}
      </div>
    </section>

    <section aria-labelledby="relacion-largo-plazo" className="border-t border-white/15 bg-egd-deep">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <h2 id="relacion-largo-plazo" className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,3.8vw,3.8rem)] font-semibold leading-[1] tracking-[-.07em]">Desde elegir una unidad hasta protegerla y mantenerla, cada decisión posterior se acompaña igual que la primera.</h2>

        <ul className="mt-16 border-t border-white/20">
          {companies.map((company) => <li key={company.slug}>
            <Link to={company.href} className="group grid items-center gap-x-10 gap-y-2 border-b border-white/20 py-6 transition-colors hover:bg-white/[0.05] md:grid-cols-[.5fr_1fr_auto]">
              <img src={company.logo} alt={company.nombre} className="max-h-6 max-w-[150px] object-contain object-left brightness-0 invert" />
              <p className="text-white/60">{company.categoria}</p>
              <span aria-hidden="true" className="hidden text-egd-accent transition-transform duration-300 group-hover:translate-x-1 md:block">→</span>
            </Link>
          </li>)}
        </ul>
      </div>
    </section>
  </div>;
}
