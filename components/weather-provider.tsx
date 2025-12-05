"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type WeatherType = "clear" | "rain" | "sunny" | "cloudy"

interface WeatherContextType {
    weather: WeatherType
    setWeather: (weather: WeatherType) => void
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export function WeatherProvider({ children }: { children: React.ReactNode }) {
    const [weather, setWeather] = useState<WeatherType>("clear")

    useEffect(() => {
        // Randomly change weather every 30-60 seconds for demo purposes
        const interval = setInterval(() => {
            const weathers: WeatherType[] = ["clear", "rain", "sunny", "cloudy"]
            const randomWeather = weathers[Math.floor(Math.random() * weathers.length)]
            setWeather(randomWeather)
        }, 45000)

        return () => clearInterval(interval)
    }, [])

    return (
        <WeatherContext.Provider value={{ weather, setWeather }}>
            {children}
        </WeatherContext.Provider>
    )
}

export function useWeather() {
    const context = useContext(WeatherContext)
    if (context === undefined) {
        throw new Error("useWeather must be used within a WeatherProvider")
    }
    return context
}
