import { useState } from "react";
import { cn } from "@/lib/utils";
import { Panel } from "@/components/ui/Panel";
import { Separator } from "@/components/ui/Separator";
import type { ShowcaseEntry } from "@/components/ui/showcase.types";

const modules = import.meta.glob<{ showcase?: ShowcaseEntry }>("../ui/*.tsx", { eager: true });

const CATEGORY_ORDER: ShowcaseEntry["category"][] = ["Layout", "Atoms", "Cards", "Lists", "Data", "Icons"];

const REGISTRY: ShowcaseEntry[] = Object.values(modules)
  .map((m) => m.showcase)
  .filter((s): s is ShowcaseEntry => !!s)
  .sort((a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category));

const CATEGORIES = CATEGORY_ORDER.filter((c) => REGISTRY.some((e) => e.category === c));

export default function ComponentShowcase() {
  const [active, setActive] = useState(REGISTRY[0].name);
  const entry = REGISTRY.find((e) => e.name === active)!;

  return (
    <div className="relative z-1 h-screen w-screen p-5 grid grid-cols-[220px_1fr] gap-4">
      <Panel className="p-3 flex flex-col overflow-auto">
        <a href="/" className="mono text-[10px] text-ink-3 tracking-wide px-3 py-2 mb-2 hover:text-ink no-underline">
          ← BACK TO SITE
        </a>
        <Separator className="my-1 mb-3" />

        {CATEGORIES.map((cat) => (
          <div key={cat} className="mb-3">
            <div className="mono text-[9px] text-ink-3/60 tracking-widest uppercase px-3 py-1">{cat}</div>
            {REGISTRY.filter((e) => e.category === cat).map((e) => (
              <button
                type="button"
                key={e.name}
                onClick={() => setActive(e.name)}
                className={cn(
                  "block w-full text-left px-3 py-1.5 rounded-lg text-[13px] font-sans border-none cursor-pointer transition-colors duration-150",
                  active === e.name ? "bg-ink text-paper font-medium" : "bg-transparent text-ink-2 hover:bg-paper-2",
                )}
              >
                {e.name}
              </button>
            ))}
          </div>
        ))}
      </Panel>

      <Panel className="p-10 overflow-auto" key={active}>
        <div className="mb-8">
          <div className="mono text-[10px] text-ink-3 tracking-wide mb-2">{entry.category.toUpperCase()}</div>
          <h1 className="serif text-5xl m-0 leading-none">{entry.name}</h1>
          {entry.description && <p className="text-sm text-ink-2 mt-3 max-w-[640px]">{entry.description}</p>}
          <p className="text-sm text-ink-3 mt-2">
            <code className="mono text-xs bg-paper-2 px-1.5 py-0.5 rounded border border-line">
              {entry.imports ?? `import { ${entry.name} } from "@/components/ui"`}
            </code>
          </p>
        </div>
        <Separator className="mb-8" />

        {entry.sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="mono text-xs text-ink-3 tracking-wide mb-3 uppercase">{section.title}</h3>
            <div className="flex flex-wrap items-start gap-3">{section.content}</div>
          </div>
        ))}
      </Panel>
    </div>
  );
}
