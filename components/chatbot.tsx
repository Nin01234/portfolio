"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { useWeather } from "./weather-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    role: "user" | "bot"
    content: string
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "bot",
            content: "Hi! I'm Godfred's AI assistant. I can tell you about his work, or even control the weather on this site! Try saying 'make it rain'.",
        },
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)
    const { setWeather } = useWeather()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages, isTyping])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsTyping(true)

        // Mock response logic
        setTimeout(() => {
            const responseContent = processInput(userMessage.content)
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: responseContent,
            }
            setMessages((prev) => [...prev, botResponse])
            setIsTyping(false)
        }, 1000)
    }

    const processInput = (text: string): string => {
        const lowerText = text.toLowerCase()

        // Weather Commands
        if (lowerText.includes("rain")) {
            setWeather("rain")
            return "Making it rain! 🌧️"
        }
        if (lowerText.includes("sun") || lowerText.includes("sunny")) {
            setWeather("sunny")
            return "Letting the sun shine! ☀️"
        }
        if (lowerText.includes("cloud")) {
            setWeather("cloudy")
            return "Bringing in some clouds! ☁️"
        }
        if (lowerText.includes("clear") || lowerText.includes("stop weather")) {
            setWeather("clear")
            return "Clearing the sky! ✨"
        }

        // General Queries
        if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
            return "Hello! How can I help you today? You can ask about my projects, skills, or contact info."
        }
        if (lowerText.includes("who are you")) {
            return "I'm an AI assistant created by Godfred to help you navigate his portfolio."
        }
        if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("portfolio")) {
            return "Godfred has worked on many impressive projects, including AI-powered apps, e-commerce platforms, and more. Check out the 'Projects' page for details!"
        }
        if (lowerText.includes("skill") || lowerText.includes("stack") || lowerText.includes("technology")) {
            return "Godfred is proficient in React, Next.js, TypeScript, Node.js, Python, and AI integration. He loves building modern, scalable web applications."
        }
        if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("hire")) {
            return "You can contact Godfred via the 'Contact' page. He is currently open to new opportunities!"
        }
        if (lowerText.includes("experience") || lowerText.includes("job")) {
            return "Godfred has experience as a Full-Stack Developer and AI Engineer. He has delivered high-quality solutions for various clients including Tech Solve AI, Alliswell Photo Shot, FitLife Pro, and more!"
        }
        if (lowerText.includes("about") || lowerText.includes("who is godfred")) {
            return "Godfred Osei is a Full-Stack Developer & AI Engineer specializing in building modern web applications with Next.js, React, and AI integration. He's passionate about creating fast, scalable solutions!"
        }
        if (lowerText.includes("blog") || lowerText.includes("article") || lowerText.includes("writing")) {
            return "Godfred writes about web development, AI automation, Next.js, Supabase, and best practices. Check out the Blog page for his latest articles!"
        }
        if (lowerText.includes("tech solve") || lowerText.includes("ai platform")) {
            return "Tech Solve AI is an enterprise AI analytics platform with real-time processing, GCP integration, and 5000+ monthly active users. It achieved 35% performance improvement!"
        }
        if (lowerText.includes("alliswell") || lowerText.includes("photography")) {
            return "Alliswell Photo Shot is a professional photography studio website with booking system, portfolio gallery, and 35% speed improvement. It manages 100+ bookings successfully!"
        }
        if (lowerText.includes("fitlife") || lowerText.includes("fitness")) {
            return "FitLife Pro is a fitness tracking app with 2000+ active users, real-time sync, and 4.8/5 rating. It has logged over 50,000 workouts!"
        }
        if (lowerText.includes("godfred ai") || lowerText.includes("zapier")) {
            return "Godfred AI Assistant is an AI-powered chatbot built with Zapier integration, featuring natural language processing and 24/7 availability for automated assistance!"
        }
        if (lowerText.includes("services") || lowerText.includes("what can you do")) {
            return "Godfred offers Full-Stack Development, AI Integration, Web App Development, E-Commerce Solutions, and Custom Software Development. He specializes in Next.js, React, and modern technologies!"
        }
        if (lowerText.includes("github") || lowerText.includes("code")) {
            return "You can find Godfred's code repositories on GitHub. Check out the Projects page for links to his work!"
        }
        if (lowerText.includes("location") || lowerText.includes("where")) {
            return "Godfred is based in Accra, Ghana and works with clients globally!"
        }

        return "I'm not sure about that, but I can tell you about Godfred's projects (Tech Solve AI, Alliswell, FitLife, Godfred AI), skills, experience, blog, or contact information. Or try changing the weather!"
    }

    return (
        <>
            {/* Floating Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 z-50",
                    isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                )}
                size="icon"
            >
                <MessageCircle className="h-8 w-8" />
                <span className="sr-only">Open Chat</span>
            </Button>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="destructive"
                className={cn(
                    "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 z-50",
                    isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                )}
                size="icon"
            >
                <X className="h-8 w-8" />
                <span className="sr-only">Close Chat</span>
            </Button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-24 right-6 w-[90vw] sm:w-[380px] h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col transition-all duration-300 z-50 overflow-hidden",
                    isOpen
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-10 opacity-0 scale-95 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="p-4 bg-primary text-primary-foreground flex items-center gap-3">
                    <div className="h-10 w-10 bg-background/20 rounded-full flex items-center justify-center">
                        <Bot className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold">AI Assistant</h3>
                        <p className="text-xs opacity-80">Ask me anything about Godfred</p>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-2 max-w-[80%]",
                                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                <div
                                    className={cn(
                                        "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                                        msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                                    )}
                                >
                                    {msg.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                                </div>
                                <div
                                    className={cn(
                                        "p-3 rounded-2xl text-sm",
                                        msg.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-muted text-foreground rounded-tl-none"
                                    )}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-2 max-w-[80%]">
                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div className="bg-muted p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                                    <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={scrollRef} />
                    </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-4 border-t border-border bg-background/50 backdrop-blur-sm">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSend()
                        }}
                        className="flex gap-2"
                    >
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1"
                        />
                        <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
