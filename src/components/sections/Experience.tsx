import SectionHeading from '../ui/SectionHeading'
import Timeline, { TimelineItem } from '../ui/Timeline'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-navy-900">
      <div className="section-container">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Professional Experience"
          description="Nearly four years progressing from network operations into hands-on Zero Trust security work."
        />

        <Timeline>
          {experience.map((exp, idx) => (
            <TimelineItem
              key={exp.company + exp.role}
              title={`${exp.role} · ${exp.company}`}
              subtitle={`${exp.location}`}
              duration={exp.duration}
              isLast={idx === experience.length - 1}
            >
              <div className="glass-card p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Responsibilities
                </p>
                <ul className="mb-5 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                  {exp.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>

                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Key Achievements
                </p>
                <ul className="mb-5 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                  {exp.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>

                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
