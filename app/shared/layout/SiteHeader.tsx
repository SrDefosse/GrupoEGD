import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const navigation = [{ to: "/nosotros", label: "Nosotros" }, { to: "/servicios", label: "Servicios" }];
const companies = [
  { to: "/empresas/enlace-gd", label: "Enlace GD" }, { to: "/empresas/egd-aftersale", label: "EGD Aftersale" },
  { to: "/empresas/eb-cars", label: "EB Cars" }, { to: "/empresas/centur-blindajes", label: "CENTUR Blindajes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101113]/90 backdrop-blur-xl"><nav aria-label="Navegación principal" className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8"><Link to="/" className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[-0.06em] sm:text-base">GRUPO EGD</Link><div className="hidden items-center gap-6 text-sm text-white/65 md:flex">{navigation.slice(0, 1).map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "text-white" : "transition-colors hover:text-white"}>{item.label}</NavLink>)}<div ref={menuRef} className="relative"><button type="button" aria-expanded={open} aria-controls="empresas-menu" onClick={() => setOpen((value) => !value)} className="flex flex-col items-center leading-none text-white/65 transition-colors hover:text-white"><span>Empresas</span><span aria-hidden="true" className={`mt-1.5 size-1.5 rotate-45 border-b border-r transition-transform ${open ? "rotate-[225deg]" : ""}`} /></button>{open ? <div id="empresas-menu" className="absolute left-1/2 top-10 grid w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-white/15 bg-[#191a1e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">{companies.map((company) => <Link key={company.to} to={company.to} className="rounded-lg px-3 py-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white">{company.label}</Link>)}</div> : null}</div>{navigation.slice(1).map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "text-white" : "transition-colors hover:text-white"}>{item.label}</NavLink>)}</div><Link to="/contacto" className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white hover:text-[#101113]">Contacto</Link></nav></header>;
}
