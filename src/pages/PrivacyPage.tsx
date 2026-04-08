import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";

const PrivacyPage = () => (
  <>
    <SEOHead
      title="Privacy Policy | Tanzania Advisory Partners"
      description="Learn how Tanzania Advisory Partners collects, uses, and protects your personal information and cookies."
      path="/privacy"
    />
    <Navbar />
    <main className="min-h-screen bg-background">
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-heading mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-body space-y-6">
            <p className="text-muted-foreground text-sm">Last updated: April 8, 2026</p>

            <h2 className="text-xl font-semibold text-heading mt-8">1. Introduction</h2>
            <p>
              Tanzania Advisory Partners ("TAP", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>www.tanzaniaadvisorypartners.co.tz</strong>.
            </p>

            <h2 className="text-xl font-semibold text-heading mt-8">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any other details you voluntarily provide through our contact forms or consultation booking.</li>
              <li><strong>Usage Data:</strong> Browser type, operating system, pages visited, time spent on pages, and other analytical data collected automatically.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
            </ul>

            <h2 className="text-xl font-semibold text-heading mt-8">3. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Improve our website's performance and user experience</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings. Declining cookies may limit some features of the website.
            </p>

            <h2 className="text-xl font-semibold text-heading mt-8">4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send relevant communications about our advisory services</li>
              <li>Improve and optimize our website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-heading mt-8">5. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
            </p>

            <h2 className="text-xl font-semibold text-heading mt-8">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold text-heading mt-8">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-xl font-semibold text-heading mt-8">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@tanzaniaadvisorypartners.co.tz" className="text-secondary hover:underline">
                info@tanzaniaadvisorypartners.co.tz
              </a>
              <br />
              <strong>Phone:</strong> +255-655-641-642
              <br />
              <strong>Location:</strong> Dar es Salaam, Tanzania
            </p>
          </div>
        </div>
      </section>
    </main>
    <FooterSection />
  </>
);

export default PrivacyPage;
