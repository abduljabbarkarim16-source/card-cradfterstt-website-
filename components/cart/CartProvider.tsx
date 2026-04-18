'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem } from '@/lib/catalog';
import { makeCartItemId } from '@/lib/catalog';
import CartDrawer from './CartDrawer';

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = 'cardCraftersCart';

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    window.localStorage.removeItem(CART_STORAGE_KEY);
    return [];
  }
}

function getSignature(item: Omit<CartItem, 'id'>) {
  return JSON.stringify({
    title: item.title,
    subtitle: item.subtitle,
    type: item.type,
    details: item.details || {},
  });
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    setItems((current) => {
      const nextItem: Omit<CartItem, 'id'> = {
        ...item,
        quantity: item.quantity || 1,
      };
      const signature = getSignature(nextItem);
      const existing = current.find((cartItem) => getSignature(cartItem) === signature);

      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === existing.id
            ? { ...cartItem, quantity: cartItem.quantity + nextItem.quantity }
            : cartItem
        );
      }

      return [...current, { ...nextItem, id: makeCartItemId() }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      count,
      total,
    };
  }, [items, isOpen, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return value;
}
