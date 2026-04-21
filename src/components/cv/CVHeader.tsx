import { PROFILE } from "@/data/";

export function CVHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto] items-end gap-6 pb-2.5 border-b border-ink">
      <div>
        <h1 className="font-sans font-medium text-[44px] tracking-[-0.02em] leading-none m-0 text-ink">
          {PROFILE.firstName} <span className="font-bold">{PROFILE.lastName}</span>
        </h1>
        <div className="font-serif italic text-[20px] text-ink mt-1.5 tracking-[0.005em]">
          {PROFILE.role} <span className="text-accent-ink not-italic mx-2">•</span> <span>{PROFILE.roleSecondary}</span>
        </div>
      </div>
      <div className="font-mono text-[9.5px] leading-[1.6] text-ink-3 text-right tracking-[0.02em]">
        <div>
          <span className="text-ink">tél</span> &nbsp; {PROFILE.phone}
        </div>
        <div>
          <span className="text-ink">mail</span>{" "}
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.email}
          </a>
        </div>
        <div>
          <span className="text-ink">git</span> &nbsp;{" "}
          <a
            href={PROFILE.githubUrl}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.github}
          </a>
        </div>
        <div>
          <span className="text-ink">in</span> &nbsp;&nbsp;{" "}
          <a
            href={PROFILE.linkedinUrl}
            className="text-inherit no-underline border-b border-line hover:text-accent-ink hover:border-accent-ink transition-colors"
          >
            {PROFILE.linkedin}
          </a>
        </div>
        <div>
          <span className="text-ink">loc</span> &nbsp; {PROFILE.city}
        </div>
      </div>
    </header>
  );
}
