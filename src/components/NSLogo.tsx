import { useEffect, useRef, useState } from "react";

interface NSLogoProps {
  size?: number;
}

export function NSLogo({ size = 52 }: NSLogoProps) {
  const [mounted, setMounted] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHoverKey((k) => k + 1)}
      className="border-gradient group relative flex items-center justify-center overflow-hidden animate-breathe hover:[--spin-duration:1.3s]"
      style={{
        width: size,
        height: size,
        borderRadius: 18,
      }}
    >
      <div className="absolute inset-[1.5px] rounded-[16px] bg-background" />
      <div className="relative flex items-baseline justify-center gap-[1px] font-display text-[22px] font-bold leading-none tracking-[-0.08em] text-foreground transition-all duration-300 group-hover:[text-shadow:0_0_12px_oklch(0.96_0.015_280_/_0.8)]">
        <span
          className="inline-block"
          style={{
            transform: mounted ? "translateX(0)" : "translateX(-24px)",
            opacity: mounted ? 1 : 0,
            transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          N
        </span>
        <span
          className="inline-block"
          style={{
            transform: mounted ? "translateX(0)" : "translateX(24px)",
            opacity: mounted ? 1 : 0,
            transition: "transform 700ms 100ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms 100ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          S
        </span>
      </div>
      {/* arc / underline trace */}
      <div
        key={hoverKey + (mounted ? 1 : 0)}
        className="absolute bottom-[14px] left-1/2 h-px w-[26px] -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
        style={{
          animation: "trace 400ms 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
          transform: "translateX(-50%) scaleX(0)",
        }}
      />
    </div>
  );
}
