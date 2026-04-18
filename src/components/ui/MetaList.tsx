import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";
import { StatusDot } from "./StatusDot";
import { Chip } from "./Chip";

interface MetaListItem {
  label: string;
  value: ReactNode;
}

interface MetaListProps {
  items: MetaListItem[] | [string, string][];
  className?: string;
}

function normalizeItems(items: MetaListItem[] | [string, string][]): MetaListItem[] {
  if (items.length === 0) return [];
  if (Array.isArray(items[0])) {
    return (items as [string, string][]).map(([label, value]) => ({ label, value }));
  }
  return items as MetaListItem[];
}

export function MetaList({ items, className }: MetaListProps) {
  const normalizedItems = normalizeItems(items);
  return (
    <dl className={cn("m-0 grid grid-cols-[auto_1fr] gap-y-2.5 gap-x-4 text-[13px]", className)}>
      {normalizedItems.map((item) => (
        <div key={item.label} className="contents">
          <dt className="mono text-ink-3 text-[11px] pt-0.5">{item.label}</dt>
          <dd className="m-0 text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export const showcase: ShowcaseEntry = {
  name: "MetaList",
  category: "Lists",
  description: "A description list for metadata.",
  imports: 'import { MetaList } from "@/components/ui"',
  sections: [
    {
      title: "MetaList - Tuple syntax",
      content: (
        <div className="w-80">
          <MetaList
            items={[
              ["Lorem", "Ipsum dolor sit amet"],
              ["Consectetur", "Adipiscing elit"],
              ["Sed do", "Eiusmod tempor"],
              ["Ut enim", "Ad minim veniam"],
            ]}
          />
        </div>
      ),
    },
    {
      title: "MetaList - Object syntax (ReactNode)",
      content: (
        <div className="w-80">
          <MetaList
            items={[
              {
                label: "Status",
                value: (
                  <span className="inline-flex items-center gap-1.5">
                    <StatusDot color="green" /> Lorem
                  </span>
                ),
              },
              {
                label: "Tags",
                value: (
                  <span className="inline-flex gap-1">
                    <Chip tone="accent" size="sm">
                      Ipsum
                    </Chip>
                    <Chip tone="mint" size="sm">
                      Dolor
                    </Chip>
                  </span>
                ),
              },
              { label: "Info", value: "Sit amet consectetur" },
            ]}
          />
        </div>
      ),
    },
  ],
};
