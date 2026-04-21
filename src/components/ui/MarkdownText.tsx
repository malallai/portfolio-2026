import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownTextProps {
  children: string;
  className?: string;
  components?: React.ComponentProps<typeof ReactMarkdown>["components"];
}

export function MarkdownText({ children, className, components }: MarkdownTextProps) {
  return (
    <span className={cn("markdown-content", className)}>
      <ReactMarkdown
        components={{
          strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
          em: ({ node, ...props }) => <em className="italic" {...props} />,
          a: ({ node, ...props }) => (
            <a
              className="text-accent underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {props.children}
              <span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
            </a>
          ),
          p: ({ node, ...props }) => <span {...props} />,
          ...components,
        }}
      >
        {children}
      </ReactMarkdown>
    </span>
  );
}
