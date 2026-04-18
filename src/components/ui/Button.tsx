import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, GitBranch } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

const variantClasses = {
  primary: "bg-ink text-paper border-none",
  secondary: "bg-paper-2 text-ink border border-line",
  ghost: "bg-transparent text-ink-2 border border-transparent",
  outline: "bg-transparent text-ink border border-line",
} as const;

const sizeClasses = {
  sm: "px-2.5 py-1.5 text-xs rounded-lg",
  md: "px-3.5 py-2 text-[13px] rounded-[10px]",
  lg: "px-5.5 py-3 text-sm rounded-xl",
} as const;

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconRight,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 font-medium font-sans cursor-pointer transition-all duration-150",
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Button",
  category: "Atoms",
  description: "Multi-variant button with icon slots and size options.",
  sections: [
    {
      title: "Variants",
      content: (
        <>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </>
      ),
    },
    {
      title: "Sizes",
      content: (
        <>
          <Button size="sm" variant="primary">
            Small
          </Button>
          <Button size="md" variant="primary">
            Medium
          </Button>
          <Button size="lg" variant="primary">
            Large
          </Button>
        </>
      ),
    },
    {
      title: "With icons",
      content: (
        <>
          <Button variant="primary" iconRight={<ArrowRight size={14} />}>
            Lorem ipsum
          </Button>
          <Button variant="outline" icon={<GitBranch size={14} />}>
            Dolor sit
          </Button>
        </>
      ),
    },
    {
      title: "Disabled",
      content: (
        <>
          <Button variant="primary" disabled>
            Disabled primary
          </Button>
          <Button variant="outline" disabled>
            Disabled outline
          </Button>
        </>
      ),
    },
  ],
};
