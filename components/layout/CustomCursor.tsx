'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor') as HTMLElement | null
    const cursorRing = document.getElementById('cursorRing') as HTMLElement | null
    if (!cursor || !cursorRing) return
    const ring = cursorRing
    const dot = cursor

    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }
    document.addEventListener('mousemove', onMouseMove)

    let ringX = 0, ringY = 0
    let rafId: number
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    // Use event delegation so cursor works on all pages
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, label')) {
        dot.classList.add('expanded')
        ring.classList.add('expanded')
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, label')) {
        dot.classList.remove('expanded')
        ring.classList.remove('expanded')
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
