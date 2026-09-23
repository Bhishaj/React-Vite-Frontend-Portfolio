import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'

export default function About() {
  return (
    <section id="about" className="section-pad bg-navy-900">
      <div className="section-container">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
            <p className="mt-4 leading-relaxed text-slate-400">{profile.experienceSummary}</p>

            <div className="mt-8 glass-card p-6">
              <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-accent">
                Current Career Focus
              </p>
              <p className="text-slate-300">{profile.careerFocus}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6">
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-accent">
                Specialization
              </p>
              <ul className="space-y-3">
                {profile.specialization.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-cyan-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
