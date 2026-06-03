import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ#$%&@'
    const fontSize = 13
    const cols = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(cols).fill(1)

    let frame: number
    const draw = () => {
      ctx.fillStyle = 'rgba(2, 11, 2, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Leading char is brighter
        const brightness = Math.random() > 0.95 ? 1 : 0.3
        ctx.fillStyle = `rgba(0, 255, 65, ${brightness})`
        ctx.font = `${fontSize}px JetBrains Mono, monospace`
        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      frame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      aria-hidden
    />
  )
}
