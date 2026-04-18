import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mono text-[10px] text-ink-3 tracking-wide mb-4", className)}>{children}</div>;
}

export const showcase: ShowcaseEntry = {
  name: "SectionLabel",
  category: "Layout",
  description: "Small mono-spaced label used above content sections.",
  sections: [
    {
      title: "Labels",
      content: (
        <div className="flex flex-col gap-2">
          <SectionLabel>LOREM IPSUM</SectionLabel>
          <SectionLabel>DOLOR SIT AMET</SectionLabel>
          <SectionLabel>CONSECTETUR</SectionLabel>
        </div>
      ),
    },
  ],
};
