import { useState } from "react";
import { Chip } from "@/components/ui";
import { DetailPane } from "./DetailPane";
import { PROJECTS, UI } from "@/data/";
import { formatDateRange } from "@/lib/date";

const t = UI.experiences;

export function ProjectsPane() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const selectedProject = PROJECTS.find((projectItem) => projectItem.id === activeId)!;
  const entityLabel = selectedProject.entityType === "entreprise" ? t.entreprise : t.association;

  return (
    <DetailPane
      sidebarTitle={t.sidebarTitle}
      yearRange={t.yearRange}
      tagsLabel={t.stack}
      learnMore={t.learnMore}
      items={PROJECTS.map((projectItem) => ({
        id: projectItem.id,
        date: formatDateRange(projectItem.begin_at, projectItem.end_at),
        title: projectItem.name,
        sub: projectItem.kind,
      }))}
      detail={{
        palette: selectedProject.palette,
        title: selectedProject.name,
        summary: selectedProject.summary,
        highlights: selectedProject.highlights,
        tags: selectedProject.stack,
        metrics: selectedProject.metrics,
        url: selectedProject.url,
      }}
      activeId={activeId}
      onSelect={setActiveId}
      heroChips={
        <div className="flex gap-2">
          <Chip tone="neutral" size="sm">
            {selectedProject.kind}
          </Chip>
          <Chip tone={selectedProject.status === "Live" ? "mint" : "neutral"} size="sm">
            {selectedProject.status}
          </Chip>
        </div>
      }
      heroMeta={
        <>
          <div>
            <div className="mono text-[10px] text-ink-3 mb-0.5">{entityLabel}</div>
            <div className="text-ink">{selectedProject.entity}</div>
          </div>
          <div>
            <div className="mono text-[10px] text-ink-3 mb-0.5">{t.role}</div>
            <div className="text-ink">{selectedProject.role}</div>
          </div>
        </>
      }
    />
  );
}
