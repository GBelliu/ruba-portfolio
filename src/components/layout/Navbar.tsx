import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.3 }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled ? {
          background: 'rgba(2,11,2,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,255,65,0.1)',
        } : { background: 'transparent' }}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between"
          style={{ height: 64, paddingInline: '2rem' }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2.5 group"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center rounded"
              style={{
                background: 'rgba(0,255,65,0.1)',
                transition: 'background 0.2s',
              }}
            >
              <Shield size={16} style={{ color: '#00ff41' }} />
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
            >
              N<span style={{ color: '#00ff41' }}>.</span>RUBA
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    color: isActive ? '#00ff41' : '#5a7a5a',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#e8f5e8' }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#5a7a5a' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded"
                      style={{
                        background: 'rgba(0,255,65,0.07)',
                        border: '1px solid rgba(0,255,65,0.18)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#00ff41' }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://github.com/Ruba008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '8px 20px', fontSize: 13, borderRadius: '20px' }}
            >
              View GitHub
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5a7a5a' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: 'rgba(2,11,2,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,255,65,0.1)',
            }}
          >
            <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(href)}
                  className="text-left px-4 py-3 rounded text-sm transition-all"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    color: '#5a7a5a',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00ff41'
                    e.currentTarget.style.background = 'rgba(0,255,65,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#5a7a5a'
                    e.currentTarget.style.background = 'none'
                  }}
                >
                  <span
                    className="mr-3 text-[10px]"
                    style={{ fontFamily: "'JetBrains Mono',monospace", color: 'rgba(0,255,65,0.35)' }}
                  >
                    0{i + 1}
                  </span>
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
