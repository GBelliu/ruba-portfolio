import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { ExternalLink, Lock, Brain, Activity, Shield, Cpu, Terminal } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'

const projects = [
  {
    icon: Brain,
    badge: 'AIOps',
    title: 'Intelligent Incident Triage System',
    desc: 'ML-powered system that automatically classifies and prioritizes IT incidents using NLP and pattern recognition. Reduced manual triage time by over 60% in production deployment.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'ELK Stack', 'REST API'],
    github: 'https://github.com/Ruba008',
    featured: true,
  },
  {
    icon: Shield,
    badge: 'Security',
    title: 'Network Anomaly Detector',
    desc: 'Real-time network traffic analyzer using unsupervised learning to detect intrusion attempts, DDoS patterns, and zero-day anomalies from raw packet data.',
    tags: ['Python', 'PyTorch', 'Wireshark', 'Scapy', 'Docker'],
    github: 'https://github.com/Ruba008',
    featured: true,
  },
  {
    icon: Lock,
    badge: 'Cryptography',
    title: 'Secure Communication Protocol',
    desc: 'Hybrid encryption protocol combining RSA and AES-256 with custom key exchange for end-to-end secure messaging in constrained IoT environments.',
    tags: ['C', 'OpenSSL', 'Embedded', 'IoT', 'Protocol Design'],
    github: 'https://github.com/Ruba008',
    featured: false,
  },
  {
    icon: Activity,
    badge: 'ML Security',
    title: 'Adversarial Attack Detector',
    desc: 'Research into adversarial robustness in neural networks. Implemented detection methods for FGSM, PGD, and CW attacks on image classification models.',
    tags: ['PyTorch', 'Python', 'Research', 'Neural Networks', 'Adversarial ML'],
    github: 'https://github.com/Ruba008',
    featured: false,
  },
  {
    icon: Cpu,
    badge: 'Embedded',
    title: 'Smart IoT Security Gateway',
    desc: 'FPGA-based security gateway implementing deep packet inspection and real-time traffic classification at the hardware level for IoT networks.',
    tags: ['Verilog', 'FPGA', 'IoT', 'Hardware Security', 'DPI'],
    github: 'https://github.com/Ruba008',
    featured: false,
  },
  {
    icon: Terminal,
    badge: 'CTF',
    title: 'CTF Challenge Toolkit',
    desc: 'Collection of scripts, exploits, and automation tools developed during CTF competitions. Covers web, binary exploitation, reverse engineering, and forensics.',
    tags: ['Python', 'Bash', 'Pwntools', 'GDB', 'Forensics'],
    github: 'https://github.com/Ruba008',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(0,255,65,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          index="04"
          title="Projects"
          subtitle="From academic research to real-world deployments — building at the edge of security and intelligence."
        />

        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-lg p-6 flex flex-col gap-4 group relative overflow-hidden"
                style={project.featured ? { outline: '1px solid rgba(0,255,65,0.15)' } : {}}
              >
                {/* Featured corner glow */}
                {project.featured && (
                  <div
                    className="absolute top-0 right-0 w-28 h-28 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top right, rgba(0,255,65,0.09) 0%, transparent 70%)' }}
                  />
                )}

                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-md"
                    style={{
                      background: 'rgba(0,255,65,0.08)',
                      border: '1px solid rgba(0,255,65,0.15)',
                      transition: 'background 0.2s',
                    }}
                  >
                    <Icon size={18} style={{ color: '#00ff41' }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded text-[10px]"
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        color: 'rgba(0,255,65,0.65)',
                        border: '1px solid rgba(0,255,65,0.15)',
                        background: 'rgba(0,255,65,0.05)',
                      }}
                    >
                      {project.badge}
                    </span>
                    {project.featured && (
                      <span
                        className="px-2 py-1 rounded text-[10px]"
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          color: 'rgba(0,255,65,0.5)',
                          background: 'rgba(0,255,65,0.08)',
                        }}
                      >
                        featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-semibold leading-snug"
                  style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'Inter',sans-serif", color: '#3a4f3a' }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[10px]"
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        color: '#3a4f3a',
                        border: '1px solid rgba(0,255,65,0.08)',
                        background: 'transparent',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer links */}
                <div
                  className="flex items-center gap-5 pt-4"
                  style={{ borderTop: '1px solid rgba(0,255,65,0.07)' }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs transition-colors"
                    style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff41')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7a5a')}
                  >
                    <GithubIcon size={13} />
                    Source
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs transition-colors"
                    style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#e8f5e8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7a5a')}
                  >
                    <ExternalLink size={13} />
                    View details
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Ruba008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="text-sm"
              style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
            >
              More projects on
            </span>
            <span
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff41')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7a5a')}
            >
              <GithubIcon size={15} />
              github.com/Ruba008
              <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
