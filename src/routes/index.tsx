import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";

import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NS — Nätstudio · Vi bygger internet." },
      {
        name: "description",
        content:
          "Nätstudio är en svensk webbyrå som bygger digitala upplevelser i världsklass. Webbdesign, utveckling, e-handel och brand.",
      },
      { property: "og:title", content: "NS — Nätstudio · Vi bygger internet." },
      {
        property: "og:description",
        content:
          "Premium svensk webbyrå. Webbdesign, utveckling, e-handel och brand — för varumärken som vill mer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  // Smooth anchor scroll
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
