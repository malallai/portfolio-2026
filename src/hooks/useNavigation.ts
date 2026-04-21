import { useState, useEffect, useCallback } from "react";
import { TABS, type PaneKey } from "@/data/";

const STORAGE_KEY = "portfolio-tab";
const DEFAULT_TAB: PaneKey = "about";

export function useNavigation() {
  const [active, setActive] = useState<PaneKey>(DEFAULT_TAB);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? `"${DEFAULT_TAB}"`);
      if (saved && TABS.some((t) => t.key === saved)) setActive(saved as PaneKey);
    } catch {
      /* noop */
    }
    window.dispatchEvent(new CustomEvent("app:ready"));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
  }, [active]);

  const go = useCallback((key: PaneKey) => {
    setActive((prev: PaneKey) => (prev === key ? prev : key));
  }, []);

  const goNext = useCallback(() => {
    setActive((prev: PaneKey) => {
      const i = TABS.findIndex((t) => t.key === prev);
      return i < TABS.length - 1 ? TABS[i + 1].key : prev;
    });
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev: PaneKey) => {
      const i = TABS.findIndex((t) => t.key === prev);
      return i > 0 ? TABS[i - 1].key : prev;
    });
  }, []);

  return { active, go, goNext, goPrev };
}
