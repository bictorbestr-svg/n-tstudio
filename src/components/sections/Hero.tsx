import { ParticleField } from "../ParticleField";
import { MagneticButton } from "../MagneticButton";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background">
      <ParticleField />

      {/* radial glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[160px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px] animate-float" />

      {/* grid */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-grotesk text-[12px] tracking-wide text-foreground/80"
          style={{ animation: "slide-in-left 0.7s 0.2s both" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
          🇸🇪 Baserade i Sverige · Levererar världen
        </div>

        <h1
          className="text-balance font-display text-[clamp(3rem,9vw,7.5rem)] font-700 leading-[0.95] tracking-[-0.04em] text-foreground"
          style={{ animation: "slide-in-left 0.9s 0.35s both" }}
        >
          Vi bygger
          <br />
          <span className="text-gradient-primary">internet.</span>
        </h1>

        <p
          className="mt-8 max-w-xl text-balance font-sans text-lg text-muted-foreground sm:text-xl"
          style={{ animation: "slide-in-right 0.9s 0.55s both" }}
        >
          Digitala upplevelser i världsklass — designade, kodade och optimerade
          av människor som bryr sig om varje pixel.
        </p>

        <div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "slide-in-right 0.9s 0.75s both" }}
        >
          <MagneticButton
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-4 font-grotesk text-[14px] font-semibold text-background"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative transition-colors group-hover:text-foreground">Starta ditt projekt</span>
            <span className="relative transition-transform group-hover:translate-x-1 group-hover:text-foreground">→</span>
          </MagneticButton>

          <a
            href="#tjanster"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-grotesk text-[14px] font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-surface"
          >
            Våra tjänster
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        <div className="flex flex-col items-center gap-3">
          <span>Scrolla</span>
          <div className="h-10 w-px overflow-hidden bg-border">
            <div className="h-1/2 w-full animate-[trace_1.4s_ease-in-out_infinite] bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
