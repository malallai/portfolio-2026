import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface PanelProps {
  children: ReactNode;
  className?: string;
}

export function Panel({ children, className }: PanelProps) {
  return <div className={cn("glass scroll border border-line rounded-lg overflow-auto", className)}>{children}</div>;
}

export const showcase: ShowcaseEntry = {
  name: "Panel",
  category: "Layout",
  description: "Glass-morphic container with border, shadow, and scroll support.",
  sections: [
    {
      title: "Default",
      content: <Panel className="p-6 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Panel>,
    },
    {
      title: "With custom class",
      content: (
        <Panel className="p-8 max-w-md">
          <p className="text-ink-2 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Panel>
      ),
    },
    {
      title: "Nested panels",
      content: (
        <Panel className="p-6 max-w-lg">
          <p className="text-sm text-ink-2 mb-3">Ut enim ad minim veniam</p>
          <Panel className="p-4 bg-paper-2">
            <p className="text-sm text-ink-3">Quis nostrud exercitation ullamco laboris</p>
          </Panel>
        </Panel>
      ),
    },
  ],
};
