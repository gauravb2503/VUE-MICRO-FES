<template>
  <div>
    <h1>Cart Module</h1>
    <div v-if="cartItems.length === 0">Cart is empty</div>
    <ul v-else>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from './store/cartStore';

const cartStore = useCartStore();
const cartItems = ref(cartStore.getCartItems);
</script>
