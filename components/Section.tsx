import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  tone?: 'default' | 'band' | 'quiet' | 'dark';
}

export default function Section({
  children,
  className = '',
  title,
  subtitle,
  dark = false,
  tone,
}: SectionProps) {
  const resolvedTone = tone || (dark ? 'dark' : 'default');
  const toneClass = {
    default: 'bg-transparent',
    band: 'section-band',
    quiet: 'section-quiet',
    dark: 'bg-dark-900/50',
  }[resolvedTone];

  return (
    <section
      className={`section-padding relative ${toneClass} ${className}`}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            <div className="mx-auto mb-5 gold-divider" />
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
