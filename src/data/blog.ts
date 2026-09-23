import { BlogPost } from '@/types'

// Short-form technical notes. Expand `content` with more paragraphs any time —
// the Blog section will render each entry as an expandable card.
export const blogPosts: BlogPost[] = [
  {
    id: 'gre-vs-ipsec',
    title: 'GRE vs. IPsec: What Interviewers Actually Want to Hear',
    category: 'Network Security',
    date: '2026',
    tags: ['GRE', 'IPsec', 'VPN', 'Interview Prep'],
    excerpt:
      'GRE and IPsec solve different problems — one is a tunneling protocol, the other is a security protocol. Here is the safe, precise way to explain both.',
    content: [
      'GRE (Generic Routing Encapsulation) is a tunneling protocol that encapsulates a wide variety of network layer protocols inside point-to-point virtual links — it provides connectivity, not confidentiality. It has no built-in encryption or authentication.',
      'IPsec is a security protocol suite that provides confidentiality, integrity and authentication for IP traffic, using ESP/AH and IKE for key negotiation. It secures data, but by itself is not always ideal for carrying non-IP or multicast traffic.',
      'In practice, the two are frequently combined as GRE-over-IPsec: GRE builds the flexible tunnel topology (supporting routing protocols, multicast, etc.) while IPsec wraps that tunnel in strong encryption — giving you both flexibility and security.',
      'In a Zscaler context, IPsec tunnels are commonly used for site-to-cloud connectivity, with source-IP anchoring ensuring that traffic is correctly attributed to the originating location for policy enforcement.',
    ],
  },
  {
    id: 'forwarding-vs-app-profile',
    title: 'Zscaler Forwarding Profile vs. App Profile — Why the Distinction Matters',
    category: 'Zscaler',
    date: '2026',
    tags: ['Zscaler', 'ZCC', 'Client Connector'],
    excerpt:
      'Two of the most confused settings in a Zscaler Client Connector rollout — here is a clear breakdown of what each one actually controls.',
    content: [
      'A Forwarding Profile defines how traffic is forwarded from the endpoint into the Zscaler cloud — including the tunnel mode (Z-Tunnel 1.0 or 2.0), trusted network criteria, and failover/on-trusted-network behavior.',
      'An App Profile controls the behavior and policies of the Zscaler Client Connector application itself on the endpoint — things like UI restrictions, password protection for uninstall, logging levels, and update behavior.',
      'In short: Forwarding Profile = "how does traffic get to Zscaler", App Profile = "how does the client app behave on the device". Misconfiguring either is a common source of connectivity or user-experience issues in production rollouts.',
    ],
  },
  {
    id: 'ztunnel-1-vs-2',
    title: 'Z-Tunnel 1.0 vs. Z-Tunnel 2.0',
    category: 'Zero Trust',
    date: '2026',
    tags: ['Zscaler', 'Zero Trust', 'Architecture'],
    excerpt:
      'A quick technical comparison of the two tunneling architectures behind Zscaler Client Connector traffic forwarding.',
    content: [
      'Z-Tunnel 1.0 uses a PAC-file driven, proxy-style forwarding model — traffic is redirected largely at the application layer, which is simple but has visibility and performance limitations for non-HTTP(S) traffic.',
      'Z-Tunnel 2.0 uses a lightweight tunneling driver that captures traffic at a lower layer, giving broader protocol coverage (not just HTTP/S), better performance, and more granular application-level visibility — closer to a true Zero Trust Network Access model.',
      'This distinction mirrors a broader industry shift from proxy-only secure web gateways toward full Zero Trust Network Access architectures that can evaluate and enforce policy on all outbound traffic, not just browser traffic.',
    ],
  },
  {
    id: 'ech-tls-inspection',
    title: 'Encrypted Client Hello (ECH) and Why It Breaks Naive TLS Inspection',
    category: 'Troubleshooting Guides',
    date: '2026',
    tags: ['TLS Inspection', 'ECH', 'Firefox', 'Zero Trust SWG'],
    excerpt:
      'A real debugging story from building a Zero Trust SWG: Firefox traffic was silently bypassing inspection because of Encrypted Client Hello.',
    content: [
      'Encrypted Client Hello (ECH) encrypts the SNI field inside the TLS ClientHello, which a naive gateway can misread as "no visible SNI" and default to a blanket DO_NOT_INSPECT decision — silently breaking policy enforcement for any browser that enables ECH by default.',
      'The fix: rather than treating "ECH extension present" as an automatic bypass signal, the security evaluator was updated to check whether a usable, visible SNI is actually still present in the ClientHello. If it is, inspection proceeds normally. Only when ECH is present *and* no usable SNI is available does the configured ECH fallback action apply.',
      'This is a good example of why Zero Trust enforcement logic needs to reason about the actual cryptographic reality of a handshake, not just the presence of an extension — small protocol details can silently undermine an entire policy layer if left unhandled.',
    ],
  },
]
