import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface ChipProps {
  children: ReactNode;
  tone?: "neutral" | "accent" | "mint" | "peach" | "sky";
  size?: "sm" | "md";
  className?: string;
}

const toneClasses = {
  neutral: "bg-paper-2 text-ink-2 border-line",
  accent: "bg-accent-wash text-accent-ink border-accent/20",
  mint: "bg-mint text-mint-ink border-mint-ink/15",
  peach: "bg-peach text-peach-ink border-peach-ink/18",
  sky: "bg-sky text-sky-ink border-sky-ink/15",
} as const;

const sizeClasses = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
} as const;

export function Chip({ children, tone = "neutral", size = "md", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium whitespace-nowrap",
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Chip",
  category: "Atoms",
  description: "Tonal pill badge. 5 tones × 2 sizes.",
  sections: [
    {
      title: "Tones",
      content: (
        <>
          <Chip tone="neutral">Neutral</Chip>
          <Chip tone="accent">Accent</Chip>
          <Chip tone="mint">Mint</Chip>
          <Chip tone="peach">Peach</Chip>
          <Chip tone="sky">Sky</Chip>
        </>
      ),
    },
    {
      title: "Sizes",
      content: (
        <>
          <Chip size="sm" tone="accent">
            Small
          </Chip>
          <Chip size="md" tone="accent">
            Medium
          </Chip>
        </>
      ),
    },
    {
      title: "With content",
      content: (
        <>
          <Chip tone="mint">Lorem</Chip>
          <Chip tone="peach">Ipsum dolor</Chip>
          <Chip tone="sky">Sit · amet</Chip>
          <Chip tone="neutral">2023 - 2025</Chip>
        </>
      ),
    },
  ],
};
