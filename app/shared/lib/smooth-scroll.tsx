import { useEffect, type MouseEvent } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { gsap, ScrollTrigger } from "./gsap.client";

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
 * - Sin `anchors`: los enlaces de ancla se manejan con `scrollToAnchor`. La
 *   opción de Lenis no llama a `preventDefault`, así que el salto nativo del
 *   navegador se ejecutaba después y ganaba, ignorando `scroll-margin-top`.
 */
/**
 * Maneja un enlace de ancla dentro de la página.
 *
 * Es necesario porque el salto nativo del navegador ignora aquí el
 * `scroll-margin-top` del destino y lo deja debajo del encabezado sticky. Al
 * cancelarlo, tanto `lenis.scrollTo` como `scrollIntoView` sí lo respetan.
 */
export function scrollToAnchor(event: MouseEvent<HTMLAnchorElement>) {
  const { hash } = event.currentTarget;
  const destino = hash ? document.querySelector<HTMLElement>(hash) : null;
  if (!destino) return;

  event.preventDefault();
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(destino);
  else destino.scrollIntoView({ behavior: "smooth" });

  window.history.replaceState(null, "", hash);
}

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      syncTouch: false,
      allowNestedScroll: true,
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
