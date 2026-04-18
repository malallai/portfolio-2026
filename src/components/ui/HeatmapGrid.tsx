import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

const INTENSITY_CLASSES = ["bg-heatmap-0", "bg-heatmap-1", "bg-heatmap-2", "bg-heatmap-3", "bg-heatmap-4"];

function generateCells(cols: number, rows: number) {
  const cells: number[] = [];
  for (let w = 0; w < cols; w++) {
    for (let d = 0; d < rows; d++) {
      // Deterministic pseudo-random for consistent rendering across builds
      const seed = (w * rows + d) * 9301 + 49297;
      const rand = (seed % 233280) / 233280;
      cells.push(rand < 0.35 ? 0 : rand < 0.6 ? 1 : rand < 0.82 ? 2 : rand < 0.94 ? 3 : 4);
    }
  }
  return cells;
}

interface HeatmapGridProps {
  data?: number[];
  cols?: number;
  rows?: number;
  startLabel?: string;
  endLabel?: string;
  showLegend?: boolean;
  className?: string;
}

export function HeatmapGrid({
  data,
  cols = 52,
  rows = 7,
  startLabel = "APR '25",
  endLabel = "APR '26",
  showLegend = true,
  className,
}: HeatmapGridProps) {
  const cells = useMemo(() => data ?? generateCells(cols, rows), [data, cols, rows]);

  return (
    <div className={className}>
      <div
        className="grid gap-[3px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridAutoFlow: "column",
        }}
      >
        {cells.map((intensity, i) => (
          <div
            key={i}
            className={cn("aspect-square rounded-[2px] border border-ink/4", INTENSITY_CLASSES[Math.min(intensity, 4)])}
          />
        ))}
      </div>

      {showLegend && (
        <div className="mono flex items-center justify-between text-[10px] text-ink-3 mt-2.5">
          <span>{startLabel}</span>
          <div className="flex items-center gap-1.5">
            <span>less</span>
            {INTENSITY_CLASSES.map((cls, i) => (
              <span key={i} className={cn("w-2.5 h-2.5 rounded-[2px] border border-line-2", cls)} />
            ))}
            <span>more</span>
          </div>
          <span>{endLabel}</span>
        </div>
      )}
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "HeatmapGrid",
  category: "Data",
  description: "GitHub-style contribution grid. Configurable data, cols, rows, and showLegend.",
  sections: [
    {
      title: "Default (52×7)",
      content: (
        <div className="w-full max-w-3xl">
          <HeatmapGrid />
        </div>
      ),
    },
    {
      title: "Custom size (26×5)",
      content: (
        <div className="w-full max-w-lg">
          <HeatmapGrid cols={26} rows={5} startLabel="OCT '25" endLabel="APR '26" />
        </div>
      ),
    },
    {
      title: "No legend",
      content: (
        <div className="w-full max-w-3xl">
          <HeatmapGrid showLegend={false} />
        </div>
      ),
    },
  ],
};
