import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

const blogArticles: Record<string, any> = {
    "how-i-build-fast-web-apps": {
        title: "How I Build Fast Web Apps Using Next.js & Supabase",
        date: "Jan 15, 2025",
        readTime: "8 min read",
        category: "Next.js",
        tags: ["Next.js", "Supabase", "Performance", "Web Development"],
        content: `
# How I Build Fast Web Apps Using Next.js & Supabase

Building fast, scalable web applications is both an art and a science. Over the years, I've refined my approach to creating high-performance applications that users love.

## The Stack

My go-to stack for modern web applications combines:
- **Next.js 14+** for the frontend framework
- **Supabase** for backend services and database
- **TypeScript** for type safety
- **Tailwind CSS** for styling

## Performance First

Performance isn't an afterthought—it's baked into every decision:

### 1. Server Components by Default
I leverage Next.js server components to reduce client-side JavaScript and improve initial load times.

### 2. Database Optimization
With Supabase, I structure queries efficiently, use proper indexing, and implement row-level security for both performance and security.

### 3. Image Optimization
Next.js Image component is a game-changer. Automatic optimization, lazy loading, and responsive images out of the box.

## Real-World Results

This approach has delivered:
- 35% faster load times on average
- 95+ Lighthouse scores consistently
- Seamless user experiences across devices

## Conclusion

The combination of Next.js and Supabase provides the perfect balance of developer experience and application performance. Start with this stack, and you'll be amazed at what you can build.
    `,
    },
    "my-journey-into-ai-automation": {
        title: "My Journey Into AI Automation as a Developer",
        date: "Jan 10, 2025",
        readTime: "10 min read",
        category: "AI Development",
        tags: ["AI", "Automation", "OpenAI", "Career"],
        content: `
# My Journey Into AI Automation as a Developer

AI has transformed how I approach software development. Here's my story of integrating AI into my workflow.

## The Beginning

It started with curiosity about ChatGPT and quickly evolved into building production AI applications.

## Key Learnings

### 1. AI as a Tool, Not a Replacement
AI augments my capabilities rather than replacing them. It handles repetitive tasks while I focus on architecture and problem-solving.

### 2. Integration is Key
I've learned to seamlessly integrate AI APIs into applications, from chatbots to content generation to data analysis.

### 3. Prompt Engineering Matters
Crafting effective prompts is a skill. The better your prompts, the better your results.

## Projects Built

- **Godfred AI Assistant**: A Zapier-integrated chatbot with natural language processing
- **Tech Solve AI**: Enterprise analytics platform with AI-powered insights
- **Automated workflows**: Saving hours of manual work weekly

## The Future

AI automation is just getting started. I'm excited to continue exploring its potential and building innovative solutions.
    `,
    },
    "why-every-developer-should-learn-supabase": {
        title: "Why Every Developer Should Learn Supabase in 2025",
        date: "Jan 5, 2025",
        readTime: "7 min read",
        category: "Supabase",
        tags: ["Supabase", "Backend", "Database", "Development"],
        content: `
# Why Every Developer Should Learn Supabase in 2025

Supabase has revolutionized how I build backends. Here's why you should add it to your toolkit.

## What is Supabase?

Supabase is an open-source Firebase alternative that provides:
- PostgreSQL database
- Authentication
- Real-time subscriptions
- Storage
- Edge Functions

## Why I Love It

### 1. PostgreSQL Power
Unlike Firebase's NoSQL approach, Supabase uses PostgreSQL—a mature, powerful relational database.

### 2. Real-Time Everything
Built-in real-time subscriptions make building collaborative apps incredibly easy.

### 3. Row-Level Security
Database-level security policies mean your data is protected at the source.

### 4. Developer Experience
The dashboard, CLI, and documentation are top-notch. You can be productive in minutes.

## Real Projects

I've used Supabase for:
- **Alliswell Photo Shot**: Booking system with real-time updates
- **FitLife Pro**: Fitness tracking with 2000+ active users
- **Multiple client projects**: Fast, reliable backends

## Getting Started

1. Create a free Supabase project
2. Set up your database schema
3. Configure authentication
4. Start building!

Supabase has become my default choice for backends. Give it a try—you won't regret it.
    `,
    },
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article = blogArticles[slug]

    if (!article) {
        return (
            <main className="pt-16">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                        <Link href="/blog" className="text-primary hover:underline">
                            Back to Blog
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
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                </div>
            </div>

            {/* Article Header */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
                <div className="max-w-4xl mx-auto">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {article.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{article.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map((tag: string) => (
                            <span key={tag} className="text-sm text-muted-foreground">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div
                            className="text-foreground leading-relaxed"
                            style={{ whiteSpace: "pre-wrap" }}
                        >
                            {article.content}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
                    <p className="text-muted-foreground mb-8">
                        Check out more articles or get in touch to discuss your project.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                        >
                            More Articles
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
