import {
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaFireAlt,
  FaCloud,
  FaTools,
  FaCode,
  FaThLarge,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

export const iconMap: Record<string, IconType> = {
  shield: FaShieldAlt,
  lock: FaLock,
  network: FaNetworkWired,
  firewall: FaFireAlt,
  cloud: FaCloud,
  tool: FaTools,
  code: FaCode,
  grid: FaThLarge,
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
}

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const Component = iconMap[name] ?? FaThLarge
  return <Component className={className} />
}
