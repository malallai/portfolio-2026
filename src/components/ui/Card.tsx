import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Panel } from "./Panel";
import { Button } from "./Button";
import type { ShowcaseEntry } from "./showcase.types";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <Panel className={cn("p-0", className)}>{children}</Panel>;
}

export function CardHeader({
  children,
  border = true,
  className,
}: {
  children: ReactNode;
  border?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-5 pt-4.5 pb-3.5 flex items-center justify-between",
        border && "border-b border-line",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  scroll = false,
  className,
}: {
  children: ReactNode;
  scroll?: boolean;
  className?: string;
}) {
  return <div className={cn("px-5 py-5", scroll && "scroll flex-1 overflow-auto min-h-0", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("px-5 py-3 border-t border-line flex items-center justify-between", className)}>{children}</div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Card",
  category: "Cards",
  description: "Panel-based card with optional Header, Content, and Footer sub-components.",
  imports: 'import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui"',
  sections: [
    {
      title: "With header and content",
      content: (
        <Card className="w-80">
          <CardHeader>
            <span className="text-sm font-medium">Lorem Ipsum</span>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-2">Dolor sit amet, consectetur adipiscing elit.</p>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "With footer",
      content: (
        <Card className="w-80">
          <CardHeader>
            <span className="text-sm font-medium">Sed Eiusmod</span>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-2">Tempor incididunt ut labore et dolore magna aliqua.</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button variant="primary" size="sm">
              Save
            </Button>
          </CardFooter>
        </Card>
      ),
    },
    {
      title: "No border header",
      content: (
        <Card className="w-80">
          <CardHeader border={false}>
            <span className="text-sm font-medium">Ut Enim</span>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-2">Ad minim veniam, quis nostrud exercitation.</p>
          </CardContent>
        </Card>
      ),
    },
  ],
};
