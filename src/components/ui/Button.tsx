import { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  icon?: ReactNode
  download?: boolean
  target?: string
}

export default function Button({ href, children, variant = 'primary', icon, download, target }: ButtonProps) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  return (
    <a
      href={href}
      className={cls}
      download={download}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {icon}
      {children}
    </a>
  )
}
