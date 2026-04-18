import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface HeroHeaderProps {
  children: ReactNode;
  gradient: [string, string];
  className?: string;
}

export function HeroHeader({ children, gradient, className }: HeroHeaderProps) {
  return (
    <div
      className={cn("px-11 pt-9 pb-8 border-b border-line relative overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      {children}
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "HeroHeader",
  category: "Cards",
  description: "Gradient header banner for project/case-study cards.",
  sections: [
    {
      title: "Gradient hero",
      content: (
        <div className="w-full max-w-2xl rounded-lg overflow-hidden border border-line">
          <HeroHeader gradient={["var(--color-accent-wash)", "var(--color-sky)"]}>
            <h2 className="serif text-5xl m-0 leading-none">Lorem Ipsum</h2>
            <p className="text-sm text-ink-2 mt-3">Dolor sit amet · Consectetur · 2025</p>
          </HeroHeader>
        </div>
      ),
    },
  ],
};
