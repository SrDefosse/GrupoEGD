import type { Route } from "./+types/home";
import { HomePage } from "../features/home/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grupo EGD" },
    { name: "description", content: "Grupo EGD y sus empresas automotrices." },
  ];
}

export default function Home() {
  return <HomePage />;
}
