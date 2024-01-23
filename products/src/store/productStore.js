import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Product A', price: 20 },
      { id: 2, name: 'Product B', price: 30 },
    ],
  }),
  getters: {
    getProducts() {
      return this.products;
    },
  },
});
