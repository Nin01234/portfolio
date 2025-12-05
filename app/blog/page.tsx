"use client"

import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How I Build Fast Web Apps Using Next.js & Supabase",
      excerpt: "A deep dive into my process for building high-performance web applications using modern technologies.",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Next.js",
      tags: ["Next.js", "Supabase", "Performance", "Web Development"],
      featured: true,
    },
    {
      id: 2,
      title: "My Journey Into AI Automation as a Developer",
      excerpt: "How I started integrating AI into my projects and the tools that changed my workflow forever.",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "AI Development",
      tags: ["AI", "Automation", "OpenAI", "Career"],
      featured: true,
    },
    {
      id: 3,
      title: "Why Every Developer Should Learn Supabase in 2025",
      excerpt: "Supabase has revolutionized backend development. Here is why you should add it to your toolkit.",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      category: "Supabase",
      tags: ["Supabase", "Backend", "Database", "Development"],
      featured: true,
    },
    {
      id: 4,
      title: "React Hooks Patterns That Changed My Code Quality",
      excerpt: "Advanced React hooks patterns I use to write cleaner, more maintainable code.",
      date: "Dec 28, 2024",
      readTime: "9 min read",
      category: "React",
      tags: ["React", "Hooks", "JavaScript", "Best Practices"],
      featured: false,
    },
    {
      id: 5,
      title: "Optimizing TypeScript for Large Scale Projects",
      excerpt: "Tips and tricks for maintaining type safety and productivity in large TypeScript codebases.",
      date: "Dec 20, 2024",
      readTime: "11 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Development", "Best Practices"],
      featured: false,
    },
    {
      id: 6,
      title: "The Art of Writing Clean Code: My Approach",
      excerpt: "Principles and practices I follow to write clean, readable, and maintainable code.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Best Practices",
      tags: ["Code Quality", "Best Practices", "Development"],
      featured: false,
    },
  ]

  const categories = ["All", "Next.js", "React", "AI Development", "Supabase", "TypeScript", "Best Practices"]

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights on web development, AI integration, and building fast, scalable applications.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <p className="text-primary font-semibold mb-2">Featured Post</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Build Fast Web Apps Using Next.js & Supabase</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A comprehensive guide to my proven process for building high-performance web applications. Learn the
              techniques I use to optimize performance, structure databases, and deploy at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={18} />
                <span>Jan 15, 2025</span>
              </div>
              <div className="flex gap-2">
                {["Next.js", "Supabase", "Performance"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/blog/how-i-build-fast-web-apps"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Read Article <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${cat === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id === 1 ? 'how-i-build-fast-web-apps' : post.id === 2 ? 'my-journey-into-ai-automation' : post.id === 3 ? 'why-every-developer-should-learn-supabase' : '#'}`}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex-shrink-0">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{post.readTime}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Date & Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly insights on web development, AI, and building better products delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
