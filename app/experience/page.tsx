"use client"

import { Building2, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Internship",
      company: "Tech Solve AI",
      period: "05/2025 – 08/2025",
      description: "Full-stack development internship focused on AI integration and performance optimization.",
      responsibilities: [
        "Implemented AI-powered dashboards with real-time updates",
        "Optimized application performance, achieving 35% load speed improvement",
        "Deployed applications to Vercel and Google Cloud Platform",
        "Followed clean architecture principles and best practices",
        "Collaborated with cross-functional teams on feature development",
      ],
      achievements: [
        "35% Performance Improvement",
        "AI Dashboard Integration",
        "Production Deployment",
        "Team Collaboration",
      ],
      icon: Briefcase,
      color: "from-primary/20 to-primary/5",
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Reney Reveal Market",
      period: "2024",
      description: "Led the development of a cultural e-commerce platform celebrating African heritage.",
      responsibilities: [
        "Designed and built Ghanaian culture-inspired UI/UX",
        "Implemented video-based product browsing experience",
        "Integrated global payment processing systems",
        "Built vendor and admin dashboards",
        "Managed deployment and optimization",
      ],
      achievements: [
        "Global Platform Launch",
        "Cultural Design Recognition",
        "50+ Vendors Onboarded",
        "Multi-currency Support",
      ],
      icon: Building2,
      color: "from-primary/20 to-secondary/20",
    },
  ]

  const skills = [
    {
      category: "Frontend Technologies",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend & Database",
      items: ["Supabase", "PostgreSQL", "REST APIs", "Server Actions", "Authentication"],
    },
    {
      category: "AI & Automation",
      items: ["OpenAI APIs", "Gemini APIs", "N8N Automation", "Prompt Engineering"],
    },
    {
      category: "DevOps & Deployment",
      items: ["Vercel", "GitHub", "CI/CD", "Performance Optimization", "SEO"],
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey through my professional growth and the projects that shaped my expertise.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Professional Timeline</h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <div key={exp.id} className="relative">
                  {/* Connector */}
                  {idx !== experiences.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-primary/30" />
                  )}

                  {/* Timeline point */}
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-4 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${exp.color} border-2 border-primary flex items-center justify-center`}
                      >
                        <Icon className="text-primary" size={28} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow pb-8">
                      <div className="p-8 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                          <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex-shrink-0">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-foreground">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1.5 flex-shrink-0">→</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills & Proficiencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-8 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary border border-border text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <p className="text-4xl font-bold text-primary mb-2">3+</p>
              <p className="text-muted-foreground">Major Projects</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <p className="text-4xl font-bold text-primary mb-2">35%</p>
              <p className="text-muted-foreground">Performance Improvement</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Features Built</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
