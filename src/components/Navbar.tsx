import { useEffect, useState } from "react";
import { NSLogo } from "./NSLogo";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-primary/15" : "bg-transparent"
      }`}
      style={{
        transform: mounted ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1), background-color 400ms, backdrop-filter 400ms",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="NS Nätstudio">
          <NSLogo size={42} />
          <span className="hidden font-grotesk text-[15px] font-medium text-muted-foreground sm:inline">
            Nätstudio
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-grotesk text-[14px] font-medium text-muted-foreground transition-all duration-300 hover:tracking-[0.04em] hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton
            onClick={() => {
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative hidden overflow-hidden rounded-full px-5 py-2.5 font-grotesk text-[13px] font-medium text-foreground sm:inline-flex"
          >
            <span className="absolute inset-0 rounded-full border border-primary/40 transition-colors group-hover:border-transparent" />
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">Starta projekt →</span>
          </MagneticButton>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden"
            aria-label="Meny"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
              <div className="flex flex-col gap-1.5">
                <span className={`block h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`block h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </div>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 font-display text-2xl text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
