import { cn } from "@/lib/utils";
import { PROJECTS, EDUCATION } from "@/data/";
import { CVSection } from "./CVSection";
import { MarkdownText } from "@/components/ui/MarkdownText";
import { formatDateRange } from "@/lib/date";

export function CVMainColumn() {
  return (
    <div className="pr-[18px] border-r border-line-2">
      <CVSection idx="01" title="Expériences">
        {PROJECTS.map((project, index) => (
          <article
            key={index}
            className={cn(
              "py-1.5 border-b border-dashed border-line-2",
              index === PROJECTS.length - 1 && "border-none pb-0",
            )}
          >
            <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-baseline">
              <div>
                <div className="text-[13px] font-semibold text-ink tracking-[-0.005em] leading-tight">
                  {project.role}
                </div>
                <div className="block text-accent-ink font-semibold text-[12px] mt-0.5 tracking-[0.005em]">
                  {project.entity}
                </div>
              </div>
              <div className="font-mono text-[9.5px] text-ink-3 whitespace-nowrap tracking-[0.02em]">
                {formatDateRange(project.begin_at, project.end_at)}
              </div>
            </div>
            <div className="font-mono text-[9px] text-ink-3 tracking-[0.05em] uppercase mt-0.5">{project.location}</div>
            <ul className="list-none p-0 mt-1.5 mb-0">
              {project.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bulletIndex}
                  className="relative pl-3.5 text-[11px] leading-normal text-ink mb-0.5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[6px] before:h-px before:bg-accent-ink"
                >
                  <MarkdownText>{bullet}</MarkdownText>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </CVSection>

      <CVSection idx="02" title="Études & Projets">
        {EDUCATION.map((education, index) => (
          <article
            key={index}
            className={cn(
              "py-1 border-b border-dashed border-line-2",
              index === EDUCATION.length - 1 && "border-none pb-0",
            )}
          >
            <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-baseline">
              <div className="text-[12.5px] font-semibold leading-tight">{education.school}</div>
              <div className="font-mono text-[9.5px] text-ink-3 whitespace-nowrap">{education.date}</div>
            </div>
            <div className="font-serif italic text-[12.5px] text-ink mt-1 col-span-full">{education.degree}</div>
            <div className="mt-1.5 text-[11px] leading-normal text-ink-3 [&_b]:text-ink [&_b]:font-medium">
              <MarkdownText>{education.highlights.join(" ")}</MarkdownText>
            </div>
          </article>
        ))}
      </CVSection>
    </div>
  );
}
