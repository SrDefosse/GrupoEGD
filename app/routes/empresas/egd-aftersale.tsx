import type { Route } from "./+types/egd-aftersale";
import { EgdAftersalePage } from "../../features/empresas/egd-aftersale/EgdAftersalePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EGD Aftersale & Detailing Center | Postventa y detailing | Grupo EGD" },
    { name: "description", content: "PPF, recubrimiento cerámico, polarizado premium, corrección de pintura, detallado y mecánica general para conservar la apariencia y el valor de tu auto." },
  ];
}

export default function EgdAftersale() {
  return <EgdAftersalePage />;
}
