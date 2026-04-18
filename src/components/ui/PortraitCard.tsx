import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface PortraitCardProps {
  src: string;
  alt?: string;
  className?: string;
}

export function PortraitCard({ src, alt = "", className }: PortraitCardProps) {
  return (
    <div className={cn("rounded-md border border-line overflow-hidden aspect-4/5", className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "PortraitCard",
  category: "Cards",
  description: "4:5 aspect ratio portrait image card with rounded corners.",
  sections: [
    {
      title: "Default",
      content: (
        <div className="w-72">
          <PortraitCard src="https://picsum.photos/seed/portrait/400/500" alt="Lorem ipsum" />
        </div>
      ),
    },
  ],
};
