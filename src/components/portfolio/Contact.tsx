import { Download, Github, Linkedin, Mail, MapPin, Phone, Youtube, FileText } from "lucide-react";
import { profile } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "YouTube", href: profile.links.youtube, Icon: Youtube },
  { label: "Medium", href: profile.links.medium, Icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        index="05 / Contact"
        title="Got an agent, voice bot or RAG system to get into production?"
        blurb="I take on engineering and advisory work across LLM systems, voice pipelines and AI infrastructure. The fastest route is email."
      />

      <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
        <a
          href={`mailto:${profile.email}`}
          className="group bg-background p-7 transition-colors hover:bg-surface"
        >
          <Mail className="size-5 text-signal" aria-hidden="true" />
          <p className="mono-label mt-5 text-muted-foreground">Email</p>
          <p className="mt-2 break-all group-hover:text-signal">{profile.email}</p>
        </a>
        <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="group bg-background p-7 transition-colors hover:bg-surface">
          <Phone className="size-5 text-signal" aria-hidden="true" />
          <p className="mono-label mt-5 text-muted-foreground">Phone</p>
          <p className="mt-2 group-hover:text-signal">{profile.phone}</p>
        </a>
        <div className="bg-background p-7">
          <MapPin className="size-5 text-signal" aria-hidden="true" />
          <p className="mono-label mt-5 text-muted-foreground">Based in</p>
          <p className="mt-2">{profile.location}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-signal px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Download className="size-4" aria-hidden="true" />
          Download résumé (PDF)
        </a>
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label inline-flex items-center gap-2 border border-border px-4 py-3 text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
