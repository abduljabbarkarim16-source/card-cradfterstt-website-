import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Card Crafters Terms of Service - Read our complete terms and conditions.',
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-20 md:pt-32 pb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center text-gray-100 mb-4">
            Terms of Service
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Last updated: January 2026
          </p>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="space-y-8 text-gray-400">
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the Card Crafters website, you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not agree to abide by the
                  above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information
                  or software) on Card Crafters' website for personal, non-commercial transitory viewing
                  only. This is the grant of a license, not a transfer of title, and under this license
                  you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer the website</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person or server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">3. Disclaimer</h2>
                <p>
                  The materials on Card Crafters' website are provided on an 'as is' basis. Card Crafters
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other
                  warranties including, without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">4. Service Activation</h2>
                <p className="mb-4">
                  Services offered by Card Crafters are subject to the following terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Activation typically occurs within 24-48 hours of payment confirmation
                  </li>
                  <li>
                    Digital products (gift cards) are delivered within 15-30 minutes
                  </li>
                  <li>
                    You are responsible for providing accurate account information
                  </li>
                  <li>
                    Service activation may be delayed or refused due to verification requirements
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">5. Refund Policy</h2>
                <p className="mb-4">
                  Refund policies vary by product type:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Streaming subscriptions may be refunded within 7 days if not activated
                  </li>
                  <li>
                    Digital products (gift cards) cannot be refunded once delivered
                  </li>
                  <li>
                    Refunds are processed within 5-7 business days
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">6. User Responsibilities</h2>
                <p className="mb-4">
                  As a user of Card Crafters services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Be 18 years of age or older</li>
                  <li>Use services only for lawful purposes</li>
                  <li>Not violate any applicable laws or regulations</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">7. Limitation of Liability</h2>
                <p>
                  In no event shall Card Crafters or its suppliers be liable for any damages (including,
                  without limitation, damages for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on Card Crafters' website, even
                  if Card Crafters or a Card Crafters authorized representative has been notified orally
                  or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">8. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Card Crafters' website could include technical, typographical,
                  or photographic errors. Card Crafters does not warrant that any of the materials on its
                  website are accurate, complete, or current.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">9. Links</h2>
                <p>
                  Card Crafters has not reviewed all of the sites linked to its website and is not responsible
                  for the contents of any such linked site. The inclusion of any link does not imply endorsement
                  by Card Crafters of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">10. Modifications</h2>
                <p>
                  Card Crafters may revise these terms of service for its website at any time without notice.
                  By using this website, you are agreeing to be bound by the then current version of these terms
                  of service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">11. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Trinidad
                  and Tobago, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4">12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-dark-800 bg-opacity-50 rounded-lg">
                  <p>Email: support@cardcrafters.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
