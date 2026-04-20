import { Panel, SectionHeader, SectionLabel, Separator, PortraitCard } from "@/components/ui";
import { PROFILE, LANGUAGES, SOFT_SKILLS, PROJECTS, EDUCATION, UI } from "@/data/";
import { MarkdownText } from "@/components/ui/MarkdownText";
import { formatDateRange } from "@/lib/date";

const t = UI.about;

export function AboutPane() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_360px] gap-4 lg:gap-6 lg:h-full animate-pane-in">
      <Panel className="px-6 py-6 md:px-12 md:py-10 overflow-auto">
        <SectionHeader idx={t.sectionIdx} label={t.sectionLabel} right={t.sectionRight} />

        <div className="mono text-[11px] text-ink-3 mb-3 tracking-wide">{t.greeting}</div>

        <h1 className="serif text-[36px] md:text-[56px] lg:text-[72px] leading-[1.05] m-0 tracking-tight">
          {t.headlinePre} {PROFILE.firstName}, <em className="text-accent-ink">{t.headlineHighlight}</em>
        </h1>

        <MarkdownText className="block text-base md:text-lg leading-relaxed text-ink-2 max-w-[620px] mt-6 md:mt-8 mb-8 md:mb-10">
          {PROFILE.summary}
        </MarkdownText>

        <div className="border-t border-line pt-6 md:pt-8">
          <SectionLabel>PARCOURS</SectionLabel>
          <div className="relative mt-4 ml-3">
            <div className="absolute left-0 top-1 bottom-1 w-px bg-line" />

            <div className="flex flex-col gap-6">
              {PROJECTS.map((project, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="text-sm font-medium text-ink">{project.role}</span>
                    <span className="mono text-[10px] text-ink-3">{project.name}</span>
                  </div>
                  <div className="mono text-[10px] text-ink-3 mt-0.5">
                    {formatDateRange(project.begin_at, project.end_at)} · {project.location}
                  </div>
                </div>
              ))}

              {EDUCATION.map((edu, index) => (
                <div key={`edu-${index}`} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-line bg-paper -translate-x-[3.5px]" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="text-sm font-medium text-ink">{edu.school}</span>
                    <span className="mono text-[10px] text-ink-3">{edu.date}</span>
                  </div>
                  <div className="text-xs text-ink-3 mt-0.5">{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <div className="flex flex-col gap-4 min-h-0">
        <Panel className="p-4 shrink-0 hidden md:block">
          <PortraitCard src={PROFILE.portraitUrl} alt={PROFILE.name} />
        </Panel>
        <Panel className="p-4 md:p-5 lg:flex-1 lg:min-h-0 overflow-auto">
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
            {SOFT_SKILLS.map((skill, index) => (
              <div key={index}>
                <div className="text-sm font-medium text-ink">{skill.title}</div>
                <div className="text-xs text-ink-3 mt-0.5">{skill.description}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
