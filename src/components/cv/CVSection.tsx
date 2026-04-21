import type { ReactNode } from "react";

export function CVSection({ idx, title, children }: { idx: string; title: string; children: ReactNode }) {
  return (
    <section className="mb-3 last:mb-0">
      <div className="grid grid-cols-[auto_auto_1fr] gap-2.5 items-center mb-1.5">
        <span className="font-mono text-[9px] text-accent-ink tracking-widest">{idx}</span>
        <span className="font-sans font-semibold text-[12.5px] tracking-[0.24em] uppercase text-ink">{title}</span>
        <span className="h-px bg-line" />
      </div>
      {children}
    </section>
  );
}
