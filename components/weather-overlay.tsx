"use client"

import { useEffect, useRef } from "react"
import { useWeather } from "./weather-provider"
import { Sun, Cloud, CloudRain } from "lucide-react"

export function WeatherOverlay() {
    const { weather } = useWeather()
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Rain Animation
    useEffect(() => {
        if (weather !== "rain") return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let drops: { x: number; y: number; speed: number; length: number }[] = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createDrops = () => {
            drops = []
            const dropCount = Math.floor(window.innerWidth / 10) // Density
            for (let i = 0; i < dropCount; i++) {
                drops.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: Math.random() * 5 + 5,
                    length: Math.random() * 20 + 10,
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = "rgba(174, 194, 224, 0.5)"
            ctx.lineWidth = 1
            ctx.lineCap = "round"

            drops.forEach((drop) => {
                ctx.beginPath()
                ctx.moveTo(drop.x, drop.y)
                ctx.lineTo(drop.x, drop.y + drop.length)
                ctx.stroke()

                drop.y += drop.speed
                if (drop.y > canvas.height) {
                    drop.y = -drop.length
                    drop.x = Math.random() * canvas.width
                }
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        resize()
        createDrops()
        draw()

        window.addEventListener("resize", () => {
            resize()
            createDrops()
        })

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [weather])

    if (weather === "clear") return null

    return (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
            {weather === "rain" && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full"
                />
            )}

            {weather === "sunny" && (
                <div className="absolute right-10 top-20 animate-pulse opacity-80">
                    <div className="relative">
                        <div className="absolute inset-0 blur-3xl bg-yellow-400/30 rounded-full scale-150"></div>
                        <Sun className="h-24 w-24 text-yellow-500 animate-[spin_10s_linear_infinite]" />
                    </div>
                </div>
            )}

            {weather === "cloudy" && (
                <div className="absolute top-20 left-0 w-full h-full opacity-30">
                    <Cloud className="absolute top-10 left-[10%] h-32 w-32 text-gray-400 animate-[float_20s_linear_infinite]" />
                    <Cloud className="absolute top-40 left-[60%] h-24 w-24 text-gray-300 animate-[float_25s_linear_infinite_reverse]" />
                    <Cloud className="absolute top-10 left-[80%] h-40 w-40 text-gray-400 animate-[float_30s_linear_infinite]" />
                </div>
            )}
        </div>
    )
}
