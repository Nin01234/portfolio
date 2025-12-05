"use client"

import Link from "next/link"
import { Code2, Zap, ShoppingCart, Palette, Sparkles, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Full-Stack Web App Development",
      description: "End-to-end web application development using React, Next.js, and Supabase.",
      icon: Code2,
      features: [
        "Authentication & user management",
        "Responsive UI/UX design",
        "Database architecture & optimization",
        "API integration & REST endpoints",
        "Performance optimization",
        "Mobile-first responsive design",
      ],
      price: "Custom Quote",
      deliverables: "Production-ready web app, database setup, deployment",
    },
    {
      id: "ai",
      title: "AI Integration & Automation",
      description: "Integrate artificial intelligence and automate business workflows.",
      icon: Zap,
      features: [
        "OpenAI & Gemini API integration",
        "AI chatbot development",
        "N8N & Zapier workflow automation",
        "Webhook integrations",
        "Document processing with AI",
        "Prompt Engineering & optimization",
      ],
      price: "Custom Quote",
      deliverables: "AI-powered feature, automation setup, training",
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Business Websites",
      description: "Professional e-commerce platforms with product management and payments.",
      icon: ShoppingCart,
      features: [
        "Product catalog & filtering",
        "Shopping cart functionality",
        "Payment integration (Stripe, Paystack)",
        "Order management system",
        "Inventory tracking",
        "Ghanaian-inspired cultural UI",
      ],
      price: "Custom Quote",
      deliverables: "Full e-commerce platform, payment integration, analytics",
    },
    {
      id: "design",
      title: "UI/UX & Frontend Engineering",
      description: "Beautiful, responsive interfaces with optimal performance.",
      icon: Palette,
      features: [
        "Responsive design across all devices",
        "Performance optimization & fast load times",
        "Accessibility compliance (WCAG)",
        "Interactive animations & transitions",
        "Design system creation",
        "Component library development",
      ],
      price: "Custom Quote",
      deliverables: "Design system, reusable components, documentation",
    },
    {
      id: "branding",
      title: "Branding & Creative Media",
      description: "Comprehensive branding and creative design services.",
      icon: Sparkles,
      features: [
        "Logo & brand identity design",
        "Poster & flyer design",
        "Social media graphics",
        "Video animation & editing",
        "Brand guidelines creation",
        "Marketing collateral",
      ],
      price: "Custom Quote",
      deliverables: "Complete brand package, design files, usage guidelines",
    },
    {
      id: "apis",
      title: "APIs & Webhook Integrations",
      description: "Connect your systems with powerful integrations and webhook automation.",
      icon: Code2,
      features: [
        "REST API development & integration",
        "Webhook setup & management",
        "Third-party service integration",
        "Real-time data synchronization",
        "API documentation & testing",
        "Error handling & monitoring",
      ],
      price: "Custom Quote",
      deliverables: "Integrated systems, API documentation, support",
    },
    {
      id: "graphics",
      title: "Graphic Design Services",
      description: "Professional graphic design for your brand and marketing needs.",
      icon: Palette,
      features: [
        "Logo design & brand identity",
        "Marketing materials (posters, flyers)",
        "Social media graphics",
        "Print design for businesses",
        "Packaging design",
        "Digital illustration",
      ],
      price: "Custom Quote",
      deliverables: "Design files, multiple formats, brand guidelines",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We explore your vision, goals, and unique requirements to create a tailored solution.",
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed project planning including timeline, deliverables, and technical architecture.",
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular updates, testing, and quality assurance.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Deployment, training, and ongoing support to ensure success.",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions from strategy to deployment. Let me help you build something extraordinary.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group relative p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                >
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <p className="text-lg font-bold text-primary mb-4">{service.price}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="relative inline-flex items-center gap-2 mt-auto px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity w-full justify-center"
                  >
                    Hire Me <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How I Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30" />
                )}

                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Specializations</h2>

          <div className="space-y-8">
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Next.js & React Expert</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep expertise in modern React patterns, Server Components, API routes, and Next.js best practices.
                Building fast, scalable applications with cutting-edge tooling and performance optimization.
              </p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Supabase Specialist</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert in Supabase database design, authentication, real-time updates, and Row-Level Security (RLS).
                Building secure, scalable backends with PostgreSQL and modern APIs.
              </p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">AI Integration Pioneer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pioneering AI integration into web applications using OpenAI, Gemini, and automation platforms. From AI
                chatbots to workflow automation, delivering intelligent solutions.
              </p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Performance Optimizer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Obsessed with performance. Delivering 35%+ speed improvements through code splitting, caching
                strategies, image optimization, and advanced performance profiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your vision and create a custom solution tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
