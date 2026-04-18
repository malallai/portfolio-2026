import { cn } from "@/lib/utils";
import type { ShowcaseEntry } from "./showcase.types";

interface AvatarProps {
  letter?: string;
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export function Avatar({ letter, src, alt, size = 28, className }: AvatarProps) {
  const radius = size * 0.28;

  return (
    <div
      className={cn(
        "serif flex items-center justify-center shrink-0 border border-line overflow-hidden",
        !src && "bg-linear-to-br from-accent-wash to-peach",
        className,
      )}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        fontSize: size * 0.64,
      }}
    >
      {src ? <img src={src} alt={alt ?? ""} className="w-full h-full object-cover" loading="lazy" /> : letter}
    </div>
  );
}

export const showcase: ShowcaseEntry = {
  name: "Avatar",
  category: "Atoms",
  description: "Avatar supporting both letter fallback and image source. Scales border-radius with size.",
  sections: [
    {
      title: "Letter - Sizes",
      content: (
        <div className="flex items-center gap-3">
          <Avatar letter="A" size={24} />
          <Avatar letter="B" size={28} />
          <Avatar letter="M" size={36} />
          <Avatar letter="X" size={48} />
        </div>
      ),
    },
    {
      title: "Image - Sizes",
      content: (
        <div className="flex items-center gap-3">
          <Avatar src="https://picsum.photos/seed/lorem/96" size={24} alt="Lorem" />
          <Avatar src="https://picsum.photos/seed/ipsum/96" size={28} alt="Ipsum" />
          <Avatar src="https://picsum.photos/seed/dolor/96" size={36} alt="Dolor" />
          <Avatar src="https://picsum.photos/seed/amet/96" size={48} alt="Amet" />
        </div>
      ),
    },
    {
      title: "Mixed",
      content: (
        <div className="flex items-center gap-3">
          <Avatar src="https://picsum.photos/seed/sit/96" size={32} alt="Sit" />
          <Avatar letter="C" size={32} />
          <Avatar src="https://picsum.photos/seed/elit/96" size={32} alt="Elit" />
          <Avatar letter="D" size={32} />
        </div>
      ),
    },
  ],
};
