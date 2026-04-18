import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  spaced?: boolean;
  className?: string;
}

export function Separator({ orientation = "horizontal", spaced = false, className }: SeparatorProps) {
  return (
    <div
      className={cn(
        "bg-line",
        orientation === "vertical" ? "w-px self-stretch" : "h-px",
        orientation === "horizontal" && spaced && "my-4.5",
        className,
      )}
    />
  );
}

export const showcase: ShowcaseEntry = {
  name: "Separator",
  category: "Layout",
  description: "Horizontal or vertical line divider. The spaced prop adds default vertical margins.",
  sections: [
    {
      title: "Horizontal",
      content: (
        <div className="w-full max-w-md">
          <p className="text-sm text-ink-2">Lorem ipsum dolor sit amet</p>
          <Separator className="my-4.5" />
          <p className="text-sm text-ink-2">Consectetur adipiscing elit</p>
        </div>
      ),
    },
    {
      title: "Vertical",
      content: (
        <div className="flex items-center gap-3 h-10">
          <span className="text-sm text-ink-2">Lorem</span>
          <Separator orientation="vertical" />
          <span className="text-sm text-ink-2">Ipsum</span>
        </div>
      ),
    },
    {
      title: "Spaced",
      content: (
        <div className="w-full max-w-md">
          <p className="text-sm text-ink-2">Sed do eiusmod tempor</p>
          <Separator spaced />
          <p className="text-sm text-ink-2">Incididunt ut labore et dolore</p>
        </div>
      ),
    },
  ],
};
