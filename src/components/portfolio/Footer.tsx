import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="mono-label text-muted-foreground">
          {profile.name} — {profile.degree}
        </p>
        <a href="#top" className="mono-label text-muted-foreground transition-colors hover:text-signal">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
