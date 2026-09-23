import { FormEvent, useState } from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaSpinner,
} from 'react-icons/fa'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { profile, socialLinks } from '../../data/profile'

const iconFor = (icon: string) => {
  if (icon === 'linkedin') return <FaLinkedin />
  if (icon === 'github') return <FaGithub />
  return <FaEnvelope />
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '635e29d1-1c89-44d1-907a-d6c8051026ea',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: 'Bhishaj Portfolio',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
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
          {/* Left Column: Direct Info & Socials */}
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
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card hoverLift={true}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 text-xl text-cyan-accent">
                      {iconFor(s.icon)}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{s.label}</p>
                      <p className="break-all font-medium text-white">
                        {s.href.replace('mailto:', '')}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Right Column: Live Interactive Contact Form */}
          <div className="lg:col-span-3">
            <Card hoverLift={false} className="h-full">
              {isSuccess ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <FaCheckCircle className="mb-4 text-5xl text-emerald-400" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="mt-2 max-w-md text-sm text-slate-400">
                    Thanks for reaching out. Your message has been sent directly to my inbox and I
                    will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="btn-outline mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3.5 text-sm text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        disabled={isSubmitting}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/50 disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        disabled={isSubmitting}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/50 disabled:opacity-50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      disabled={isSubmitting}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-cyan-accent/50 focus:ring-1 focus:ring-cyan-accent/50 disabled:opacity-50"
                      placeholder="Let me know how I can help, or what opportunity you have in mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
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