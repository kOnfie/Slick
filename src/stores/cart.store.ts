import { create } from "zustand";
import type { ProductType } from "types/Product.types";

interface CartProduct extends ProductType {
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  addItemToCart: (product: CartProduct) => void;
  removeItemFromCart: (productId: number) => void;
  decreaseItemQuantity: (productId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItemToCart: (product: CartProduct) =>
    set((state) => {
      const existingElement = state.items.findIndex((item) => item.id === product.id);
      if (existingElement === -1) {
        return { items: [...state.items, product] };
      }

      const newItems = [...state.items];
      newItems[existingElement].quantity += 1;

      return { items: newItems };
    }),

  removeItemFromCart: (productId: number) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  decreaseItemQuantity: (productId: number) =>
    set((state) => {
      const existingElement = state.items.findIndex((item) => item.id === productId);
      if (existingElement === -1) return state;

      const newItems = [...state.items];
      if (newItems[existingElement].quantity === 1) {
        return { items: newItems.filter((item) => item.id !== productId) };
      }

      newItems[existingElement].quantity -= 1;
      return { items: newItems };
    }),

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getTotalItems: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },
}));
