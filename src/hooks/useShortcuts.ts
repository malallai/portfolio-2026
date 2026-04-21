import { useEffect } from "react";
import { TABS, type PaneKey } from "@/data/";

interface UseShortcutsProps {
  go: (key: PaneKey) => void;
  goNext: () => void;
  goPrev: () => void;
  toggleTheme: () => void;
}

export function useShortcuts({ go, goNext, goPrev, toggleTheme }: UseShortcutsProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      const target = event.target as HTMLElement;
      if (target?.matches?.("input, textarea, select, [contenteditable='true']")) return;

      if (event.key === "t" || event.key === "T") {
        event.preventDefault();
        toggleTheme();
        return;
      }

      if (event.key === "c" || event.key === "C") {
        event.preventDefault();
        window.location.href = "/cv";
        return;
      }

      const tab = TABS.find((tabItem) => tabItem.kbd === event.key);
      if (tab) {
        event.preventDefault();
        go(tab.key);
        return;
      }

      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [go, goNext, goPrev, toggleTheme]);
}
