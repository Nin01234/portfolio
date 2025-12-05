"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "alliswell",
      title: "Alliswell Photo Shot",
      category: "Web Development",
      description: "Photography studio website with booking system",
      link: "/case-studies/alliswell",
    },
    {
      id: "fitlife",
      title: "FitLife Pro",
      category: "Full-Stack App",
      description: "Fitness tracking application with real-time updates",
      link: "/case-studies/fitlife",
    },
    {
      id: "reney",
      title: "Reney Reveal Market",
      category: "E-Commerce",
      description: "Cultural marketplace with video integration",
      link: "/case-studies/reney",
    },
    {
      id: "tech-solve",
      title: "Tech Solve AI",
      category: "AI Platform",
      description: "Enterprise AI analytics platform with real-time data processing and GCP integration",
      link: "/case-studies/tech-solve-ai",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dive into the projects that shaped my career. Learn about the challenges, solutions, and impact.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.link}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl block"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-grow">
                  <p className="text-primary font-semibold mb-2">{study.category}</p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground">{study.description}</p>
                </div>
                <ArrowRight
                  className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-2"
                  size={24}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
