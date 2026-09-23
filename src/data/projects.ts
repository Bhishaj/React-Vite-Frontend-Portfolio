import { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
  {
    id: 'ztna-swg',
    title: 'Zero Trust Secure Web Gateway (ZTNA/SWG) Platform',
    featured: true,
    status: 'Academic Capstone Project — BITS Pilani WILP',
    summary:
      'A full-stack Zero Trust Secure Web Gateway built from the ground up — covering identity, policy enforcement, TLS inspection, URL categorization, and dynamic block-page enforcement.',
    description: [
      'Designed and implemented a Zero Trust Secure Web Gateway platform inspired by real-world SASE/SSE architectures (Zscaler-style), covering the full request lifecycle from client traffic capture through policy evaluation to enforcement.',
      'Built an Identity milestone with Microsoft Entra ID administrator SSO end-to-end — PKCE/state/nonce OAuth2 flow, authorization-code exchange, signed ID-token validation, JIT user provisioning, and Microsoft Graph-based user/group synchronization mapped to application roles.',
      'Engineered a policy runtime using clean dependency injection (Policy → EvaluationResult → ModuleDecision → FinalWebDecision → Enforcement) with ALL/ANY rule-group logic, supporting URL Filtering, TLS Inspection, File Control, Sandbox Control, ZTNA Access and SaaS Control modules.',
      'Implemented TLS ClientHello inspection with a custom security evaluator, correctly handling Encrypted Client Hello (ECH) so that genuine SNI-visible Firefox/Chrome traffic is inspected while true ECH-without-SNI traffic follows a configurable fallback action.',
      'Delivered dynamic HTML block-page enforcement working end-to-end across both HTTP and inspected HTTPS traffic, from a Linux Mint client through an Ubuntu TPROXY transparent gateway.',
      'Kept the platform observable and resilient in production-like conditions — RabbitMQ event pipelines, ClamAV file scanning, systemd-managed services with startup and health checks, and MySQL-backed configuration/evidence logging.',
      'Hardened the codebase for future public release by identifying and remediating hard-coded secrets in application configuration and git history ahead of any public exposure.',
    ],
    architectureImage: '/assets/ztna_project/Zero_trust_Gateway_login_page.png',
    images: [
      '/assets/ztna_project/Zero_trust_Gateway_login_page.png',
      '/assets/ztna_project/Dashboard_graph.png',
      '/assets/ztna_project/SSL_Inspection_Rule_Page.png',
      '/assets/ztna_project/Dashboard_donout_graph.png',
      '/assets/ztna_project/PrivateAccess_page.png',
      '/assets/ztna_project/ThreatCenter_page.png',
    ],
    technologies: [
      'Java / Spring Boot',
      'MySQL',
      'RabbitMQ',
      'ClamAV',
      'Microsoft Entra ID / Graph API',
      'TLS/SSL Inspection',
      'Linux (TPROXY, systemd)',
      'React (Policy Console UI)',
    ],
    features: [
      'Single-page enterprise policy rule builder (URL Filtering, TLS Inspection, File Control, Sandbox Control, ZTNA Access)',
      'Reusable Enforcement Profiles — Block Page, Isolation, and Quarantine profiles with protected defaults',
      'Shared URL Categories engine reused across every policy module that governs internet-bound traffic',
      'Microsoft Entra SSO with JIT provisioning and group-to-role mapping',
      'Dynamic HTTP/HTTPS block-page enforcement validated on real client traffic',
      'Planned: public explicit-forward-proxy mode with PAC file support, HTTPS CONNECT handling and TLS MITM for examiner-driven browsing',
    ],
    githubUrl: '',
    demoUrl: '',
  },
  {
    id: 'aws-cloud-security',
    title: 'AWS Cloud Security & Automation Practice',
    featured: false,
    status: 'In Progress',
    summary:
      'Hands-on lab work covering AWS core services, IAM security design, and the fundamentals of automating cloud security operations with Python.',
    description: [
      'Building practical, scenario-based AWS knowledge across compute, storage, networking and IAM — going beyond certification theory into hands-on lab exercises.',
      'Practicing infrastructure and security automation concepts (Terraform, Ansible, Python scripting) to bridge traditional network/security operations skills with modern DevSecOps workflows.',
    ],
    technologies: ['AWS (EC2, S3, IAM, VPC, CloudWatch)', 'Python', 'Terraform (learning)', 'Ansible (learning)'],
    features: [
      'IAM least-privilege role design exercises',
      'VPC network segmentation labs (public/private subnets, NAT Gateway, security groups vs. NACLs)',
      'Python scripts for repetitive security policy checks',
    ],
    githubUrl: '',
    demoUrl: '',
  },
]