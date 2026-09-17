# Gotchas

## G01 — No hay brandbook de CENTUR Blindajes

El alcance lista cuatro empresas, pero `Brandings_Grupo_EGD.md` solo documenta EB
Cars, EGD Aftersale & Detailing Center y Enlace GD. No fijes tipografías, paleta,
copy de voz ni recursos gráficos de CENTUR sin un material aprobado.

## G02 — El alcance no define contenido final

No inventes servicios, teléfonos, correos, ubicaciones, inventario ni promesas
comerciales. Los componentes del scaffold deben admitir contenido posterior sin
convertirse en una base de datos ficticia.

## G03 — Las fuentes de marca requieren licencia/disponibilidad

Panchang, Neue Montreal y BankGothic Md BT no se deben cargar desde una fuente no
autorizada. Antes de integrarlas, confirma licencia, archivos web y fallback.

## G04 — Lenis controla el scroll del documento

`app/shared/lib/smooth-scroll.tsx` monta una única instancia de Lenis desde
`root.tsx`. Consecuencias al tocar layout o animación:

- No declares `scroll-behavior: smooth` ni uses `overflow: hidden` en `html` o
  `body`: lo primero compite con Lenis y lo segundo convierte al `body` en
  contenedor de scroll. Para recortar el desbordamiento horizontal usa `clip`.
- Lenis avanza dentro de `gsap.ticker`, no con su propio `requestAnimationFrame`.
  Si agregas otro bucle de animación, engánchalo al mismo ticker.
- Un contenedor con scroll propio funciona gracias a `allowNestedScroll`. Si aun
  así se desplaza la página, marca el nodo con `data-lenis-prevent`.
- En móvil el scroll táctil es nativo (`syncTouch: false`). No lo actives: Lenis
  documenta comportamiento inestable en iOS anterior a 16.
- No uses `lenis.stop()` para pausar animaciones: bloquea el scroll de la página.
- Para reaccionar al scroll desde un componente, usa `getLenis()` en lugar de
  crear una segunda instancia.

## G05 — Origen del contenido de empresas y datos de contacto

`app/shared/content/grupo.ts` y `app/features/empresas/companies.ts` son la
fuente única del contenido institucional y de las cuatro empresas. Antes de
editarlos, considera de dónde viene cada dato:

- **Verificado:** dirección, horarios, teléfonos, correos, redes, los 20 años de
  experiencia, las marcas y categorías de Enlace GD, y los servicios de EGD
  Aftersale. Todo transcrito de `egdautomoviles.com` el 2026-09-17. Sigue
  pendiente que el cliente lo confirme como vigente.
- **Derivado de material aprobado:** filosofía, promesa y voz de cada marca
  salen del Golden Circle de `Brandings_Grupo_EGD.md`.
- **Borrador nuestro:** misión, visión, valores, procesos paso a paso y los
  textos de «para empresas». Redactados a partir de lo anterior; requieren
  aprobación antes de considerarse definitivos.
- **Ausente a propósito:** no se publican certificaciones, normas de blindaje,
  niveles de protección, direcciones individuales por empresa ni inventario de
  EB Cars. G01 y G02 siguen aplicando: no los inventes para llenar un hueco.
  `ubicacionPropiaPorConfirmar` marca a quién le falta dirección propia; mientras
  sea `true`, la página muestra la sede del grupo.
