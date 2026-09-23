import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { Icon } from '../ui/IconMap'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-navy-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          description="A blend of cloud security platforms, core networking, and the automation skills I'm actively building."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Card key={group.category} delay={i * 0.05}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 text-xl text-cyan-accent">
                <Icon name={group.icon} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{group.category}</h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-400">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
