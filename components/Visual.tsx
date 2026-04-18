import Image from 'next/image';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  accent?: 'default' | 'quiet' | 'premium';
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, align = 'center', accent = 'default', children }: PageHeaderProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <div className={centered ? 'mx-auto mb-5 flex justify-center' : 'mb-5'}>
        <span className={accent === 'premium' ? 'premium-badge' : 'text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold'}>
          {eyebrow}
        </span>
      </div>
      <h1 className="text-4xl font-display font-bold leading-tight text-gray-100 sm:text-5xl md:text-6xl">{title}</h1>
      <p className={`${centered ? 'mx-auto' : ''} mt-6 max-w-2xl text-lg leading-8 text-gray-400`}>
        {description}
      </p>
      {accent !== 'quiet' ? <div className={centered ? 'mx-auto mt-7 gold-divider' : 'mt-7 gold-divider'} /> : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );
}

export function VisualPanel({
  children,
  className = '',
  padded = true,
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
  variant?: 'default' | 'muted' | 'premium' | 'highlight' | 'plain';
}) {
  const variantClass = {
    default: '',
    muted: 'visual-panel-muted',
    premium: 'visual-panel-premium',
    highlight: 'visual-panel-highlight',
    plain: 'visual-panel-plain',
  }[variant];

  return (
    <div className={`visual-panel ${variantClass} ${padded ? 'p-6' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function BrandMark({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-accent-gold/20 bg-dark-900/70 shadow-glow-gold-sm ${className}`}>
      <Image src="/brand/monogram-glow.png" alt="" fill sizes="96px" className="object-contain p-2.5" />
    </div>
  );
}

export function ProductImageFrame({
  src,
  alt = '',
  className = '',
  priority = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`product-frame relative overflow-hidden rounded-lg border border-white/10 bg-dark-900 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-contain p-5"
      />
    </div>
  );
}

export function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <VisualPanel variant="muted" className="h-full text-center transition duration-200 hover:scale-[1.03] hover:border-accent-gold/30 active:scale-[1.03] md:text-left">
      <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/40 bg-accent-gold text-lg font-bold text-dark-950 shadow-glow-gold-sm md:mx-0">
        {step}
      </div>
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
    </VisualPanel>
  );
}

export function BuilderShell({
  eyebrow,
  title,
  description,
  image,
  children,
  preview,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  children: ReactNode;
  preview: ReactNode;
}) {
  return (
    <VisualPanel padded={false} variant="premium" className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,201,93,0.16),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(6,182,212,0.07),transparent_35%)]" />
          <div className="relative z-10">
            {image ? (
              <div className="product-frame relative mb-6 h-24 w-24 overflow-hidden rounded-lg border border-white/10">
                <Image src={image} alt="" fill sizes="96px" className="object-contain p-3" />
              </div>
            ) : (
              <BrandMark className="mb-6 h-20 w-20" />
            )}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">{eyebrow}</p>
            <h3 className="mt-2 text-3xl font-bold text-gray-100">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
            <div className="mt-6 rounded-lg border border-accent-gold/20 bg-dark-950/72 p-4 shadow-inner-gold">{preview}</div>
          </div>
        </div>
        <div className="bg-dark-900/35 p-6">{children}</div>
      </div>
    </VisualPanel>
  );
}
