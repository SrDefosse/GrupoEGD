import type { Route } from "./+types/servicios";
import { ServiciosPage } from "../features/servicios/ServiciosPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Servicios | Grupo EGD" },
    { name: "description", content: "Compra y venta, protección y detallado, mantenimiento mecánico y blindaje automotriz. Cada servicio, con la empresa del grupo que lo ejecuta." },
  ];
}

export default function Servicios() {
  return <ServiciosPage />;
}
