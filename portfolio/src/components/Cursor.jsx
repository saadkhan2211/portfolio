import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.current.style.left = e.clientX - 3 + 'px'
      dot.current.style.top = e.clientY - 3 + 'px'
    }
    window.addEventListener('mousemove', move)

    let raf
    const lerp = (a, b, n) => a + (b - a) * n
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12)
      if (ring.current) {
        ring.current.style.left = ringPos.current.x - 18 + 'px'
        ring.current.style.top = ringPos.current.y - 18 + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onEnterLink = () => {
      dot.current.style.transform = 'scale(3)'
      ring.current.style.width = '60px'
      ring.current.style.height = '60px'
      ring.current.style.opacity = '0.3'
    }
    const onLeaveLink = () => {
      dot.current.style.transform = 'scale(1)'
      ring.current.style.width = '36px'
      ring.current.style.height = '36px'
      ring.current.style.opacity = '1'
    }

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
