import type { ReactNode } from "react";

export interface ShowcaseEntry {
  name: string;
  category: "Layout" | "Atoms" | "Cards" | "Lists" | "Data" | "Icons";
  description?: string;
  imports?: string;
  sections: { title: string; content: ReactNode }[];
}
