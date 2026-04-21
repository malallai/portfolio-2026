import type { ReactNode } from "react";

export function CVSection({ idx, title, children }: { idx: string; title: string; children: ReactNode }) {
  return (
    <section className="cv-section">
      <div className="cv-s-head">
        <span className="cv-s-num">{idx}</span>
        <span className="cv-s-title">{title}</span>
        <span className="cv-s-rule" />
      </div>
      {children}
    </section>
  );
}
