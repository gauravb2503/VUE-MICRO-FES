<template>
  <div class="products-module">
    <h1>Products App</h1>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-info-container">
          <span class="product-info">{{ product.name }} - ${{ product.price }}</span>
          <span class="quantity-container">
            Available Quantity: <span class="quantity-info">{{ product.quantity }}</span>
          </span>
        </div>
        <button v-if="!getCartQuantity(product)" @click="addProductToCart(product)" class="add-to-cart-button">Add to Cart</button>
        <div v-else class="quantity-controls">
          <button @click="removeProductFromCart(product)" class="decrease-button">-</button>
          <span class="quantity">{{ getCartQuantity(product) }}</span>
          <button @click="addProductToCart(product)" :disabled="!product.quantity" class="increase-button">+</button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProductsStore } from './store/productStore';
import { pubsub } from './pubsub';
import { useCartStore } from 'cart/CartStore';

interface Product {
  name: string;
  id: number;
  price: number;
  quantity: number;
}

const productsStore = useProductsStore();
const cartStore = useCartStore();
const products = ref<Product[]>(productsStore.getProducts);
const cartItems = computed(() => cartStore.getCartItems);
const addProductToCart = (product: Product) => {
  pubsub.publish('addToCart', product);
};

function getCartQuantity(item: Product): number {
  const cartItemInfo = cartItems.value.find(cartItem => cartItem.id === item.id)
  if (cartItemInfo) {
    return cartItemInfo.quantity;
  }
  return 0;
}

const removeProductFromCart = (product: Product) => {
  pubsub.publish('removeItem', product);
}
</script>


<style scoped>
  .products-module {
    font-family: 'Arial', sans-serif;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .product-list {
    list-style: none;
    padding: 0;
  }

  .product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .product-info {
    flex-grow: 1;
  }

  .quantity-info {
    background-color: #28a745;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
  }

  .quantity {
    margin: 0 10px;
  }

  .add-to-cart-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }

  .increase-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .increase-button:hover:enabled {
    background-color: #0056b3;
  }

  .product-info-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .quantity-container {
    margin-top: 5px;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
  }

  .increase-button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 5px;
  }

  .increase-button:hover {
    background-color: #218838;
  }

  .decrease-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 5px;
  }

  .decrease-button:hover {
    background-color: #c82333;
  }
</style>