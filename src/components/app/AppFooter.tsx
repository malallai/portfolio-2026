import { Kbd, StatusDot } from "@/components/ui";
import { UI } from "@/data/";

interface AppFooterProps {
  activePane: string;
}

export function AppFooter({ activePane }: AppFooterProps) {
  return (
    <footer className="mono flex items-center justify-between gap-4 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[10.5px] text-ink-3 glass-light border border-line-2 rounded-sm">
      <div className="flex items-center gap-3.5">
        <span className="inline-flex items-center gap-1.5">
          <StatusDot color="green" />
          {UI.footer.ready}
        </span>
        <span>·</span>
        <span>
          {UI.footer.pane}: {activePane}
        </span>
      </div>
      <div className="hidden md:flex items-center gap-3.5">
        <span>
          <Kbd>1</Kbd>-<Kbd>5</Kbd> {UI.footer.panes}
        </span>
        <span>
          <Kbd>←</Kbd> <Kbd>→</Kbd> {UI.footer.nav}
        </span>
        <span>
          <Kbd>C</Kbd> CV
        </span>
        <span>
          <Kbd>T</Kbd> {UI.footer.theme}
        </span>
        <span>·</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
