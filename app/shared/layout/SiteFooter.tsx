import { Link } from "react-router";

export function SiteFooter() {
  return <footer className="border-t border-white/15"><div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 text-sm text-white/60 sm:flex-row sm:items-end sm:justify-between sm:px-8"><div><p className="font-[family-name:var(--font-display)] text-base text-white">GRUPO EGD</p><p className="mt-2 max-w-sm">Experiencias automotrices especializadas, reunidas bajo una misma visión.</p></div><Link className="text-white transition-opacity hover:opacity-60" to="/contacto">Hablemos</Link></div></footer>;
}
