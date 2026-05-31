import { useEffect, useState } from 'react'

export function useCountUp(target: number, isActive: boolean, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    let raf: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out quadratic
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      }
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isActive, target, duration])

  return count
}
