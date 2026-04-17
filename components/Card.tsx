import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`card-premium rounded-2xl p-6 md:p-8 ${
        hoverable ? 'hover:border-accent-gold hover:border-opacity-30' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
