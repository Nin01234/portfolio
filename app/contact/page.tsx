"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill out all fields")
      return
    }
    setError("")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error?.message || data.error || "Failed to send message")
      }

      setSubmitted(true)
      setTimeout(() => {
        setFormState({ name: "", email: "", message: "" })
        setSubmitted(false)
      }, 3000)
    } catch (err: any) {
      console.error("Submission Error:", err)
      setError(err.message || "Something went wrong. Please try again later.")
    }
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's talk about how I can help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to me through any of these channels. I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:innocentgh10@gmail.com" className="text-primary hover:underline">
                    innocentgh10@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+233550477759" className="text-primary hover:underline">
                    +233 550 477 759
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Accra, Ghana</p>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-card rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

                {submitted ? (
                  <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Message sent successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-start gap-3">
                        <AlertCircle className="text-destructive flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-destructive text-sm">{error}</p>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                )}
              </div>

              {/* Response Time */}
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Response time:</span> I typically respond within 24
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger applications may take 2-3 months. I provide detailed timelines during the discovery phase.",
              },
              {
                q: "Do you offer retainer or ongoing support?",
                a: "Yes, I offer flexible retainer packages for ongoing maintenance, improvements, and support. This is perfect for long-term partnerships.",
              },
              {
                q: "What is your process for working with clients?",
                a: "I follow a structured process: Discovery → Planning → Development → Launch & Support. I maintain regular communication and provide updates throughout.",
              },
              {
                q: "Can you work with existing codebases?",
                a: "Absolutely. I can audit existing projects, provide improvements, add new features, or refactor for better performance and maintainability.",
              },
              {
                q: "Do you provide training and documentation?",
                a: "Yes, I provide comprehensive documentation and can offer training sessions to help your team understand and maintain the project.",
              },
              {
                q: "How do you handle project changes and revisions?",
                a: "I build flexibility into project planning. Minor changes are included in the scope. Significant changes are scoped separately with updated timelines and pricing.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Send me a message above, or reach out directly to schedule a consultation.
          </p>
          <a
            href="mailto:innocentgh10@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
        </div>
      </section>
    </main>
  )
}
