import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

export function StackTag({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn("px-3.5 py-2 text-[13px] font-mono bg-paper-2 border border-line rounded-sm", className)}>
      {label}
    </span>
  );
}

export const showcase: ShowcaseEntry = {
  name: "StackTag",
  category: "Atoms",
  description: "Monospace technology label with muted background.",
  sections: [
    {
      title: "Technology tags",
      content: (
        <>
          <StackTag label="TypeScript" />
          <StackTag label="React" />
          <StackTag label="PostgreSQL" />
          <StackTag label="Docker" />
          <StackTag label="Terraform" />
          <StackTag label="Go" />
        </>
      ),
    },
  ],
};
