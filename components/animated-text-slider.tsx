"use client"

import { useState, useEffect } from "react"

interface AnimatedTextSliderProps {
  texts: string[]
  interval?: number
}

export default function AnimatedTextSlider({ texts, interval = 4000 }: AnimatedTextSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsVisible(true)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {texts[currentIndex]}
    </div>
  )
}
