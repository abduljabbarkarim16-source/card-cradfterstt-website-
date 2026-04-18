import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: 'default' | 'muted' | 'premium';
}

export default function Card({
  children,
  className = '',
  hoverable = true,
  variant = 'default',
}: CardProps) {
  const variantClass = {
    default: 'card-premium',
    muted: 'visual-panel visual-panel-muted',
    premium: 'visual-panel visual-panel-premium',
  }[variant];

  return (
    <div
      className={`${variantClass} rounded-lg p-6 ${
        hoverable ? 'hover:border-accent-gold hover:border-opacity-30' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
