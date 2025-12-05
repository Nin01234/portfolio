import Link from "next/link"

export default function Terms() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website and portfolio, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on my
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer of Warranties</h2>
              <p>
                The materials on my website are provided "as is". I make no warranties, expressed or implied, and hereby
                disclaim and negate all other warranties including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations of Liability</h2>
              <p>
                In no event shall I or my suppliers be liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                the materials on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on my website could include technical, typographical, or photographic errors. I
                do not warrant that any of the materials on my website are accurate, complete, or current. I may make
                changes to the materials contained on my website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Materials License</h2>
              <p>
                The design, layout, and collective arrangements of all content on my website are owned by me and
                protected by copyright and other intellectual property laws. Individual articles, images, and other
                content remain the property of their respective creators.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Project Services Terms</h2>
              <p>If you engage me for development services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Projects are quoted individually with clear deliverables and timelines</li>
                <li>A portion of the project cost is due upon agreement; remainder upon completion</li>
                <li>Significant scope changes may result in updated quotes and timelines</li>
                <li>All deliverables become your intellectual property upon final payment</li>
                <li>I provide support and maintenance as specified in the service agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p>
                My maximum liability for any claims arising from services provided shall not exceed the total amount
                paid for those services. This limitation applies to all claims, whether based on warranty, contract,
                tort, or any other legal theory.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Ghana, and you
                irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Modifications to Terms</h2>
              <p>
                I may revise these terms of service for my website at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these terms of service, please contact me at:{" "}
                <a href="mailto:innocentgh10@gmail.com" className="text-primary hover:underline">
                  innocentgh10@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            View our{" "}
            <Link href="/privacy" className="text-primary hover:underline font-semibold">
              Privacy Policy
            </Link>{" "}
            as well.
          </p>
        </div>
      </section>
    </main>
  )
}
