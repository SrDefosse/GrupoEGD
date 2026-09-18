# 2026-09-17 — Menú móvil lateral

## 1. Objetivo

Crear una navegación móvil con botón hamburguesa y una barra lateral suave para
recorrer las rutas de Grupo EGD.

## 2. Cambios realizados y decisiones tomadas

- `SiteHeader` conserva la navegación horizontal y el menú de empresas en
  escritorio. A partir de móvil, los sustituye por un botón hamburguesa.
- El panel lateral contiene Inicio, Nosotros, Servicios, las cuatro empresas y
  Contacto. Se cierra al navegar, al pulsar el velo, con Escape o desde su botón
  X.
- La entrada y salida usan GSAP con opacidad, traslación horizontal y una
  aparición escalonada de los enlaces. Con movimiento reducido, el cambio es
  inmediato.
- El panel declara `data-lenis-prevent` y permite su propio desplazamiento, sin
  bloquear el scroll del documento.
- Se retiró `translate-x-full` del panel: en Tailwind 4 se acumula con la
  traslación de GSAP y lo mantenía fuera del viewport aunque el velo sí abriera.
- El botón de cierre usa una X accesible y el encabezado del panel ya no tiene
  un divisor bajo el logotipo.
- El ancho se limita a 88 % del viewport y el panel permite desplazamiento
  vertical propio, de modo que en teléfonos cortos los enlaces siguen siendo
  alcanzables.

## 3. Archivos relevantes

- `app/shared/layout/SiteHeader.tsx`
- `docs/ESTADO_ACTUAL.md`
- `docs/HANDOFF.md`

## 4. Verificación ejecutada y resultado exacto

```powershell
npm run typecheck # sin errores
npm run build     # cliente y servidor compilados correctamente
```

En `http://127.0.0.1:5173` con viewport de 390 × 844 px, el panel aparece sobre
el velo con `z-index: 50`, muestra todos los enlaces y se cierra correctamente.
También se comprobó a 320 × 480 px: el encabezado conserva logotipo y X, no hay
un divisor bajo el logo y el panel permite llegar por scroll a empresas y
Contacto.

## 5. Gotchas nuevos o actualizados

Se añadió G07 en `docs/GOTCHAS.md`: no combinar una clase `translate-*` de
Tailwind con el desplazamiento del mismo elemento controlado por GSAP.

## 6. Siguiente paso y revisión humana requerida

Comprobar el tacto de la transición y la navegación con teclado en un teléfono
real durante la revisión visual humana pendiente.
