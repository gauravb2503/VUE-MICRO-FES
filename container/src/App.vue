<template>
    <div>This application is the host for the below two other application, showing how micro frontend architecture is used.</div>
    <Products/>
    <Cart/>
</template>
<script setup>
 import {defineAsyncComponent} from "vue";
 const Products = defineAsyncComponent(() => import("products/Products"));
 const Cart = defineAsyncComponent(() => import("cart/Cart"))
</script>