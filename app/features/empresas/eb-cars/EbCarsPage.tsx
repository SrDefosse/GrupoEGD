import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../shared/lib/gsap.client";
import { scrollToAnchor } from "../../../shared/lib/smooth-scroll";

import { companyBySlug } from "../companies";
import { CompanyBusinessSection, CompanyCatalogSection, CompanyOverviewSection, CompanyPhilosophySection, CompanyProcessSection, CompanySwitchSection } from "../CompanySections";

const company = companyBySlug("eb-cars")!;

const values = ["Conversaciones reales", "Asesoría con criterio", "Una experiencia confiable"];

const proceso = [
  { titulo: "Cuéntanos qué buscas", detalle: "Uso, presupuesto y prioridades. Sin formularios largos ni tecnicismos innecesarios." },
  { titulo: "Comparamos opciones", detalle: "Se ponen las alternativas sobre la mesa con sus diferencias reales, ventajas y límites." },
  { titulo: "Revisas la unidad", detalle: "Condiciones, historial y documentación explicados en un lenguaje que se entiende a la primera." },
  { titulo: "Decides sin prisa", detalle: "El acompañamiento sigue después de la entrega, con el respaldo técnico del grupo." },
];

export function EbCarsPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-eb-intro]", { y: 28, opacity: 0, stagger: 0.1, duration: 0.75, ease: "power3.out" });
    gsap.from("[data-eb-piece]", { y: 42, opacity: 0, stagger: 0.12, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: "[data-eb-mosaic]", start: "top 78%" } });
  }, { scope: root });

  return <main ref={root} className="bg-[#072630] text-egd-ink">
    {/*
      Hero a dos mitades a sangre, sin contenedor: la fotografía llega al borde
      del viewport y el titular vive dentro de un bloque amarillo que monta sobre
      ella. Las otras tres empresas usan foto a sangre con velo oscuro y el texto
      encima; aquí la composición se parte y el color hace el trabajo, que es lo
      que corresponde a la marca accesible del grupo.

      El amarillo `#F7E045` y el gris `#26272C` son de su brandbook. El titular va
      en Michroma, su tipografía principal.
    */}
    <section aria-labelledby="eb-cars-title" className="relative isolate">
      <div className="grid lg:min-h-[calc(100svh-68px)] lg:grid-cols-2">
        <figure className="relative lg:order-2">
          <img src="/eb-cars/imgs/9.0.png" alt="Unidad del catálogo de EB Cars" className="h-72 w-full rounded-bl-[2rem] rounded-br-[2rem] object-cover object-center sm:h-[26rem] lg:absolute lg:inset-0 lg:h-full lg:rounded-br-none lg:rounded-tl-[2rem]" />
        </figure>

        <div className="flex items-center px-5 py-16 sm:px-8 lg:order-1 lg:py-24 lg:pl-[clamp(2rem,6vw,7rem)] lg:pr-14">
          <div className="w-full">
            <img data-eb-intro src={company.logo} alt={company.nombre} className="max-h-9 max-w-48 brightness-0 invert" />

            <h1 data-eb-intro id="eb-cars-title" className="relative z-10 mt-9 block rounded-2xl bg-[#f7e045] px-7 py-6 font-[family-name:var(--font-eb-cars)] text-[clamp(1.35rem,2.9vw,2.5rem)] leading-[1.32] tracking-[-.02em] text-[#26272c] sm:px-9 sm:py-8 lg:w-[calc(100%+6rem)]">{company.promesa}</h1>

            <p data-eb-intro className="mt-10 max-w-md text-lg leading-8 text-white/75">El auto correcto se encuentra con una conversación clara: te explicamos cada paso, comparamos opciones y acompañamos la decisión sin presionarte.</p>

            <div data-eb-intro className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contacto" className="rounded-full bg-egd-ink px-6 py-3.5 text-sm font-semibold text-[#26272c] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0">Contacto</Link>
              <a href="#eb-cars-proceso" onClick={scrollToAnchor} className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-[#072630]">Cómo compras aquí</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*
      Antes era un mosaico de cuatro piezas con dos fotografías y una tarjeta de
      llamada. Sobraba: el hero ya trae una fotografía grande y su propia llamada
      a Contacto, así que la segunda imagen pesaba y el segundo botón repetía la
      misma intención. Queda un panel compacto con el enunciado y los tres
      valores.
    */}
    <section aria-labelledby="eb-cars-esencia" className="mx-auto max-w-[1400px] px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div data-eb-mosaic className="grid gap-10 rounded-3xl border border-white/12 bg-white/[0.04] px-8 py-12 sm:px-12 sm:py-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
        <div data-eb-piece>
          <h2 id="eb-cars-esencia" className="max-w-sm text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.05] tracking-[-.06em]">Cercanía sin perder criterio.</h2>
          <p className="mt-6 max-w-sm leading-8 text-white/65">Una selección pensada para acompañar a personas que valoran el auto, el camino y una elección con sentido.</p>
        </div>

        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {values.map((value, index) => <li key={value} data-eb-piece>
            <span aria-hidden="true" className="block h-0.5 w-7 bg-[#f7e045]" />
            <span className="mt-5 block text-sm text-white/40">0{index + 1}</span>
            <p className="mt-3 text-lg leading-7 text-white/85">{value}</p>
          </li>)}
        </ul>
      </div>
    </section>

    <CompanyOverviewSection company={company} imagen="/images/services/compra-venta.png" />
    <CompanyCatalogSection company={company} />

    <CompanyProcessSection company={company} titulo="Cuatro pasos, sin letras chiquitas." pasos={proceso} />

    <CompanyPhilosophySection company={company} />
    <CompanyBusinessSection company={company} />
    <CompanySwitchSection slug={company.slug} />
  </main>;
}
