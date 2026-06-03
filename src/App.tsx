import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function Divider() {
  return (
    <div className="max-w-7xl mx-auto" style={{ paddingInline: '2rem' }}>
      <div className="section-divider" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative" style={{ background: '#020b02', minHeight: '100svh' }}>
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
