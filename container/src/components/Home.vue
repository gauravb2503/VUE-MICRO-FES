<script setup>
import {defineAsyncComponent} from "vue";
const Cart = defineAsyncComponent(() => import("cart/Cart"));
const Products = defineAsyncComponent(() => import("products/Products"));
debugger;

</script>

<template>
    <div><h1>Shopping App</h1></div>
    <hr>
    <div>
        <h3>Product Module</h3>
        <Products />
    </div>
    <hr>
    <div>
        <h3>Cart Module</h3>
        <Cart />
    </div>
</template>
