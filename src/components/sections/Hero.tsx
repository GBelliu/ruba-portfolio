import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'
import LinkedinIcon from '../ui/LinkedinIcon'
import MatrixRain from '../ui/MatrixRain'
import TerminalText from '../ui/TerminalText'

const ROLES = [
  'Cybersecurity Engineer',
  'AI/ML Specialist',
  'AIOps Engineer',
  'Security Researcher',
]

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let t: ReturnType<typeof setTimeout>

    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => {
        setText(current.slice(0, charIdx))
        setCharIdx((c) => c + 1)
        if (charIdx === current.length) t = setTimeout(() => setDeleting(true), pause)
      }, speed)
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => {
        setText(current.slice(0, charIdx))
        setCharIdx((c) => c - 1)
        if (charIdx === 0) { setDeleting(false); setWordIdx((w) => (w + 1) % words.length) }
      }, speed / 2)
    }

    return () => clearTimeout(t)
  }, [words, wordIdx, charIdx, deleting, speed, pause])

  return text
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col overflow-hidden"
    >
      {/* Backgrounds */}
      <MatrixRain />
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(0,255,65,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ top: '38%', background: 'linear-gradient(90deg, transparent, rgba(0,255,65,0.15), transparent)' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 pt-20 sm:pt-24 pb-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 xl:gap-20 items-center">

            {/* Left column */}
            <div className="flex flex-col">

              {/* Tag badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 mb-5 sm:mb-7"
              >
                <span className="flex items-center gap-1">
                  {[0, 0.25, 0.5].map((delay) => (
                    <span
                      key={delay}
                      className="block w-1.5 h-1.5 rounded-full"
                      style={{ background: '#00ff41', animation: `neon-pulse 2s ease-in-out ${delay}s infinite` }}
                    />
                  ))}
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'rgba(0,255,65,0.65)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}>
                  [ Cybersecurity ]
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 sm:mb-6"
              >
                <h1 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.6rem, 9vw, 7rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: '#e8f5e8',
                  margin: 0,
                }}>
                  Nathan
                </h1>
                <h1 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.6rem, 9vw, 7rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}>
                  <span style={{ WebkitTextStroke: '1.5px rgba(0,255,65,0.35)', color: 'transparent' }}>Ruba</span>
                  <span style={{ color: '#00ff41', textShadow: '0 0 30px rgba(0,255,65,0.5)' }}>.</span>
                </h1>
              </motion.div>

              {/* Role typewriter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7 overflow-hidden"
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#3a4f3a', whiteSpace: 'nowrap' }}>
                  ~/role
                </span>
                <span style={{ color: '#3a4f3a' }}>→</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  color: '#00ff41',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  minWidth: 0,
                }}>
                  {role}
                  <span
                    style={{ display: 'inline-block', width: 2, height: '1.1em', background: '#00ff41', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }}
                  />
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.48 }}
                className="mb-7 sm:mb-9"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: '#5a7a5a',
                  lineHeight: 1.7,
                  maxWidth: '32rem',
                }}
              >
                Master's student in Cybersecurity (TLS-SEC) at INSA Toulouse, combining
                expertise in{' '}
                <span style={{ color: 'rgba(232,245,232,0.75)' }}>AI/ML</span>,{' '}
                <span style={{ color: 'rgba(232,245,232,0.75)' }}>AIOps</span>, and{' '}
                <span style={{ color: 'rgba(232,245,232,0.75)' }}>software engineering</span>{' '}
                to build intelligent security systems.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.58 }}
                className="flex flex-wrap items-center gap-3 mb-7 sm:mb-9"
              >
                <button
                  className="btn-primary"
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore my work
                </button>
                <a
                  href="https://github.com/Ruba008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <GithubIcon size={15} />
                  GitHub Profile
                </a>
              </motion.div>

              {/* Social links — larger touch targets */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.72 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {[
                  { icon: GithubIcon, href: 'https://github.com/Ruba008', label: 'GitHub' },
                  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nathanruba/', label: 'LinkedIn' },
                  { icon: Download, href: '#contact', label: 'Resume' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="flex items-center gap-2 py-1 transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#3a4f3a', textDecoration: 'none', minHeight: 44 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff41')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#3a4f3a')}
                  >
                    <Icon size={15} />
                    <span>{label}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right column — terminal card, desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex flex-col gap-3"
            >
              <div className="glass-card rounded-lg overflow-hidden">
                <div
                  className="flex items-center gap-1.5 px-4 py-3"
                  style={{ borderBottom: '1px solid rgba(0,255,65,0.08)', background: 'rgba(0,255,65,0.02)' }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,95,87,0.6)' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(254,188,46,0.6)' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(40,200,64,0.6)' }} />
                  <span className="ml-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#3a4f3a' }}>
                    ruba@insa-toulouse:~$
                  </span>
                </div>
                <div className="p-5" style={{ minHeight: 260 }}>
                  <TerminalText
                    startDelay={900}
                    speed={32}
                    lines={[
                      'whoami',
                      'Nathan Ruba — Cybersecurity M2',
                      'cat interests.txt',
                      'Threat detection · AIOps · ML Security',
                      'Network Analysis · Embedded Systems',
                      'locate university',
                      'INSA Toulouse / TLS-SEC Formation',
                      'cat status.txt',
                      'Available for internships & opportunities',
                    ]}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'M2', label: 'Degree Level' },
                  { value: '2+', label: 'Years AI/ML' },
                  { value: '∞', label: 'Curiosity' },
                ].map(({ value, label }) => (
                  <div key={label} className="glass-card rounded-md p-4 text-center flex flex-col gap-1">
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#00ff41' }}>
                      {value}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#3a4f3a' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-6 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} style={{ color: 'rgba(0,255,65,0.45)' }} />
        </motion.div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#3a4f3a', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}
