import { ArrowUpRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { profile, stats } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--signal), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="animate-rise flex items-center gap-3">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative size-2 rounded-full bg-signal" />
          </span>
          <p className="mono-label text-muted-foreground">
            Available for AI/ML engineering &amp; advisory
          </p>
        </div>

        <h1 className="animate-rise mt-8 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <div className="animate-rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="mono-label border border-signal/40 bg-signal-soft px-2.5 py-1.5 text-signal">
            {profile.role}
          </span>
          <span className="mono-label text-muted-foreground">{profile.tagline}</span>
        </div>

        <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-signal px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <div className="flex items-center gap-1">
            {[
              { href: profile.links.github, Icon: Github, label: "GitHub" },
              { href: profile.links.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: profile.links.youtube, Icon: Youtube, label: "YouTube" },
              { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="border border-border p-3 text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <dl className="animate-rise mt-16 grid grid-cols-2 border-t border-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-r border-border px-5 py-6 last:border-r-0 sm:border-b-0">
              <dt className="text-3xl font-semibold tracking-tight text-foreground">{s.value}</dt>
              <dd className="mono-label mt-2 leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
