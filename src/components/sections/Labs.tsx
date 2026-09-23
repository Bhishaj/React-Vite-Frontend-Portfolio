import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { Icon } from '../ui/IconMap'
import { labCategories } from '../../data/labs'

export default function Labs() {
  return (
    <section id="labs" className="section-pad bg-navy-900">
      <div className="section-container">
        <SectionHeading
          eyebrow="Hands-on practice"
          title="Security Labs"
          description="Guided and self-directed lab exercises across the tools I use professionally."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labCategories.map((lab, i) => (
            <Card key={lab.category} delay={i * 0.05}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-accent/10 text-cyan-accent">
                  <Icon name={lab.icon} />
                </div>
                <h3 className="text-lg font-bold text-white">{lab.category}</h3>
              </div>
              <p className="mb-4 text-sm text-slate-400">{lab.description}</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                {lab.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
