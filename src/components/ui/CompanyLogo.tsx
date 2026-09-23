import { useState } from 'react'

type CompanyLogoProps = {
  logoKey?: string
  issuer?: string
}

type BrandConfig = {
  name: string
  // Official, exact vector SVGs hosted on open CDNs that permit localhost access
  cdnUrl: string
  // Fallback path if you decide to download the logos locally
  localUrl: string
}

const BRAND_LOGOS: Record<string, BrandConfig> = {
  aws: {
    name: 'Amazon Web Services',
    cdnUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    localUrl: '/assets/logos/aws.svg',
  },
  zscaler: {
    name: 'Zscaler',
    cdnUrl: 'https://cdn.worldvectorlogo.com/logos/zscaler-1.svg',
    localUrl: '/assets/zscaler.svg',
  },
  paloalto: {
    name: 'Palo Alto Networks',
    cdnUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Palo_Alto_Networks_logo.svg',
    localUrl: '/assets/panw.svg',
  },
  internshala: {
    name: 'Internshala',
    cdnUrl: 'https://internshala.com/static/images/common/new_internshala_logo.svg',
    localUrl: '/assets/logos/internshala.svg',
  },
}

export default function CompanyLogo({ logoKey = '', issuer = '' }: CompanyLogoProps) {
  const [imgError, setImgError] = useState(false)
  
  const k = (logoKey || '').toLowerCase().trim()
  const iss = (issuer || '').toLowerCase().trim()

  // Prioritize matching the exact official branding
  let brand = BRAND_LOGOS.aws

  if (k === 'aws' || k.includes('amazon') || iss.includes('amazon') || iss.includes('aws')) {
    brand = BRAND_LOGOS.aws
  } else if (k.includes('zscaler') || k.includes('ztca') || k.includes('zte') || iss.includes('zscaler')) {
    brand = BRAND_LOGOS.zscaler
  } else if (k.includes('palo') || k.includes('panw') || iss.includes('palo alto')) {
    brand = BRAND_LOGOS.paloalto
  } else if (k.includes('internshala') || iss.includes('internshala')) {
    brand = BRAND_LOGOS.internshala
  }

  return (
    <div
      className="flex h-12 w-36 shrink-0 items-center justify-center rounded-xl bg-white px-3 py-2 shadow-md shadow-black/25 transition-transform duration-200 hover:scale-105"
      aria-label={`${brand.name} logo`}
    >
      <img
        src={imgError ? brand.localUrl : brand.cdnUrl}
        alt={`${brand.name} Official Logo`}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
        onError={() => setImgError(true)}
      />
    </div>
  )
}