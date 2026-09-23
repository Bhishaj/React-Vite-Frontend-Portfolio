import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { projects } from '../../data/projects'

// Mini component to manage active image state per project
function FeaturedProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="border-b border-white/10 bg-navy-950/80 p-4 sm:p-6">
      {/* Sleek Browser-Style Frame */}
      <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/15 bg-slate-900 shadow-2xl">
        {/* Browser Top Window Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-navy-900/90 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="rounded-md border border-white/5 bg-white/5 px-3 py-0.5 text-xs font-mono text-slate-400">
            {title} — console
          </div>
          <div className="text-xs font-medium text-slate-500">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {/* Main Display Image - adapts naturally to image aspect ratio */}
        <div className="w-full">
          <img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt={`${title} snapshot ${selectedIndex + 1}`}
            className="block h-auto w-full object-cover transition-opacity duration-200"
            loading="lazy"
          />
        </div>
      </div>

      {/* Centered Thumbnails Strip */}
      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`group relative shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
                selectedIndex === idx
                  ? 'border-cyan-accent ring-2 ring-cyan-accent/40 scale-105'
                  : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="h-12 w-20 object-cover object-top sm:h-14 sm:w-24"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad bg-navy-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I've built"
          title="Featured Projects"
          description="A deep dive into my capstone Zero Trust project, plus other ongoing work."
        />

        {featured.map((project) => {
          // Fallback support for single image string OR multiple images array
          const projectImages =
            project.images || (project.architectureImage ? [project.architectureImage] : [])

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="glass-card mb-16 overflow-hidden"
            >
              {/* Interactive Multi-Image Gallery */}
              {projectImages.length > 0 && (
                <FeaturedProjectGallery images={projectImages} title={project.title} />
              )}

              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge tone="success">{project.status}</Badge>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-6 text-slate-300">{project.summary}</p>

                <ul className="mb-6 space-y-2.5">
                  {project.description.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Key Features
                    </p>
                    <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <FaGithub /> Source Code
                    </a>
                  ) : (
                    <span className="chip">Source code private for now</span>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}

        {others.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((project, i) => (
              <Card key={project.id} delay={i * 0.08}>
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white">{project.title}</h4>
                  <Badge tone="progress">{project.status}</Badge>
                </div>
                <p className="mb-4 text-sm text-slate-400">{project.summary}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-accent hover:underline"
                  >
                    <FaGithub /> View Repository
                  </a>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}