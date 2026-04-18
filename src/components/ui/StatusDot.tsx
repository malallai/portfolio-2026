import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

type StatusColor = "green" | "yellow" | "red" | "accent";

interface StatusDotProps {
  color?: StatusColor;
  pulse?: boolean;
  size?: number;
  className?: string;
}

const dotColorClasses: Record<StatusColor, string> = {
  green: "bg-dot-green",
  yellow: "bg-dot-yellow",
  red: "bg-dot-red",
  accent: "bg-accent",
};

export function StatusDot({ color = "green", pulse = false, size = 6, className }: StatusDotProps) {
  const colorClass = dotColorClasses[color];

  if (!pulse) {
    return (
      <span
        className={cn("rounded-full inline-block shrink-0", colorClass, className)}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span className={cn("relative inline-block shrink-0", className)} style={{ width: size + 4, height: size + 4 }}>
      <span className={cn("absolute inset-0.5 rounded-full", colorClass)} />
      <span className={cn("absolute inset-0.5 rounded-full animate-pulse-dot opacity-50", colorClass)} />
    </span>
  );
}

export const showcase: ShowcaseEntry = {
  name: "StatusDot",
  category: "Atoms",
  description: "Colored indicator dot with optional pulse animation.",
  sections: [
    {
      title: "Colors",
      content: (
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-sm">
            <StatusDot color="green" /> Green
          </span>
          <span className="flex items-center gap-2 text-sm">
            <StatusDot color="yellow" /> Yellow
          </span>
          <span className="flex items-center gap-2 text-sm">
            <StatusDot color="red" /> Red
          </span>
          <span className="flex items-center gap-2 text-sm">
            <StatusDot color="accent" /> Accent
          </span>
        </div>
      ),
    },
    {
      title: "With pulse",
      content: (
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-sm">
            <StatusDot color="green" pulse size={10} /> Online
          </span>
          <span className="flex items-center gap-2 text-sm">
            <StatusDot color="red" pulse size={10} /> Busy
          </span>
        </div>
      ),
    },
    {
      title: "Sizes",
      content: (
        <div className="flex items-center gap-4">
          <StatusDot size={4} color="accent" />
          <StatusDot size={6} color="accent" />
          <StatusDot size={8} color="accent" />
          <StatusDot size={12} color="accent" />
        </div>
      ),
    },
  ],
};
