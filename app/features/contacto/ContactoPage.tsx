import { contacto, direccionCompleta, horarios, matriz, redes } from "../../shared/content/grupo";
import { companies } from "../empresas/companies";

const canales = [contacto.oficina, contacto.whatsapp, contacto.ventasWhatsapp, contacto.gerencia, contacto.ventas, contacto.administracion];

export function ContactoPage() {
  return <div>
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.075em]">Conversemos sobre lo que necesita tu auto.</h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Comparte tus datos y el equipo indicado te orientará hacia la empresa y el servicio más adecuado.</p>
    </section>

    <section aria-labelledby="datos-contacto" className="border-t border-white/15">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 id="datos-contacto" className="text-[clamp(1.6rem,2.4vw,2.4rem)] font-semibold leading-tight tracking-[-.055em]">{matriz.etiqueta}</h2>
          <p className="mt-6 max-w-md leading-8 text-white/70">{direccionCompleta}</p>
          <a href={matriz.mapa} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-egd-base">Ver en el mapa</a>
          <dl className="mt-12 border-t border-white/15">
            {horarios.map((horario) => <div key={horario.dias} className="grid gap-1 border-b border-white/15 py-4 sm:grid-cols-[.55fr_1fr] sm:gap-5">
              <dt className="text-white/50">{horario.dias}</dt><dd className="text-white/85">{horario.horas}</dd>
            </div>)}
          </dl>
        </div>
        <div>
          <h3 className="text-lg text-white/50">Canales directos</h3>
          <dl className="mt-6 border-t border-white/15">
            {canales.map((canal) => <div key={canal.valor} className="grid gap-1 border-b border-white/15 py-4 sm:grid-cols-[.55fr_1fr] sm:gap-5">
              <dt className="text-white/50">{canal.etiqueta}</dt>
              <dd><a href={canal.href} className="text-white/85 underline-offset-4 hover:underline">{canal.valor}</a></dd>
            </div>)}
          </dl>
          <h3 className="mt-12 text-lg text-white/50">Redes</h3>
          <ul className="mt-4 flex flex-wrap gap-2">{redes.map((red) => <li key={red.nombre}><a href={red.href} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/50 hover:text-white">{red.nombre}</a></li>)}</ul>
        </div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-egd-raised">
      <form className="mx-auto grid max-w-[1400px] gap-5 px-5 py-20 sm:px-8 md:grid-cols-2" action="#" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-2 text-sm text-white/70">Nombre<input className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white" name="nombre" /></label>
        <label className="grid gap-2 text-sm text-white/70">Correo<input className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white" name="correo" type="email" /></label>
        <label className="grid gap-2 text-sm text-white/70">Teléfono<input className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white" name="telefono" type="tel" /></label>
        <label className="grid gap-2 text-sm text-white/70">Empresa de interés<select className="rounded-xl border border-white/20 bg-egd-raised px-4 py-3 text-white outline-none focus:border-white" name="empresa"><option>Grupo EGD</option>{companies.map((company) => <option key={company.slug}>{company.nombre}</option>)}</select></label>
        <label className="grid gap-2 text-sm text-white/70 md:col-span-2">Mensaje<textarea className="min-h-32 rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white" name="mensaje" /></label>
        <button className="w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-egd-base" type="submit">Enviar mensaje</button>
      </form>
    </section>
  </div>;
}
