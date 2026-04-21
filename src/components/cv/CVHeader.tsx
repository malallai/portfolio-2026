import { PROFILE } from "@/data/";

export function CVHeader() {
  return (
    <header className="cv-header">
      <div>
        <h1 className="cv-name">
          {PROFILE.firstName} <span className="font-bold">{PROFILE.lastName}</span>
        </h1>
        <div className="cv-role">
          {PROFILE.role} <span className="cv-dot">•</span> <span>{PROFILE.roleSecondary}</span>
        </div>
      </div>
      <div className="cv-meta">
        <div>
          <span className="cv-meta-k">tél</span> &nbsp; {PROFILE.phone}
        </div>
        <div>
          <span className="cv-meta-k">mail</span> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </div>
        <div>
          <span className="cv-meta-k">git</span> &nbsp; <a href={PROFILE.githubUrl}>{PROFILE.github}</a>
        </div>
        <div>
          <span className="cv-meta-k">in</span> &nbsp;&nbsp; <a href={PROFILE.linkedinUrl}>{PROFILE.linkedin}</a>
        </div>
        <div>
          <span className="cv-meta-k">loc</span> &nbsp; {PROFILE.city}
        </div>
      </div>
    </header>
  );
}
