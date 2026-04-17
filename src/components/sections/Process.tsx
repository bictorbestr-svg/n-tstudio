const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Vi börjar med att förstå er affär, era användare och målen ni jagar.",
  },
  {
    n: "02",
    title: "Strategi & koncept",
    desc: "Tydlig riktning, designkoncept och teknisk arkitektur — innan första pixeln ritas.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Iterativ design i Figma med tight feedbackloop. Vi visar — ni känner.",
  },
  {
    n: "04",
    title: "Utveckling",
    desc: "Pixel-perfekt kod, snabb prestanda och tillgänglighet i ryggraden.",
  },
  {
    n: "05",
    title: "Lansering & tillväxt",
    desc: "Vi launchar och stannar kvar. Optimerar, mäter och växer tillsammans.",
  },
];

export function Process() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="reveal mb-4 font-grotesk text-[12px] uppercase tracking-[0.3em] text-accent">
              ◆ Processen
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Från idé till <span className="text-gradient-primary">launch</span> — på rätt sätt.
            </h2>
          </div>
        </div>

        <div className="space-y-px overflow-hidden rounded-3xl border border-border bg-border">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal group flex flex-col gap-6 bg-card px-8 py-10 transition-colors duration-500 hover:bg-surface-elevated sm:flex-row sm:items-center sm:gap-12 sm:px-12"
              data-delay={i * 80}
            >
              <span className="font-display text-5xl font-bold text-muted-foreground/40 transition-colors group-hover:text-accent sm:text-7xl sm:w-32">
                {s.n}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] text-muted-foreground">{s.desc}</p>
              </div>
              <span className="font-grotesk text-2xl text-muted-foreground transition-all duration-500 group-hover:translate-x-2 group-hover:text-foreground">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
