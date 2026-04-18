import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface ToggleGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}

export function ToggleGroup({ value, onChange, options, className }: ToggleGroupProps) {
  return (
    <div className={cn("flex gap-1.5 flex-wrap", className)}>
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "px-3.5 py-2 text-[13px] font-sans rounded-sm border cursor-pointer transition-all duration-150",
            o.value === value ? "bg-ink text-paper border-ink" : "bg-paper-2 text-ink-2 border-line",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function ToggleDemo({ options }: { options: { value: string; label: string }[] }) {
  const [v, setV] = useState(options[0].value);
  return <ToggleGroup value={v} onChange={setV} options={options} />;
}

export const showcase: ShowcaseEntry = {
  name: "ToggleGroup",
  category: "Atoms",
  description: "Segmented button group for single selection.",
  sections: [
    {
      title: "Three options",
      content: (
        <ToggleDemo
          options={[
            { value: "one", label: "General" },
            { value: "two", label: "New project" },
            { value: "three", label: "Fractional role" },
          ]}
        />
      ),
    },
    {
      title: "Two options",
      content: (
        <ToggleDemo
          options={[
            { value: "one", label: "Monthly" },
            { value: "two", label: "Yearly" },
          ]}
        />
      ),
    },
  ],
};
