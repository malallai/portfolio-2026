import { useTheme } from "@/hooks/useTheme";
import { useNavigation } from "@/hooks/useNavigation";
import { useShortcuts } from "@/hooks/useShortcuts";

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
  useShortcuts({ go, goNext, goPrev, toggleTheme });

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
