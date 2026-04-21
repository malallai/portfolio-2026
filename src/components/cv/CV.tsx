import { useRef, useState } from "react";
import { Download, Loader2 } from "lucide-react";
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
  const ref = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    const el = ref.current;
    if (!el || exporting) return;

    setExporting(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas-pro"), import("jspdf")]);

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, pageW, pageH);
      pdf.save(`${PROFILE.firstName}_${PROFILE.lastName}_CV.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className={cn("cv-wrapper", className)}>
      {showExport && (
        <div className="cv-toolbar">
          <button
            type="button"
            onClick={handleExport}
            disabled={exporting}
            className={cn("cv-export-btn", exporting && "opacity-60 pointer-events-none")}
          >
            {exporting ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
            {exporting ? "Génération…" : "Télécharger en PDF"}
          </button>
        </div>
      )}

      <div ref={ref} className="cv-page" data-theme="light">
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
