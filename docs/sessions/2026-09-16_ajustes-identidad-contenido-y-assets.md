# Sesión — ajustes de identidad, contenido y assets

## Objetivo

Actualizar la identidad compartida, ampliar las páginas de marca y preparar un
inventario inicial de fotografía horizontal para composiciones a sangre.

## Cambios

- Se sustituyó el texto de Grupo EGD por `logotipo-grupoegd.svg` en navegación y
  pie de página, y se añadió el enlace Inicio.
- Se crearon cuatro fotografías horizontales sin texto ni logotipos para los
  héroes y una sección de detalle. Se almacenan en `public/images/` por marca.
- Se usaron los patterns SVG proporcionados por Enlace GD, EGD Aftersale y EB
  Cars como capas decorativas de baja opacidad.
- Se corrigió el contexto de scroll de la navegación para que conserve su
  comportamiento sticky, se redujo su logotipo y se alineó el control Empresas.
- Se unificó la tipografía global en Manrope y se rediseñó el manifiesto de
  Inicio con jerarquía editorial y una lista de especialidades.
- Se movió el indicador editorial de `GroupStatementSection` al extremo derecho;
  se rediseñaron las secciones de empresas y especialidades de Inicio, el hero de
  Nosotros y el pie de página a partir de las referencias visuales entregadas.
- Se amplió el copy de Enlace GD y EGD Aftersale; este último incorpora PPF,
  recubrimiento cerámico, polarizado premium, detallado, mecánica y restauración
  que figuran en el sitio público de EGD Automóviles.
- Se generó `public/images/grupo-egd/hero-nosotros-taller.png` para evitar repetir
  el hero de Inicio en Nosotros. El manifiesto redujo el titular y trasladó su
  contexto a subtítulos; la lista de especialidades ahora expande cada fila con
  hover, foco o clic y revela fotografía y pattern de marca cuando existe.
- Se amplió el contenido de Enlace GD y CENTUR a partir de sus sitios públicos;
  se mantuvieron fuera precios, disponibilidad y datos de contacto no aprobados.
- Se generaron cuatro fotografías exclusivas para las especialidades de Inicio.
  En la fila activa, un velo CSS del mismo color de fondo se vuelve totalmente
  opaco en ambos laterales y se abre de forma gradual hacia el centro, sin aplicar
  desenfoque a la imagen. Se retiraron todos los patterns renderizados del sitio
  a petición del cliente; los SVG fuente permanecen intactos hasta contar con una
  indicación concreta de ubicación.
- Se replanteó EB Cars como una composición editorial de cuatro piezas: promesa,
  interior de vehículo, esencia de servicio y CTA, con el fondo azul profundo y
  acentos dorados de la referencia aprobada.

## Fuentes consultadas

- https://www.egdautomoviles.com/ — categorías públicas y propuesta de compra y
  venta de unidades.
- https://centursecurity.com/ — trayectoria, materiales certificados, niveles de
  blindaje y mantenimiento especializado.

## Pendiente

- Validación humana de la fotografía generada y sustitución por fotografía final
  aprobada cuando esté disponible.
- Confirmar brandbook y pattern oficial de CENTUR Blindajes.
- Ejecutar revisión visual en desktop y móvil después de la validación técnica.
