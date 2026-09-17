import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { gsap, ScrollTrigger } from "./gsap.client";

/** Alto del encabezado sticky; los anclas deben detenerse por debajo de él. */
const HEADER_OFFSET = 68;

let instance: Lenis | null = null;

/** Instancia activa de Lenis, o `null` cuando aún no se monta el componente. */
export function getLenis() {
  return instance;
}

/**
 * Monta una única instancia de Lenis para toda la aplicación.
 *
 * Decisiones deliberadas:
 * - `syncTouch: false` (valor por omisión): en móvil el scroll táctil queda nativo.
 *   Lenis solo observa; no interpola el gesto ni agrega inercia propia.
 * - `lerp` en lugar de `duration`: el desplazamiento sigue el delta real del
 *   dispositivo, así el impulso de un trackpad no se siente desfasado.
 * - `allowNestedScroll: true`: la rueda sobre un contenedor con scroll propio lo
 *   desplaza a él y no a la página.
 * - `gestureOrientation: "vertical"` (valor por omisión): los gestos horizontales
 *   de un trackpad no se capturan.
 * - `respectReducedMotion: true` (valor por omisión): con `prefers-reduced-motion`
 *   Lenis deja de suavizar y los saltos programáticos se vuelven inmediatos.
 * - `autoRaf: false` + `gsap.ticker`: un solo bucle de animación compartido con
 *   GSAP, en el orden correcto para ScrollTrigger.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      syncTouch: false,
      allowNestedScroll: true,
      anchors: { offset: -HEADER_OFFSET },
      stopInertiaOnNavigate: true,
      autoRaf: false,
    });

    instance = lenis;

    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
