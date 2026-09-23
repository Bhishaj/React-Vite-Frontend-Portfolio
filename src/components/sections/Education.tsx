import { FaGraduationCap } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="section-pad bg-navy-900">
      <div className="section-container">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <Card key={edu.institution} delay={i * 0.08}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 text-xl text-cyan-accent">
                <FaGraduationCap />
              </div>
              <h3 className="mb-1 text-lg font-bold text-white">{edu.degree}</h3>
              <p className="mb-1 text-sm font-medium text-cyan-accent">{edu.institution}</p>
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-slate-500">{edu.duration}</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                {edu.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
