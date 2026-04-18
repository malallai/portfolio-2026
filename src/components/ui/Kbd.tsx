import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "inline-block px-1.5 py-px text-[10px] font-mono bg-paper-2 text-ink-2 border border-line rounded-[3px]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Kbd",
  category: "Atoms",
  description: "Keyboard key indicator, inline-friendly.",
  sections: [
    {
      title: "Single keys",
      content: (
        <>
          <Kbd>⌘</Kbd> <Kbd>K</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd> <Kbd>Esc</Kbd>
        </>
      ),
    },
    {
      title: "In context",
      content: (
        <span className="text-sm text-ink-2">
          Press <Kbd>1</Kbd>-<Kbd>5</Kbd> to switch panes
        </span>
      ),
    },
  ],
};
