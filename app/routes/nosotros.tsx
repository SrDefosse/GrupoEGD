import type { Route } from "./+types/nosotros";
import { NosotrosPage } from "../features/nosotros/NosotrosPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nosotros | Grupo EGD" },
    { name: "description", content: "Quiénes somos, de dónde somos, misión, visión y valores de Grupo EGD: 20 años de experiencia en el sector automotriz premium desde León, Guanajuato." },
  ];
}

export default function Nosotros() {
  return <NosotrosPage />;
}
