import { NSLogo } from "../NSLogo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <NSLogo size={48} />
              <span className="font-grotesk text-base text-foreground">Nätstudio</span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] text-muted-foreground">
              Vi bygger internet. En svensk studio som skapar digitala upplevelser
              i världsklass.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <p className="font-grotesk text-[11px] uppercase tracking-widest text-muted-foreground">
                Studio
              </p>
              <ul className="mt-4 space-y-3 text-[14px] text-foreground">
                <li><a href="#tjanster" className="hover:text-accent">Tjänster</a></li>
                <li><a href="#case" className="hover:text-accent">Case</a></li>
                <li><a href="#om-oss" className="hover:text-accent">Om oss</a></li>
                <li><a href="#kontakt" className="hover:text-accent">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <p className="font-grotesk text-[11px] uppercase tracking-widest text-muted-foreground">
                Kontakt
              </p>
              <ul className="mt-4 space-y-3 text-[14px] text-foreground">
                <li><a href="mailto:natstudio66@gmail.com" className="hover:text-accent">natstudio66@gmail.com</a></li>
                <li className="text-muted-foreground">Sverige 🇸🇪</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-grotesk text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Nätstudio
          </p>
          <p className="font-grotesk text-[12px] text-muted-foreground">
            Designed & built in-house 🇸🇪
          </p>
        </div>

        {/* huge brand mark */}
        <div className="mt-16 select-none overflow-hidden">
          <p className="bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-center font-display text-[clamp(5rem,22vw,20rem)] font-bold leading-none tracking-[-0.05em] text-transparent">
            NÄTSTUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
