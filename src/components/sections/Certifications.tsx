import { FaCertificate, FaCheckCircle, FaClock, FaRegCircle } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { certifications } from '../../data/certifications'

const statusMeta = {
  completed: { label: 'Completed', tone: 'success' as const, icon: FaCheckCircle },
  'in-progress': { label: 'In Progress', tone: 'progress' as const, icon: FaClock },
  planned: { label: 'Planned', tone: 'planned' as const, icon: FaRegCircle },
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-navy-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="Continuous learning"
          title="Certifications"
          description="Completed, in-progress and planned certifications across cloud and security vendors."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const meta = statusMeta[cert.status]
            const StatusIcon = meta.icon
            return (
              <Card key={cert.name} delay={i * 0.05} className="flex flex-col">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 text-xl text-cyan-accent">
                  <FaCertificate />
                </div>
                <h3 className="mb-1 font-bold text-white">{cert.name}</h3>
                <p className="mb-4 text-sm text-slate-400">{cert.issuer}</p>
                <div className="mt-auto">
                  <Badge tone={meta.tone}>
                    <StatusIcon className="mr-1.5 inline" />
                    {meta.label}
                  </Badge>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
