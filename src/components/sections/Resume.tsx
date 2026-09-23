import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile' // relative path fix

export default function Resume() {
  return (
    <section id="resume" className="section-pad bg-navy-900">
      <div className="section-container">
        <SectionHeading
          eyebrow="Take a copy"
          title="Resume"
          description="View it online right here, or download the PDF for offline reference."
        />

        <div className="glass-card overflow-hidden">
          <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 p-6 sm:flex-row">
            <div className="flex shrink-0 gap-3">
              <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FaExternalLinkAlt /> View Online
              </a>
              <a href={profile.resumePdf} download className="btn-primary">
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>

          <object data={profile.resumePdf} type="application/pdf" className="h-[600px] w-full">
            <div className="flex h-[300px] items-center justify-center p-8 text-center text-sm text-slate-400">
              Your browser can't preview PDFs inline. Use the "View Online" or "Download PDF" button above instead.
            </div>
          </object>
        </div>
      </div>
    </section>
  )
}