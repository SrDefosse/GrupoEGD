import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Link, NavLink, useLocation } from "react-router";

import { companies as grupoCompanies } from "../../features/empresas/companies";
import { gsap } from "../lib/gsap.client";

const navigation = [{ to: "/", label: "Inicio" }, { to: "/nosotros", label: "Nosotros" }, { to: "/servicios", label: "Servicios" }];
const companies = grupoCompanies.map((company) => ({ to: company.href, label: company.nombre }));

export function SiteHeader() {
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMounted, setMobileMounted] = useState(false);
  const companiesMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const mobileBackdropRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const closeMobileMenu = () => setMobileOpen(false);
  const openMobileMenu = () => {
    setMobileMounted(true);
    setMobileOpen(true);
  };

  useEffect(() => {
    setCompaniesOpen(false);
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (companiesMenuRef.current && !companiesMenuRef.current.contains(event.target as Node)) setCompaniesOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (mobileOpen) closeButtonRef.current?.focus();
  }, [mobileOpen]);

  useGSAP(() => {
    const panel = mobileMenuRef.current;
    const backdrop = mobileBackdropRef.current;
    if (!mobileMounted || !panel || !backdrop) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set([panel, backdrop], mobileOpen ? { autoAlpha: 1 } : { autoAlpha: 0 });
      gsap.set(panel, { xPercent: mobileOpen ? 0 : 100 });
      if (!mobileOpen) setMobileMounted(false);
      return;
    }

    if (mobileOpen) {
      gsap.set(backdrop, { autoAlpha: 0 });
      gsap.set(panel, { autoAlpha: 1, xPercent: 100 });
      gsap.timeline()
        .to(backdrop, { autoAlpha: 1, duration: 0.25, ease: "power1.out" })
        .to(panel, { xPercent: 0, duration: 0.5, ease: "power3.out" }, "<")
        .from("[data-mobile-menu-item]", { y: 14, autoAlpha: 0, duration: 0.35, stagger: 0.055, ease: "power2.out" }, "<0.12");
      return;
    }

    gsap.timeline({ onComplete: () => setMobileMounted(false) })
      .to(panel, { xPercent: 100, autoAlpha: 0, duration: 0.32, ease: "power2.in" })
      .to(backdrop, { autoAlpha: 0, duration: 0.24, ease: "power1.in" }, "<");
  }, { dependencies: [mobileMounted, mobileOpen], scope: mobileMenuRef, revertOnUpdate: true });

  return <>
    <header className="sticky top-0 z-30 border-b border-white/10 bg-egd-base/90 backdrop-blur-xl">
      <nav aria-label="Navegación principal" className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="shrink-0"><img src="/logotipo-grupoegd.svg" alt="Grupo EGD" className="h-4 w-auto max-w-[9.25rem] sm:h-5 sm:max-w-none" /></Link>
        <div className="hidden items-center gap-6 text-sm text-white/65 md:flex">
          {navigation.slice(0, 2).map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }) => isActive ? "text-white" : "transition-colors hover:text-white"}>{item.label}</NavLink>)}
          <div ref={companiesMenuRef} className="relative">
            <button type="button" aria-expanded={companiesOpen} aria-controls="empresas-menu" onClick={() => setCompaniesOpen((value) => !value)} className="inline-flex items-center gap-2 leading-none text-white/65 transition-colors hover:text-white"><span>Empresas</span><span aria-hidden="true" className={`size-1.5 rotate-45 border-b border-r transition-transform ${companiesOpen ? "rotate-[225deg]" : ""}`} /></button>
            {companiesOpen ? <div id="empresas-menu" className="absolute left-1/2 top-8 grid w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-white/15 bg-egd-panel p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">{companies.map((company) => <Link key={company.to} to={company.to} className="rounded-lg px-3 py-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white">{company.label}</Link>)}</div> : null}
          </div>
          {navigation.slice(2).map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "text-white" : "transition-colors hover:text-white"}>{item.label}</NavLink>)}
        </div>
        <Link to="/contacto" className="hidden shrink-0 whitespace-nowrap rounded-full border border-white/30 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white hover:text-egd-base md:inline-flex">Contacto</Link>
        <button type="button" aria-expanded={mobileOpen} aria-controls="navegacion-movil" onClick={mobileOpen ? closeMobileMenu : openMobileMenu} className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50 md:hidden">
          <span className="sr-only">{mobileOpen ? "Cerrar navegación" : "Abrir navegación"}</span>
          <span aria-hidden="true" className="grid gap-1.5">
            <span className={`block h-px w-5 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
    </header>

    {mobileMounted ? <div className="md:hidden">
      <button ref={mobileBackdropRef} type="button" aria-label="Cerrar navegación" onClick={closeMobileMenu} className="invisible fixed inset-0 z-40 bg-egd-deep/70 opacity-0 backdrop-blur-sm" />
      <aside ref={mobileMenuRef} id="navegacion-movil" aria-label="Navegación móvil" data-lenis-prevent className="invisible fixed inset-y-0 right-0 z-50 flex w-[min(88vw,25rem)] flex-col overflow-y-auto border-l border-white/15 bg-egd-panel px-5 pb-8 pt-5 opacity-0 shadow-[-24px_0_80px_rgba(0,0,0,0.35)] sm:px-8">
        <div className="flex items-center justify-between gap-4 pb-2"><img src="/logotipo-grupoegd.svg" alt="Grupo EGD" className="h-4 w-auto max-w-[calc(100%-3.5rem)]" /><button ref={closeButtonRef} type="button" onClick={closeMobileMenu} className="grid size-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"><span className="sr-only">Cerrar navegación</span><span aria-hidden="true" className="relative block size-4"><span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-current" /><span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" /></span></button></div>
        <nav className="mt-10" aria-label="Enlaces principales"><ul className="grid">{navigation.map((item) => <li key={item.to} data-mobile-menu-item><NavLink to={item.to} end={item.to === "/"} onClick={closeMobileMenu} className={({ isActive }) => `flex items-center justify-between border-b border-white/15 py-5 text-xl tracking-[-.04em] transition-colors ${isActive ? "text-white" : "text-white/65 hover:text-white"}`}><span>{item.label}</span><span aria-hidden="true">→</span></NavLink></li>)}</ul></nav>
        <nav className="mt-10" aria-label="Empresas del grupo"><p data-mobile-menu-item className="text-xs uppercase tracking-[0.25em] text-white/45">Empresas</p><ul className="mt-4 grid gap-1">{companies.map((company) => <li key={company.to} data-mobile-menu-item><NavLink to={company.to} onClick={closeMobileMenu} className={({ isActive }) => `block rounded-xl px-4 py-3.5 transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/[0.06] hover:text-white"}`}>{company.label}</NavLink></li>)}</ul></nav>
        <Link data-mobile-menu-item to="/contacto" onClick={closeMobileMenu} className="mt-auto rounded-full bg-egd-ink px-5 py-3.5 text-center text-sm font-semibold text-egd-base transition-transform duration-300 hover:-translate-y-1 active:translate-y-0">Contacto</Link>
      </aside>
    </div> : null}
  </>;
}
