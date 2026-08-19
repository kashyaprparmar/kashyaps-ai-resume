import { skills } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        index="03 / Stack"
        title="The toolkit, grouped by the problem it solves"
        blurb="From agent orchestration and voice pipelines down to GPU fine-tuning, observability and the data layer underneath."
      />

      <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="bg-background p-7">
            <h3 className="mono-label text-signal">{group.title}</h3>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-muted-foreground">
                  <span className="mt-px size-1 shrink-0 translate-y-1.5 bg-signal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
