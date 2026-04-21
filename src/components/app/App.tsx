import { useEffect, useState } from "react";
import { TABS } from "@/data/";
import { useTheme } from "@/hooks/useTheme";
import { useNavigation } from "@/hooks/useNavigation";

import { AboutPane } from "@/components/panes/AboutPane";
import { ProjectsPane } from "@/components/panes/ProjectsPane";
import { EducationPane } from "@/components/panes/EducationPane";
import { StackPane } from "@/components/panes/StackPane";
import { ConnectPane } from "@/components/panes/ConnectPane";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

import type { PaneKey } from "@/data/";

const PANES: Record<PaneKey, () => React.JSX.Element> = {
  about: AboutPane,
  experiences: ProjectsPane,
  etudes: EducationPane,
  stack: StackPane,
  connect: ConnectPane,
};

export default function App() {
  const { active, go, goNext, goPrev } = useNavigation();
  const { theme, toggle: toggleTheme } = useTheme();
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  useEffect(() => {
    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if ((keyboardEvent.target as HTMLElement)?.matches?.("input, textarea, select, [contenteditable='true']")) return;
      if (!activeKeys.includes(keyboardEvent.key)) setActiveKeys((prev) => [...prev, keyboardEvent.key]);

      if (activeKeys.length > 0) return;

      if (keyboardEvent.key === "t" || keyboardEvent.key === "T") {
        keyboardEvent.preventDefault();
        toggleTheme();
        return;
      }
      if (keyboardEvent.key === "c" || keyboardEvent.key === "C") {
        keyboardEvent.preventDefault();
        window.location.href = "/cv";
        return;
      }
      const tab = TABS.find((tabItem) => tabItem.kbd === keyboardEvent.key);
      if (tab) {
        keyboardEvent.preventDefault();
        go(tab.key);
        return;
      }
      if (keyboardEvent.key === "ArrowRight") goNext();
      if (keyboardEvent.key === "ArrowLeft") goPrev();
    };

    const onKeyUp = (keyboardEvent: KeyboardEvent) => {
      setActiveKeys((prev) => prev.filter((key) => key !== keyboardEvent.key));
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [go, goNext, goPrev, toggleTheme, activeKeys]);

  const ActivePane = PANES[active] ?? PANES.about;

  return (
    <div className="relative z-1 h-screen w-screen p-3 md:p-5 grid grid-rows-[auto_1fr_auto] gap-2 md:gap-4">
      <AppHeader activePane={active} theme={theme} onTabClick={go} onThemeToggle={toggleTheme} />

      <main className="min-h-0 min-w-0 overflow-auto">
        <ActivePane key={active} />
      </main>

      <AppFooter activePane={active} />
    </div>
  );
}
