"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  const frontendSkills = ["React", "Next.js", "JavaScript ES6+", "HTML5", "CSS3", "TypeScript"]
  const backendSkills = ["Supabase", "Node.js", "REST APIs", "Database Design", "Authentication", "Server Actions"]
  const aiSkills = [
    "Prompt Engineering",
    "OpenAI APIs",
    "Gemini APIs",
    "N8N Automation",
    "Zapier Automation",
    "AI Chatbots",
    "Webhook Integration",
    "APIs & Integrations",
  ]
  const devopsSkills = [
    "Vercel Deployment",
    "GitHub",
    "CI/CD",
    "Performance Optimization",
    "SEO",
    "Google Search Console",
    "Web Accessibility",
  ]
  const creativeSkills = [
    "Graphic Design",
    "Poster Design",
    "Flyer Design",
    "Video Animation",
    "Branding",
    "UI/UX Design",
  ]

  const education = [
    {
      title: "BSc Information Technology",
      institution: "University of Ghana",
      year: "2025",
      details: "Graduated with honors. Strong foundation in software engineering, databases, and web technologies.",
    },
    {
      title: "Cisco - Introduction to Modern AI",
      institution: "Cisco Academy",
      year: "2025",
      details: "Comprehensive training in AI fundamentals, machine learning concepts, and practical applications.",
    },
    {
      title: "HP - AI for Business Professionals",
      institution: "HP Professional Development",
      year: "2025",
      details: "Executive-level training on implementing AI solutions in business environments.",
    },
  ]

  const awards = [
    "Quiz Master - University Quiz Competition 2023",
    "Sports Prefect - Student Leadership Award 2022",
    "Entertainment Prefect - Student Leadership Award 2021",
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Full-Stack Developer who combines technology expertise with creative design to build
            extraordinary digital experiences.
          </p>
        </div>
      </section>

      {/* Professional Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Stack Developer & AI Engineer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm a full-stack developer specializing in React, Next.js, and Supabase with extensive experience
                  deploying production-ready web applications. My expertise spans responsive UI design, clean
                  architecture, performance optimization, and modern AI integration.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond coding, I bring a creative background in branding, flyer and poster design, and video
                  animation. I'm passionate about building digital products that not only function beautifully but also
                  resonate with users through thoughtful design and exceptional performance.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">3+ Major Production Projects</p>
                    <p className="text-sm text-muted-foreground">From photography platforms to fitness apps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">AI & Automation Expertise</p>
                    <p className="text-sm text-muted-foreground">OpenAI, Gemini APIs, and N8N workflow automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Performance Focused</p>
                    <p className="text-sm text-muted-foreground">35%+ speed improvements, optimized for scale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-72 h-96 rounded-xl overflow-hidden border-2 border-primary shadow-2xl">
                <Image src="/images/link.jpeg" alt="Godfred Osei" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Frontend</h3>
              <div className="space-y-3">
                {frontendSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Backend</h3>
              <div className="space-y-3">
                {backendSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Automation */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">AI & Automation</h3>
              <div className="space-y-3">
                {aiSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">DevOps</h3>
              <div className="space-y-3">
                {devopsSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Creative</h3>
              <div className="space-y-3">
                {creativeSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>

          <div className="space-y-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-primary font-semibold">{item.institution}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium flex-shrink-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {awards.map((award, idx) => (
                <div key={idx} className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/30 to-secondary/10 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I believe in building products that are not just functional, but also delightful. Every project is an
            opportunity to merge technology with creativity, to solve real problems while creating beautiful
            experiences. Performance, accessibility, and user experience aren't afterthoughts—they're core to every
            solution I build.
          </p>
        </div>
      </section>
    </main>
  )
}
