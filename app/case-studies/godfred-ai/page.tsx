"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Award } from "lucide-react"

export default function GodfredAICaseStudy() {
    const highlights = [
        { label: "AI Integration", value: "100%", description: "Zapier-powered automation" },
        { label: "Response Time", value: "<2s", description: "Fast AI responses" },
        { label: "Availability", value: "24/7", description: "Always accessible" },
        { label: "Automation", value: "Seamless", description: "Workflow integration" },
    ]

    const features = [
        "Natural Language Processing",
        "Zapier Integration",
        "Automated Responses",
        "24/7 Availability",
        "Workflow Automation",
        "Multi-Platform Support",
        "Intelligent Conversations",
        "Easy Integration",
    ]

    const techStack = [
        "Zapier",
        "AI/ML",
        "Natural Language Processing",
        "Chatbot Framework",
        "API Integration",
        "Automation Tools",
    ]

    return (
        <main className="pt-16">
            {/* Header */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
                <div className="max-w-4xl mx-auto">
                    <Link href="/case-studies" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                        <ArrowLeft size={20} /> Back to Case Studies
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Godfred AI Assistant</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        AI-powered chatbot with Zapier integration for automated assistance and workflow automation
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://godfred-ai.zapier.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            Try Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                        >
                            GitHub Repository <Github size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-primary">The Challenge</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Creating an intelligent AI assistant that can understand natural language, provide helpful responses, and integrate seamlessly with existing workflows through Zapier automation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-primary">The Solution</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Built an AI-powered chatbot using Zapier's platform that leverages natural language processing to understand user queries and provide intelligent, automated responses while integrating with various tools and services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Key Results</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary transition-colors"
                            >
                                <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
                                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Features Built</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                            >
                                <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="font-medium text-foreground">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-card border border-primary/30 text-primary rounded-lg font-medium hover:border-primary transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learnings */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">What I Learned</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-background rounded-lg border border-border">
                            <h3 className="text-lg font-semibold text-primary mb-2">AI Integration with Zapier</h3>
                            <p className="text-muted-foreground">
                                Learned how to effectively integrate AI capabilities using Zapier's platform, creating automated workflows that respond intelligently to user inputs.
                            </p>
                        </div>
                        <div className="p-6 bg-background rounded-lg border border-border">
                            <h3 className="text-lg font-semibold text-primary mb-2">Natural Language Processing</h3>
                            <p className="text-muted-foreground">
                                Gained experience in implementing natural language understanding to create more intuitive and helpful chatbot interactions.
                            </p>
                        </div>
                        <div className="p-6 bg-background rounded-lg border border-border">
                            <h3 className="text-lg font-semibold text-primary mb-2">Workflow Automation</h3>
                            <p className="text-muted-foreground">
                                Discovered the power of combining AI with automation tools to create seamless, intelligent workflows that save time and improve efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Interested in AI automation?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        I specialize in AI integration, chatbot development, and workflow automation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    )
}
