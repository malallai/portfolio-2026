import { cn } from "@/lib/utils";
import { LANGUAGES, SOFT_SKILLS, SKILLS } from "@/data/";
import { CVSection } from "./CVSection";

export function CVSidebar() {
  return (
    <aside className="cv-col-side">
      <CVSection idx="03" title="Stack">
        {SKILLS.map((group) => (
          <div key={group.label} className="cv-skill-group">
            <div className="cv-skill-label">{group.label}</div>
            <div className="cv-skill-items">
              {group.items.map((item) => (
                <span key={item.name} className={cn("cv-chip", item.primary && "cv-chip-primary")}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CVSection>

      <CVSection idx="04" title="Langues">
        {LANGUAGES.map((lang, index) => (
          <div key={lang.name} className={cn("cv-lang-row", index === LANGUAGES.length - 1 && "cv-lang-row-last")}>
            <div className="cv-lang-name">{lang.name}</div>
            <div className="cv-lang-bar">
              <i style={{ width: `${lang.percent}%` }} />
            </div>
            <div className="cv-lang-level">{lang.level}</div>
          </div>
        ))}
      </CVSection>

      <CVSection idx="05" title="Soft skills">
        <div className="cv-soft">
          {SOFT_SKILLS.map((skill, index) => (
            <div key={index} className="cv-soft-item">
              <div className="cv-soft-ico">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <b>{skill.title}</b>
                <span>{skill.description}</span>
              </div>
            </div>
          ))}
        </div>
      </CVSection>
    </aside>
  );
}
