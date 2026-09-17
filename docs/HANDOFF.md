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

`CompanyStackSection` y `GroupServicesSection` fueron rediseñados con una
referencia visual proporcionada por el cliente: retícula asimétrica de empresas y
lista editorial de especialidades, respectivamente. Los patterns de las tres
marcas disponibles se emplean tanto en sus páginas como dentro de la retícula
corporativa. El hero de Nosotros utiliza el asset de Grupo EGD sin pattern.

`GroupStatementSection` conserva la composición editorial original sin la columna
ni línea lateral derecha. `GroupServicesSection` es interactiva: al pasar el cursor, enfocar o activar una
fila, la fila se expande y muestra descripción y fotografía nítida. La fotografía
debe fundirse explícitamente con `#111214`: el
velo es sólido en los extremos y se vuelve más transparente hacia el centro. Se
debe preservar el control de teclado si se ajusta esta interacción. `hero-nosotros-taller.png` es exclusivo de Nosotros y no debe
reutilizarse en otra composición.

## Siguiente paso recomendado

1. Define el inventario de contenido por ruta: titular, texto, CTA, fotografías,
   servicios, datos de contacto y responsable de aprobación. Sirve para reemplazar
   el scaffold por contenido real sin inventarlo.
2. Confirma las licencias y formatos web de las tipografías de cada marca. Si no
   hay licencia, selecciona un fallback con el equipo de diseño antes de cargar
   una fuente alternativa.
3. Haz una revisión visual humana del layout base cuando se agregue el primer
   sistema visual. La validación debe comparar contra los assets aprobados.

## Decisión vigente sobre CENTUR

No existe brandbook de CENTUR Blindajes. El equipo autorizó una personalidad
provisional, segura, sobria y técnica. El isotipo/logotipo disponible se puede usar;
la hipótesis visual queda documentada en `docs/BRANDING.md`.

## Comandos de verificación

```powershell
npm run typecheck
npm run build
```
