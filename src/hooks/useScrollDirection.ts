import { useEffect, useState } from 'react'

export type ScrollDirection = 'up' | 'down'

export function useScrollDirection() {
  const [direction, setDirection] = useState<ScrollDirection>('down')

  useEffect(() => {
    let lastY = window.scrollY

    const updateDirection = () => {
      const currentY = window.scrollY

      if (Math.abs(currentY - lastY) < 8) return

      setDirection(currentY > lastY ? 'down' : 'up')
      lastY = currentY
    }

    window.addEventListener('scroll', updateDirection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateDirection)
    }
  }, [])

  return direction
}
