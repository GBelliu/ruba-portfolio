import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useRef } from 'react'

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ index, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const centered = align === 'center'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(0,255,65,0.45)' }}
        >
          [{index}]
        </span>
        <span
          className="h-px w-14"
          style={{ background: 'linear-gradient(90deg, rgba(0,255,65,0.3), transparent)' }}
        />
      </div>

      <h2
        className="leading-tight tracking-tight"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
          color: '#e8f5e8',
        }}
      >
        {title}
        <span style={{ color: '#00ff41' }}>.</span>
      </h2>

      {subtitle && (
        <p
          className="mt-3 text-base leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: '#5a7a5a',
            maxWidth: centered ? '520px' : '480px',
            marginInline: centered ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
