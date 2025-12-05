import Link from "next/link"

export default function Privacy() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p>
                Godfred Osei ("I", "we", "our", or "us") operates the portfolio website. This page informs you of our
                policies regarding the collection, use, and disclosure of personal data when you use our website and the
                choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information Collection and Use</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Contact information (name, email address, phone number) when you submit forms or contact us</li>
                <li>Usage data (pages visited, time spent, browser type) through analytics tools</li>
                <li>Cookies and similar tracking technologies for site functionality and analytics</li>
                <li>Project-related information when you inquire about services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Data</h2>
              <p>The data we collect is used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To respond to your inquiries and provide services you request</li>
                <li>To improve our website and user experience</li>
                <li>To send periodic newsletters and updates (with your consent)</li>
                <li>To detect, prevent, and address technical or security issues</li>
                <li>To monitor usage patterns and analyze website performance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p>
                We use cookies to enhance your experience on our website. Cookies are small files of information saved
                by your browser on your device. You can choose to disable cookies through your browser settings,
                although this may limit some functionality of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of external websites. We encourage you to review their privacy policies before providing any
                personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Object to our processing of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any significant changes by
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:{" "}
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
            <Link href="/terms" className="text-primary hover:underline font-semibold">
              Terms of Service
            </Link>{" "}
            as well.
          </p>
        </div>
      </section>
    </main>
  )
}
