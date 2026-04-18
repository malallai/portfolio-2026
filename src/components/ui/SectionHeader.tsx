import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface SectionHeaderProps {
  idx: string;
  label: string;
  right?: string;
  className?: string;
}

export function SectionHeader({ idx, label, right, className }: SectionHeaderProps) {
  return (
    <div className={cn("mono flex items-center gap-2.5 text-[11px] text-ink-3 mb-9", className)}>
      <span>
        {idx} / {label}
      </span>
      <span className="flex-1 h-px bg-line" />
      {right && <span>{right}</span>}
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "SectionHeader",
  category: "Layout",
  description: "Index + label + decorative line, with optional right-side text.",
  sections: [
    {
      title: "With right text",
      content: (
        <div className="w-full max-w-lg">
          <SectionHeader idx="01" label="Lorem" right="Ipsum dolor sit" />
        </div>
      ),
    },
    {
      title: "Without right text",
      content: (
        <div className="w-full max-w-lg">
          <SectionHeader idx="03" label="Amet" />
        </div>
      ),
    },
  ],
};
