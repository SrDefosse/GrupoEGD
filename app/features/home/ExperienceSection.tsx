import { Link } from "react-router";

/**
 * Tres piezas a lo ancho, centradas verticalmente: titular con su llamada,
 * fotografía dominante en formato casi cuadrado y panel de cierre.
 *
 * Antes la fotografía y el panel compartían una sub-retícula de dos columnas
 * dentro de la mitad derecha, con el panel desfasado hacia abajo. Eso encogía la
 * fotografía y descolgaba el panel; aquí las tres piezas se leen a la misma
 * altura y la imagen recupera el peso que le corresponde.
 */
export function ExperienceSection() {
  return <section aria-labelledby="experiencia-title" className="border-y border-white/10 bg-egd-raised">
    <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-28 sm:px-8 lg:grid-cols-[.9fr_1.25fr_.95fr] lg:gap-12 lg:py-36">
      <div>
        <h2 id="experiencia-title" className="max-w-md font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.07em]">Todo empieza por entender lo que necesitas.</h2>
        <Link to="/nosotros" className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-egd-base">
          Nuestra visión
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <figure className="group relative aspect-[11/10] overflow-hidden rounded-2xl border border-white/10">
        <img src="/eb-cars/imgs/4.0.png" alt="Interior de una unidad del catálogo del grupo" loading="lazy" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </figure>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
        <p className="leading-7 text-white/65">Decisiones informadas, atención personalizada y empresas que trabajan con criterios propios.</p>
        <p className="mt-14 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2vw,2rem)] font-medium leading-[1.2] tracking-[-0.055em]">Un grupo, diferentes especialidades.</p>
      </div>
    </div>
  </section>;
}
