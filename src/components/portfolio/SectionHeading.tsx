import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  blurb,
}: {
  index: string;
  title: string;
  blurb?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-8">
      <span className="mono-label text-signal">{index}</span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {blurb ? <p className="max-w-2xl text-muted-foreground">{blurb}</p> : null}
    </div>
  );
}
