import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Zap, Trophy } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

interface HighlightCardProps {
  index: number;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function HighlightCard({ index, children, icon, className }: HighlightCardProps) {
  return (
    <div className={cn("p-4 px-4.5 bg-paper-2 border border-line-2 rounded-xl flex gap-3.5 items-start", className)}>
      {icon ?? <span className="serif text-[28px] leading-none text-accent-ink">{String(index).padStart(2, "0")}</span>}
      <span className="text-sm leading-snug text-ink pt-1">{children}</span>
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "HighlightCard",
  category: "Cards",
  description: "Numbered achievement card. Accepts a custom icon to replace the index number.",
  sections: [
    {
      title: "With index numbers",
      content: (
        <div className="grid grid-cols-2 gap-3 max-w-2xl">
          <HighlightCard index={1}>Lorem ipsum dolor sit amet consectetur</HighlightCard>
          <HighlightCard index={2}>Sed do eiusmod tempor incididunt ut labore</HighlightCard>
          <HighlightCard index={3}>Ut enim ad minim veniam quis nostrud</HighlightCard>
        </div>
      ),
    },
    {
      title: "With custom icon",
      content: (
        <div className="grid grid-cols-2 gap-3 max-w-2xl">
          <HighlightCard index={0} icon={<Zap size={24} className="text-accent-ink shrink-0" />}>
            Duis aute irure dolor in reprehenderit
          </HighlightCard>
          <HighlightCard index={0} icon={<Trophy size={24} className="text-accent-ink shrink-0" />}>
            Excepteur sint occaecat cupidatat non proident
          </HighlightCard>
        </div>
      ),
    },
  ],
};
