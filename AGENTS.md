# AGENTS.md — Grupo EGD

Reglas para cualquier agente o persona que trabaje en este repositorio. Si usas
Claude Code, lee también `CLAUDE.md`. Este archivo prevalece sobre suposiciones;
los documentos de `docs/` prevalecen sobre este archivo en el detalle.

> `AGENTS.md` y `CLAUDE.md` comparten las reglas duras. Si una cambia, replica el
> cambio en ambos archivos dentro de la misma modificación.

## 0. Qué es este proyecto

Sitio corporativo de **Grupo EGD**, un grupo automotriz que reúne Enlace GD, EGD
Aftersale & Detailing Center, EB Cars y CENTUR Blindajes. Es un sitio de marketing
orientado a presentar al grupo, dar contexto a sus empresas y generar contactos.

Stack inicial: React Router 8, React 19, TypeScript, Vite y Tailwind CSS 4.

## 1. Lee esto antes de cambiar código

1. `docs/HANDOFF.md` — punto de continuación y pendientes.
2. `docs/ESTADO_ACTUAL.md` — estado comprobado del repositorio.
3. `docs/PLAN.md` — plan por fases y avance.
4. `docs/GOTCHAS.md` — trampas conocidas; su lectura es obligatoria.
5. `docs/ARQUITECTURA.md` — estructura, rutas y responsabilidades.
6. `docs/BRANDING.md` — decisiones de identidad y huecos de información.
7. `docs/sessions/` — bitácora; lee primero la sesión más reciente.

No escribas código sin haber leído al menos 1, 4 y el documento de la fase que
vayas a tocar.

## 2. Reglas duras

- **No asumas:** antes de usar una API, dependencia, convención de React Router,
  Tailwind o requisito SEO, consulta la documentación oficial actual.
- **Nunca leas credenciales:** no abras, imprimas ni registres `.env`,
  `.env.local`, `.env.production`, archivos de llaves ni variables de entorno.
  Trabaja únicamente con nombres de variables documentados en `.env.example`.
- **Español de México:** la interfaz, documentación, comentarios y commits se
  escriben en español mexicano con tuteo. No uses voseo.
- **No inventes contenido comercial:** `Alcance.md` solo define estructura. El
  contenido aprobado llega de Grupo EGD/Inside Out; usa placeholders claramente
  marcados mientras falte información.
- **Marca por empresa:** no mezcles paletas, tipografías, voz ni recursos de una
  empresa con otra. CENTUR requiere brandbook antes de fijar decisiones visuales.
- **Accesibilidad y SEO son requisitos base:** HTML semántico, una jerarquía de
  encabezados coherente, navegación por teclado, alternativas textuales y metadatos
  por ruta, desde el primer componente.
- **No agregues una capa `data/` global por inercia:** el contenido de uso único
  vive junto a la sección; extrae solo lo que realmente se reutilice.
- **No hagas commits por iniciativa propia.** Cuando se soliciten, escribe el
  mensaje en español y no incluyas menciones a modelos, IA o coautorías.

## 3. Cómo construimos

- Las rutas URL viven en `app/routes/`; cada una es delgada y compone una página
  de `app/features/`.
- El código específico de negocio vive en `app/features/<area>/`.
- `app/shared/ui/` contiene únicamente primitivas reutilizadas; `shared/layout/`
  contiene el cascarón global; `shared/lib/` utilidades sin UI.
- Una sección debe tener una responsabilidad clara. Evita componentes de una sola
  línea y evita convertir cada párrafo en un componente.
- No sustituyas fotografía o assets aprobados por imágenes generadas sin que se
  solicite. Las imágenes de contenido deben ser elementos `<img>`/`<picture>`
  accesibles, no fondos CSS que oculten contenido relevante.
- La verificación técnica mínima es `npm run typecheck` y `npm run build`. El
  juicio estético final corresponde a la persona responsable del diseño; anota la
  revisión humana pendiente en `docs/HANDOFF.md` cuando aplique.

## 4. Documentación por sesión

Toda sesión que cambie archivos deja una nota en `docs/sessions/` usando su
`README.md` como plantilla. Actualiza además lo que corresponda:

- `docs/ESTADO_ACTUAL.md` al cambiar el estado real.
- `docs/PLAN.md` al avanzar una fase.
- `docs/GOTCHAS.md` al descubrir una trampa repetible.
- `docs/HANDOFF.md` para que la siguiente sesión continúe sin contexto perdido.
- `docs/ARQUITECTURA.md` al cambiar rutas, límites o convenciones.
- `docs/BRANDING.md` cuando llegue o cambie una decisión de marca.

Una decisión, supuesto o gotcha sin documentar es trabajo incompleto.
