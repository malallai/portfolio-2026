import type { ReactNode } from "react";
import { Panel, Chip, SectionLabel, Button, HighlightCard, HeroHeader } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { MarkdownText } from "@/components/ui/MarkdownText";

import { DetailSidebar, type SidebarItem } from "./DetailSidebar";

interface DetailItem {
  palette: [string, string];
  title: string;
  summary: string;
  highlights: string[];
  metrics?: string[];
  tags: string[];
  url?: string;
}

interface DetailPaneProps {
  sidebarTitle: string;
  yearRange: string;
  tagsLabel: string;
  learnMore: string;
  items: SidebarItem[];
  detail: DetailItem;
  activeId: string;
  onSelect: (id: string) => void;
  heroMeta: ReactNode;
  heroChips: ReactNode;
}

export function DetailPane({
  sidebarTitle,
  yearRange,
  tagsLabel,
  learnMore,
  items,
  detail,
  activeId,
  onSelect,
  heroMeta,
  heroChips,
}: DetailPaneProps) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-4 lg:gap-6 lg:h-full animate-pane-in">
      <DetailSidebar
        title={sidebarTitle}
        yearRange={yearRange}
        items={items}
        activeId={activeId}
        onSelect={onSelect}
      />

      <Panel key={activeId} className="p-0 flex flex-col animate-pane-in-fast lg:min-h-0">
        <HeroHeader gradient={detail.palette}>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            {heroChips}
            <span className="mono text-[11px] text-ink-2">{items.find((i) => i.id === activeId)?.date}</span>
          </div>
          <h2 className="serif text-[40px] md:text-[56px] lg:text-[68px] m-0 leading-none tracking-tight">
            {detail.title}
          </h2>
          <div className="flex gap-6 md:gap-8 mt-4 md:mt-5 text-[12px] md:text-[13px]">{heroMeta}</div>
        </HeroHeader>

        <div className="flex-1 overflow-auto px-6 md:px-11 pt-6 md:pt-8 pb-8 md:pb-10">
          <MarkdownText className="block text-[16px] md:text-[19px] leading-relaxed text-ink mb-6 md:mb-8 max-w-[720px]">
            {detail.summary}
          </MarkdownText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 md:mb-8">
            {detail.highlights.map((highlightItem, index) => (
              <HighlightCard key={index} index={index + 1}>
                <MarkdownText>{highlightItem}</MarkdownText>
              </HighlightCard>
            ))}
          </div>

          {detail.metrics && detail.metrics.length > 0 && (
            <div className="border-t border-line pt-5 mb-6 md:mb-8">
              <SectionLabel>MÉTRIQUES & IMPACT</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {detail.metrics.map((metric) => (
                  <Chip key={metric} tone="sky" size="sm">
                    {metric}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-line pt-5">
            <SectionLabel>{tagsLabel}</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {detail.tags.map((tagName) => (
                <span key={tagName} className="mono px-3 py-1.5 text-xs bg-paper border border-line rounded-lg text-ink-2">
                  {tagName}
                </span>
              ))}
            </div>
          </div>

          {detail.url && (
            <div className="mt-6 md:mt-8">
              <a href={detail.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                <Button variant="primary" iconRight={<ArrowRight size={14} />}>
                  {learnMore}
                </Button>
              </a>
            </div>
          )}
        </div>
      </Panel>
    </div>
  );
}
