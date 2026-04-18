import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { PageHeroSkeleton, ServiceGridSkeleton } from '@/components/Skeleton';

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <PageHeroSkeleton />
        </Section>
        <Section dark={true}>
          <ServiceGridSkeleton count={3} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
