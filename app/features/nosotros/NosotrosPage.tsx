import type { ComponentType } from "react";
import { Link } from "react-router";
import { PiArrowRight, PiFileText, PiGearSix, PiShield, PiUsersThree } from "react-icons/pi";

import { direccionCompleta, grupo, matriz, mision, valores, vision } from "../../shared/content/grupo";
import { companies } from "../empresas/companies";

/** Un icono por valor, asociado por `id`. Familia única en el sitio: Phosphor. */
const iconosDeValor: Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  transparencia: PiShield,
  criterio: PiFileText,
  especializacion: PiGearSix,
  respaldo: PiUsersThree,
};

/** Multimedia del grupo: material de las marcas con brandbook aprobado. */
const galeria = [
  { src: "/enlace-egd/imgs/1.2.png", alt: "Unidad seleccionada en el showroom del grupo" },
  { src: "/images/egd-aftersale/detalle-en-proceso.png", alt: "Proceso de detallado sobre la carrocería de un automóvil" },
  { src: "/eb-cars/imgs/5.0.png", alt: "Interior de una unidad del catálogo del grupo" },
  { src: "/images/services/proteccion-detallado.png", alt: "Trabajo de protección de superficies" },
  { src: "/egd-aftersale/imgs/4.0.png", alt: "Servicio especializado en el taller" },
  { src: "/eb-cars/imgs/7.0.png", alt: "Entrega de una unidad a un cliente" },
];

export function NosotrosPage() {
  return <div>
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden"><img src="/images/grupo-egd/hero-nosotros-taller.png" alt="Equipo de especialistas junto a un vehículo en taller" className="absolute inset-0 -z-20 size-full object-cover object-[62%_center]" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,27,39,.96),rgba(21,27,39,.65)_52%,rgba(21,27,39,.16))]" /><div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-[1400px] items-end px-5 pb-16 pt-24 sm:px-8 lg:items-center lg:pb-8"><div className="max-w-4xl"><p className="text-sm text-white/65">Grupo EGD</p><h1 className="mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[.93] tracking-[-.08em]">Una visión que conecta cada decisión automotriz.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Reunimos especialidades para acompañar la búsqueda, adquisición, conservación y protección de un vehículo con atención a lo que cada etapa requiere.</p></div></div></section>

    {/*
      Composición aprobada: texto a la izquierda, fotografía dominante y un panel
      que la monta por el costado derecho. El montaje solo existe a partir de
      `lg`; abajo el panel cae bajo la fotografía.
    */}
    <section aria-labelledby="quienes-somos" className="border-y border-white/10 bg-egd-raised">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Nuestra esencia</p>
          <h2 id="quienes-somos" className="mt-7 max-w-lg font-[family-name:var(--font-display)] text-[clamp(2.4rem,4.4vw,4.2rem)] font-semibold leading-[1.02] tracking-[-.07em]">El valor está en la conexión entre especialidades.</h2>
          <div className="mt-9 max-w-lg space-y-6 leading-8 text-white/65">
            <p>Grupo EGD reúne empresas enfocadas en compra y venta, cuidado posterior, movilidad y seguridad vehicular. Cada una atiende una necesidad concreta y aporta conocimiento propio al recorrido de cada cliente.</p>
            <p>Son {grupo.aniosExperiencia} años en el sector automotriz, con un mismo enfoque: escuchar, resolver y construir relaciones a largo plazo.</p>
          </div>
          <Link to="/empresas" className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white hover:text-egd-base">
            Conoce más
            <PiArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          <img src="/enlace-egd/imgs/5.0.png" alt="Unidad seleccionada en un showroom del grupo" loading="lazy" className="aspect-[13/12] w-full rounded-3xl object-cover lg:w-[68%]" />
          <div className="mt-5 rounded-3xl border border-white/12 bg-egd-base p-8 sm:p-9 lg:absolute lg:right-0 lg:top-[23%] lg:mt-0 lg:w-[41%]">
            <span aria-hidden="true" className="block h-px w-8 bg-white/35" />
            <p className="mt-7 leading-7 text-white/65">Empresas que se complementan para ofrecer una experiencia completa, con atención cercana y visión de largo plazo.</p>
            <p className="mt-10 text-[clamp(1.25rem,1.7vw,1.65rem)] font-medium leading-[1.25] tracking-[-.04em]">Diferentes especialidades,<br />un mismo estándar.</p>
          </div>
        </div>
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

    {/*
      Misión, visión y valores. Las tarjetas sí ganan aquí: separan cuatro
      enunciados independientes que no se leen en secuencia, y el icono da un
      punto de entrada a cada uno.
    */}
    <section aria-labelledby="mision-vision" className="relative isolate overflow-hidden border-y border-white/10 bg-egd-raised">
      <img src="/images/centur/hero-seguridad.png" alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute -right-24 -top-32 -z-10 hidden w-[46%] max-w-2xl opacity-[0.14] [mask-image:radial-gradient(60%_60%_at_70%_30%,#000,transparent)] lg:block" />

      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <h2 id="mision-vision" className="sr-only">Misión, visión y valores</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {[{ rotulo: "Misión", texto: mision }, { rotulo: "Visión", texto: vision }].map((bloque) => <article key={bloque.rotulo} className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.02))] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">{bloque.rotulo}</p>
            <span aria-hidden="true" className="mt-5 block h-px w-8 bg-white/35" />
            <p className="mt-8 text-[clamp(1.15rem,1.55vw,1.5rem)] leading-[1.5] tracking-[-.02em] text-white/90">{bloque.texto}</p>
          </article>)}
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {valores.map((valor) => {
            const Icono = iconosDeValor[valor.id];
            return <li key={valor.id} className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.05]">
                <Icono aria-hidden className="size-5 text-white/80" />
              </span>
              <h3 className="mt-7 text-lg tracking-[-.02em]">{valor.titulo}</h3>
              <p className="mt-4 leading-7 text-white/55">{valor.detalle}</p>
            </li>;
          })}
        </ul>
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
              <PiArrowRight aria-hidden className="hidden size-5 text-egd-accent transition-transform duration-300 group-hover:translate-x-1 md:block" />
            </Link>
          </li>)}
        </ul>
      </div>
    </section>
  </div>;
}
