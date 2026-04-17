const cases = [
  {
    client: "Nordlys Skincare",
    category: "E-handel · Brand",
    year: "2024",
    desc: "Headless Shopify + custom storefront. +218% konvertering på 90 dagar.",
    color: "from-[#6C63FF] to-[#A78BFA]",
  },
  {
    client: "Boreal Studios",
    category: "Webbplats · Motion",
    year: "2024",
    desc: "Award-winning portfolio med custom WebGL-bakgrunder och cinematisk scroll.",
    color: "from-[#4338CA] to-[#6C63FF]",
  },
  {
    client: "Fjällkraft Energi",
    category: "B2B · Plattform",
    year: "2025",
    desc: "Komplett digital transformation — från brand till intern dashboard.",
    color: "from-[#A78BFA] to-[#F0F0FF]",
  },
  {
    client: "Atlas Coffee Roasters",
    category: "E-handel · Identitet",
    year: "2023",
    desc: "Ny visuell identitet och Shopify-storefront. Featured i Awwwards SOTD.",
    color: "from-[#6C63FF] to-[#4338CA]",
  },
];

export function Cases() {
  return (
    <section id="case" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="reveal mb-4 font-grotesk text-[12px] uppercase tracking-[0.3em] text-accent">
              ◆ Utvalda case
            </p>
            <h2 className="reveal text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Arbete vi är <span className="text-gradient-primary">stolta över</span>.
            </h2>
          </div>
          <a
            href="#kontakt"
            className="reveal group inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 font-grotesk text-[13px] text-foreground transition-colors hover:border-primary/50"
          >
            Alla case
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cases.map((c, i) => (
            <article
              key={c.client}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
              data-delay={i * 120}
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${c.color}`}>
                <div className="bg-noise absolute inset-0 opacity-[0.15] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/60" />
                <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1 font-grotesk text-[11px] uppercase tracking-wider text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {c.year}
                </div>
                <div className="absolute bottom-8 left-8 right-8 transition-transform duration-700 group-hover:-translate-y-2">
                  <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                    {c.client}
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-6 p-8">
                <div>
                  <p className="font-grotesk text-[12px] uppercase tracking-wider text-muted-foreground">
                    {c.category}
                  </p>
                  <p className="mt-2 max-w-md text-[15px] text-foreground">{c.desc}</p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
