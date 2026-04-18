import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Skeleton } from '@/components/Skeleton';

export default function ServiceDetailLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Skeleton className="mb-6 h-5 w-36" />
              <Skeleton className="mb-5 h-7 w-44" />
              <Skeleton className="mb-4 h-16 w-full max-w-xl" />
              <Skeleton className="mb-8 h-16 w-full max-w-2xl" />
              <div className="flex gap-4">
                <Skeleton className="h-14 w-36" />
                <Skeleton className="h-14 w-36" />
              </div>
            </div>
            <Skeleton className="aspect-[16/11] w-full rounded-lg" />
          </div>
        </Section>
        <Section dark={true}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
