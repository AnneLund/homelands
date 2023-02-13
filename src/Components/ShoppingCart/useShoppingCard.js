import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export const useShoppingCardStore = create(
  persist(
    (set) => ({
      cartID: uuidv4(),
      cartItems: [],

      setEmptyCart: () => set(() => ({ cartItems: [] })),
      setDeleteItem: (id) =>
        set((state) => ({
          cartItems: [
            ...state.cartItems.filter((item) => {
              return item.id !== id;
            }),
          ],
        })),

      increaseCartQuantity: (id, price, quantity, title, image) =>
        set((state) => {
          if (state.cartItems.find((item) => item.id === id) == null) {
            return { cartItems: [...state.cartItems, { id: id, image: image, price: price, amount: 1 * quantity, title: title }] };
          } else {
            //**if item exists by id, increase the amount */
            return {
              cartItems: state.cartItems.map((item) => {
                if (item.id === id) {
                  //**return the found item with the new value */
                  return {
                    ...item,
                    amount: item.amount + quantity || 1,
                  };
                } else {
                  //**else return the found item as it is */
                  return { ...item };
                }
              }),
            };
          }
        }),

      //**FUNTION START */

      decreaseCartQuantity: (id, price, quantity, title, image) =>
        set((state) => {
          if (state.cartItems.find((item) => item.id === id) == null) {
            return { cartItems: [...state.cartItems, { id: id, image: image, price: price, amount: 1 * quantity, title: title }] };
          } else {
            //**if item exists by id, increase the amount */
            return {
              cartItems: state.cartItems.map((item) => {
                if (item.id === id) {
                  //**return the found item with the new value */
                  return {
                    ...item,
                    amount: item.amount - quantity || 1,
                  };
                } else {
                  //**else return the found item as it is */
                  return { ...item };
                }
              }),
            };
          }
        }),

      //**FUNCTION END */
    }),
    { name: "zustandCart", storage: createJSONStorage(() => localStorage) }
  )
);
