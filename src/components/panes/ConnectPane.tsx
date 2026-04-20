import { ArrowUpRight } from "lucide-react";
import { Panel, SectionLabel, SectionHeader, Separator } from "@/components/ui";
import { CHANNELS, PROFILE, LANGUAGES, SOFT_SKILLS, UI } from "@/data/";
import { cn } from "@/lib/utils";

const t = UI.connect;

export function ConnectPane() {

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_380px] gap-4 lg:gap-6 lg:h-full animate-pane-in">
      <Panel className="px-6 py-6 md:px-12 md:py-10 flex flex-col overflow-auto">
        <SectionHeader idx={t.sectionIdx} label={t.sectionLabel} />

        <div className="mono text-[11px] text-ink-3 mb-3 tracking-wide">{t.greeting}</div>

        <h2 className="serif text-[32px] md:text-[44px] lg:text-[56px] m-0 leading-[1.05] tracking-tight">
          {t.headlineL1}
          <br />
          {t.headlineL2}
          <br />
          <em className="text-accent-ink">{t.headlineL3}</em>
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-ink-2 mt-4 md:mt-5 mb-6 md:mb-10 max-w-[560px]">
          {t.description}
        </p>

        <div className="flex flex-col gap-1">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 md:py-3 rounded-xl cursor-pointer font-sans text-left border-none",
                "bg-transparent hover:bg-paper-2 transition-colors duration-150 no-underline group",
              )}
            >
              <span className="mono w-7 h-7 rounded-lg bg-accent-wash flex items-center justify-center text-[11px] text-accent-ink font-semibold shrink-0">
                {c.kbd}
              </span>
              <span className="flex-1 min-w-0">
                <div className="text-[13px] text-ink">{c.label}</div>
                <div className="mono text-xs text-ink-3 truncate">{c.value}</div>
              </span>
              <span className="mono text-[10px] text-ink-3 flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </Panel>

      <Panel className="p-4 md:p-5 lg:min-h-0 overflow-auto">
        <SectionLabel>PROFIL</SectionLabel>
        <div className="mt-2 mb-1">
          <div className="serif text-xl text-ink">{PROFILE.name}</div>
          <div className="text-sm text-ink-2 mt-0.5">{PROFILE.role}</div>
          <div className="text-sm text-ink-2">{PROFILE.roleSecondary}</div>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex items-baseline justify-between">
            <span className="mono text-[10px] text-ink-3">Basé à</span>
            <span className="text-sm text-ink">{PROFILE.location}</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="mono text-[10px] text-ink-3">Fuseau</span>
            <span className="text-sm text-ink">CET (UTC+1)</span>
          </div>
        </div>

        <Separator spaced />

        <SectionLabel>{t.languesTitle}</SectionLabel>
        <div className="flex flex-col gap-3 mt-2">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="flex items-center gap-3">
              <span className="text-sm font-medium text-ink w-20 shrink-0">{lang.name}</span>
              <div className="flex-1 h-1.5 bg-paper-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
              <span className="mono text-[11px] text-ink-3 w-24 text-right shrink-0">{lang.level}</span>
            </div>
          ))}
        </div>

        <Separator spaced />

        <SectionLabel>{t.softSkillsTitle}</SectionLabel>
        <div className="flex flex-col gap-2.5 mt-2">
          {SOFT_SKILLS.map((skill, i) => (
            <div key={i}>
              <div className="text-sm font-medium text-ink">{skill.title}</div>
              <div className="text-xs text-ink-3 mt-0.5">{skill.description}</div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
