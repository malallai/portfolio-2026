import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sun, Moon, Volume2, VolumeOff } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

interface IconSwitchProps {
  active: boolean;
  onToggle: () => void;
  iconLeft: ReactNode;
  iconRight: ReactNode;
  label?: string;
  className?: string;
}

export function IconSwitch({ active, onToggle, iconLeft, iconRight, label, className }: IconSwitchProps) {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    onToggle();
    setTimeout(() => setAnimating(false), 350);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={cn(
        "relative inline-flex items-center w-16 h-8 bg-paper-2 border border-line cursor-pointer overflow-hidden px-1 rounded-full",
        className,
      )}
    >
      <span
        className={cn(
          "absolute top-[3px] left-[3px] w-6 h-6 rounded-full bg-ink",
          "shadow-[0_2px_6px_oklch(0_0_0/0.2),0_0_0_1px_oklch(0_0_0/0.1)]",
          "transition-transform duration-350 ease-[cubic-bezier(.2,.8,.2,1)]",
          active && "translate-x-8",
        )}
        style={{ transform: `scale(${animating ? 0.88 : 1})` }}
      />
      <div className="relative z-10 flex justify-between w-full px-1">
        <span className={cn("flex transition-colors duration-300", active ? "text-ink-3" : "text-paper")}>
          {iconLeft}
        </span>
        <span className={cn("flex transition-colors duration-300", active ? "text-paper" : "text-ink-3")}>
          {iconRight}
        </span>
      </div>
    </button>
  );
}

function IconSwitchDemo() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  return (
    <div className="flex items-center gap-4">
      <IconSwitch
        active={a}
        onToggle={() => setA(!a)}
        iconLeft={<Sun size={14} />}
        iconRight={<Moon size={14} />}
        label="Toggle A"
      />
      <IconSwitch
        active={b}
        onToggle={() => setB(!b)}
        iconLeft={<Volume2 size={14} />}
        iconRight={<VolumeOff size={14} />}
        label="Toggle B"
      />
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "IconSwitch",
  category: "Atoms",
  description: "Generic two-icon pill toggle with sliding thumb. Accepts any ReactNode as iconLeft/iconRight.",
  sections: [
    {
      title: "Interactive",
      content: <IconSwitchDemo />,
    },
  ],
};
