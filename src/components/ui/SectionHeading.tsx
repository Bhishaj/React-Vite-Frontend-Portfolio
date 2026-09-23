import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-cyan-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-slate-400">{description}</p>}
      <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-accent to-indigo-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
