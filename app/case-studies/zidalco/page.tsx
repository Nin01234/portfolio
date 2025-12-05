"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function ZidalcoCaseStudy() {
    return (
        <main className="pt-16">
            {/* Back Link */}
            <div className="border-b border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary hover:underline">
                        <ArrowLeft size={20} /> Back to Case Studies
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
                <div className="max-w-4xl mx-auto">
                    <p className="text-primary font-semibold mb-4">Case Study / 2024</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Zidalco</h1>
                    <p className="text-xl text-muted-foreground">Professional Business Website</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Overview */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A professional business website showcasing services and expertise with modern design and optimized performance.
                        </p>
                    </div>

                    {/* Challenge */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The client needed a professional web presence that effectively communicates their business value proposition while maintaining fast load times and excellent user experience. Key challenges included creating an intuitive navigation structure, ensuring mobile responsiveness, and optimizing for search engines.
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">The Solution</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Built a clean, professional website using modern web technologies with a focus on performance and user experience. Implemented responsive design patterns, optimized assets for fast loading, and integrated contact forms for lead generation.
                        </p>
                    </div>

                    {/* Results */}
                    <div className="p-8 bg-card rounded-lg border border-border">
                        <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Professional web presence established",
                                "Optimized performance and load times",
                                "Mobile-responsive design",
                                "SEO optimized structure",
                                "Integrated contact system",
                            ].map((result, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-foreground">{result}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript", "Responsive Design"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Responsive Design",
                                "Service Showcase",
                                "Contact Integration",
                                "SEO Optimized",
                                "Fast Performance",
                                "Professional UI",
                            ].map((feature) => (
                                <div key={feature} className="p-4 bg-secondary/50 rounded-lg border border-border">
                                    <p className="font-semibold">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Learnings */}
                    <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                        <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            This project reinforced the importance of clean, semantic HTML and the value of performance optimization for business websites. Creating a professional web presence that loads quickly and works seamlessly across devices is crucial for business success.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://www.zidalco.com/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            View Live Project <ExternalLink size={20} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                        >
                            View Code on GitHub <Github size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
