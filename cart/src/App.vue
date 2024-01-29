<template>
  <div class="cart-module">
    <h1>Cart App</h1>
    <div v-if="cartItems.length === 0" class="empty-cart">Cart is empty</div>
    <ul v-else>
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="product-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">${{ item.price }}</span>
        </div>
        <div class="quantity-controls">
          <button @click="decreaseQuantity(item)" class="decrease-button">-</button>
          <span class="quantity">{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)" class="increase-button">+</button>
        </div>
      </li>
      <li class="cart-item total-row">
        <span class="total-label">Total:</span>
        <span class="total-price">{{ calculateTotal() }}</span>
      </li>
      <div class="checkout-container">
        <button @click="proceedToCheckout" class="checkout-button">Proceed to Checkout</button>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from './store/cartStore';
import { pubsub } from './pubsub';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.getCartItems);

function decreaseQuantity(product) {
  pubsub.publish('removeItem', product);
}

function increaseQuantity(product) {
  pubsub.publish('addToCart', product);
}

function calculateTotal() {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
}

function proceedToCheckout() {
  alert('This Feature is not yet developed.')
}
</script>


<style scoped>
  .cart-module {
    font-family: 'Arial', sans-serif;
    max-width: 400px;
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

  .empty-cart {
    text-align: center;
    color: #888;
    margin-top: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .product-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .item-name {
    margin-bottom: 5px;
  }

  .item-price {
    color: #888;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
  }

  .quantity {
    margin: 0 10px;
  }

  .total-price {
    margin-left: 10px;
  }


  .item-info {
    flex-grow: 1;
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


  .total-row {
    font-weight: bold;
  }

  .total-label {
    flex-grow: 1;
  }

  .checkout-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .checkout-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }

  .checkout-button:hover {
    background-color: #0056b3;
  }

</style>