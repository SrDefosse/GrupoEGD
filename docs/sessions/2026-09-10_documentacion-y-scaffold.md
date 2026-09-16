# Sesión — documentación y scaffold inicial

## Objetivo

Preparar la guía de colaboración y la arquitectura inicial del sitio corporativo
de Grupo EGD a partir de `Alcance.md` y `Brandings_Grupo_EGD.md`.

## Decisiones

- Se adopta React Router 8 con rutas delgadas y features por página/empresa.
- La navegación usa URLs minúsculas con guiones bajo `/empresas`.
- El contenido queda local a las secciones hasta que exista reutilización real.
- CENTUR Blindajes recibe un feature y una ruta, pero no decisiones visuales hasta
  recibir su brandbook.
- Se sustituyó el README del template por una entrada al proyecto y sus documentos.

## Pendientes

- Obtener assets, contenido aprobado y brandbook de CENTUR.

## Verificación

- `npm run typecheck` — correcto.
- `npm run build` — correcto; React Router generó los bundles de las nueve rutas.

## Continuación - dirección visual inicial

- Se implementó Inicio con assets locales, fuentes autoalojadas y una secuencia
  sticky con GSAP para presentar las cuatro empresas.
- Se agregó `ssr.noExternal: ["gsap"]` a Vite para que el paquete se incluya en el
  bundle SSR.
- CENTUR queda con una personalidad provisional, autorizada por el equipo, hasta
  que exista un manual de marca.
- Se retiró la imagen del hero por no contar con assets en proporción apropiada.
  Las fotos existentes se limitan a composiciones 4:5 y la presentación de
  empresas dejó de usar tarjetas solapadas.
- La navegación se volvió sticky y su dropdown de empresas responde a clic fuera,
  navegación y cambio de ruta. Se ampliaron las secciones de Inicio con módulos de
  experiencia y principios, y se redujo la escala tipográfica general.
- La tipografía de títulos de Grupo EGD pasó de Panchang a Manrope para un tono
  corporativo, contemporáneo y más sobrio.
- Las páginas de las empresas se diferenciaron: Enlace GD tiene narrativa
  editorial con parallax; Aftersale usa servicios revelados; EB Cars utiliza un
  mosaico dinámico; CENTUR emplea una composición técnica de líneas y parallax.
