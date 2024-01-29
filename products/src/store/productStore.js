import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'IPhone 13', price: 299 },
      { id: 2, name: 'Iphone 15 Plus', price: 699 },
      { id: 3, name: 'Airpods 3', price: 199 },
      { id: 4, name: 'Mac Book Pro M1', price: 899 },
      { id: 5, name: 'Mac Book Air M2', price: 799 },
    ],
  }),
  getters: {
    getProducts() {
      return this.products;
    },
  },
});
