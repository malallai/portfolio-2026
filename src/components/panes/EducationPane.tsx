import { useState } from "react";
import { Chip } from "@/components/ui";
import { DetailPane } from "./DetailPane";
import { EDUCATION, UI } from "@/data/";

const t = UI.etudes;

export function EducationPane() {
  const [activeId, setActiveId] = useState(EDUCATION[0].id);
  const educationItem = EDUCATION.find((item) => item.id === activeId)!;

  return (
    <DetailPane
      sidebarTitle={t.sidebarTitle}
      yearRange={t.yearRange}
      tagsLabel={t.stack}
      learnMore={t.learnMore}
      items={EDUCATION.map((item) => ({ id: item.id, date: item.date, title: item.school, sub: item.degree }))}
      detail={{
        palette: educationItem.palette,
        title: educationItem.school,
        summary: educationItem.summary,
        highlights: educationItem.highlights,
        tags: educationItem.skills,
        url: educationItem.url,
      }}
      activeId={activeId}
      onSelect={setActiveId}
      heroChips={
        <Chip tone="neutral" size="sm">
          {educationItem.location}
        </Chip>
      }
      heroMeta={
        <div>
          <div className="mono text-[10px] text-ink-3 mb-0.5">{t.diplome}</div>
          <div className="text-ink">{educationItem.degree}</div>
        </div>
      }
    />
  );
}
