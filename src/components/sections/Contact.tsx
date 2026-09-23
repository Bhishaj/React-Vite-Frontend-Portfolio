import { FormEvent, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading' // adjust path if located elsewhere, e.g. './SectionHeading'
import { profile, socialLinks } from '../../data/profile' // relative fallback if '@/data/profile' alias isn't configured

const iconFor = (icon: string) => {
  if (icon === 'linkedin') return <FaLinkedin />
  if (icon === 'github') return <FaGithub />
  return <FaEnvelope />
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad bg-navy-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="Let's talk"
          title="Contact"
          description="Open to Network Security, Zero Trust and Cloud Security opportunities — feel free to reach out."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Card hoverLift={false}>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 text-xl text-cyan-accent">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium text-white">{profile.location}</p>
                </div>
              </div>
            </Card>

            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="block">
                <Card hoverLift={true}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 text-xl text-cyan-accent">
                      {iconFor(s.icon)}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{s.label}</p>
                      <p className="font-medium text-white break-all">{s.href.replace('mailto:', '')}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Card hoverLift={false}>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <FaPaperPlane className="mb-4 text-4xl text-cyan-accent" />
                  <p className="text-lg font-semibold text-white">Your email client should now be open.</p>
                  <p className="mt-2 text-sm text-slate-400">
                    If it didn't launch, email me directly at{' '}
                    <a href={`mailto:${profile.email}`} className="text-cyan-accent hover:underline">
                      {profile.email}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/50"
                      placeholder="Let me know how I can help, or what opportunity you have in mind..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}