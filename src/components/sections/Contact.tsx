import { MagneticButton } from "../MagneticButton";

export function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-32 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="reveal mb-4 font-grotesk text-[12px] uppercase tracking-[0.3em] text-accent">
          ◆ Kontakt
        </p>
        <h2 className="reveal text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Låt oss bygga
          <br />
          <span className="text-gradient-primary">något stort.</span>
        </h2>
        <p className="reveal mx-auto mt-8 max-w-xl text-lg text-muted-foreground" data-delay="100">
          Berätta om ert projekt — vi svarar inom 24 timmar. Inga säljpitcher,
          bara ärliga samtal om vad som faktiskt går att bygga.
        </p>

        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" data-delay="200">
          <MagneticButton
            onClick={() => (window.location.href = "mailto:natstudio66@gmail.com")}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 font-grotesk text-[14px] font-semibold text-background"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative transition-colors group-hover:text-foreground">natstudio66@gmail.com</span>
            <span className="relative transition-transform group-hover:translate-x-1 group-hover:text-foreground">→</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
