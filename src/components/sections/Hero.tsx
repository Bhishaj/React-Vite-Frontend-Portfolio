import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa'
import { profile, socialLinks } from '../../data/profile'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 bg-grid-pattern bg-grid"
    >
      {/* Background image + gradient overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/80 to-navy-900" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-accent/10 blur-3xl" />

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-12 py-32 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-accent/30 bg-cyan-accent/5 px-4 py-1.5 font-mono text-sm text-cyan-accent"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-accent" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hi, I'm <span className="accent-text">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 font-mono text-xl font-semibold text-cyan-accent sm:text-2xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-slate-300"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={profile.resumePdf} download className="btn-primary">
            <FaDownload /> Resume
          </a>
          <a href="#contact" className="btn-outline">
            <FaEnvelope /> Contact Me
          </a>
          {socialLinks
            .filter((s) => s.icon === 'linkedin' || s.icon === 'github')
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-accent/40 hover:text-cyan-accent"
              >
                {s.icon === 'linkedin' ? <FaLinkedin /> : <FaGithub />}
              </a>
            ))}
        </motion.div>
      </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden justify-self-center lg:col-span-2 lg:flex"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-cyan-accent/20 blur-3xl" />
          <img
            src="/assets/badge-icon.png"
            alt="Cybersecurity shield badge"
            className="w-64 animate-float xl:w-80"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-400 hover:text-cyan-accent"
        aria-label="Scroll to About section"
      >
        <FaArrowDown className="text-xl" />
      </motion.a>
    </section>
  )
}
