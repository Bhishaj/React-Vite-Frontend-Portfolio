export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string // key mapped to react-icon in Socials component
}

export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  duration: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export interface ProjectItem {
  id: string
  title: string
  featured: boolean
  summary: string
  description: string[]
  architectureImage?: string
  technologies: string[]
  features: string[]
  githubUrl?: string
  demoUrl?: string
  status: string
  images?: string[]
}

export interface LabCategory {
  category: string
  icon: string
  description: string
  items: string[]
}

export interface Certification {
  name: string
  issuer: string
  status: 'completed' | 'in-progress' | 'planned'
  date?: string
  credentialUrl?: string
  logo?: string
}

export interface EducationItem {
  institution: string
  degree: string
  duration: string
  details: string[]
}

export interface BlogPost {
  id: string
  title: string
  category: string
  excerpt: string
  content: string[]
  date: string
  tags: string[]
  externalUrl?: string
}
