export interface CertificationItem {
  name: string
  issuer: string
  status: 'completed' | 'in-progress' | 'planned'
  logoKey: string
}

export const certifications: CertificationItem[] = [
  {
    name: 'AWS Certified Cloud Practitioner (CCP)',
    issuer: 'Amazon Web Services',
    status: 'completed',
    logoKey: 'aws',
  },
  {
    name: 'Zero Trust Cyber Associate (ZTCA)',
    issuer: 'Zscaler Cyber Academy',
    status: 'completed',
    logoKey: 'zscaler',
  },
  {
    name: 'Palo Alto Networks Security Fundamentals Certification',
    issuer: 'Palo Alto Networks',
    status: 'completed',
    logoKey: 'paloalto',
  },
  {
    name: 'Palo Alto Networks Cloud Security Certification',
    issuer: 'Palo Alto Networks',
    status: 'completed',
    logoKey: 'paloalto',
  },
  {
    name: 'Web Development',
    issuer: 'Internshala Trainings',
    status: 'completed',
    logoKey: 'internshala',
  },
  {
    name: 'Zscaler ZTE Administrator',
    issuer: 'Zscaler',
    status: 'planned',
    logoKey: 'zscaler',
  },
]