import { experience } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        index="01 / Experience"
        title="Shipping AI systems that carry real traffic"
        blurb="Five roles across voice AI, agentic platforms and applied data science — each one measured in production behaviour, not demos."
      />

      <ol className="mt-14 space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div className="md:sticky md:top-24 md:self-start">
              <p className="mono-label text-muted-foreground">{job.period}</p>
              <h3 className="mt-3 flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight">
                {job.company}
                {job.current ? (
                  <span className="mono-label border border-signal/40 bg-signal-soft px-2 py-0.5 text-signal">
                    Now
                  </span>
                ) : null}
              </h3>
              <p className="mt-1 text-sm text-signal">{job.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
            </div>

            <div className="border-l border-border pl-6 md:pl-8">
              <div className="space-y-7">
                {job.items.map((item) => (
                  <article key={item.head}>
                    <h4 className="font-medium text-foreground">{item.head}</h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                  </article>
                ))}
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="mono-label border border-border bg-surface px-2.5 py-1.5 text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
