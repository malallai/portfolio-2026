import { Panel, SectionLabel, Callout } from "@/components/ui";
import { SKILLS, UI } from "@/data/";
import { cn } from "@/lib/utils";

const t = UI.stack;

const toneColors: Record<string, string> = {
  accent: "bg-accent/15 text-accent-ink border-accent/20",
  sky: "bg-sky/15 text-sky-ink border-sky/20",
  peach: "bg-peach/15 text-peach-ink border-peach/20",
  mint: "bg-mint/15 text-mint-ink border-mint/20",
  neutral: "bg-paper-2 text-ink-2 border-line-2",
};

const dotColors: Record<string, string> = {
  accent: "bg-accent",
  sky: "bg-sky-ink",
  peach: "bg-peach-ink",
  mint: "bg-mint-ink",
  neutral: "bg-ink-3",
};

export function StackPane() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_300px] gap-4 lg:gap-6 lg:h-full animate-pane-in">
      <Panel className="px-6 py-6 md:px-10 md:py-8 overflow-auto">
        <div className="flex flex-col gap-8 md:gap-10">
          {SKILLS.map((category, categoryIdx) => (
            <div key={category.key}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="mono text-[10px] text-ink-3">0{categoryIdx + 1}</span>
                <h3 className="serif text-2xl md:text-3xl m-0 text-ink">{category.label}</h3>
                <span className="mono text-[11px] text-ink-3">{t.toolsCount(category.items.length)}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tool) => (
                  <span
                    key={tool.name}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg border text-[13px] font-medium mono transition-colors",
                      toneColors[tool.tone],
                    )}
                  >
                    <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[tool.tone])} />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="p-4 md:p-5 lg:min-h-0 overflow-auto flex flex-col gap-6">
        <div>
          <SectionLabel>RÉSUMÉ</SectionLabel>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-baseline justify-between">
              <span className="mono text-[10px] text-ink-3">Catégories</span>
              <span className="text-sm font-medium text-ink">{SKILLS.length}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="mono text-[10px] text-ink-3">Outils</span>
              <span className="text-sm font-medium text-ink">
                {SKILLS.reduce((sum, category) => sum + category.items.length, 0)}
              </span>
            </div>
          </div>
        </div>

        <Callout label={t.calloutLabel}>{t.calloutText}</Callout>
      </Panel>
    </div>
  );
}
