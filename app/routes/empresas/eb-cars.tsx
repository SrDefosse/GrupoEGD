import type { Route } from "./+types/eb-cars";
import { EbCarsPage } from "../../features/empresas/eb-cars/EbCarsPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EB Cars | Autos fáciles de comprar | Grupo EGD" },
    { name: "description", content: "EB Cars vende autos accesibles con un proceso claro y cercano: asesoría para primera compra, comparativa de opciones y acompañamiento en trámites." },
  ];
}

export default function EbCars() {
  return <EbCarsPage />;
}
