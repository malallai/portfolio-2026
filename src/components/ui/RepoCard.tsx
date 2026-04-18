import { cn } from "@/lib/utils";
import { GitBranch, Star } from "lucide-react";
import type { ShowcaseEntry } from "./showcase.types";

interface Repo {
  name: string;
  desc: string;
  stars: string;
  lang: string;
  langColor: string;
}

export function RepoCard({ repo, className }: { repo: Repo; className?: string }) {
  return (
    <div
      className={cn(
        "p-3.5 px-4 border border-line-2 rounded-xl cursor-pointer transition-colors duration-150",
        "bg-transparent hover:bg-paper-2",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="mono inline-flex items-center gap-2 text-[13px] text-accent-ink font-medium">
          <GitBranch size={14} /> {repo.name}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-ink-3">
          <Star size={12} fill="currentColor" stroke="none" /> {repo.stars}
        </span>
      </div>
      <div className="text-[13px] text-ink-2 leading-snug mb-2.5">{repo.desc}</div>
      <div className="inline-flex items-center gap-1.5 text-[11px] text-ink-3">
        <span className="w-2 h-2 rounded-full" style={{ background: repo.langColor }} />
        {repo.lang}
      </div>
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "RepoCard",
  category: "Cards",
  description: "GitHub-style repository card with language dot, stars, and branch icon.",
  sections: [
    {
      title: "Single card",
      content: (
        <RepoCard
          repo={{
            name: "lorem-ipsum",
            desc: "Dolor sit amet consectetur adipiscing",
            stars: "1.8k",
            lang: "TypeScript",
            langColor: "oklch(0.62 0.13 235)",
          }}
        />
      ),
    },
    {
      title: "Grid",
      content: (
        <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
          <RepoCard
            repo={{
              name: "sed-eiusmod",
              desc: "Tempor incididunt ut labore",
              stars: "920",
              lang: "Rust",
              langColor: "oklch(0.65 0.14 40)",
            }}
          />
          <RepoCard
            repo={{
              name: "ut-enim",
              desc: "Ad minim veniam quis nostrud",
              stars: "164",
              lang: "Bash",
              langColor: "oklch(0.72 0.08 140)",
            }}
          />
        </div>
      ),
    },
  ],
};
