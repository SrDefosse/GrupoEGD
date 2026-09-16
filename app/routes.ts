import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./shared/layout/MarketingLayout.tsx", [
    index("./routes/home.tsx"),
    route("nosotros", "./routes/nosotros.tsx"),
    route("empresas", "./routes/empresas.tsx"),
    route("servicios", "./routes/servicios.tsx"),
    route("contacto", "./routes/contacto.tsx"),
    route("empresas/enlace-gd", "./routes/empresas/enlace-gd.tsx"),
    route("empresas/egd-aftersale", "./routes/empresas/egd-aftersale.tsx"),
    route("empresas/eb-cars", "./routes/empresas/eb-cars.tsx"),
    route("empresas/centur-blindajes", "./routes/empresas/centur-blindajes.tsx"),
  ]),
] satisfies RouteConfig;
