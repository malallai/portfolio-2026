import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/data/";
import { CVHeader } from "./CVHeader";
import { CVMainColumn } from "./CVMainColumn";
import { MarkdownText } from "@/components/ui/MarkdownText";
import { CVSidebar } from "./CVSidebar";

interface CVProps {
  showExport?: boolean;
  className?: string;
}

export function CV({ showExport = false, className }: CVProps) {
  const S3_URL = "https://cdn.lacaleche.cc/malallai/cv/Malo_Allain_CV-latest.pdf";


  return (
    <div className={cn("cv-wrapper", className)}>
      {showExport && (
        <div className="cv-toolbar">
          <a
            href={S3_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-export-btn no-underline"
          >
            <Download size={14} />
            Télécharger en PDF
          </a>
        </div>
      )}

      <div className="cv-page" data-theme="light">
        <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.18em] text-ink-3 pt-2">
          <span>
            Curriculum Vitæ <span className="cv-hl">- 2026</span>
          </span>
          <span>{PROFILE.location}</span>
        </div>

        <CVHeader />

        <MarkdownText
          className="font-serif text-[14px] leading-[1.4] text-ink mt-2.5 mb-1 text-pretty block"
          components={{
            strong: ({ node, ...props }) => <strong className="cv-hl" {...props} />,
          }}
        >
          {PROFILE.summary}
        </MarkdownText>

        <div className="grid grid-cols-[62%_38%] gap-0 mt-3 flex-1">
          <CVMainColumn />
          <CVSidebar />
        </div>

        <div className="mt-auto pt-2 border-t border-line-2 flex justify-between font-mono text-[8.5px] text-ink-3 tracking-[0.12em] uppercase">
          <span>
            {PROFILE.name} · {PROFILE.role}
          </span>
        </div>
      </div>
    </div>
  );
}
