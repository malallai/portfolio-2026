import { cn } from "@/lib/utils";
import { LANGUAGES, SOFT_SKILLS, SKILLS } from "@/data/";
import { CVSection } from "./CVSection";
import { Chip } from "@/components/ui/Chip";

export function CVSidebar() {
  return (
    <aside className="pl-[18px]">
      <CVSection idx="03" title="Stack">
        {SKILLS.map((group) => (
          <div key={group.label} className="mb-2.5 last:mb-0">
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-3 mb-1">{group.label}</div>
            <div className="flex flex-wrap gap-x-1.5 gap-y-1">
              {group.items.map((item) => (
                <Chip
                  key={item.name}
                  tone={item.primary ? "accent" : "neutral"}
                  className="text-[10px] py-[2px] px-[7px] tracking-[0.01em]"
                >
                  {item.name}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </CVSection>

      <CVSection idx="04" title="Langues">
        {LANGUAGES.map((lang, index) => (
          <div
            key={lang.name}
            className={cn(
              "grid grid-cols-[70px_1fr_auto] gap-2.5 items-center py-1.5 border-b border-dashed border-line-2 text-[11.5px]",
              index === LANGUAGES.length - 1 && "border-none",
            )}
          >
            <div className="font-semibold">{lang.name}</div>
            <div className="h-[3px] bg-line-2 rounded-sm relative overflow-hidden">
              <i className="block h-full bg-accent-ink" style={{ width: `${lang.percent}%` }} />
            </div>
            <div className="font-mono text-[9.5px] text-ink-3 text-right tracking-[0.02em]">{lang.level}</div>
          </div>
        ))}
      </CVSection>

      <CVSection idx="05" title="Soft skills">
        <div className="grid gap-[5px]">
          {SOFT_SKILLS.map((skill, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr] gap-2 text-[11px] leading-normal">
              <div className="font-mono text-[9px] text-accent-ink pt-[3px] tracking-[0.02em]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <b className="block font-semibold text-ink mb-px">{skill.title}</b>
                <span className="text-ink-3">{skill.description}</span>
              </div>
            </div>
          ))}
        </div>
      </CVSection>
    </aside>
  );
}
