import { profile, socialLinks, navLinks } from '../../data/profile'
import { Icon } from '../ui/IconMap'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="section-container grid grid-cols-1 gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="font-mono text-lg font-bold text-white">
            <span className="text-cyan-accent">&lt;</span>
            {profile.name}
            <span className="text-cyan-accent">/&gt;</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-slate-400">{profile.tagline}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">Quick links</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-400 transition-colors hover:text-cyan-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">Connect</p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-accent/40 hover:text-cyan-accent"
              >
                <Icon name={s.icon} className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="section-container text-center text-xs text-slate-500">
          © {year} {profile.name}. Built with ❤️ by Bhishaj.
        </p>
      </div>
    </footer>
  )
}
