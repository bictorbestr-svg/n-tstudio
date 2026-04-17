const services = [
  {
    n: "01",
    title: "Webbdesign",
    desc: "Skräddarsydda gränssnitt med fokus på varumärke, känsla och konvertering.",
    tags: ["UX/UI", "Prototyper", "Designsystem"],
  },
  {
    n: "02",
    title: "Webbutveckling",
    desc: "Lightning-fast sajter byggda med modern stack — React, Next.js och headless CMS.",
    tags: ["Next.js", "Headless", "TypeScript"],
  },
  {
    n: "03",
    title: "E-handel",
    desc: "Skalbar e-handel som konverterar — från Shopify till custom-byggda butiker.",
    tags: ["Shopify", "Stripe", "Custom"],
  },
  {
    n: "04",
    title: "Brand & identitet",
    desc: "Visuella identiteter som sticker ut. Logotyp, typografi, färg och tonalitet.",
    tags: ["Identitet", "Logotyp", "Guidelines"],
  },
  {
    n: "05",
    title: "Motion & 3D",
    desc: "Mikroanimationer, scroll-effekter och 3D som lyfter berättelsen ett snäpp till.",
    tags: ["GSAP", "Three.js", "Lottie"],
  },
  {
    n: "06",
    title: "SEO & performance",
    desc: "Tekniskt vass SEO och Core Web Vitals — så att Google älskar din sajt lika mycket som vi gör.",
    tags: ["Lighthouse 100", "SEO", "Analytics"],
  },
];

export function Services() {
  return (
    <section id="tjanster" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="reveal mb-4 font-grotesk text-[12px] uppercase tracking-[0.3em] text-accent">
              ◆ Tjänster
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Allt du behöver för att <span className="text-gradient-primary">vinna online</span>.
            </h2>
            <p className="reveal mt-6 max-w-2xl text-lg text-muted-foreground" data-delay="120">
              Strategi, design, kod och tillväxt — under ett tak. Inga handoffs,
              inga ursäkter. Bara resultat.
            </p>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="reveal group relative overflow-hidden bg-card p-8 transition-colors duration-500 hover:bg-surface-elevated sm:p-10"
              data-delay={i * 100}
            >
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="font-grotesk text-[12px] tracking-widest text-muted-foreground">
                  {s.n}
                </span>
                <span className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                  ↗
                </span>
              </div>
              <h3 className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1 font-grotesk text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
