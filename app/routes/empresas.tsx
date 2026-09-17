import type { Route } from "./+types/empresas";
import { EmpresasPage } from "../features/empresas/EmpresasPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Empresas | Grupo EGD" },
    { name: "description", content: "Las cuatro empresas de Grupo EGD: Enlace GD, EGD Aftersale & Detailing Center, EB Cars y CENTUR Blindajes, y qué resuelve cada una." },
  ];
}

export default function Empresas() {
  return <EmpresasPage />;
}
