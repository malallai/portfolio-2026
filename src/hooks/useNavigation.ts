import { useState, useEffect, useCallback } from "react";
import { TABS } from "@/data/";

const STORAGE_KEY = "portfolio-tab";
const DEFAULT_TAB = "about";

export function useNavigation() {
  const [active, setActive] = useState(DEFAULT_TAB);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? `"${DEFAULT_TAB}"`);
      if (saved && TABS.some((t) => t.key === saved)) setActive(saved);
    } catch {
      /* noop */
    }
    window.dispatchEvent(new CustomEvent("app:ready"));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
  }, [active]);

  const go = useCallback((key: string) => {
    setActive((prev) => (prev === key ? prev : key));
  }, []);

  const goNext = useCallback(() => {
    setActive((prev) => {
      const i = TABS.findIndex((t) => t.key === prev);
      return i < TABS.length - 1 ? TABS[i + 1].key : prev;
    });
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev) => {
      const i = TABS.findIndex((t) => t.key === prev);
      return i > 0 ? TABS[i - 1].key : prev;
    });
  }, []);

  return { active, go, goNext, goPrev };
}
