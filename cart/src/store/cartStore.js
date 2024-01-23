import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [{ id: 1, name: 'Product A', price: 20 },],
  }),
  getters: {
    getCartItems() {
      return this.cartItems;
    },
  },
  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },
  },
});
