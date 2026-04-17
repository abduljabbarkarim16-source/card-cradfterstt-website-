import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-32 md:pt-48 pb-32 md:pb-48">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-8xl font-bold text-accent-gold mb-6">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary" size="lg">
                  Go Home
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  Browse Services
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
