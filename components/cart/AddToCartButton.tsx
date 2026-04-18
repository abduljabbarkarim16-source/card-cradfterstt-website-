'use client';

import type { ReactNode } from 'react';
import { CartItem } from '@/lib/catalog';
import { useCart } from './CartProvider';

interface AddToCartButtonProps {
  item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number };
  className?: string;
  children?: ReactNode;
}

export default function AddToCartButton({ item, className = '', children = 'Add to Cart' }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(item)}
      className={`btn btn-primary ${className}`}
    >
      {children}
    </button>
  );
}
