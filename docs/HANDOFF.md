# Handoff

## Dónde estamos

Se creó la guía del repositorio y se inició el scaffold de arquitectura para las
nueve rutas declaradas en `Alcance.md`.

Inicio ya incluye un hero editorial sin imagen, navegación con dropdown de
empresas y una galería 4:5 animada con GSAP. No se deben usar imágenes full bleed
en heroes hasta recibir assets adecuados.

El dropdown se cierra al hacer clic fuera, al seleccionar una empresa y ante un
cambio de ruta. Los títulos se redujeron para mantener una lectura más contenida.

La navegación y el pie ya utilizan `logotipo-grupoegd.svg`; la navegación incluye
Inicio. Se añadieron héroes a sangre y módulos de contexto para Enlace GD, EGD
Aftersale, EB Cars y CENTUR. Los nuevos assets generados viven en `public/images/`
por marca, sin sustituir los archivos fuente ya entregados. Los patrones aprobados
de Enlace GD, EGD Aftersale y EB Cars están preservados en sus carpetas, pero no
se renderizan por ahora. El cliente indicará su colocación antes de reintroducirlos.

La navegación es sticky y no debe colocarse dentro de un padre con `overflow`
que cree un contenedor de scroll. El layout usa `overflow-x-clip` para evitarlo.
El tipo global vigente es Manrope y `GroupStatementSection` es la composición
editorial de visión y especialidades de Inicio.

En móvil, `SiteHeader` muestra un botón hamburguesa que abre una barra lateral
animada. Incluye enlaces generales, las cuatro empresas y Contacto; se cierra al
navegar, al pulsar el velo, con Escape o con el botón X. El panel usa
`data-lenis-prevent` para que su desplazamiento propio no interfiera con Lenis.

`CompanyStackSection` y `GroupServicesSection` fueron rediseñados con una
referencia visual proporcionada por el cliente: retícula asimétrica de empresas y
lista editorial de especialidades, respectivamente. Los patterns de las tres
marcas disponibles se emplean tanto en sus páginas como dentro de la retícula
corporativa. El hero de Nosotros utiliza el asset de Grupo EGD sin pattern.

`GroupStatementSection` conserva la composición editorial original sin la columna
ni línea lateral derecha. `GroupServicesSection` es interactiva: al pasar el cursor, enfocar o activar una
fila, la fila se expande y muestra descripción y fotografía nítida. La fotografía
debe fundirse explícitamente con el fondo base `egd-base`: el
velo es sólido en los extremos y se vuelve más transparente hacia el centro. Se
debe preservar el control de teclado si se ajusta esta interacción. `hero-nosotros-taller.png` es exclusivo de Nosotros y no debe
reutilizarse en otra composición.

## Contenido: fuentes únicas

`app/shared/content/grupo.ts` guarda los datos institucionales (dirección,
horarios, teléfonos, correos, redes, cifras, misión, visión, valores) y
`app/features/empresas/companies.ts` la ficha de cada empresa. El encabezado, el
pie, la retícula de Inicio, el índice de Empresas, las cuatro páginas de empresa
y el mapa B2B leen de ahí. No dupliques estos datos en un componente.

Lo verificado se transcribió de `egdautomoviles.com` el 2026-09-17; la filosofía
sale de los brandbooks; misión, visión, valores y los textos «para empresas» son
borrador nuestro. Qué falta confirmar está en `docs/GOTCHAS.md` (G05) y en la
sesión `2026-09-17_contenido-de-empresas-b2b-y-reticula.md`.

## Estructura de una página de empresa

Cada empresa responde, en este orden, a lo que pidió el cliente: hero, qué hace,
servicios, qué tipo de autos vende (si comercializa unidades), proceso,
filosofía, para empresas, galería y navegación a las otras tres.

`CompanyOverviewSection` es **una sola sección** con dos bloques: «Qué hace» con
fotografía a la derecha y, debajo, «Servicios» en tarjetas con icono. Acepta `imagen` para no repetir la
del hero, `leyenda` para el acento editorial sobre la foto, y `mostrarServicios`
para apagarlo donde la página ya desarrolla los servicios aparte.

Cada servicio declara una clave de icono en `companies.ts` (`ServicioIcono`); el
mapa a componentes de Phosphor vive en `CompanySections.tsx`. Si agregas un
servicio, agrégale su clave. Con un número impar, la última tarjeta ocupa la fila
completa para no dejar una celda vacía.

## Muro de marcas del catálogo

`CompanyCatalogSection` rinde las marcas como marcas denominativas, no como
logotipos: no hay assets aprobados. Para activar uno, coloca el SVG en
`public/marcas/` y regístralo en `logotiposDeMarca`, dentro de
`CompanySections.tsx`, con el nombre exacto que usa `companies.ts`.

No traigas los logotipos de un CDN de terceros. Son marcas registradas de otras
empresas y conviene que el cliente decida qué se publica y con qué permiso. De
paso: Simple Icons no tiene Mercedes-Benz, Land Rover, Jaguar ni GMC, así que ese
camino dejaría cuatro huecos.

**La ubicación no va en las páginas de empresa.** Las cuatro comparten hoy la
sede del grupo, así que el bloque se repetía idéntico cinco veces. Vive solo en
Nosotros (la composición «León, Guanajuato») y en Contacto (dirección, horarios
y canales). El cliente pidió ubicaciones por empresa: cuando entregue direcciones
propias habrá que reponer algo ahí, y el campo `ubicacionPropiaPorConfirmar` de
`companies.ts` sigue marcando a quién le falta.
Los bloques compartidos viven en `app/features/empresas/CompanySections.tsx` y
reciben el color de marca por `company.accent`, en línea.

El caso B2B —cómo el grupo atiende a una agencia o una flotilla, y con qué
empresa se resuelve cada necesidad— está en `BusinessSolutionsSection` y aparece
en Inicio, Empresas y Servicios. Se resolvió dentro de las nueve páginas
contratadas en `Alcance.md`; no se abrió una ruta nueva.

## Fondo base y rampa de superficie

El color de fondo principal es `#1d2433`, declarado como token `egd-base` en
`app/app.css`. La rampa completa (`egd-deep`, `egd-base`, `egd-raised`,
`egd-panel`, `egd-ink`, `egd-bone`, `egd-accent`) reemplazó a los hex neutros que
estaban repartidos por los componentes. Usa los tokens, no hex nuevos; las
paletas de marca siguen dentro de su feature.

## Scroll suave

El sitio usa Lenis 1.3.26 desde `app/shared/lib/smooth-scroll.tsx`, con scroll
táctil nativo en móvil e interpolación por `lerp` para que el trackpad no se
sienta desfasado. Las restricciones que impone están en `docs/GOTCHAS.md` (G04).

La animación de `GroupServicesSection` la controla GSAP: el alto lo produce un
solo panel interior (`height: 0 ↔ auto`) y el hover se ignora mientras Lenis
reporta `isScrolling`, porque la página desplazándose bajo un cursor quieto
disparaba `pointerenter` en filas que nadie señaló.

## Siguiente paso recomendado

1. Define el inventario de contenido por ruta: titular, texto, CTA, fotografías,
   servicios, datos de contacto y responsable de aprobación. Sirve para reemplazar
   el scaffold por contenido real sin inventarlo.
2. Confirma las licencias y formatos web de las tipografías de cada marca. Si no
   hay licencia, selecciona un fallback con el equipo de diseño antes de cargar
   una fuente alternativa.
3. Haz una revisión visual humana del layout base cuando se agregue el primer
   sistema visual. La validación debe comparar contra los assets aprobados.
4. **Pendiente de revisión humana (2026-09-17):** el fondo `#1d2433` y su rampa
   se validaron solo por código. Falta aprobar el contraste de `egd-raised` y
   `egd-panel` contra los assets de marca, el contraste del texto en las
   secciones claras (`egd-bone`), y probar la sensación del scroll suave en un
   trackpad real y en un teléfono. También falta revisar el rediseño de la
   retícula de empresas y las páginas de empresa ampliadas.
5. **Pendiente del cliente (2026-09-17):** confirmar datos de contacto; aprobar
   misión, visión y valores; entregar material de CENTUR (niveles,
   certificaciones, proveedores) y de EB Cars (inventario, precios, dirección);
   y definir si cada empresa tiene dirección propia. La página de EB Cars ya usa
   su azul de brandbook `#00568E`, documentado en `docs/BRANDING.md`.

## Decisión vigente sobre CENTUR

No existe brandbook de CENTUR Blindajes. El equipo autorizó una personalidad
provisional, segura, sobria y técnica. El isotipo/logotipo disponible se puede usar;
la hipótesis visual queda documentada en `docs/BRANDING.md`.

## Comandos de verificación

```powershell
npm run typecheck
npm run build
```

## Regla de composición: una familia de retícula por sección

El sitio tuvo un problema de retículas repetidas (ver la sesión
`2026-09-17_pasada-de-diseno-anti-repeticion.md`). Al agregar una sección,
respeta estas reglas:

- Ninguna página repite una familia de retícula. Si ya hay una lista de filas con
  filete, la siguiente sección usa otra cosa: retícula asimétrica, cita
  destacada, tira numerada, banda a sangre o tipografía sobre filetes.
- Las tarjetas se usan solo cuando la elevación comunica jerarquía real. Por
  omisión, agrupa con `border-t`, filetes o aire. Una composición aprobada por el
  equipo manda sobre esta regla: ver «Composiciones aprobadas».
- Nada de tres tarjetas iguales en fila.
- Máximo tres rótulos en versalitas o `text-white/45` sobre titulares por página.
  Si el titular basta, no pongas rótulo.
- Cero guiones largos en texto visible. Usa coma, punto o paréntesis.
- Nada de puntos de color decorativos ni etiquetas superpuestas sobre fotografías.
- Un solo rótulo por intención de CTA. El contacto general se llama `Contacto` en
  todo el sitio; `Plantear un proyecto` es exclusivo del bloque B2B.

## Composiciones aprobadas por revisión humana

Estas quedaron validadas visualmente por el equipo. No las rediseñes en una
pasada general; si un cambio las afecta, consúltalo antes.

- **Nosotros, «El valor está en la conexión entre especialidades»** (2026-09-17):
  rótulo «Nuestra esencia», titular y dos párrafos a la izquierda con la llamada
  «Conoce más»; a la derecha, fotografía dominante con un panel que la monta por
  el costado. El montaje solo existe a partir de `lg`. Aprobada contra mockup.
  (Una versión anterior de esta línea daba por aprobada la composición de cifras
  20 / 4 / 1; fue un error de lectura y quedó sustituida por esta.)
- **EB Cars, hero** (2026-09-17): dos mitades a sangre, sin contenedor. La
  fotografía llega al borde del viewport y el titular vive en un bloque amarillo
  `#F7E045` que monta sobre ella. Las otras tres empresas usan foto a sangre con
  velo y texto encima; esta parte la composición y deja que el color trabaje.
  El titular va en Michroma vía el token `--font-eb-cars`: es muy ancha, úsala
  solo en titulares cortos. El amarillo y el gris `#26272C` son de su brandbook.
- **Contacto** (2026-09-17): primero el formulario, después la información. Los
  seis canales se agrupan por propósito en tarjetas (ubicación, ventas, oficina,
  administración, redes) en lugar de seis filas con filete.
- **Enlace GD, banda de pilares y bloque «Qué hace» / «Servicios»**
  (2026-09-17): tres pilares con icono sobre el azul `#1a2368`, y el bloque de
  qué hace con fotografía y leyenda más las tarjetas de servicio. Aprobados
  contra mockup. El bloque es compartido, así que también rige en las otras tres
  empresas.
- **Nosotros, misión, visión y valores** (2026-09-17): dos tarjetas de igual
  ancho arriba y cuatro tarjetas con icono abajo, sobre un degradado sutil y con
  una fotografía tenue sangrando por la esquina superior derecha. Aprobada
  contra mockup. Es la excepción a la regla de «no tarjetas por omisión».
