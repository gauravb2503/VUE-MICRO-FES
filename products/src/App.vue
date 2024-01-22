<template>
  <div>
    From Product Module
    <div v-for="product in productList" :key="product.id">
      <span>{{ product.name }}</span>
      <button @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
// import { eventBus } from 'eventBus';


const store = inject('store');
const productList = ref([]);

onMounted(() => {
  productList.value = store.state.productList;
});


function addToCart(product) {
  eventBus.emit('addToCart', product);
}
</script>
