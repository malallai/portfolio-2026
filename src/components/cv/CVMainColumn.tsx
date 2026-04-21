import { cn } from "@/lib/utils";
import { PROJECTS, EDUCATION } from "@/data/";
import { CVSection } from "./CVSection";
import { MarkdownText } from "@/components/ui/MarkdownText";
import { formatDateRange } from "@/lib/date";

export function CVMainColumn() {
  return (
    <div className="cv-col-main">
      <CVSection idx="01" title="Expériences">
        {PROJECTS.map((project, index) => (
          <article key={index} className={cn("cv-job", index === PROJECTS.length - 1 && "cv-job-last")}>
            <div className="cv-job-top">
              <div>
                <div className="cv-job-title">{project.role}</div>
                <div className="cv-job-company">{project.entity}</div>
              </div>
              <div className="cv-job-date">{formatDateRange(project.begin_at, project.end_at)}</div>
            </div>
            <div className="cv-job-loc">{project.location}</div>
            <ul>
              {project.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>
                  <MarkdownText>{bullet}</MarkdownText>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </CVSection>

      <CVSection idx="02" title="Études & Projets">
        {EDUCATION.map((education, index) => (
          <article key={index} className={cn("cv-edu", index === EDUCATION.length - 1 && "cv-edu-last")}>
            <div className="cv-edu-top">
              <div className="cv-edu-school">{education.school}</div>
              <div className="cv-edu-date">{education.date}</div>
            </div>
            <div className="cv-edu-degree">{education.degree}</div>
            <div className="cv-edu-hl">
              <MarkdownText>{education.highlights.join(" ")}</MarkdownText>
            </div>
          </article>
        ))}
      </CVSection>
    </div>
  );
}
