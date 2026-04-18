import { Sun, Moon } from "lucide-react";
import { IconSwitch } from "./IconSwitch";
import { useTheme } from "@/hooks/useTheme";
import type { ShowcaseEntry } from "./showcase.types";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
  className?: string;
}

export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  return (
    <IconSwitch
      active={theme === "dark"}
      onToggle={onToggle}
      iconLeft={<Sun size={14} />}
      iconRight={<Moon size={14} />}
      label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={className}
    />
  );
}

function ThemeToggleDemo() {
  const { theme, toggle } = useTheme();
  return <ThemeToggle theme={theme} onToggle={toggle} />;
}

export const showcase: ShowcaseEntry = {
  name: "ThemeToggle",
  category: "Atoms",
  description: "Theme-specific wrapper around IconSwitch. Passes Sun/Moon icons and reads from useTheme.",
  sections: [
    {
      title: "Live toggle",
      content: <ThemeToggleDemo />,
    },
  ],
};
