import { useEffect, useState } from 'react'

interface TerminalTextProps {
  lines: string[]
  className?: string
  speed?: number
  startDelay?: number
}

export default function TerminalText({ lines, className = '', speed = 40, startDelay = 0 }: TerminalTextProps) {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (!started || currentLine >= lines.length) return

    if (currentChar < lines[currentLine].length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] || '') + lines[currentLine][currentChar]
          return next
        })
        setCurrentChar((c) => c + 1)
      }, speed)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, 200)
      return () => clearTimeout(t)
    }
  }, [started, currentLine, currentChar, lines, speed])

  return (
    <div className={`font-['JetBrains_Mono'] text-sm ${className}`}>
      {lines.map((_, i) => (
        <div key={i} className="flex items-start gap-2 leading-relaxed">
          {i < currentLine || (i === currentLine && currentChar > 0) ? (
            <>
              <span className="text-[#00ff41]/50 select-none shrink-0">&gt;</span>
              <span className="text-[#5a7a5a]">
                {displayed[i] || ''}
                {i === currentLine && currentChar < lines[i].length && (
                  <span className="inline-block w-[8px] h-[14px] bg-[#00ff41] ml-0.5 align-middle animate-pulse" />
                )}
              </span>
            </>
          ) : null}
        </div>
      ))}
      {currentLine >= lines.length && (
        <div className="flex items-center gap-2">
          <span className="text-[#00ff41]/50 select-none">&gt;</span>
          <span className="inline-block w-[8px] h-[14px] bg-[#00ff41] align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
        </div>
      )}
    </div>
  )
}
