# Handoff

## Dónde estamos

Se creó la guía del repositorio y se inició el scaffold de arquitectura para las
nueve rutas declaradas en `Alcance.md`.

Inicio ya incluye un hero editorial sin imagen, navegación con dropdown de
empresas y una galería 4:5 animada con GSAP. No se deben usar imágenes full bleed
en heroes hasta recibir assets adecuados.

El dropdown se cierra al hacer clic fuera, al seleccionar una empresa y ante un
cambio de ruta. Los títulos se redujeron para mantener una lectura más contenida.

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
