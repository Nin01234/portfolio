"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Shield, Zap, CheckCircle } from "lucide-react"
import AnimatedTextSlider from "@/components/animated-text-slider"

export default function Home() {
  const featuredProjects = [
    {
      title: "Tech Solve AI",
      description: "AI-powered analytics dashboard with real-time processing and enterprise features",
      image: "/images/tech-solve-ai-dashboard.png",
      tags: ["Next.js", "AI APIs", "GCP"],
      link: "/case-studies/tech-solve-ai",
    },
    {
      title: "Alliswell Photo Shot",
      description: "Photography Studio Website with booking system and portfolio",
      image: "/photography-studio-website.jpg",
      tags: ["Next.js", "Supabase", "React"],
      link: "/case-studies/alliswell",
    },
    {
      title: "FitLife Pro",
      description: "Fitness Tracker App with authentication and workout tracking",
      image: "/fitness-app-dashboard.jpg",
      tags: ["React", "Supabase", "Auth"],
      link: "/case-studies/fitlife",
    },
  ]

  const stats = [
    { number: "4+", label: "Major Projects" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Features Built" },
  ]

  const trustMetrics = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "35%+ speed improvements, optimized performance across all projects. Built for scale.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Production-grade security, encrypted databases, Row-Level Security, secure authentication.",
    },
    {
      icon: CheckCircle,
      title: "Battle-Tested",
      description: "Enterprise-level solutions deployed on Vercel, Google Cloud, serving thousands of users.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/20 via-background to-background" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div>
                <p className="text-primary font-semibold mb-2">Welcome to my portfolio</p>
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">Godfred Osei</h1>
                <div className="text-2xl md:text-3xl text-muted-foreground mt-2 h-12">
                  <AnimatedTextSlider
                    texts={["Full-Stack Developer", "React & Next.js Specialist", "AI Automation Engineer"]}
                    interval={4000}
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I build fast, scalable digital experiences and integrate AI to automate workflows. Specializing in
                modern web development with a creative touch.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 animate-glow"
                >
                  Hire Me <ArrowRight size={20} />
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  View Projects <ArrowRight size={20} />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all group hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all group hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:innocentgh10@gmail.com"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all group hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center animate-float">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary shadow-2xl hover:shadow-2xl transition-shadow">
                <Image src="/images/link.jpeg" alt="Godfred Osei" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-4xl font-bold mb-4">Fast. Secured. Reliable.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every project is built with production-grade quality, enterprise-level security, and optimized
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-card rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg group animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{metric.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{metric.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase of my best work. Each project demonstrates expertise in full-stack development and modern design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Link
                key={idx}
                href={project.link}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all hover:shadow-xl duration-300 animate-slide-up hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary text-xs font-medium text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    View Case Study <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to bring your vision to life?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            I can build any kind of project fast, secured, and reliable. Let's collaborate on your next big idea.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity animate-glow"
          >
            Get In Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
