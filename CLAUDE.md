# CLAUDE.md — Grupo EGD

Guía operativa para Claude Code. Lee primero `AGENTS.md`: sus reglas de secretos,
idioma, documentación, contenido y commits también son obligatorias aquí.

> `AGENTS.md` y `CLAUDE.md` comparten las reglas duras. Actualiza ambos si una
> regla cambia; un desajuste es un bug de documentación.

## 1. Arranque y cierre de cada sesión

1. Lee `docs/HANDOFF.md`, `docs/GOTCHAS.md`, la fase aplicable de `docs/PLAN.md`
   y `docs/ARQUITECTURA.md` si tocarás estructura.
2. Lee `docs/BRANDING.md` antes de tomar una decisión visual o de voz.
3. Consulta documentación oficial actual antes de usar APIs o convenciones de
   React Router 8, Tailwind CSS 4, Vite, schema.org o servicios externos.
4. Al terminar, crea una sesión en `docs/sessions/` y actualiza los documentos
   que el cambio afecte.

## 2. Secretos, commits y verificación

- No leas `.env` ni sus variantes, no ejecutes `printenv` ni registres valores de
  entorno. Declara nombres en `.env.example` solamente cuando sea necesario.
- No agregues firmas, coautorías ni menciones de IA a commits. Commitea solo si lo
  pide una persona y nunca uses `--no-verify`.
- Ejecuta `npm run typecheck` y `npm run build` antes de declarar concluido un
  cambio de código. No presentes una inspección visual automatizada como aprobación
  estética; deja la revisión humana concreta en `docs/HANDOFF.md`.

## 3. Skills: cuál usar

| Situación | Skill |
| --- | --- |
| Convertir un brief Markdown en rutas, features y UI de marketing | `marketing-site-from-md` |
| Crear o rediseñar una interfaz de marketing | `frontend-skill` o `design-taste-frontend` |
| Auditoría completa de SEO y visibilidad para buscadores de IA | `audit` |
| Metadatos, headings, schema, sitemap, indexabilidad o enlaces | Skill `seo-*` específica del tema |
| Animación con GSAP aprobada | `gsap-react`, `gsap-core` y la skill específica necesaria |
| Revisión de seguridad solicitada | `security-best-practices` |

La skill más específica gana. Léela por completo antes de actuar. Para este sitio,
`marketing-site-from-md` define la estructura: rutas delgadas, features por área y
contenido editorial local cuando no exista reutilización real.

## 4. Convenciones específicas

- Usa rutas en minúsculas con guiones: `/empresas/enlace-gd`.
- Conserva las decisiones visuales en tokens y componentes; no codifiques paletas
  de las empresas en componentes ajenos a su feature.
- No inventes datos de contacto, precios, inventario, certificaciones, ubicaciones
  ni testimonios.
- El brandbook disponible cubre EB Cars, EGD Aftersale y Enlace GD. No diseñes la
  identidad de CENTUR hasta recibir su información aprobada.
