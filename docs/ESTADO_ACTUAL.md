# Estado actual

Actualizado: 2026-09-16.

El repositorio usa React Router 8. Inicio y el layout compartido ya cuentan con
dirección visual, fuentes autoalojadas, assets locales y recorrido con GSAP. Las
otras ocho rutas conservan su scaffold inicial. `typecheck` y `build` finalizaron
correctamente; no hay formulario funcional ni configuración de publicación.

La navegación es sticky e incluye un menú controlado de empresas. Inicio contiene
hero sin imagen, galería 4:5, experiencia, servicios, principios y CTA final.

Las cuatro páginas de empresas tienen composiciones propias, assets 4:5 y
animaciones GSAP de baja intensidad para texto, imagen y scroll.

La página de EB Cars ya usa el azul principal de su brandbook (`#00568E`) como
fondo, con gris oscuro y amarillo de la misma paleta para los contrastes.

La navegación móvil incluye un menú hamburguesa que abre un panel lateral con
enlaces generales, empresas y Contacto. El panel se anima con GSAP y respeta la
preferencia de movimiento reducido.

La fuente de alcance define nueve páginas. Los brandbooks disponibles cubren tres
de las cuatro empresas; CENTUR Blindajes sigue pendiente.

Se integró el logotipo de Grupo EGD en la navegación y el pie de página, junto con
el enlace de Inicio. Inicio, Enlace GD, EGD Aftersale y CENTUR ahora utilizan
fotografía horizontal a sangre; los assets generados se guardan separados en
`public/images/` y los originales de marca permanecen intactos. Enlace GD, EGD
Aftersale, EB Cars y CENTUR incluyen nuevas secciones de contexto; la información
de Enlace GD y CENTUR se contrastó contra sus sitios públicos el 2026-09-16.

La navegación se mantiene sticky fuera de cualquier contenedor con scroll, usa un
logotipo reducido y alinea el control Empresas con los otros enlaces. La familia
tipográfica global es Manrope, como en Inicio. La sección de manifiesto de Inicio
se rediseñó con una composición editorial de visión y especialidades.

Inicio ahora cuenta con una retícula editorial para las empresas y una lista de
especialidades con Blindaje como servicio destacado. El hero de Nosotros integra
fotografía y una capa de pattern; el pie de página contiene enlaces rápidos y a
cada empresa. El contenido de EGD Aftersale se amplió con sus servicios públicos
de protección XPEL, detallado, mecánica y restauración estética.

El manifiesto de Inicio redujo su titular y trasladó la explicación a subtítulos.
La lista de especialidades revela por hover, foco o clic una imagen de fondo y
texto detallado; los patterns de las marcas se muestran con mayor presencia en
estas capas. Nosotros usa una fotografía exclusiva de trabajo en taller, distinta
del hero de Inicio.
