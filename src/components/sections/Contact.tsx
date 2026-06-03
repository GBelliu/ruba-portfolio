import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'
import LinkedinIcon from '../ui/LinkedinIcon'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(0,255,65,0.03)',
  border: '1px solid rgba(0,255,65,0.12)',
  borderRadius: '4px',
  padding: '13px 16px',
  fontFamily: "'Inter',sans-serif",
  fontSize: '14px',
  color: '#e8f5e8',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[10px] tracking-widest uppercase"
        style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
      >
        {label}
        {required && <span style={{ color: 'rgba(0,255,65,0.5)' }}> *</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,255,65,0.38)'
    e.currentTarget.style.background = 'rgba(0,255,65,0.05)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,255,65,0.12)'
    e.currentTarget.style.background = 'rgba(0,255,65,0.03)'
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 85%, rgba(0,255,65,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          index="05"
          title="Get in touch"
          subtitle="Open to internships, research collaborations, and conversations about cybersecurity and AI."
          align="center"
        />

        <div
          ref={ref}
          className="grid lg:grid-cols-[1fr_1.5fr] gap-8 xl:gap-12 max-w-5xl mx-auto"
        >
          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Info card */}
            <div className="glass-card rounded-lg p-6 flex flex-col gap-5">
              <h3
                className="text-base font-semibold"
                style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
              >
                Let's connect
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}
              >
                Whether you're looking for a cybersecurity engineer, want to discuss
                AI-driven defense strategies, or just want to geek out about security
                research — I'm always available.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: MapPin, label: 'Location', value: 'Toulouse, France' },
                  {
                    icon: Mail,
                    label: 'Status',
                    value: (
                      <span className="flex items-center gap-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: '#00ff41', animation: 'neon-pulse 2s ease-in-out infinite' }}
                        />
                        Available for opportunities
                      </span>
                    ),
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-md shrink-0"
                      style={{
                        background: 'rgba(0,255,65,0.08)',
                        border: '1px solid rgba(0,255,65,0.15)',
                      }}
                    >
                      <Icon size={14} style={{ color: '#00ff41' }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-[10px]"
                        style={{ fontFamily: "'Inter',sans-serif", color: '#3a4f3a' }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm"
                        style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}
                      >
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {[
                { icon: LinkedinIcon, label: 'LinkedIn', handle: '/in/nathanruba', href: 'https://www.linkedin.com/in/nathanruba/' },
                { icon: GithubIcon, label: 'GitHub', handle: '/Ruba008', href: 'https://github.com/Ruba008' },
              ].map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-lg p-4 flex items-center gap-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-md shrink-0"
                    style={{
                      background: 'rgba(0,255,65,0.08)',
                      border: '1px solid rgba(0,255,65,0.15)',
                      transition: 'background 0.2s',
                    }}
                  >
                    <Icon size={17} style={{ color: '#00ff41' }} />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "'Inter',sans-serif", color: 'rgba(232,245,232,0.75)' }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
                    >
                      {handle}
                    </span>
                  </div>
                  <span
                    className="text-sm transition-all group-hover:translate-x-1"
                    style={{ color: '#3a4f3a' }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card rounded-lg p-7">
              {/* Terminal bar */}
              <div
                className="flex items-center gap-2 mb-7 pb-5"
                style={{ borderBottom: '1px solid rgba(0,255,65,0.08)' }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,95,87,0.6)' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(254,188,46,0.6)' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(40,200,64,0.6)' }} />
                <span
                  className="ml-3 text-xs"
                  style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
                >
                  new_message.sh
                </span>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 gap-5"
                >
                  <CheckCircle size={44} style={{ color: '#00ff41' }} />
                  <p
                    className="text-lg font-semibold"
                    style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
                  >
                    Message sent!
                  </p>
                  <p
                    className="text-sm text-center"
                    style={{ fontFamily: "'Inter',sans-serif", color: '#5a7a5a' }}
                  >
                    I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-1 text-xs transition-colors"
                    style={{ fontFamily: "'JetBrains Mono',monospace", color: 'rgba(0,255,65,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff41')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0,255,65,0.5)')}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name">
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </Field>
                  </div>

                  <Field label="Subject" required>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      placeholder="What's this about?"
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your opportunity, project, or question..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>

                  <button type="submit" className="btn-primary w-full" style={{ justifyContent: 'center' }}>
                    <Send size={14} />
                    Send Message
                  </button>

                  <p
                    className="text-[10px] text-center"
                    style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
                  >
                    // Your data stays private. No tracking, no spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
