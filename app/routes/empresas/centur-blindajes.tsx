import type { Route } from "./+types/centur-blindajes";
import { CenturBlindajesPage } from "../../features/empresas/centur-blindajes/CenturBlindajesPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CENTUR Blindajes | Blindaje automotriz | Grupo EGD" },
    { name: "description", content: "Blindaje automotriz por niveles para unidades nuevas o en uso, con asesoría previa, cuidado del diseño original y mantenimiento posterior especializado." },
  ];
}

export default function CenturBlindajes() {
  return <CenturBlindajesPage />;
}
