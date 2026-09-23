import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { blogPosts } from '../../data/blog'

export default function Blog() {
  const [openId, setOpenId] = useState<string | null>(blogPosts[0]?.id ?? null)

  return (
    <section id="blog" className="section-pad bg-navy-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="Notes & write-ups"
          title="Technical Blog / Knowledge"
          description="Short technical notes on Zero Trust, Zscaler, and network security concepts — written from real hands-on experience."
        />

        <div className="space-y-4">
          {blogPosts.map((post, i) => {
            const isOpen = openId === post.id
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : post.id)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="chip">{post.category}</span>
                      <span className="font-mono text-xs text-slate-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{post.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
                  </div>
                  <FaChevronDown
                    className={`mt-1 shrink-0 text-cyan-accent transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/10"
                    >
                      <div className="space-y-3 p-6 pt-5">
                        {post.content.map((para, idx) => (
                          <p key={idx} className="text-sm leading-relaxed text-slate-300">
                            {para}
                          </p>
                        ))}
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="chip">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        {post.externalUrl && (
                          <a
                            href={post.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-cyan-accent hover:underline"
                          >
                            <FaExternalLinkAlt /> Read full post
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
