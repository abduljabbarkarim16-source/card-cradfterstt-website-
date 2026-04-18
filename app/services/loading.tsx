import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { PageHeroSkeleton, ServiceGridSkeleton, Skeleton } from '@/components/Skeleton';

export default function ServicesLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <PageHeroSkeleton />
        </Section>
        <Section>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-11 w-36" />
            ))}
          </div>
          <ServiceGridSkeleton count={6} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
