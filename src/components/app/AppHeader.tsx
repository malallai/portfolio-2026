import { Avatar, ThemeToggle } from "@/components/ui";
import { TABS, PROFILE } from "@/data/";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  activePane: string;
  theme: "light" | "dark";
  onTabClick: (key: string) => void;
  onThemeToggle: () => void;
}

export function AppHeader({ activePane, theme, onTabClick, onThemeToggle }: AppHeaderProps) {
  return (
    <header className="relative flex items-center justify-between px-2.5 md:px-3.5 pl-3 md:pl-4 py-2 md:py-2.5 glass border border-line rounded-xl md:rounded-2xl">
      <a
        href="/"
        className="flex items-center gap-2.5 no-underline text-inherit shrink-0"
        onClick={(event) => {
          event.preventDefault();
          onTabClick("about");
        }}
      >
        <Avatar src="icon.svg" />
        <div className="hidden sm:block">
          <div className="text-[13px] font-medium text-ink leading-tight">{PROFILE.name}</div>
          <div className="mono text-[11px] text-ink-3">
            {PROFILE.handle} · {PROFILE.role}
          </div>
        </div>
      </a>

      <nav className="flex gap-0.5 md:gap-1 overflow-x-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        {TABS.map((tabItem) => {
          const isActive = tabItem.key === activePane;
          return (
            <button
              type="button"
              key={tabItem.key}
              onClick={() => onTabClick(tabItem.key)}
              className={cn(
                "relative inline-flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-sm cursor-pointer font-sans text-[12px] md:text-[13px] border transition-all duration-150 whitespace-nowrap shrink-0",
                isActive
                  ? "bg-paper-2 text-ink border-line font-medium"
                  : "bg-transparent text-ink-2 border-transparent font-normal hover:bg-paper-2",
              )}
            >
              <span
                className={cn(
                  "items-center justify-center min-w-4 h-4 px-1 text-[10px] font-mono rounded-[4px] hidden lg:inline-flex",
                  isActive ? "bg-ink text-paper" : "bg-paper-2 text-ink-3",
                )}
              >
                {tabItem.kbd}
              </span>
              {tabItem.label}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-1">
        <a
          href="/cv"
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-ink-2 hover:bg-paper-2 hover:text-ink transition-colors no-underline"
          title="Voir le CV (C)"
        >
          <FileText size={16} />
        </a>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
}
