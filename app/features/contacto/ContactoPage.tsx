import { PiCaretDown, PiEnvelopeSimple, PiMapPin, PiPhone, PiShareNetwork, PiWhatsappLogo } from "react-icons/pi";

import { contacto, direccionCompleta, horarios, matriz, redes } from "../../shared/content/grupo";
import { companies } from "../empresas/companies";

/**
 * Los seis canales de contacto estaban como seis filas planas separadas por
 * filetes, sin decir a quién le escribes ni para qué. Aquí se agrupan por
 * propósito en tarjetas: ubicación, ventas, oficina, administración y redes.
 * Son los mismos datos, con la mitad de líneas y una jerarquía que se lee.
 */
const bloques = [
  { id: "ventas", Icono: PiWhatsappLogo, titulo: "Ventas", detalle: "Para cotizar, agendar una cita o preguntar por una unidad.", canales: [contacto.ventasWhatsapp, contacto.ventas] },
  { id: "oficina", Icono: PiPhone, titulo: "Oficina", detalle: "Atención general durante el horario de la sede.", canales: [contacto.oficina, contacto.whatsapp] },
  { id: "administracion", Icono: PiEnvelopeSimple, titulo: "Administración y gerencia", detalle: "Facturación, trámites y temas corporativos.", canales: [contacto.administracion, contacto.gerencia] },
];

export function ContactoPage() {
  return <div>
    <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32">
      <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.075em]">Conversemos sobre lo que necesita tu auto.</h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Escríbenos por el canal que te acomode y el equipo indicado te orienta hacia la empresa y el servicio adecuados.</p>
    </section>

    <section aria-labelledby="formulario" className="border-t border-white/10 bg-egd-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.5fr_1.5fr] lg:gap-16">
          <div>
            <h2 id="formulario" className="max-w-xs font-[family-name:var(--font-display)] text-[clamp(1.9rem,2.8vw,2.8rem)] font-semibold leading-[1.06] tracking-[-.065em]">¿Prefieres que te escribamos?</h2>
            <p className="mt-7 max-w-xs leading-7 text-white/55">Déjanos tus datos y el equipo de la empresa indicada te busca.</p>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10" action="#" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/70">Nombre<input className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white" name="nombre" /></label>
              <label className="grid gap-2 text-sm text-white/70">Correo<input className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white" name="correo" type="email" /></label>
              <label className="grid gap-2 text-sm text-white/70">Teléfono<input className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white" name="telefono" type="tel" /></label>
              {/*
                Grupo EGD no va en la lista: es el grupo, no una empresa. Quien
                no sepa cuál le toca deja la opción inicial y el equipo lo
                encamina. El `select` nativo se estiliza con `appearance-none` y
                una punta de flecha propia; las opciones se pintan con el color
                de la superficie para que no salgan en blanco del sistema.
              */}
              <label className="grid gap-2 text-sm text-white/70">
                Empresa de interés
                <span className="relative block">
                  <select defaultValue="" name="empresa" className="w-full appearance-none rounded-xl border border-white/20 bg-transparent py-3 pl-4 pr-11 text-white outline-none transition-colors focus:border-white">
                    <option value="" className="bg-egd-raised text-white">Aún no lo sé</option>
                    {companies.map((company) => <option key={company.slug} value={company.slug} className="bg-egd-raised text-white">{company.nombre}</option>)}
                  </select>
                  <PiCaretDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-white/50" />
                </span>
              </label>
              <label className="grid gap-2 text-sm text-white/70 md:col-span-2">Mensaje<textarea className="min-h-32 rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white" name="mensaje" /></label>
            </div>
            <button className="mt-8 w-fit rounded-full bg-egd-ink px-6 py-3.5 text-sm font-semibold text-egd-base transition-transform duration-300 hover:-translate-y-1 active:translate-y-0" type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>

    <section aria-labelledby="datos-contacto" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28">
      <h2 id="datos-contacto" className="sr-only">Dónde estamos y cómo contactarnos</h2>

      <div className="grid gap-3 lg:grid-cols-3">
        <article className="flex flex-col rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.02))] p-8 sm:p-10 lg:col-span-2">
          <span className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.05]">
            <PiMapPin aria-hidden className="size-5 text-white/80" />
          </span>
          <h3 className="mt-7 text-2xl font-medium tracking-[-.04em]">{matriz.etiqueta}</h3>
          <p className="mt-5 max-w-sm text-lg leading-8 text-white/70">{direccionCompleta}</p>

          <dl className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {horarios.map((horario) => <div key={horario.dias}>
              <dt className="text-sm text-white/45">{horario.dias}</dt>
              <dd className="mt-1 text-white/85">{horario.horas}</dd>
            </div>)}
          </dl>

          <a href={matriz.mapa} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit pt-9 text-sm font-semibold text-egd-accent underline-offset-4 hover:underline">Ver en el mapa</a>
        </article>

        {bloques.map((bloque) => <article key={bloque.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <span className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.05]">
            <bloque.Icono aria-hidden className="size-5 text-white/80" />
          </span>
          <h3 className="mt-7 text-xl font-medium tracking-[-.03em]">{bloque.titulo}</h3>
          <p className="mt-3 leading-7 text-white/55">{bloque.detalle}</p>
          <ul className="mt-auto space-y-2 pt-7">
            {bloque.canales.map((canal) => <li key={canal.valor}>
              <a href={canal.href} className="text-white/85 underline-offset-4 hover:text-white hover:underline">{canal.valor}</a>
            </li>)}
          </ul>
        </article>)}

        <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <span className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.05]">
            <PiShareNetwork aria-hidden className="size-5 text-white/80" />
          </span>
          <h3 className="mt-7 text-xl font-medium tracking-[-.03em]">Redes</h3>
          <p className="mt-3 leading-7 text-white/55">Unidades disponibles y trabajo del grupo, al día.</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-7">
            {redes.map((red) => <li key={red.nombre}>
              <a href={red.href} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white">{red.nombre}</a>
            </li>)}
          </ul>
        </article>
      </div>
    </section>
  </div>;
}
