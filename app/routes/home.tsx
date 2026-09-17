import type { Route } from "./+types/home";
import { HomePage } from "../features/home/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grupo EGD | Compra, venta, blindaje y postventa automotriz en León" },
    { name: "description", content: "Grupo EGD reúne a Enlace GD, EGD Aftersale, EB Cars y CENTUR Blindajes: compra y venta de autos, protección, detallado, mantenimiento y blindaje en León, Guanajuato." },
  ];
}

export default function Home() {
  return <HomePage />;
}
