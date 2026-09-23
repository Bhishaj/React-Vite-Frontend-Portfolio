import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Labs from './components/sections/Labs'
import Certifications from './components/sections/Certifications'
import Education from './components/sections/Education'
import Blog from './components/sections/Blog'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Labs />
        <Certifications />
        <Education />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
