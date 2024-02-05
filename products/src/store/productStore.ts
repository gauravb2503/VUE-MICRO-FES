import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductsState {
  products: Product[];
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [
      { id: 1, name: 'IPhone 13', price: 299, quantity: 10 },
      { id: 2, name: 'Iphone 15 Plus', price: 699, quantity: 10 },
      { id: 3, name: 'Airpods 3', price: 199, quantity: 200 },
      { id: 4, name: 'Mac Book Pro M1', price: 899, quantity: 5 },
      { id: 5, name: 'Mac Book Air M2', price: 799, quantity: 10 },
    ],
  }),
  getters: {
    getProducts(): Product[] {
      return this.products;
    },
  },
  actions: {
    manageQuantity(product: Product, status: 'add' | 'remove'): void {
      let selectedProduct = this.products.find(item => item.id === product.id);
      if (selectedProduct) {
        if (status === 'add' && selectedProduct.quantity > 0) {
          selectedProduct.quantity -= 1;
        } else if (status === 'remove') {
          selectedProduct.quantity += 1;
        }
      }
    }
  },
});
