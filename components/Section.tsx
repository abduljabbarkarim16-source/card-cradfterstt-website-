import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className = '',
  title,
  subtitle,
  dark = false,
}: SectionProps) {
  return (
    <section
      className={`section-padding relative ${
        dark ? 'bg-dark-900 bg-opacity-50' : 'bg-transparent'
      } ${className}`}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
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
