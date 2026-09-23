import { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Zscaler',
    icon: 'shield',
    items: ['ZIA (Internet Access)', 'ZPA (Private Access)', 'ZDX (Digital Experience)', 'ZCC (Client Connector)', 'Forwarding & App Profiles', 'SSL/TLS Inspection'],
  },
  {
    category: 'Network Security',
    icon: 'lock',
    items: ['Zero Trust Architecture (ZTNA)', 'SASE', 'URL & Content Filtering', 'IPSec & GRE Tunnels', 'Policy Engineering', 'Incident Response'],
  },
  {
    category: 'Networking',
    icon: 'network',
    items: ['TCP/IP & Routing', 'Cisco Catalyst Switches', 'Aruba Switches', 'Cisco ISE', 'DNA Center', 'Wireshark / Packet Analysis'],
  },
  {
    category: 'Firewalls',
    icon: 'firewall',
    items: ['Perimeter Firewall Concepts', 'NGFW Policy Design', 'Segmentation Strategy', 'Traffic Inspection'],
  },
  {
    category: 'Cloud',
    icon: 'cloud',
    items: ['AWS (EC2, VPC, IAM, S3)', 'Azure Fundamentals', 'Cloud Security Basics', 'Terraform (learning)', 'DevSecOps (learning)'],
  },
  {
    category: 'Security Tools',
    icon: 'tool',
    items: ['ClamAV', 'RabbitMQ (event pipelines)', 'Netreo (monitoring)', 'SIEM Concepts', 'Vulnerability Basics'],
  },
  {
    category: 'Programming / Scripting',
    icon: 'code',
    items: ['Python (automation)', 'Java / Spring Boot', 'Bash / Linux Shell', 'REST APIs'],
  },
  {
    category: 'Other Tools',
    icon: 'grid',
    items: ['Linux Administration', 'Git / GitHub', 'MySQL', 'Microsoft Entra ID / Graph API'],
  },
]
