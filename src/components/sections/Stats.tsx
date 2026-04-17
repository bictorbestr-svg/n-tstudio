import { CountUp } from "../CountUp";

const stats = [
  { value: 142, suffix: "+", label: "Projekt levererade" },
  { value: 98, suffix: "%", label: "Nöjda kunder" },
  { value: 12, suffix: "", label: "Awwwards & nomineringar" },
  { value: 2.4, suffix: "x", label: "Snittökad konvertering" },
];

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal bg-card px-6 py-12 sm:px-10 sm:py-16"
              data-delay={i * 100}
            >
              <div className="font-display text-5xl font-bold text-gradient sm:text-7xl">
                {s.value % 1 !== 0 ? (
                  <span>{s.value}{s.suffix}</span>
                ) : (
                  <CountUp end={s.value as number} suffix={s.suffix} />
                )}
              </div>
              <p className="mt-4 font-grotesk text-[13px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
