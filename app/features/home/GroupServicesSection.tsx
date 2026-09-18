import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../shared/lib/gsap.client";

const services = [
  { number: "01", title: "Compra y venta", description: "Selección de unidades y acompañamiento para tomar decisiones informadas, desde la búsqueda hasta la venta de un vehículo.", image: "/images/services/compra-venta.png" },
  { number: "02", title: "Blindaje automotriz", description: "Soluciones de protección configuradas según cada necesidad, con materiales certificados y cuidado del diseño original de la unidad.", image: "/images/services/blindaje.png" },
  { number: "03", title: "Protección y detallado", description: "Servicios para conservar superficies, acabados y apariencia con procesos de protección, limpieza y restauración especializada.", image: "/images/services/proteccion-detallado.png" },
  { number: "04", title: "Mantenimiento especializado", description: "Diagnóstico y atención mecánica para mantener el desempeño, la seguridad y la continuidad de cada vehículo.", image: "/images/services/mantenimiento.png" },
];

export function GroupServicesSection() {
  const root = useRef<HTMLElement>(null);
  const firstRun = useRef(true);
  const ultimaPosicion = useRef<{ x: number; y: number } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Solo la altura del panel altera el layout, y GSAP interrumpe la animación
  // anterior (`overwrite`) al cambiar de fila: recorrer la lista con el cursor
  // ya no encadena varias transiciones de alto simultáneas.
  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const instant = firstRun.current || reduce;
    firstRun.current = false;

    gsap.utils.toArray<HTMLElement>("[data-service-row]").forEach((row, index) => {
      const active = index === activeIndex;
      const panel = row.querySelector<HTMLElement>("[data-service-panel]");
      const image = row.querySelector<HTMLElement>("[data-service-image]");
      const veil = row.querySelector<HTMLElement>("[data-service-veil]");

      gsap.to(panel, { height: active ? "auto" : 0, opacity: active ? 1 : 0, duration: instant ? 0 : 0.5, ease: "power2.out", overwrite: "auto" });
      gsap.to(image, { opacity: active ? 0.72 : 0, scale: active ? 1.04 : 1.1, duration: instant ? 0 : 0.6, ease: "power2.out", overwrite: "auto" });
      gsap.to(veil, { opacity: active ? 1 : 0, duration: instant ? 0 : 0.45, ease: "power1.out", overwrite: "auto" });
    });
  }, { scope: root, dependencies: [activeIndex] });

  const recordarPosicion = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") ultimaPosicion.current = { x: event.clientX, y: event.clientY };
  };

  /**
   * Al desplazarse, la página se mueve bajo un cursor quieto y dispara
   * `pointerenter` en filas que nadie señaló.
   *
   * Se distinguen los dos casos por la posición del cursor, no por un retardo:
   * si las coordenadas son idénticas a las últimas conocidas, fue la página la
   * que se movió. Si cambiaron, fue el cursor y la fila responde de inmediato.
   */
  const handlePointerEnter = (index: number) => (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;

    const previa = ultimaPosicion.current;
    const movioElCursor = !previa || previa.x !== event.clientX || previa.y !== event.clientY;
    recordarPosicion(event);

    if (movioElCursor) setActiveIndex(index);
  };

  return <section ref={root} aria-labelledby="servicios-title" className="bg-egd-base py-28 sm:py-36">
    <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-[.76fr_1.24fr]">
      <div className="lg:sticky lg:top-28 lg:h-fit"><p className="text-sm text-white/45">Especialidades</p><h2 id="servicios-title" className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,4.3vw,4.6rem)] font-semibold leading-[.94] tracking-[-.075em]">Un grupo preparado para acompañar el ciclo completo de tu auto.</h2><p className="mt-8 max-w-md text-lg leading-8 text-white/60">Cada empresa aporta conocimiento específico; juntas permiten acompañar más momentos de la experiencia automotriz.</p></div>
      <div className="border-t border-white/20" onPointerMove={recordarPosicion}>{services.map((service, index) => { const active = activeIndex === index; return <button type="button" key={service.title} data-service-row aria-expanded={active} onClick={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onPointerEnter={handlePointerEnter(index)} className="relative isolate grid min-h-24 w-full cursor-pointer gap-5 overflow-hidden border-b border-white/20 py-7 text-left sm:grid-cols-[5rem_1fr_auto] sm:items-start">
        <img src={service.image} alt="" aria-hidden="true" decoding="async" data-service-image className="service-row-image absolute inset-0 z-0 size-full object-cover object-center" />
        <div data-service-veil className="service-row-veil absolute inset-0 z-[15]" />
        <p className={`relative z-20 text-2xl transition-colors duration-300 ${active ? "text-egd-accent" : "text-white/40"}`}>{service.number}</p>
        <div className="relative z-20">
          <h3 className="text-[clamp(1.7rem,2.3vw,2.5rem)] font-medium leading-tight tracking-[-.055em]">{service.title}</h3>
          <div data-service-panel className="h-0 overflow-hidden opacity-0"><p className="max-w-md pt-7 leading-7 text-white/75">{service.description}</p></div>
        </div>
        <span aria-hidden="true" className={`relative z-20 text-3xl transition-colors duration-300 ${active ? "text-egd-accent" : "text-white/55"}`}>→</span>
      </button>; })}</div>
    </div>
  </section>;
}
