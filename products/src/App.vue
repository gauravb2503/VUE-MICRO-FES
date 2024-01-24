<template>
    <div>
      <h1>Products Module</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}
          <button @click="addProductToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useProductsStore } from './store/productStore';
  import eventEmitter from './eventEmitter';
  
  const productsStore = useProductsStore();
  const products = ref(productsStore.getProducts);
  
  const addProductToCart = (product) => {
    // how i can communicate with the cartModule
    eventEmitter.emit('test', {id: 10});
  };
  </script>
  