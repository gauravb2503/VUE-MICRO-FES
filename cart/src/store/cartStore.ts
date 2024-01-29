import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cartItems: [],
  }),
  getters: {
    getCartItems(): CartItem[] {
      return this.cartItems;
    },
  },
  actions: {
    addToCart(product: Product): void {
      const existingProduct = this.cartItems.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeItem(product: Product): void {
      const existingProduct = this.cartItems.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          this.cartItems = this.cartItems.filter(item => item.id !== product.id);
        }
      }
    },
  },
});
