<template>
  <div class="shopping-app">
    <div>
      <h1>Shopping App</h1>
    </div>
    <hr>
    <div class="modules-container">
      <div class="module">
        <h3>Product Module</h3>
        <Products />
      </div>
      <div class="module">
        <h3>Cart Module</h3>
        <Cart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from 'vue';
import { useCartStore } from 'cart/CartStore';
import { useProductsStore } from 'products/ProductStore';
import { pubsub } from 'products/PubSub';

const Cart = defineAsyncComponent(() => import('cart/Cart'));
const Products = defineAsyncComponent(() => import('products/Products'));

const cartStore = useCartStore();
const productStore = useProductsStore();

pubsub.subscribe('addToCart', (product: any) => {
  cartStore.addToCart(product);
  productStore.manageQuantity(product, 'add');
});

pubsub.subscribe('removeItem', (product: any) => {
  cartStore.removeItem(product);
  productStore.manageQuantity(product, 'remove')
});

onMounted(() => {
  console.log(cartStore, productStore, pubsub);
});
</script>

<style scoped>
  .shopping-app {
    font-family: 'Arial', sans-serif;
    max-width: 70%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1, h3 {
    text-align: center;
    color: #333;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #ddd;
  }

  .modules-container {
    display: flex;
    justify-content: space-evenly;
  }

  .module {
    flex: 1;
    margin: 0 10px;
  }
</style>
