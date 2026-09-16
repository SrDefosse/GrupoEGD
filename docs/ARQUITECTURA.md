# Arquitectura — Grupo EGD

## Principio organizador

El sitio se organiza por rutas y features, no por un directorio global de
componentes. Una ruta solo resuelve su URL y renderiza una página; la página
compone secciones de su feature. La UI compartida se extrae únicamente después de
demostrar reutilización.

## Mapa de rutas

| URL | Módulo de ruta | Feature |
| --- | --- | --- |
| `/` | `app/routes/home.tsx` | `features/home` |
| `/nosotros` | `app/routes/nosotros.tsx` | `features/nosotros` |
| `/empresas` | `app/routes/empresas.tsx` | `features/empresas` |
| `/servicios` | `app/routes/servicios.tsx` | `features/servicios` |
| `/contacto` | `app/routes/contacto.tsx` | `features/contacto` |
| `/empresas/enlace-gd` | `app/routes/empresas/enlace-gd.tsx` | `features/empresas/enlace-gd` |
| `/empresas/egd-aftersale` | `app/routes/empresas/egd-aftersale.tsx` | `features/empresas/egd-aftersale` |
| `/empresas/eb-cars` | `app/routes/empresas/eb-cars.tsx` | `features/empresas/eb-cars` |
| `/empresas/centur-blindajes` | `app/routes/empresas/centur-blindajes.tsx` | `features/empresas/centur-blindajes` |

## Árbol inicial

```text
app/
  features/
    contacto/
    empresas/
      egd-aftersale/
      eb-cars/
      enlace-gd/
      centur-blindajes/
    home/
    nosotros/
    servicios/
  routes/
    empresas/
  shared/
    layout/
    ui/
    lib/
```

## Límites

- Las secciones únicas mantienen su copy local.
- Las tarjetas de empresas se definen junto a `features/empresas`; su tipo se
  puede compartir con las páginas individuales solo cuando surja una necesidad
  real.
- `shared/layout` contiene navegación y footer. `shared/ui` no conoce ninguna
  empresa ni copy de negocio.
- Las imágenes aprobadas vivirán en `public/images/` conservando subcarpetas por
  empresa. No se han añadido assets de marca al scaffold.
- Los heroes no usan fotografía full bleed mientras no existan assets con esa
  proporción. Las fotografías existentes se usan en módulos con proporción 4:5.

## Pendiente de diseño

El alcance aún no define contenido, contacto, imágenes ni servicios concretos.
Antes de implementar secciones finales se debe cerrar el inventario de contenido
y recibir el brandbook de CENTUR Blindajes.
