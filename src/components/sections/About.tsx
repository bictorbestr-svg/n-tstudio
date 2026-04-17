export function About() {
  return (
    <section id="om-oss" className="relative overflow-hidden py-32 sm:py-40">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="reveal mb-4 font-grotesk text-[12px] uppercase tracking-[0.3em] text-accent">
            ◆ Om Nätstudio
          </p>
          <h2 className="reveal text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            En liten studio. <br />
            <span className="text-gradient-primary">Stora ambitioner.</span>
          </h2>
        </div>

        <div className="space-y-8 lg:col-span-7">
          <p className="reveal text-balance text-xl leading-relaxed text-foreground sm:text-2xl" data-delay="100">
            NS är en svensk studio på sex personer som bygger digitala upplevelser
            för varumärken som vill mer. Vi tror att internet förtjänar bättre —
            snabbare, vackrare, mänskligare.
          </p>
          <p className="reveal text-[17px] leading-relaxed text-muted-foreground" data-delay="200">
            Vi jobbar med ett fåtal kunder åt gången. Inga whitelabel-byråer,
            ingen offshoring, inga genvägar. Bara hantverk — från researchsamtalet
            till sista kommit innan launch.
          </p>

          <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border" data-delay="300">
            {[
              { k: "Grundades", v: "2019" },
              { k: "Bas", v: "Stockholm" },
              { k: "Team", v: "6 personer" },
              { k: "Språk", v: "SV / EN" },
            ].map((it) => (
              <div key={it.k} className="bg-card p-5">
                <p className="font-grotesk text-[11px] uppercase tracking-wider text-muted-foreground">
                  {it.k}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-foreground">{it.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
