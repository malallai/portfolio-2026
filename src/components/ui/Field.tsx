import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Input, Textarea } from "./Input";
import type { ShowcaseEntry } from "./showcase.types";

interface FieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function Field({ label, required, children, className }: FieldProps) {
  return (
    <label className={cn("block", className)}>
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-xs text-ink-2 font-medium">{label}</span>
        {required && <span className="mono text-[10px] text-ink-3">required</span>}
      </div>
      {children}
    </label>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Field",
  category: "Atoms",
  description: "Form label wrapper with optional required indicator.",
  sections: [
    {
      title: "Form fields",
      content: (
        <div className="flex flex-col gap-4 w-72">
          <Field label="Lorem ipsum" required>
            <Input placeholder="Dolor sit amet" />
          </Field>
          <Field label="Consectetur">
            <Input placeholder="Adipiscing elit" />
          </Field>
          <Field label="Sed do" required>
            <Textarea placeholder="Eiusmod tempor incididunt..." rows={3} />
          </Field>
        </div>
      ),
    },
  ],
};
