import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverLift?: boolean
}

export default function Card({ children, className = '', delay = 0, hoverLift = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-6 transition-all duration-300 ${
        hoverLift ? 'hover:-translate-y-1 hover:border-cyan-accent/30 hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
