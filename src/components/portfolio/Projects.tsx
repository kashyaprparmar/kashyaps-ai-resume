import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="02 / Projects & open source"
          title="Tooling I build when the tooling doesn't exist"
          blurb="Training platforms, inference toolkits and evaluation harnesses — mostly built to make small models genuinely usable on modest hardware."
        />

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          {projects.map((p) => {
            const Wrapper = p.href ? "a" : "div";
            return (
              <Wrapper
                key={p.name}
                {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col bg-background p-7 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono-label text-signal">{p.kind}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.name}</h3>
                  </div>
                  {p.href ? (
                    <ArrowUpRight
                      className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-signal"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>

                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{p.body}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="mono-label border border-border px-2.5 py-1.5 text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mono-label mt-5 text-muted-foreground">{p.period}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
