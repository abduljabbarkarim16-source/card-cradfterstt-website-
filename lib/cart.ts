export const CART_STORAGE_KEY = "cardCraftersCart";
export const ORDERS_STORAGE_KEY = "cardCraftersOrders";
export const PROFILE_STORAGE_KEY = "cardCraftersProfile";

export type CartItem = {
  id: string;
  slug: string;
  category: string;
  name: string;
  variant?: string;
  priceTtd: number;
  image: string;
  quantity: number;
};

export type Order = {
  orderNumber: string;
  placedAt: string;
  items: CartItem[];
  subtotal: number;
  total: number;
  paymentMethod: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
    transactionId?: string;
    transferDate?: string;
  };
};

export type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "whatsapp" | "email" | "phone";
  marketingOptIn: boolean;
};

export const emptyProfile: Profile = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "whatsapp",
  marketingOptIn: false,
};

export function generateOrderNumber(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `CC-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}
