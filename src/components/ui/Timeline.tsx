import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TimelineItemProps {
  title: string
  subtitle: string
  duration: string
  children: ReactNode
  isLast?: boolean
}

export function TimelineItem({ title, subtitle, duration, children, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-cyan-accent shadow-glow" />
      </span>
      {!isLast && <span className="absolute left-[7px] top-5 h-full w-px bg-white/10" />}

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="pb-12"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-accent">{duration}</p>
        <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-400">{subtitle}</p>
        <div className="mt-4">{children}</div>
      </motion.div>
    </div>
  )
}

export default function Timeline({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>
}
