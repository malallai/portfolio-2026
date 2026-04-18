import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface ChannelCardProps {
  label: string;
  value: string;
  kbd: string;
  className?: string;
}

export function ChannelCard({ label, value, kbd, className }: ChannelCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}: ${value}`}
      className={cn(
        "flex items-center gap-3 px-3 py-3 w-full text-left font-sans text-ink",
        "bg-transparent border border-transparent rounded-sm cursor-pointer",
        "transition-colors duration-150 hover:bg-paper-2 hover:border-line-2",
        className,
      )}
    >
      <span className="mono w-7 h-7 rounded-lg bg-accent-wash flex items-center justify-center text-[11px] text-accent-ink font-semibold shrink-0">
        {kbd}
      </span>
      <span className="flex-1 min-w-0">
        <div className="text-[13px] text-ink">{label}</div>
        <div className="mono text-xs text-ink-3 truncate">{value}</div>
      </span>
      <span className={cn("mono text-[10px] shrink-0", copied ? "text-mint-ink" : "text-ink-3")}>
        {copied ? "COPIED" : "COPY"}
      </span>
    </button>
  );
}

export const showcase: ShowcaseEntry = {
  name: "ChannelCard",
  category: "Cards",
  description: "Copyable contact channel row with keyboard shortcut badge.",
  sections: [
    {
      title: "Contact channels",
      content: (
        <div className="w-96 flex flex-col gap-1">
          <ChannelCard label="Lorem" value="lorem@ipsum.dev" kbd="L" />
          <ChannelCard label="Ipsum" value="ipsum.com/dolor" kbd="I" />
          <ChannelCard label="Dolor" value="Sit amet consectetur" kbd="D" />
        </div>
      ),
    },
  ],
};
