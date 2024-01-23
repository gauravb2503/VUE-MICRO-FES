<script setup>
import { ref } from 'vue'
import {defineAsyncComponent} from "vue";
const Cart = defineAsyncComponent(() => import("cart/Cart"));
const Products = defineAsyncComponent(() => import("products/Products"));

</script>

<template>
    <div><h1>Shopping App</h1></div>
    <hr>
    <div><h3>Product Module</h3></div>
    <Products />
    <hr>
    <div>
        <h3>Cart Module</h3>
    </div>
    <Cart />
</template>
