import { PROFILE } from "@/data/";

export function CVHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto] items-start gap-6 pb-2.5 border-b border-ink">
      <div>
        <h1 className="font-sans font-medium text-[44px] tracking-[-0.02em] leading-none m-0 text-ink">
          {PROFILE.firstName} <span className="font-bold">{PROFILE.lastName}</span>
        </h1>
        <div className="font-serif italic text-[20px] text-ink mt-1.5 tracking-[0.005em]">
          {PROFILE.role} <span className="text-accent-ink not-italic mx-2">•</span> <span>{PROFILE.roleSecondary}</span>
        </div>
      </div>
      <div className="font-mono text-[9.5px] leading-[1.6] text-ink-3 tracking-[0.02em] flex gap-2 items-center">
        <div className="text-right flex flex-col">
          <span className="text-ink">tél</span>
          <span className="text-ink">mail</span>
          <span className="text-ink">site</span>
          <span className="text-ink">git</span>
          <span className="text-ink">in</span>
        </div>

        <div className="text-left flex flex-col items-start">
          {PROFILE.phone}
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.websiteUrl}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.website}
          </a>
          <a
            href={PROFILE.githubUrl}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.github}
          </a>
          <a
            href={PROFILE.linkedinUrl}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.linkedin}
          </a>
        </div>
      </div>
    </header>
  );
}
