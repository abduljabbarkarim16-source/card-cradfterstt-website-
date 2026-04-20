"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { CART_STORAGE_KEY, type CartItem } from "@/lib/cart";

type State = { items: CartItem[] };

type Action =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; item: CartItem }
  | { type: "remove"; id: string; variant?: string }
  | { type: "updateQuantity"; id: string; variant?: string; quantity: number }
  | { type: "clear" };

function keyFor(item: { id: string; variant?: string }) {
  return `${item.id}::${item.variant ?? ""}`;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { items: action.items };
    case "add": {
      const key = keyFor(action.item);
      const existing = state.items.find((i) => keyFor(i) === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            keyFor(i) === key ? { ...i, quantity: i.quantity + action.item.quantity } : i,
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "remove":
      return {
        items: state.items.filter((i) => keyFor(i) !== keyFor({ id: action.id, variant: action.variant })),
      };
    case "updateQuantity":
      return {
        items: state.items
          .map((i) =>
            keyFor(i) === keyFor({ id: action.id, variant: action.variant })
              ? { ...i, quantity: Math.max(0, action.quantity) }
              : i,
          )
          .filter((i) => i.quantity > 0),
      };
    case "clear":
      return { items: [] };
  }
}

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [hydrated, setHydrated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", items: JSON.parse(raw) });
    } catch {
      // ignore — start empty
    }
    setHydrated(true);

    const sync = (e: StorageEvent) => {
      if (e.key !== CART_STORAGE_KEY) return;
      try {
        dispatch({ type: "hydrate", items: e.newValue ? JSON.parse(e.newValue) : [] });
      } catch {
        // ignore
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items, hydrated]);

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: "add", item });
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback((id: string, variant?: string) => {
    dispatch({ type: "remove", id, variant });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number, variant?: string) => {
    dispatch({ type: "updateQuantity", id, variant, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const value = useMemo<CartContextValue>(() => {
    const count = state.items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = state.items.reduce((s, i) => s + i.priceTtd * i.quantity, 0);
    return {
      items: state.items,
      count,
      subtotal,
      hydrated,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      clear,
    };
  }, [state.items, hydrated, drawerOpen, addItem, removeItem, updateQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
