import { ArrowUpRight } from "lucide-react";
import { achievements, education } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Background() {
  return (
    <section id="background" className="scroll-mt-20 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="04 / Background"
          title="Education, awards and the side of the work that's public"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="mono-label text-signal">Education</h3>
            <ol className="mt-6 space-y-8">
              {education.map((e) => (
                <li key={e.degree} className="border-l border-border pl-6">
                  <p className="mono-label text-muted-foreground">{e.period}</p>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight">{e.school}</h4>
                  <p className="mt-1 text-muted-foreground">{e.degree}</p>
                  <p className="mono-label mt-2 text-signal">{e.grade}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {e.notes.map((n) => (
                      <li key={n}>— {n}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mono-label text-signal">Recognition &amp; community</h3>
            <ul className="mt-6 grid gap-px bg-border">
              {achievements.map((a) => {
                const Wrapper = a.href ? "a" : "div";
                return (
                  <li key={a.title}>
                    <Wrapper
                      {...(a.href ? { href: a.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-start justify-between gap-4 bg-background p-6 transition-colors hover:bg-surface-raised"
                    >
                      <div>
                        <h4 className="font-medium">{a.title}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                      </div>
                      {a.href ? (
                        <ArrowUpRight
                          className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-signal"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
