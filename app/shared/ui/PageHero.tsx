type PageHeroProps = { eyebrow?: string; title: string; description: string };

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return <section className="border-b border-white/15"><div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">{eyebrow ? <p className="mb-5 text-sm text-white/60">{eyebrow}</p> : null}<h1 className="max-w-5xl font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.075em]">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{description}</p></div></section>;
}
