const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "Tailwind",
  "Framer Motion",
  "Sanity",
  "Shopify",
  "GSAP",
  "Webflow",
  "Figma",
  "Node.js",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section className="border-y border-border/60 bg-surface/30 py-8 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-3xl text-muted-foreground/60 sm:text-5xl">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
