import React, { RefObject, useEffect, useState } from 'react'

export const useIsElementVisible = (rootMargin = '0px'): { ref: RefObject<HTMLElement>; isVisible: boolean } => {
  const ref = React.useRef<HTMLElement>(null)
  const rendersAmount = React.useRef<number>(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([state]) => {
        setIsVisible(state.isIntersecting)
        rendersAmount.current += 1
      },
      { rootMargin }
    )

    ref.current && observer.observe(ref.current)

    return () => observer.unobserve(ref.current as Element)
  }, [])

  return { ref, isVisible: !!rendersAmount.current || (!rendersAmount.current && isVisible) }
}
