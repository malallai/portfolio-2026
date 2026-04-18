import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

interface CalloutProps {
  label: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Callout({ label, children, icon, className }: CalloutProps) {
  return (
    <div className={cn("p-4 bg-paper-2 rounded-xl border border-line-2", className)}>
      <div className="flex items-center gap-2 mono text-[10px] text-ink-3 tracking-wide mb-2">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-[13px] leading-relaxed text-ink-2">{children}</div>
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Callout",
  category: "Cards",
  description: "Labeled info block with optional icon.",
  sections: [
    {
      title: "Default",
      content: (
        <div className="max-w-sm">
          <Callout label="LOREM IPSUM">
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Callout>
        </div>
      ),
    },
    {
      title: "With icon",
      content: (
        <div className="max-w-sm">
          <Callout label="UT ENIM" icon={<Info size={12} />}>
            Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </Callout>
        </div>
      ),
    },
  ],
};
