import { cn } from "@/lib/utils";
import { Chip } from "./Chip";
import type { ShowcaseEntry } from "./showcase.types";

type ActivityType = "merged" | "opened" | "released" | "reviewed";

interface TimelineItem {
  type: ActivityType;
  repo: string;
  title: string;
  when: string;
}

const tonemap: Record<ActivityType, "accent" | "mint" | "peach" | "sky"> = {
  merged: "accent",
  opened: "mint",
  released: "peach",
  reviewed: "sky",
};

const dotColors: Record<string, string> = {
  accent: "bg-accent",
  mint: "bg-mint-ink",
  peach: "bg-peach-ink",
  sky: "bg-sky-ink",
};

export function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      {items.map((a, i) => {
        const tone = tonemap[a.type];
        return (
          <div key={i} className={cn("flex gap-3 py-3.5", i < items.length - 1 && "border-b border-line-2")}>
            <div className="flex flex-col items-center pt-1">
              <span className={cn("w-2 h-2 rounded-full opacity-70", dotColors[tone])} />
              {i < items.length - 1 && <span className="w-px flex-1 bg-line-2 mt-1 min-h-[18px]" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Chip tone={tone} size="sm">
                  {a.type}
                </Chip>
                <span className="mono text-[10px] text-ink-3">{a.repo}</span>
              </div>
              <div className="text-sm text-ink leading-snug">{a.title}</div>
              <div className="text-[11px] text-ink-3 mt-1">{a.when}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Timeline",
  category: "Data",
  description: "Vertical activity feed with colored dots and chips per event type.",
  sections: [
    {
      title: "Activity feed",
      content: (
        <div className="w-96">
          <Timeline
            items={[
              { type: "merged", repo: "lorem", title: "Dolor sit amet consectetur", when: "2 days ago" },
              { type: "opened", repo: "ipsum", title: "Sed do eiusmod tempor incididunt", when: "5 days ago" },
              { type: "released", repo: "dolor", title: "v0.9.0 - Ut enim ad minim", when: "1 week ago" },
              { type: "reviewed", repo: "sit-amet", title: "Quis nostrud exercitation", when: "2 weeks ago" },
            ]}
          />
        </div>
      ),
    },
  ],
};
