import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";
import { Chip } from "./Chip";

interface NumberedListProps {
  items: ReactNode[];
  className?: string;
}

export function NumberedList({ items, className }: NumberedListProps) {
  return (
    <ul className={cn("m-0 p-0 list-none flex flex-col gap-3.5", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-[15px] leading-snug text-ink">
          <span className="mono text-[10px] text-ink-3 pt-1 min-w-[18px]">{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const showcase: ShowcaseEntry = {
  name: "NumberedList",
  category: "Lists",
  description: "An ordered list with monospaced leading zeros.",
  imports: 'import { NumberedList } from "@/components/ui"',
  sections: [
    {
      title: "NumberedList - String items",
      content: (
        <div className="max-w-md">
          <NumberedList
            items={[
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit sed do",
              "Eiusmod tempor incididunt ut labore",
              "Ut enim ad minim veniam quis nostrud",
            ]}
          />
        </div>
      ),
    },
    {
      title: "NumberedList - ReactNode items",
      content: (
        <div className="max-w-md">
          <NumberedList
            items={[
              <span key="a">
                Lorem <strong className="text-accent-ink">ipsum</strong> dolor sit amet
              </span>,
              <span key="b">
                Consectetur adipiscing - elit{" "}
                <Chip tone="mint" size="sm">
                  sed do
                </Chip>
              </span>,
            ]}
          />
        </div>
      ),
    },
  ],
};
