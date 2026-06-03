import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ── Console easter egg ──────────────────────────────────────────
const ascii = `
%c
  ███╗   ██╗ ██████╗  ██████╗ ███████╗
  ████╗  ██║██╔═══██╗██╔═══██╗██╔════╝
  ██╔██╗ ██║██║   ██║██║   ██║███████╗
  ██║╚██╗██║██║   ██║██║   ██║╚════██║
  ██║ ╚████║╚██████╔╝╚██████╔╝███████║
  ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚══════╝

  %c[ SYSTEM INTRUSION DETECTED ]%c — just kidding 😄

  %cNathan Ruba%c — Cybersecurity Engineer & AI Specialist
  MSc Cybersecurity · TLS-SEC · INSA Toulouse

  %c→ github.com/Ruba008
  → linkedin.com/in/nathanruba

  Curious about the stack? React + Vite + TypeScript + Tailwind v4
`

const banner  = 'color:#00ff41; font-family:monospace; font-size:12px; line-height:1.5;'
const tag     = 'color:#020b02; background:#00ff41; font-weight:bold; padding:2px 6px; border-radius:2px;'
const reset   = 'color:#5a7a5a; font-family:monospace; font-size:12px;'
const name    = 'color:#e8f5e8; font-weight:bold; font-family:monospace; font-size:13px;'
const muted   = 'color:#5a7a5a; font-family:monospace; font-size:12px;'
const links   = 'color:#00ff41; font-family:monospace; font-size:12px;'

console.log(ascii, banner, tag, reset, name, muted, links)

// Photo — works in Chrome/Edge (not Firefox)
console.log(
  '%c ',
  [
    'background-image: url(https://avatars.githubusercontent.com/u/68906407?v=4)',
    'background-size: cover',
    'background-position: center',
    'padding: 60px 70px',
    'border-radius: 8px',
    'border: 2px solid #00ff41',
    'display: inline-block',
    'line-height: 0',
  ].join(';')
)
// ───────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
