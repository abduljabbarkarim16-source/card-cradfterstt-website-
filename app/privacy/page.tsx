import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { PageHeader, VisualPanel } from '@/components/Visual';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Card Crafters Privacy Policy - Learn how we protect your data.',
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-20 md:pt-32 pb-12" tone="quiet">
          <PageHeader
            eyebrow="Legal"
            title="Privacy Policy"
            description="Last updated: April 2026"
            accent="premium"
          />
        </Section>

        <Section tone="quiet">
          <VisualPanel variant="plain" className="mx-auto max-w-3xl p-6 md:p-8">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-400">
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">1. Introduction</h2>
                <p>
                  At Card Crafters, we are committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect information from you in the following ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal identification information (name, email, phone)</li>
                  <li>Order request details needed to review a service</li>
                  <li>Account or provider information only when needed for a selected service</li>
                  <li>Device information and browsing data</li>
                  <li>Communication records with our support team</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and assistance</li>
                  <li>Improve our services and website</li>
                  <li>Send promotional communications (with consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">4. Data Security</h2>
                <p>
                  We use reasonable safeguards to protect personal information submitted through
                  the website. This version does not collect full card numbers or CVC codes through
                  checkout or contact forms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">5. Data Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share information with service providers who assist in operating our website and
                  conducting our business, under strict confidentiality agreements.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">7. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our
                  website. You can control cookie settings in your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">8. Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13. We do not knowingly collect
                  information from children. If we become aware that a child has provided us with
                  information, we will delete it immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">9. Policy Changes</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of significant
                  changes by posting the new policy on our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our practices, please use the contact page.
                </p>
              </div>
            </div>
          </div>
          </VisualPanel>
        </Section>
      </main>
      <Footer />
    </>
  );
}
