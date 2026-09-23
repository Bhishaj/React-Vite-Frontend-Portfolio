import { LabCategory } from '@/types'

// "Security Labs" — hands-on exercises, home-lab work and guided practice.
// Replace / expand items as you complete more labs.
export const labCategories: LabCategory[] = [
  {
    category: 'Zscaler Labs',
    icon: 'shield',
    description: 'Hands-on configuration and troubleshooting across the Zscaler platform.',
    items: [
      'ZIA policy configuration — URL filtering, SSL inspection, DLP basics',
      'ZPA private application access & App Connector setup',
      'Forwarding Profile vs. App Profile configuration and troubleshooting',
      'Z-Tunnel 1.0 vs. 2.0 behavior comparison',
    ],
  },
  {
    category: 'Networking Labs',
    icon: 'network',
    description: 'Core routing, switching and traffic-path troubleshooting exercises.',
    items: [
      'Cisco Catalyst / Aruba switch configuration and VLAN segmentation',
      'Routing table and packet-path analysis',
      'Cisco ISE-based identity-driven network access control',
    ],
  },
  {
    category: 'Firewall Labs',
    icon: 'firewall',
    description: 'Perimeter and segmentation policy design exercises.',
    items: [
      'Security Group vs. NACL statefulness comparison (AWS)',
      'NGFW-style rule base design and traffic segmentation',
    ],
  },
  {
    category: 'VPN / IPsec Labs',
    icon: 'lock',
    description: 'Secure tunnel design, configuration and source-IP handling.',
    items: [
      'GRE tunnel configuration fundamentals',
      'IPsec tunnel setup and troubleshooting in Zscaler',
      'Source IP anchoring concepts for site-to-cloud connectivity',
    ],
  },
  {
    category: 'AWS / Cloud Security Labs',
    icon: 'cloud',
    description: 'Cloud-native security scenarios aligned with the AWS CloudOps track.',
    items: [
      'Private EC2 internet access via NAT Gateway (no inbound exposure)',
      'IAM roles vs. access keys for least-privilege S3 access',
      'CloudTrail & AWS Config for auditability of security-relevant changes',
      'Alias records vs. CNAME for apex domain routing to an ALB',
    ],
  },
  {
    category: 'Wireshark / Packet Analysis Labs',
    icon: 'code',
    description: 'Deep-dive packet capture analysis for troubleshooting and inspection validation.',
    items: [
      'TLS ClientHello / SNI inspection analysis',
      'HTTP vs. inspected HTTPS traffic capture comparison',
      'Encrypted Client Hello (ECH) behavior analysis',
    ],
  },
]
