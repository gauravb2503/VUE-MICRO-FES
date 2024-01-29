<template>
  <div class="products-module">
    <h1>Products App</h1>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <span class="product-info">{{ product.name }} - ${{ product.price }}</span>
        <button @click="addProductToCart(product)" class="add-to-cart-button">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductsStore } from './store/productStore';
import { pubsub } from './pubsub';

const productsStore = useProductsStore();
const products = ref(productsStore.getProducts);

const addProductToCart = (product) => {
  console.log('Product added to cart by Products module:', product);
  pubsub.publish('addToCart', product);
};
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

  .add-to-cart-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }

  .add-to-cart-button:hover {
    background-color: #0056b3;
  }
</style>