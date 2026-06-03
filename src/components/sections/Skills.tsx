import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'

const categories = [
  {
    name: 'Cybersecurity',
    tag: '// sec',
    items: [
      { name: 'Network Security', level: 85 },
      { name: 'Threat Detection', level: 80 },
      { name: 'Penetration Testing', level: 72 },
      { name: 'SIEM / Log Analysis', level: 78 },
      { name: 'Cryptography', level: 75 },
      { name: 'Incident Response', level: 70 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    tag: '// ml',
    items: [
      { name: 'Python / Numpy / Pandas', level: 92 },
      { name: 'TensorFlow / PyTorch', level: 82 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'Anomaly Detection', level: 84 },
      { name: 'NLP', level: 70 },
      { name: 'AIOps', level: 80 },
    ],
  },
  {
    name: 'Software Engineering',
    tag: '// dev',
    items: [
      { name: 'Python', level: 92 },
      { name: 'C / C++', level: 78 },
      { name: 'Java', level: 72 },
      { name: 'Docker / Kubernetes', level: 68 },
      { name: 'Git / CI/CD', level: 82 },
      { name: 'Linux / Bash', level: 85 },
    ],
  },
  {
    name: 'Electronics & Systems',
    tag: '// hw',
    items: [
      { name: 'Embedded Systems', level: 80 },
      { name: 'Signal Processing', level: 75 },
      { name: 'FPGA / Verilog', level: 65 },
      { name: 'IoT Security', level: 72 },
      { name: 'Hardware Debugging', level: 70 },
      { name: 'PCB Design', level: 60 },
    ],
  },
]

const toolBadges = [
  'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux',
  'Splunk', 'ELK Stack', 'Grafana', 'Prometheus', 'Jupyter',
  'VS Code', 'Git', 'Docker', 'VMware', 'Ghidra',
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs" style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}>{name}</span>
        <span className="text-[10px]" style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}>{level}%</span>
      </div>
      <div className="h-[3px] rounded-full" style={{ background: 'rgba(0,255,65,0.07)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #00ff41, rgba(0,255,65,0.45))',
            boxShadow: '0 0 6px rgba(0,255,65,0.35)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, rgba(0,255,65,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          index="02"
          title="Technical skills"
          subtitle="A constantly evolving toolkit across security, AI, and systems engineering."
        />

        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-lg flex flex-col gap-5 p-6"
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
                >
                  {cat.name}
                </h3>
                <span
                  className="text-[10px]"
                  style={{ fontFamily: "'JetBrains Mono',monospace", color: 'rgba(0,255,65,0.35)' }}
                >
                  {cat.tag}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {cat.items.map((item, si) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    delay={ci * 0.09 + si * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-lg p-6 flex flex-col gap-4"
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
          >
            // tools &amp; platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {toolBadges.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded text-xs cursor-default transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  color: '#5a7a5a',
                  border: '1px solid rgba(0,255,65,0.12)',
                  background: 'rgba(0,255,65,0.03)',
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget
                  t.style.color = '#00ff41'
                  t.style.borderColor = 'rgba(0,255,65,0.32)'
                  t.style.background = 'rgba(0,255,65,0.07)'
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget
                  t.style.color = '#5a7a5a'
                  t.style.borderColor = 'rgba(0,255,65,0.12)'
                  t.style.background = 'rgba(0,255,65,0.03)'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
