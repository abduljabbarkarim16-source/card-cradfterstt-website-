export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-white/10 shadow-inner-gold ${className}`} />;
}

export function PageHeroSkeleton() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Skeleton className="mx-auto mb-6 h-14 max-w-2xl" />
      <Skeleton className="mx-auto mb-3 h-5 max-w-3xl" />
      <Skeleton className="mx-auto h-5 max-w-xl" />
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="rounded-lg border border-white/10 bg-dark-800/65 p-6">
      <Skeleton className="mb-5 h-36 w-full" />
      <Skeleton className="mb-3 h-5 w-24" />
      <Skeleton className="mb-3 h-7 w-3/4" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-6 h-4 w-5/6" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export function ServiceGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ServiceCardSkeleton key={index} />
      ))}
    </div>
  );
}
