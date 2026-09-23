import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'default' | 'success' | 'progress' | 'planned'
}

const toneStyles: Record<NonNullable<BadgeProps['tone']>, string> = {
  default: 'border-white/10 bg-white/5 text-slate-300',
  success: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  progress: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  planned: 'border-slate-400/30 bg-slate-400/10 text-slate-400',
}

export default function Badge({ children, tone = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneStyles[tone]}`}>
      {children}
    </span>
  )
}
