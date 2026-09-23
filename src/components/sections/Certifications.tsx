import { FaCheckCircle, FaClock, FaRegCircle } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import CompanyLogo from '../ui/CompanyLogo'
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
            const meta = statusMeta[cert.status as keyof typeof statusMeta] ?? statusMeta.completed
            const StatusIcon = meta.icon

            return (
              <Card key={cert.name} delay={i * 0.05} className="flex h-full flex-col">
                <div className="mb-4">
                  <CompanyLogo logoKey={cert.logoKey} issuer={cert.issuer} />
                </div>
                <h3 className="mb-1 font-bold text-white">{cert.name}</h3>
                <p className="mb-4 text-sm text-slate-400">{cert.issuer}</p>
                <div className="mt-auto pt-2">
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