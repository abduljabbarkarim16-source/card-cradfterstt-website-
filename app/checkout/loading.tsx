import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { PageHeroSkeleton, Skeleton } from '@/components/Skeleton';

export default function CheckoutLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <PageHeroSkeleton />
        </Section>
        <Section dark={true}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.75fr]">
            <Skeleton className="h-96 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
