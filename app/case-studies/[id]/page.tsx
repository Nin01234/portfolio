"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function CaseStudy({ params }: { params: { id: string } }) {
  const caseStudies: Record<string, any> = {
    alliswell: {
      title: "Alliswell Photo Shot",
      subtitle: "Photography Studio Website with Booking System",
      client: "Alliswell Photography Studio",
      year: "2024",
      overview:
        "A comprehensive photography studio website that showcases portfolios and enables seamless booking management.",
      challenge: `The client needed a professional online presence with the ability to manage bookings, display portfolio galleries, and integrate with their existing business processes. The main challenges were: creating an intuitive booking system, managing complex portfolio filters, optimizing images for fast loading, and ensuring mobile responsiveness.`,
      solution: `Built a full-stack solution using Next.js for the frontend with React components, Supabase for backend services including authentication and real-time database, and integrated a custom booking system. Implemented image optimization with Next.js Image component and lazy loading.`,
      results: [
        "35% improvement in page load speed",
        "100+ bookings managed successfully",
        "95+ Lighthouse performance score",
        "Mobile-first responsive design",
        "SEO optimized with proper metadata",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
      features: [
        "Responsive Portfolio Gallery",
        "Real-time Booking System",
        "Email Notifications",
        "Admin Dashboard",
        "Image Optimization",
        "SEO Metadata",
      ],
      images: ["/photography-studio-website.jpg"],
      liveLink: "#",
      githubLink: "#",
      learnings:
        "This project taught me the importance of performance optimization for image-heavy websites and the power of real-time databases for booking systems.",
    },
    fitlife: {
      title: "FitLife Pro",
      subtitle: "Fitness Tracker Application",
      client: "FitLife Technologies",
      year: "2023",
      overview:
        "A comprehensive fitness tracking application that helps users log workouts, track progress, and achieve their fitness goals.",
      challenge: `Users needed a seamless way to log workouts, track progress, and see analytics. Challenges included: real-time data synchronization, handling large datasets efficiently, user authentication, and creating an engaging mobile experience.`,
      solution: `Developed a React-based application with Supabase for real-time database synchronization. Implemented efficient data structures for workout logging, built reusable components, and optimized queries for performance.`,
      results: [
        "2000+ active users",
        "Real-time data synchronization",
        "4.8/5 app store rating",
        "50,000+ workouts logged",
        "95% user retention",
      ],
      techStack: ["React", "Supabase", "TypeScript", "React Query", "Chart.js", "Tailwind CSS"],
      features: [
        "User Authentication",
        "Workout Logging",
        "Progress Analytics",
        "Social Sharing",
        "Offline Support",
        "Push Notifications",
      ],
      images: ["/fitness-app-dashboard.jpg"],
      liveLink: "#",
      githubLink: "#",
      learnings:
        "Learned the importance of data architecture for scalable applications and how to optimize real-time updates for better UX.",
    },
    reney: {
      title: "Reney Reveal Market",
      subtitle: "E-Commerce Marketplace",
      client: "Reney Enterprises",
      year: "2024",
      overview:
        "A cultural e-commerce marketplace celebrating Ghanaian products with video-based product browsing and global shipping.",
      challenge: `Creating a unique marketplace that celebrates African culture while maintaining e-commerce best practices. Challenges: video integration, advanced filtering, global payment processing, and ensuring a culturally-inspired design.`,
      solution: `Built a Next.js e-commerce platform with advanced filtering, video product showcases, Stripe integration for payments, and a beautifully designed interface celebrating Ghanaian aesthetics. Implemented inventory management and vendor dashboards.`,
      results: [
        "50+ active vendors",
        "$250K+ in transactions",
        "99.9% uptime",
        "Cultural design won awards",
        "Global shipping to 15+ countries",
      ],
      techStack: ["Next.js", "React", "Supabase", "Stripe", "TypeScript", "Tailwind CSS", "AWS S3"],
      features: [
        "Video Product Browsing",
        "Advanced Filtering",
        "Vendor Dashboards",
        "Payment Integration",
        "Inventory Management",
        "Global Shipping",
      ],
      images: ["/ecommerce-marketplace.jpg"],
      liveLink: "#",
      githubLink: "#",
      learnings:
        "Understanding the intersection of culture and technology, and how thoughtful design can celebrate heritage while maintaining functionality.",
    },
  }

  const study = caseStudies[params.id]

  if (!study) {
    return (
      <main className="pt-16">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/case-studies" className="text-primary hover:underline">
              Back to Case Studies
            </Link>
          </div>
        </div>
      </main>
    )
  }

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
          <p className="text-primary font-semibold mb-4">Case Study / {study.year}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-muted-foreground">{study.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
          </div>

          {/* Gallery */}
          {study.images.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Project Showcase</h2>
              <div className="space-y-4">
                {study.images.map((image, idx) => (
                  <div key={idx} className="relative h-96 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${study.title} showcase ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="p-8 bg-card rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.results.map((result, idx) => (
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
              {study.techStack.map((tech) => (
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
              {study.features.map((feature) => (
                <div key={feature} className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <p className="font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.learnings}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={study.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Live Project <ExternalLink size={20} />
            </a>
            <a
              href={study.githubLink}
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
