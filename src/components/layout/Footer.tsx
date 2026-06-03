import { Mail } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'
import LinkedinIcon from '../ui/LinkedinIcon'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,255,65,0.08)' }}>
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ paddingBlock: '40px', paddingInline: '2rem' }}
      >
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <span
            className="text-base font-bold"
            style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#e8f5e8' }}
          >
            N<span style={{ color: '#00ff41' }}>.</span>RUBA
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
          >
            // cybersecurity engineer &amp; ai specialist
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: 'https://github.com/Ruba008', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nathanruba/', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded transition-all duration-200"
              style={{
                color: '#3a4f3a',
                border: '1px solid rgba(0,255,65,0.1)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00ff41'
                e.currentTarget.style.borderColor = 'rgba(0,255,65,0.4)'
                e.currentTarget.style.background = 'rgba(0,255,65,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#3a4f3a'
                e.currentTarget.style.borderColor = 'rgba(0,255,65,0.1)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p
          className="text-xs text-center"
          style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3a4f3a' }}
        >
          &copy; 2025 Nathan Ruba. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
