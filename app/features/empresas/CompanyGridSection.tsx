import { Link } from "react-router";

const companies = [
  { name: "Enlace GD", to: "/empresas/enlace-gd" },
  { name: "EGD Aftersale & Detailing Center", to: "/empresas/egd-aftersale" },
  { name: "EB Cars", to: "/empresas/eb-cars" },
  { name: "CENTUR Blindajes", to: "/empresas/centur-blindajes" },
];

export function CompanyGridSection() { return <section className="mx-auto max-w-7xl px-6 py-20"><ul className="grid gap-px bg-slate-200 sm:grid-cols-2">{companies.map((company) => <li key={company.to} className="bg-white p-8"><Link className="text-xl font-semibold hover:underline" to={company.to}>{company.name}</Link></li>)}</ul></section>; }
