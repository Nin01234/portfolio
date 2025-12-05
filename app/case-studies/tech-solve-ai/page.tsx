"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Award } from "lucide-react"

export default function TechSolveAICaseStudy() {
  const highlights = [
    { label: "Performance Improvement", value: "35%", description: "Load time optimization" },
    { label: "Dashboard Features", value: "12+", description: "AI-powered analytics" },
    { label: "Deployment", value: "100%", description: "Uptime on Vercel" },
    { label: "User Impact", value: "5000+", description: "Monthly active users" },
  ]

  const features = [
    "AI-Powered Dashboard Analytics",
    "Real-time Data Processing",
    "Advanced Performance Metrics",
    "Custom Report Generation",
    "Integration with GCP Services",
    "Vercel Deployment with CI/CD",
    "Clean Architecture Implementation",
    "Responsive Design System",
  ]

  const techStack = [
    "Next.js 14",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Vercel Analytics",
    "Google Cloud Platform",
    "AI APIs",
    "PostgreSQL",
  ]

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft size={20} /> Back to Case Studies
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tech Solve AI</h1>
          <p className="text-xl text-muted-foreground mb-6">
            AI-powered analytics dashboard and workflow automation platform for enterprise clients
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tech-solve-ai-main.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Live Demo <ExternalLink size={16} />
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

      {/* Hero Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 rounded-xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/images/tech-solve-ai-dashboard.png"
              alt="Tech Solve AI Dashboard"
              fill
              className="object-cover"
              priority
            />
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
                Tech Solve AI needed a modern, scalable platform to deliver AI-powered analytics to enterprise clients.
                The challenge was building a complex dashboard with real-time data processing, integrating multiple AI
                services, and ensuring enterprise-grade performance and reliability while maintaining a clean, intuitive
                user interface.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                I architected and developed a full-stack AI analytics platform using Next.js and modern React patterns.
                The solution includes real-time dashboards, advanced analytics, AI integration, and deployment on Vercel
                with Google Cloud Platform integration. Implemented clean architecture principles for scalability and
                maintainability.
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
              <h3 className="text-lg font-semibold text-primary mb-2">AI Integration at Scale</h3>
              <p className="text-muted-foreground">
                Learned how to efficiently integrate multiple AI APIs, manage rate limiting, cache intelligently, and
                optimize API costs while maintaining real-time performance.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-primary mb-2">Enterprise Architecture</h3>
              <p className="text-muted-foreground">
                Implemented production-grade patterns including error handling, monitoring, logging, and recovery
                mechanisms for enterprise-level reliability.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-primary mb-2">Performance Optimization</h3>
              <p className="text-muted-foreground">
                Achieved 35% load time improvement through code splitting, image optimization, caching strategies, and
                analyzing performance metrics using Vercel Analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in similar solutions?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I specialize in AI integration, scalable platforms, and enterprise solutions.
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
