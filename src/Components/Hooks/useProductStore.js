import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useProductStore = create(
  persist(
    (set, get) => ({
      products: [],
      setProducts: (value) => set(() => ({ products: [...value] })),
      getProducts: () => get((state) => state.products),
    }),
    { name: "products", storage: createJSONStorage(() => localStorage) }
  )
);
