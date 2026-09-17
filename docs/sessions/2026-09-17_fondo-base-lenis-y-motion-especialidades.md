# 2026-09-17 — Fondo base `#1d2433`, Lenis y motion de Especialidades

## 1. Objetivo

1. Adoptar `#1d2433` como color de fondo principal del sitio.
2. Corregir el *stutter* de `GroupServicesSection`.
3. Implementar Lenis según su documentación oficial, sin interferir con
   trackpads ni con el scroll táctil de móvil.

## 2. Cambios y decisiones

### Rampa de superficie en tokens

Se creó una rampa derivada de `#1d2433` (hsl ≈ 221°, 27%, 16%) y se declaró en
`@theme` de `app/app.css`. Los componentes ya no llevan hex neutros sueltos:

| Token | Valor | Uso |
| --- | --- | --- |
| `egd-deep` | `#151b27` | Pie de página y retícula de empresas |
| `egd-base` | `#1d2433` | **Fondo principal**: `html`, `body`, layout, encabezado, especialidades |
| `egd-raised` | `#232b3c` | Bloques elevados (experiencia, formulario, tarjetas de estándares) |
| `egd-panel` | `#293245` | Superficies sobre un bloque elevado (dropdown, marco de imagen) |
| `egd-ink` | `#f2f0eb` | Texto principal |
| `egd-bone` | `#d8d5ce` | Secciones claras |
| `egd-accent` | `#3c8cff` | Acento corporativo |

Las paletas de marca (`#111538`, `#0c2447`, `#26343a`, `#d5a952`…) siguen
viviendo dentro de su feature y no se tocaron.

### `GroupServicesSection`

El *stutter* tenía tres causas acumuladas:

1. Cada fila animaba `min-height`, `padding`, `max-height` y `margin` a la vez.
   Cuatro propiedades de layout, en varias filas simultáneas al recorrer la lista.
2. `max-height: 10rem` como sustituto de "alto automático" recortaba y aceleraba
   el final de la transición.
3. `onMouseEnter` se dispara también cuando la página se desplaza bajo un cursor
   quieto: al hacer scroll, las filas se abrían y cerraban solas.

Correcciones:

- El alto de la fila lo produce un único panel interior animado con GSAP
  (`height: 0 ↔ auto`). El `padding` y el `min-height` de la fila ahora son fijos.
- GSAP usa `overwrite: "auto"`, así que cambiar de fila cancela la animación en
  curso en vez de encolarla.
- La imagen y el velo pasaron de transiciones CSS a la misma línea de tiempo, con
  duraciones coherentes (0.5 / 0.6 / 0.45 s) en lugar de 500 ms contra 700 ms.
- `onPointerEnter` reemplaza a `onMouseEnter`: ignora punteros que no sean ratón
  (en táctil manda el toque) y se desestima mientras Lenis reporta `isScrolling`.
- Se conservan `onClick`, `onFocus` y `aria-expanded`: el control por teclado
  sigue intacto.
- La primera pasada y `prefers-reduced-motion` se resuelven con duración 0.

### Lenis 1.3.26

Instancia única en `app/shared/lib/smooth-scroll.tsx`, montada desde `root.tsx`.

- `syncTouch: false` (valor por omisión): en móvil el scroll táctil queda nativo.
- `lerp: 0.12` en lugar de `duration`: el desplazamiento sigue el delta real del
  dispositivo, de modo que el impulso de un trackpad no se siente desfasado.
  `duration` y `lerp` son excluyentes en Lenis.
- `allowNestedScroll: true`: la rueda sobre un contenedor con scroll propio lo
  desplaza a él y no a la página.
- `gestureOrientation: "vertical"` (valor por omisión): no captura gestos
  horizontales del trackpad.
- `respectReducedMotion: true` (valor por omisión): con `prefers-reduced-motion`
  Lenis deja de suavizar y los saltos programáticos se vuelven inmediatos.
- `autoRaf: false` + `gsap.ticker` con `lagSmoothing(0)`: un solo bucle de
  animación, en el orden que ScrollTrigger necesita.
- `anchors: { offset: -68 }`: los enlaces con hash se detienen bajo el
  encabezado sticky de 68 px.
- `stopInertiaOnNavigate: true`: al navegar se corta la inercia y
  `<ScrollRestoration />` de React Router recupera el control sin pelear.
- CSS de Lenis importado desde el paquete (`lenis/dist/lenis.css`).

En `app.css` se eliminó `scroll-behavior: smooth` (competía con Lenis) y el
`overflow-x` del `body` pasó de `hidden` a `clip`: `hidden` convierte al `body`
en contenedor de scroll y rompe a Lenis.

## 3. Archivos relevantes

- `app/app.css`
- `app/root.tsx`
- `app/shared/lib/smooth-scroll.tsx` (nuevo)
- `app/features/home/GroupServicesSection.tsx`
- Barrido de color: layout, pie, encabezado y páginas de inicio, nosotros,
  servicios, contacto y empresas.
- `.claude/launch.json` (nuevo, solo conveniencia de previsualización)
- `package.json`: se añadió `lenis@1.3.26`.

## 4. Verificación ejecutada

```powershell
npm run typecheck   # sin errores
npm run build       # cliente y servidor compilados
```

Comprobación en el navegador sobre `http://localhost:5173`:

- `document.documentElement.className === "lenis"`, `window.lenisVersion === "1.3.26"`.
- `getComputedStyle(document.body).backgroundColor === "rgb(29, 36, 51)"`.
- Al activar la cuarta especialidad: `height: auto`, `opacity: 1`, imagen en
  `scale(1.04)` / `opacity: 0.72`; las otras tres en `height: 0px`.
- Navegación a `/nosotros`: `scrollY === 0`, sin errores en consola.

**No se hizo revisión estética.** Falta validación humana del nuevo fondo contra
los assets aprobados y de la sensación real del scroll en un trackpad y en un
teléfono.

## 5. Gotchas

Nuevo: **G04 — Lenis y el scroll del documento** (ver `docs/GOTCHAS.md`).

## 6. Siguiente paso

1. Revisión humana del fondo `#1d2433` y de la rampa completa contra los assets
   de marca; ajustar `egd-raised` y `egd-panel` si el contraste no convence.
2. Revisar `HomeContactSection` y las tarjetas claras: el contraste del texto
   sobre `egd-bone` cambió de referencia al mover el neutro oscuro.
3. Continuar con las correcciones pendientes que indique el cliente.
