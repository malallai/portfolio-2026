import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

interface ListSelectorItem {
  key: string;
  idx: string;
  primary: string;
  secondary?: string;
}

interface ListSelectorProps {
  items: ListSelectorItem[];
  activeKey: string;
  onSelect: (key: string) => void;
  showArrow?: boolean;
  className?: string;
}

export function ListSelector({ items, activeKey, onSelect, showArrow = true, className }: ListSelectorProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} role="listbox">
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            type="button"
            key={item.key}
            role="option"
            aria-selected={isActive}
            onClick={() => onSelect(item.key)}
            className={cn(
              "flex items-center gap-3.5 p-3.5 border-none rounded-xl cursor-pointer text-left font-sans",
              "transition-all duration-250 ease-[cubic-bezier(.2,.8,.2,1)]",
              isActive ? "bg-ink text-paper" : "bg-transparent text-ink",
            )}
          >
            <span className={cn("mono text-[10px] w-4", isActive ? "text-white/50" : "text-ink-3")}>{item.idx}</span>
            <span className="flex-1">
              <div className="serif text-[22px] leading-none">{item.primary}</div>
              {item.secondary && (
                <div className={cn("text-[11px] mt-1", isActive ? "text-white/60" : "text-ink-3")}>
                  {item.secondary}
                </div>
              )}
            </span>
            {showArrow && (
              <span className={cn("transition-opacity duration-200", isActive ? "opacity-100" : "opacity-0")}>
                <ChevronRight size={14} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function ListSelectorDemo({ items, showArrow }: { items: ListSelectorItem[]; showArrow?: boolean }) {
  const [active, setActive] = useState(items[0].key);
  return <ListSelector items={items} activeKey={active} onSelect={setActive} showArrow={showArrow} />;
}

export const showcase: ShowcaseEntry = {
  name: "ListSelector",
  category: "Lists",
  description: "A selectable list element for navigation.",
  imports: 'import { ListSelector } from "@/components/ui"',
  sections: [
    {
      title: "ListSelector - With arrow",
      content: (
        <div className="w-72">
          <ListSelectorDemo
            items={[
              { key: "a", idx: "01", primary: "Lorem", secondary: "Ipsum dolor sit amet consectetur" },
              { key: "b", idx: "02", primary: "Dolor", secondary: "Sed do eiusmod tempor incididunt" },
              { key: "c", idx: "03", primary: "Amet", secondary: "Ut enim ad minim veniam quis" },
            ]}
          />
        </div>
      ),
    },
    {
      title: "ListSelector - Without arrow",
      content: (
        <div className="w-72">
          <ListSelectorDemo
            items={[
              { key: "a", idx: "A", primary: "Lorem" },
              { key: "b", idx: "B", primary: "Ipsum" },
            ]}
            showArrow={false}
          />
        </div>
      ),
    },
  ],
};
