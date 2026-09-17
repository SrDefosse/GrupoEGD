# 2026-09-17 — Pasada de diseño: quitar retículas repetidas

## 1. Objetivo

El cliente interno señaló que `BusinessSolutionsSection` repetía el diseño de la
página de Servicios, y que dentro de Servicios había dos secciones iguales.
Aprovechar para una pasada de diseño a todo el sitio.

**Lectura del encargo:** sitio corporativo de un grupo automotriz premium, para
comprador particular y para decisor empresarial, con lenguaje institucional
sobrio, sobre Tailwind v4 + Manrope + GSAP contenido.

**Modo:** rediseño con preservación. La marca (rampa `egd-*`, acentos por
empresa, Manrope), la arquitectura de nueve rutas de `Alcance.md` y la voz de los
brandbooks no se tocan. Se interviene composición, ritmo y densidad.

**Dials:** el sitio existente leía variación 6 / movimiento 5 / densidad 4. Al
preservar, quedan en **variación 7 / movimiento 6 / densidad 4**.

## 2. Diagnóstico

El problema no eran dos secciones. Era que cuatro familias de retícula se
repetían catorce veces:

| Familia | Dónde se repetía |
| --- | --- |
| Lista de filas con flecha | Servicios (áreas) y `BusinessSolutionsSection`, una debajo de la otra |
| Tarjeta `rounded-xl border-white/15 bg-white/[0.04]` | 7 archivos: procesos, valores, misión/visión, estándares, líneas, navegación entre empresas |
| Tres tarjetas iguales en fila | `StandardsSection`, `CompanySwitchSection`, líneas de Aftersale |
| Zigzag imagen/texto | `CompanyGridSection`, cuatro veces seguidas |

Además: 32 rótulos en versalitas o `text-white/45` sobre los titulares, guiones
largos en textos visibles, puntos de color decorativos en cada fila de servicio,
etiquetas superpuestas sobre las fotografías de EB Cars, y filetes bajo cada fila
de listas largas.

## 3. Cambios

### Familias de retícula, una por sección y por página

- **`BusinessSolutionsSection`** tiene ahora dos formas. En Inicio es una tira de
  cuatro columnas con filete, sin tarjetas, porque las empresas ya aparecen en
  tarjetas justo arriba. En Empresas y Servicios es una retícula asimétrica de
  cuatro celdas (7/5 y 5/7), dos con fotografía y dos con el color de la marca.
- **Servicios** conserva el directorio de filas, que ahora no compite con nada.
- **`CompanyGridSection`** dejó el zigzag y es un índice de entradas apiladas del
  mismo lado, con la fotografía en pequeño y el peso en la tipografía.
- **`StandardsSection`** pasó de tres tarjetas a tres enunciados en tipografía
  grande con sangrado progresivo.
- **`CompanySwitchSection`** pasó de tres tarjetas a filas con filete.
- **Líneas de Aftersale**: de tres tarjetas iguales a una celda grande con
  fotografía más dos apiladas.
- **Proceso** de Enlace GD y EB Cars: de cuatro tarjetas a una tira numerada bajo
  un filete de color de marca, en `CompanyProcessSection` compartido.
- **Nosotros**: misión, visión y valores salieron de las tarjetas y quedaron en
  tipografía sobre filetes. El cierre dejó de ser otro split imagen/texto y es
  una lista de las cuatro empresas, que además refuerza la navegación cruzada.

Ninguna página usa dos veces la misma familia.

### Contenido duplicado

`CompanyOverviewSection` recibió `mostrarServicios`. En Aftersale se apaga: sus
nueve servicios ya se desarrollan en la sección de líneas, y listarlos dos veces
repetía contenido además de retícula.

### Rótulos, guiones y adornos

- Los rótulos sobre titulares bajaron a un máximo de tres por página, que es el
  cupo para páginas de ocho o nueve secciones. Lo que se quitó no se sustituyó:
  el titular solo alcanza.
- Cero guiones largos en texto visible. `PPF — Paint Protection Film` quedó como
  `PPF, película protectora de pintura`.
- Fuera los puntos de color decorativos de las listas de servicio.
- Fuera las etiquetas superpuestas sobre las fotografías de EB Cars y la tira
  decorativa en versalitas de su tarjeta de cierre.
- El encabezado de `CompanyStackSection` dejó de ser «titular a la izquierda,
  párrafo pequeño flotando a la derecha» y quedó apilado.

### Un rótulo por intención

`Hablemos` y `Contactar a Grupo EGD` pasaron a `Contacto`, que ya era el rótulo
del encabezado. `Plantear un proyecto` se conserva solo en el bloque B2B, que se
dirige a otra audiencia.

### Corrección de responsivo

A 320 px (el `min-width` declarado en `app.css`) el logotipo del encabezado medía
228 px y empujaba el botón de Contacto fuera del viewport. Se le puso tope de
ancho hasta `sm` y el botón ya no se encoge.

## 4. Verificación ejecutada

```powershell
npm run typecheck   # sin errores
npm run build       # cliente y servidor compilados
```

En `http://localhost:5173`:

- Las nueve rutas responden 200.
- Sin desbordamiento horizontal a 320 px ni a 1280 px.
- Ningún CTA envuelve a dos líneas en escritorio (medido con `Range.getClientRects`).
- La retícula B2B rinde cuatro celdas en dos filas, 695/493 y 493/695, dos con
  fotografía: tantas celdas como elementos, sin huecos.
- Cero guiones largos en el texto renderizado.

**No se hizo revisión estética.** La composición se validó por estructura y
medición, no por criterio visual humano.

## 5. Pendiente

Sigue abierto lo de la sesión anterior: material de CENTUR y de EB Cars, datos de
contacto por confirmar, misión y visión por aprobar, y la paleta de la página de
EB Cars, que no corresponde a su brandbook.
