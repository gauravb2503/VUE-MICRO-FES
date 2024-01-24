<script setup>
import {defineAsyncComponent, onMounted} from "vue";
const Cart = defineAsyncComponent(() => import("cart/Cart"));
const Products = defineAsyncComponent(() => import("products/Products"));


// accessing the store from different module
import { useCartStore } from "cart/CartStore";
import { useProductsStore } from "products/ProductStore";
import eventEmitter from "products/EventEmitter"

const cartStore = useCartStore();
const productStore = useProductsStore();
console.log(cartStore);
debugger;

onMounted(() => {
  console.log(cartStore.getCartItems, productStore);
});

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
