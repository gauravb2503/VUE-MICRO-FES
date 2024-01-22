<template>
  <div>
    From Cart Module
  </div>
  {{ cartItems }}
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';

const store = inject('store');
const cartItems = ref([]);

onMounted(() => {
  cartItems.value = store.state.cartItems;
});
</script>
