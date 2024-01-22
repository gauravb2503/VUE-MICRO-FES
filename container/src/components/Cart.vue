<template>
    <div>
      <div>This is Cart page</div>
      <Cart />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineAsyncComponent } from "vue";
  import { provide } from 'vue';
  import store from 'cart/Store';
  
  provide('store', store);
  const Cart = defineAsyncComponent(() => import("cart/Cart"));
  </script>
  