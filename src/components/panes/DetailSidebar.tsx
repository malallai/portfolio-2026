import { Card, CardHeader, CardContent, SectionLabel, Chip } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface SidebarItem {
  id: string;
  date: string;
  title: string;
  sub: string;
}

interface DetailSidebarProps {
  title: string;
  yearRange: string;
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function DetailSidebar({ title, yearRange, items, activeId, onSelect }: DetailSidebarProps) {
  return (
    <Card className="flex flex-col shrink-0 lg:min-h-0">
      <CardHeader>
        <SectionLabel>
          {title} · {items.length}
        </SectionLabel>
        <Chip tone="neutral" size="sm">
          {yearRange}
        </Chip>
      </CardHeader>
      <CardContent scroll className="p-2">
        <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible">
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={cn(
                  "block text-left px-3 md:px-3.5 py-3 md:py-4 border rounded-xl cursor-pointer font-sans transition-colors duration-150 shrink-0 lg:shrink lg:w-full",
                  isActive ? "bg-paper-2 border-line" : "bg-transparent border-transparent",
                )}
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="mono text-[10px] text-ink-3">0{index + 1}</span>
                  <span className="mono text-[10px] text-ink-3 ml-3">{item.date}</span>
                </div>
                <div className="serif text-[18px] md:text-[22px] leading-tight text-ink mb-1 whitespace-nowrap lg:whitespace-normal">
                  {item.title}
                </div>
                <div className="text-xs text-ink-3 hidden md:block">{item.sub}</div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
