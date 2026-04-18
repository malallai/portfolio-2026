import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface StatProps {
  value: ReactNode;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="serif text-[28px] md:text-[36px] lg:text-[44px] leading-none text-ink truncate">{value}</div>
      <div className="mono text-[10px] md:text-xs text-ink-3 mt-1.5 tracking-wide truncate">{label}</div>
    </div>
  );
}

interface StatRowProps {
  stats: StatProps[];
  gap?: string;
  className?: string;
}

export function StatRow({ stats, gap, className }: StatRowProps) {
  return (
    <div
      className={cn(
        "border-t border-b border-line py-4 md:py-6 my-2 mb-6 md:mb-10",
        "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0",
        className,
      )}
      style={gap ? { gap } : undefined}
    >
      {stats.map((s, i) => (
        <div key={i} className={cn(i > 0 && "md:pl-5 md:border-l border-line-2", "min-w-0")}>
          <Stat value={s.value} label={s.label} />
        </div>
      ))}
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Stat",
  category: "Data",
  description: "Large-type statistic with label. Value accepts ReactNode. StatRow arranges multiple stats in a grid.",
  imports: 'import { Stat, StatRow } from "@/components/ui"',
  sections: [
    { title: "Single stat", content: <Stat value={42} label="lorem ipsum" /> },
    {
      title: "With ReactNode value",
      content: (
        <Stat
          value={
            <span className="inline-flex items-center gap-2">
              99.9<span className="text-[20px] text-accent-ink">%</span>
            </span>
          }
          label="dolor sit"
        />
      ),
    },
    {
      title: "Stat row",
      content: (
        <div className="w-full max-w-2xl">
          <StatRow
            stats={[
              { value: 12, label: "lorem" },
              { value: 47, label: "ipsum" },
              { value: 18, label: "dolor" },
              { value: 4, label: "sit amet" },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Two columns with gap",
      content: (
        <div className="w-full max-w-sm">
          <StatRow
            gap="2rem"
            stats={[
              { value: "1.4k", label: "consectetur" },
              { value: "6h", label: "adipiscing" },
            ]}
          />
        </div>
      ),
    },
  ],
};
