import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Feature from '@/components/Feature';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Card Crafters - our mission, values, and commitment to providing premium digital services.',
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              About <span className="text-accent-gold">Card Crafters</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Delivering premium digital services with integrity, innovation, and customer
              satisfaction at the heart of everything we do.
            </p>
          </div>
        </Section>

        {/* Our Story */}
        <Section dark={true} title="Our Story" subtitle="How Card Crafters began">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Card Crafters was founded with a simple mission: to make digital services
              accessible, affordable, and hassle-free for everyone. We recognized that
              customers often faced challenges finding reliable sources for streaming
              subscriptions, gift cards, and other digital services.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Over the years, we've grown into a trusted platform serving thousands of
              satisfied customers across the region. Our commitment to quality, security,
              and customer support has made us the go-to choice for premium digital services.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Today, we continue to expand our offerings and improve our services to meet
              the evolving needs of our customers. Every day, we strive to exceed expectations
              and build lasting relationships with the people we serve.
            </p>
          </div>
        </Section>

        {/* Our Values */}
        <Section title="Our Values" subtitle="What drives everything we do">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Integrity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We operate with complete transparency and honesty in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Excellence</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We strive for excellence in every service we provide and every interaction.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Customer Focus</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your satisfaction and trust are at the center of our decision-making.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We protect your data and privacy with industry-leading security measures.
              </p>
            </div>
          </div>
        </Section>

        {/* Why We're Different */}
        <Section dark={true} title="Why We're Different">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Expertise</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Our team brings years of experience in digital services, payment processing,
                and customer support. We understand the nuances of each service we offer.
              </p>
              <ul className="space-y-3">
                {[
                  'Industry experts on staff',
                  'Continuous training & updates',
                  'Deep partner relationships',
                  'Proven track record',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-accent-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                We don't just process orders - we build relationships. Your feedback shapes
                our services, and your satisfaction is our ultimate goal.
              </p>
              <ul className="space-y-3">
                {[
                  '24/7 dedicated support',
                  'Fast response times',
                  'Personalized solutions',
                  'Loyalty programs',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-accent-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section title="Our Team" subtitle="Dedicated professionals committed to excellence">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'James Mitchell',
                role: 'Founder & CEO',
                bio: 'Visionary leader with 15+ years in digital services industry',
              },
              {
                name: 'Sarah Johnson',
                role: 'Head of Customer Support',
                bio: 'Passionate about helping customers succeed with 10+ years experience',
              },
              {
                name: 'David Park',
                role: 'Operations Director',
                bio: 'Ensures seamless service delivery across all platforms',
              },
            ].map((member) => (
              <div key={member.name} className="card-premium rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-accent-gold bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-accent-gold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-1">{member.name}</h3>
                <p className="text-accent-gold text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <Section dark={true}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50+', label: 'Services Offered' },
              { number: '99.9%', label: 'Uptime' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join thousands of satisfied customers who trust Card Crafters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button variant="primary" size="lg">
                  Browse Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
