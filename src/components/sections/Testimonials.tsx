const quotes = [
  {
    quote:
      "Nätstudio levererade en sajt som inte bara ser fantastisk ut — den konverterar 3x bättre än vår förra. Bästa byrån vi jobbat med, punkt slut.",
    name: "Elin Bergström",
    role: "CMO, Nordlys Skincare",
  },
  {
    quote:
      "Otroligt skickliga, lyhörda och snabba. Det är sällsynt att hitta en partner som förstår både design och teknik på den här nivån.",
    name: "Marcus Lindh",
    role: "Founder, Boreal Studios",
  },
  {
    quote:
      "Från första mötet visste vi att de var rätt. Slutresultatet överträffade allt vi vågat hoppas på.",
    name: "Sofia Wallin",
    role: "VD, Fjällkraft Energi",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal mb-4 font-grotesk text-[12px] uppercase tracking-[0.3em] text-accent">
          ◆ Vad kunder säger
        </p>
        <h2 className="reveal mb-16 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Ord från riktiga människor.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className="reveal group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:bg-surface-elevated"
              data-delay={i * 120}
            >
              <span className="font-display text-6xl leading-none text-primary/40">"</span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-grotesk text-sm font-bold text-background">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <p className="font-grotesk text-sm font-medium text-foreground">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
