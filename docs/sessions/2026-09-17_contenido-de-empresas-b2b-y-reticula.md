# 2026-09-17 — Contenido de empresas, caso B2B y rediseño de la retícula

## 1. Objetivo

Revisar la alineación del sitio con lo que pidió el cliente, ampliar el
contenido de las cuatro empresas con información real, y rediseñar
`CompanyStackSection`.

Palabras del cliente que sirven de criterio:

1. Grupo EGD presenta sus negocios: quiénes somos, de dónde somos, misión,
   visión, multimedia.
2. Cada empresa debe decir qué hace, dónde está, qué tipo de autos vende y cuál
   es su filosofía.
3. Debe entenderse cómo el grupo ayuda a un cliente empresarial —por ejemplo un
   grupo de agencias de autos nuevos—: si necesitan blindar, es CENTUR; si
   necesitan postventa, es Aftersale.
4. Cada página debe poder llevar al usuario a las páginas de las otras empresas.

## 2. Fuentes consultadas

- `egdautomoviles.com` (sitio vigente del cliente), 2026-09-17: nosotros,
  contacto, catálogo, vende-tu-auto, aftersales y blindaje.
- `Brandings_Grupo_EGD.md`: Golden Circle, arquetipo y voz de las tres marcas
  con brandbook.
- `Alcance.md`: nueve páginas contratadas.

Hallazgos relevantes del sitio vigente: 20 años de experiencia en el segmento
premium; sede en León, Guanajuato; catálogo con 19 marcas y cinco categorías;
XPEL como proveedor de protección en Aftersale. La página de blindaje del sitio
vigente está en *lorem ipsum*: **no hay información publicada de CENTUR**.

## 3. Cambios

### Fuentes únicas de contenido

- `app/shared/content/grupo.ts`: dirección, horarios, teléfonos, correos, redes,
  cifras, misión, visión y valores.
- `app/features/empresas/companies.ts`: ficha completa por empresa —categoría,
  promesa, qué hace, servicios, filosofía, caso B2B, catálogo y bandera
  `ubicacionPropiaPorConfirmar`.

El encabezado y el pie dejaron de mantener su propia lista de empresas y ahora
leen de `companies.ts`.

### Bloques compartidos de empresa

`app/features/empresas/CompanySections.tsx` aporta seis bloques que responden
uno a uno a lo que pidió el cliente: qué hace, qué tipo de autos vende,
filosofía, para empresas, dónde estamos, y navegación a las otras empresas. El
color de marca entra por `company.accent` y se aplica en línea, de modo que
ninguna paleta de empresa queda escrita dentro de un componente compartido.

### Páginas de empresa

Las cuatro pasaron de dos o tres secciones a siete u ocho: se sumaron qué hace,
servicios, filosofía, para empresas, ubicación, galería y navegación cruzada.
Enlace GD y EB Cars ganaron además catálogo y proceso paso a paso; EGD Aftersale
sus tres líneas de trabajo; CENTUR los criterios con los que se define un nivel
de protección.

### Caso B2B

`BusinessSolutionsSection` mapea necesidad → empresa que la resuelve, y aparece
en Inicio, Empresas y Servicios. Se resolvió **dentro de las nueve páginas
contratadas**, sin abrir una ruta nueva.

### Rediseño de `CompanyStackSection`

La composición escalonada se leía como cuatro piezas sueltas y dejaba muy poco
espacio para explicar a qué se dedica cada empresa. Ahora son cuatro tarjetas de
igual altura y estructura, cada una con categoría, resumen, tres servicios y el
color de su marca en un degradado que aparece al pasar el cursor.

### Otros

- `CompanyGridSection` estaba en tema claro (`bg-white`, `bg-slate-200`), heredado
  del scaffold: no coincidía con el sitio. Se rehízo como índice editorial.
- `Nosotros`: quiénes somos, cifras, de dónde somos, misión, visión, valores y
  multimedia.
- `Servicios`: cada área declara qué empresa la ejecuta.
- `Contacto`: datos reales en lugar de solo el formulario.
- Las nueve rutas tienen `meta` con título y descripción. Antes solo la tuvo
  Inicio, y las otras ocho se servían con `<title>` vacío.
- Se eliminó `app/features/empresas/CompanyPage.tsx`, componente del scaffold que
  ya no importaba nadie.

## 4. Verificación ejecutada

```powershell
npm run typecheck   # sin errores
npm run build       # cliente y servidor compilados
```

En `http://localhost:5173`:

- Las nueve rutas responden; `document.title` y la meta descripción son los
  esperados en cada una.
- Ninguna imagen rota (`naturalWidth === 0`) en Inicio, Empresas, Nosotros y las
  cuatro páginas de empresa.
- A 375 px de ancho no hay desbordamiento horizontal.
- Sin errores de consola atribuibles al código; el único registro es el aviso de
  HMR del servidor de desarrollo.

**No se hizo revisión estética.** Falta validación humana del rediseño de la
retícula y de las páginas ampliadas.

## 5. Gotchas

Nuevo: **G05 — Origen del contenido de empresas y datos de contacto**.

## 6. Pendiente de confirmación del cliente

1. **Datos de contacto**: se transcribieron de `egdautomoviles.com`. Confirmar
   que siguen vigentes y si el sitio nuevo debe publicarlos tal cual.
2. **Misión, visión y valores**: son borrador nuestro a partir del Golden Circle.
3. **CENTUR**: no hay material. Faltan niveles de protección, certificaciones,
   normas y proveedores. Hoy la página explica *cómo se decide* un nivel, sin
   afirmar ninguno.
4. **EB Cars**: falta inventario real, rango de precios y dirección propia.
5. **Direcciones por empresa**: solo está confirmada la sede del grupo. Las demás
   muestran esa sede mientras `ubicacionPropiaPorConfirmar` sea `true`.
6. **Identidad de EB Cars**: la página usa una paleta verde azulada y dorada que
   no existe en su brandbook (azul `#00568E`, amarillo `#F7E045`). Decidir si se
   corrige o si la paleta actual está aprobada por otra vía.
7. **Multimedia**: hoy son fotografías de los brandbooks. Si el cliente quiere
   video o material propio, hay que pedirlo.
