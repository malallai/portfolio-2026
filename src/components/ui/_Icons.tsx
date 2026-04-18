import { ArrowRight, GitBranch, Star } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

export const showcase: ShowcaseEntry = {
  name: "Icons",
  category: "Icons",
  description: "All icons sourced from lucide-react. No custom SVGs.",
  imports: 'import { ArrowRight, GitBranch, Star } from "lucide-react"',
  sections: [
    {
      title: "Lucide icons",
      content: (
        <div className="flex items-center gap-6 text-ink-2">
          <span className="flex items-center gap-2 text-sm">
            <ArrowRight size={14} /> ArrowRight
          </span>
          <span className="flex items-center gap-2 text-sm">
            <GitBranch size={14} /> GitBranch
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Star size={12} fill="currentColor" stroke="none" /> Star
          </span>
        </div>
      ),
    },
  ],
};
