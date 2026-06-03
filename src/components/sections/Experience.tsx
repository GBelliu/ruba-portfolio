import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

const timeline = [
  {
    type: 'work',
    period: '2024',
    title: 'AIOps Engineer Intern',
    org: 'Confidential Company',
    location: 'France',
    tags: ['AIOps', 'Python', 'Machine Learning', 'Monitoring', 'Automation'],
    desc: 'Applied AI and machine learning to IT operations workflows. Designed intelligent monitoring systems for anomaly detection and predictive alerting. Automated incident triage using NLP and pattern recognition, reducing mean time to resolution.',
    highlight: 'Reduced manual triage effort by 60% through ML-driven automation',
  },
  {
    type: 'edu',
    period: '2023–Present',
    title: 'M2 Cybersecurity — TLS-SEC',
    org: 'INSA Toulouse & Partners',
    location: 'Toulouse, France',
    tags: ['Network Security', 'Cryptography', 'Penetration Testing', 'Security Architecture'],
    desc: 'Enrolled in the inter-school TLS-SEC formation — a selective M2 gathering students from INSA, Paul Sabatier, and ISAE-SUPAERO. Focus on offensive/defensive security, applied cryptography, network analysis, and secure system design.',
    highlight: "One of France's most competitive applied cybersecurity programs",
  },
  {
    type: 'edu',
    period: '2021–Present',
    title: 'M2 Automatique & Électronique',
    org: 'INSA Toulouse',
    location: 'Toulouse, France',
    tags: ['Embedded Systems', 'Signal Processing', 'Control Theory', 'Electronics'],
    desc: "Double diploma engineering program at one of France's top grandes écoles. Deep curriculum in electronics, control systems, signal processing, and embedded systems. Foundation in hardware-software co-design and intelligent systems.",
    highlight: 'Grande école — top-tier French engineering institution',
  },
  {
    type: 'work',
    period: '2022–2023',
    title: 'AI Software Engineering Projects',
    org: 'INSA Toulouse Research',
    location: 'Toulouse, France',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'NLP', 'Software Architecture'],
    desc: 'Led and contributed to university research projects applying AI to engineering problems. Developed image classification models, NLP pipelines, and integrated ML inference into production-grade software systems.',
    highlight: 'From research prototype to deployable systems',
  },
]

interface CardProps {
  item: typeof timeline[number]
  inView: boolean
  index: number
  isLeft: boolean
}

function TimelineCard({ item, inView, index, isLeft }: CardProps) {
  const Icon = item.type === 'work' ? Briefcase : GraduationCap

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid md:grid-cols-2 gap-6 md:gap-8 pl-8 md:pl-0"
    >
      {/* Dot */}
      <div
        className="absolute left-2.25 md:left-1/2 top-7 -translate-x-1/2 w-2.5 h-2.5 rounded-full z-10"
        style={{
          background: '#00ff41',
          boxShadow: '0 0 12px rgba(0,255,65,0.6)',
          outline: '4px solid #020b02',
        }}
      />

      {/* Period col — alternates side */}
      <div
        className={`hidden md:flex items-start pt-6 ${
          isLeft ? 'justify-end pr-12' : 'justify-start pl-12 order-last'
        }`}
      >
        <div className={`flex flex-col gap-1 ${isLeft ? 'items-end' : 'items-start'}`}>
          <div className="flex items-center gap-1.5">
            <Calendar size={11} style={{ color: 'rgba(0,255,65,0.45)' }} />
            <span
              className="text-xs"
              style={{ fontFamily: "'JetBrains Mono',monospace", color: 'rgba(0,255,65,0.55)' }}
            >
              {item.period}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={10} style={{ color: '#3a4f3a' }} />
            <span className="text-xs" style={{ fontFamily: "'Inter',sans-serif", color: '#3a4f3a' }}>
              {item.location}
            </span>
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className={`glass-card rounded-lg p-5 sm:p-6 flex flex-col gap-4 ${isLeft ? 'md:ml-10' : 'md:mr-10'}`}
      >
        {/* Mobile period */}
        <div className="flex items-center gap-2 md:hidden">
          <span
            className="text-xs"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: 'rgba(0,255,65,0.55)' }}
          >
            {item.period}
          </span>
          <span style={{ color: '#3a4f3a' }}>·</span>
          <span className="text-xs" style={{ fontFamily: "'Inter',sans-serif", color: '#3a4f3a' }}>
            {item.location}
          </span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md"
            style={{
              background: 'rgba(0,255,65,0.08)',
              border: '1px solid rgba(0,255,65,0.15)',
            }}
          >
            <Icon size={16} style={{ color: '#00ff41' }} />
          </div>
          <div className="flex flex-col gap-0.5 pt-0.5">
            <h3
              className="text-base font-semibold leading-tight"
              style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
            >
              {item.title}
            </h3>
            <p className="text-xs" style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}>
              {item.org}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif", color: '#3a4f3a' }}>
          {item.desc}
        </p>

        {/* Highlight */}
        <div
          className="pl-3 py-1"
          style={{ borderLeft: '2px solid rgba(0,255,65,0.28)' }}
        >
          <p
            className="text-xs italic"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: '#5a7a5a' }}
          >
            {item.highlight}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded text-[10px]"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                color: '#3a4f3a',
                border: '1px solid rgba(0,255,65,0.1)',
                background: 'rgba(0,255,65,0.03)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div
        className="absolute right-0 bottom-1/4 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, rgba(0,255,65,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          index="03"
          title="Experience & education"
          subtitle="Building expertise at the intersection of intelligence and security."
        />

        <div ref={ref} className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-2.75 md:left-1/2 top-0 bottom-0 w-px pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(0,255,65,0.2), rgba(0,255,65,0.08), transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                inView={inView}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
