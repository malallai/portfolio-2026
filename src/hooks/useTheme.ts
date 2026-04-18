import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }, [setTheme]);

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const resolved = attr ?? stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setThemeState(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  return { theme, setTheme, toggle } as const;
}
