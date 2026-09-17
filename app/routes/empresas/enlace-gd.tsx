import type { Route } from "./+types/enlace-gd";
import { EnlaceGdPage } from "../../features/empresas/enlace-gd/EnlaceGdPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enlace GD | Compra y venta de autos premium | Grupo EGD" },
    { name: "description", content: "Enlace GD compra, vende y consigna autos premium: SUV, deportivos, clásicos, convertibles y blindados, con valuación física, mecánica y legal." },
  ];
}

export default function EnlaceGd() {
  return <EnlaceGdPage />;
}
