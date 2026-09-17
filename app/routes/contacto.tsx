import type { Route } from "./+types/contacto";
import { ContactoPage } from "../features/contacto/ContactoPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacto | Grupo EGD" },
    { name: "description", content: "Dirección, horarios, teléfonos y correos de Grupo EGD en León, Guanajuato. Escríbenos y te orientamos hacia la empresa indicada." },
  ];
}

export default function Contacto() {
  return <ContactoPage />;
}
