import { NavLink, SocialLink } from '@/types'

export const profile = {
  name: 'Bhishaj Kumar Sharma',
  title: 'Network Security Engineer',
  tagline:
    'Securing the perimeter-less enterprise — Zero Trust, SASE & Zscaler cloud security specialist.',
  location: 'Kolkata, West Bengal, India',
  email: 'bhishajkumar.sharma@gmail.com',
  phone: '',
  resumePdf: '/assets/resume.pdf', // TODO: replace with your actual resume file in public/assets
  availability: 'Open to Network Security / Zero Trust / Cloud Security roles',

  summary:
    "I'm a Network Security Engineer with close to 4 years of experience securing enterprise networks and cloud environments, currently deepening my expertise in Zero Trust Architecture and Secure Access Service Edge (SASE). My work has spanned Zscaler administration (ZIA, ZPA, ZDX, ZCC), network operations, incident response, and — more recently — hands-on design and development of a full Zero Trust Secure Web Gateway platform as an academic capstone project.",

  experienceSummary:
    'Around 4 years of combined experience across network operations and security operations, including a self-initiated transition from Network Operations into Cyber Security within Wipro, where I have helped secure access for 250,000+ users.',

  specialization: [
    'Zero Trust Network Access (ZTNA) & Secure Web Gateway (SWG) design',
    'Zscaler platform administration — ZIA, ZPA, ZDX, ZCC',
    'TLS/SSL inspection, URL & content filtering, policy engineering',
    'Network security operations, incident management & troubleshooting',
  ],

  careerFocus:
    'Currently upskilling in cloud automation and DevSecOps — Terraform, Ansible, Python and AWS — while pursuing the AWS Certified CloudOps Engineer – Associate certification, with the goal of becoming a well-rounded Cloud & Zero Trust Security engineer.',
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhishaj-kumar-sharma-598437237', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Bhishaj', icon: 'github' },
  { label: 'Email', href: 'mailto:bhishajkumar.sharma@gmail.com', icon: 'email' },
]
