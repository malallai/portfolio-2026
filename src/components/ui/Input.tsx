import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Field } from "./Field";
import type { ShowcaseEntry } from "./showcase.types";

const inputBase =
  "w-full px-3.5 py-3 text-sm font-sans text-ink bg-paper border border-line rounded-[10px] transition-colors duration-150 outline-none placeholder:text-ink-3";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(inputBase, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(inputBase, "resize-y min-h-[120px] font-sans", className)} {...props} />;
}

export const showcase: ShowcaseEntry = {
  name: "Input",
  category: "Atoms",
  description: "Text input and textarea with shared base styling.",
  imports: 'import { Input, Textarea } from "@/components/ui"',
  sections: [
    {
      title: "Text input",
      content: (
        <div className="w-72">
          <Input placeholder="Lorem ipsum..." />
        </div>
      ),
    },
    {
      title: "Email input",
      content: (
        <div className="w-72">
          <Input type="email" placeholder="lorem@ipsum.com" />
        </div>
      ),
    },
    {
      title: "Textarea",
      content: (
        <div className="w-96">
          <Textarea placeholder="Sed do eiusmod tempor incididunt..." rows={4} />
        </div>
      ),
    },
    {
      title: "With Field wrapper",
      content: (
        <div className="w-72">
          <Field label="Lorem ipsum" required>
            <Input placeholder="Dolor sit amet" />
          </Field>
        </div>
      ),
    },
  ],
};
