<template>
  <div>
    From Cart Module
    <div v-for="(item, index) in cartItems" :key="index">{{ item.name }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
// import { eventBus } from 'eventBus';

const store = inject('store');
const cartItems = ref([]);

onMounted(() => {
  cartItems.value = store.state.cartItems;

  // eventBus.on('addToCart', (product) => {
  //   cartItems.value.push(product);
  // });
});
</script>
