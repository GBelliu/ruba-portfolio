import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { Brain, Shield, Cpu, Zap } from 'lucide-react'

const traits = [
  {
    icon: Shield,
    title: 'Security by Design',
    desc: 'Integrating cybersecurity into architecture from the ground up — not as an afterthought.',
  },
  {
    icon: Brain,
    title: 'AI-Driven Defense',
    desc: 'Leveraging ML for threat detection, anomaly analysis, and intelligent security response.',
  },
  {
    icon: Cpu,
    title: 'Systems Thinker',
    desc: 'From embedded electronics to cloud — understanding the full stack of modern systems.',
  },
  {
    icon: Zap,
    title: 'AIOps Expertise',
    desc: 'Applying AI to IT operations, transforming reactive workflows into proactive intelligence.',
  },
]

const stats = [
  { value: 'M2', label: 'Master Level', sub: 'INSA Toulouse' },
  { value: 'TLS-SEC', label: 'Formation', sub: 'Inter-school Cyber' },
  { value: 'AI+Sec', label: 'Specialty', sub: 'AIOps & Threats' },
  { value: 'FR/EN', label: 'Languages', sub: 'Bilingual' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute right-0 top-1/4 pointer-events-none"
        style={{ width: 320, height: 320, background: 'radial-gradient(ellipse at right, rgba(0,255,65,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader index="01" title="About me" subtitle="Engineer. Researcher. Builder." />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── Left: bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <p className="text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}>
              I'm a Master's student in a dual degree program at{' '}
              <span style={{ color: 'rgba(232,245,232,0.8)' }}>INSA Toulouse</span>, pursuing an M2 in
              Automatique & Électronique alongside the prestigious{' '}
              <span style={{ color: 'rgba(0,255,65,0.8)' }}>TLS-SEC inter-school cybersecurity formation</span>{' '}
              — one of France's top cybersecurity programs.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}>
              My academic path gave me deep roots in electronics and embedded systems, combined
              with a passion for <span style={{ color: 'rgba(232,245,232,0.8)' }}>AI-applied software engineering</span>.
              Projects in intelligent systems and neural networks sharpened my ability to build
              systems that think.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}>
              After a hands-on internship in <span style={{ color: 'rgba(232,245,232,0.8)' }}>AIOps</span>,
              I'm now fully invested in cybersecurity — combining AI, development, and intelligent
              systems to <span style={{ color: 'rgba(0,255,65,0.8)' }}>defend digital infrastructure</span>.
            </p>

            {/* Quote */}
            <div
              className="glass-card rounded-lg p-5 sm:p-6"
              style={{ borderLeft: '2px solid rgba(0,255,65,0.35)' }}
            >
              <p
                className="text-sm leading-relaxed italic"
                style={{ fontFamily: "'JetBrains Mono',monospace", color: '#5a7a5a' }}
              >
                "Cybersecurity is not just about firewalls and patches — it's about{' '}
                <span style={{ color: 'rgba(0,255,65,0.7)' }}>understanding how systems think</span>{' '}
                and building intelligence to defend them."
              </p>
              <p className="mt-3 text-xs" style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}>
                — Nathan Ruba
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-1">
              <a
                href="https://www.linkedin.com/in/nathanruba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 text-sm transition-all"
                style={{ fontFamily: "'Inter',sans-serif", color: '#00ff41', textDecoration: 'none', minHeight: 44 }}
              >
                LinkedIn Profile <span style={{ opacity: 0.5 }}>→</span>
              </a>
              <a
                href="https://github.com/Ruba008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 text-sm transition-colors"
                style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a', textDecoration: 'none', minHeight: 44 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e8f5e8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7a5a')}
              >
                GitHub Projects <span style={{ opacity: 0.4 }}>→</span>
              </a>
            </div>
          </motion.div>

          {/* ── Right: cards + stats ── */}
          <div className="flex flex-col gap-4">

            {/* Trait cards — 1 col on mobile, 2 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {traits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card rounded-lg p-5 flex flex-col gap-3"
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-md"
                    style={{ background: 'rgba(0,255,65,0.08)', border: '1px solid rgba(0,255,65,0.15)' }}
                  >
                    <Icon size={16} style={{ color: '#00ff41' }} />
                  </div>
                  <h3
                    className="text-sm font-semibold leading-snug"
                    style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: "'Inter',sans-serif", color: '#3a4f3a' }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats strip — 2×2 on mobile, 4-col on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="glass-card rounded-lg p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4"
            >
              {stats.map(({ value, label, sub }, i) => (
                <div
                  key={label}
                  className="text-center flex flex-col gap-1 py-3 sm:py-2"
                  style={{
                    borderRight: (i % 2 === 0 && i < stats.length - 1)
                      ? '1px solid rgba(0,255,65,0.08)'
                      : 'none',
                    paddingInline: 8,
                  }}
                >
                  <span
                    className="font-bold leading-none"
                    style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: '#00ff41' }}
                  >
                    {value}
                  </span>
                  <span
                    className="font-medium"
                    style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: 'rgba(232,245,232,0.45)' }}
                  >
                    {label}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: '#3a4f3a' }}
                  >
                    {sub}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
