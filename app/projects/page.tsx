"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: "tech-solve",
      title: "Tech Solve AI",
      subtitle: "AI-Powered Analytics Platform",
      description:
        "Enterprise AI analytics dashboard with real-time processing, advanced analytics, and integration with Google Cloud Platform and multiple AI services.",
      image: "/images/tech-solve-ai-dashboard.png",
      tags: ["Next.js", "React", "TypeScript", "AI APIs", "GCP"],
      features: ["AI Dashboard", "Real-time Analytics", "GCP Integration", "Custom Reports"],
      highlights: "35% performance improvement, 5000+ monthly active users",
      links: {
        live: "https://tech-solve-ai-main.vercel.app",
        github: "#",
        caseStudy: "/case-studies/tech-solve-ai",
      },
    },
    {
      id: "alliswell",
      title: "Alliswell Photo Shot",
      subtitle: "Photography Studio Website",
      description: "Professional photography studio website with integrated booking system and portfolio showcase.",
      image: "/photography-studio-website.jpg",
      tags: ["Next.js", "React", "Supabase", "TypeScript"],
      features: ["Booking System", "Portfolio Gallery", "SEO Optimized", "Responsive Design"],
      highlights: "35% speed improvement, 100+ bookings managed",
      links: {
        live: "https://alliswell-chi.vercel.app/client",
        github: "#",
        caseStudy: "/case-studies/alliswell",
      },
    },
    {
      id: "fitlife",
      title: "FitLife Pro",
      subtitle: "Fitness Tracker Application",
      description:
        "Complete fitness tracking application with user authentication, workout logging, and progress tracking.",
      image: "/fitness-app-dashboard.jpg",
      tags: ["React", "Supabase", "Authentication", "TypeScript"],
      features: ["User Auth", "Workout Logs", "Progress Charts", "Mobile App"],
      highlights: "2000+ active users, real-time sync",
      links: {
        live: "https://fitness-app-main-olive.vercel.app",
        github: "#",
        caseStudy: "/case-studies/fitlife",
      },
    },
    {
      id: "reney",
      title: "Reney Reveal Market",
      subtitle: "E-Commerce Marketplace",
      description: "Cultural e-commerce platform with video-based product browsing and global shipping capabilities.",
      image: "/ecommerce-marketplace.jpg",
      tags: ["Next.js", "React", "E-Commerce", "Video Integration"],
      features: ["Product Videos", "Advanced Filtering", "Global Reach", "Cultural UI"],
      highlights: "Ghanaian-inspired design, 50+ vendors",
      links: {
        live: "https://ghana-market.vercel.app",
        github: "#",
        caseStudy: "/case-studies/reney",
      },
    },
    {
      id: "zidalco",
      title: "Zidalco",
      subtitle: "Professional Business Website",
      description: "Professional business website showcasing services and expertise with modern design.",
      image: "/professional-business-website.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      features: ["Responsive Design", "Service Showcase", "Contact Integration", "SEO Optimized"],
      highlights: "Professional web presence, optimized performance",
      links: {
        live: "https://www.zidalco.com/index.html",
        github: "#",
        caseStudy: "/case-studies/zidalco",
      },
    },
    {
      id: "godfred-ai",
      title: "Godfred AI Assistant",
      subtitle: "AI-Powered Chatbot with Zapier Integration",
      description: "Intelligent AI chatbot built with Zapier that provides automated responses and assistance. Features natural language processing and seamless integration capabilities.",
      image: "/images/godfred-ai-chatbot.png",
      tags: ["Zapier", "AI", "Chatbot", "Automation", "NLP"],
      features: ["AI Responses", "Zapier Integration", "Natural Language", "24/7 Availability"],
      highlights: "Automated AI assistance, seamless Zapier workflow integration",
      links: {
        live: "https://godfred-ai.zapier.app/",
        github: "#",
        caseStudy: "/case-studies/godfred-ai",
      },
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work. Each project demonstrates expertise in full-stack development, modern design, and
            innovative problem-solving.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-flow-col lg:grid-flow-row lg:[&>:nth-child(1)]:order-2" : ""
                  }`}
              >
                {/* Image */}
                <div className="group relative h-80 rounded-xl overflow-hidden border border-border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <p className="text-primary font-semibold mb-2">Featured Project</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                    <p className="text-lg text-muted-foreground">{project.subtitle}</p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Key Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-secondary text-sm font-medium text-primary rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-primary font-semibold">{project.highlights}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-card border border-border text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href={project.links.caseStudy}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      View Case Study <ArrowRight size={16} />
                    </Link>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                    >
                      GitHub <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in seeing more?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out my detailed case studies to learn about my process and the impact these projects delivered.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Case Studies <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
