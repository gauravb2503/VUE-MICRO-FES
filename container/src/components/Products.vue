<template>
    <div>
        <div>This is Product page</div>
        <Products />
    </div>
</template>

<script setup lang="ts">
 import {defineAsyncComponent} from "vue";
 import { provide } from 'vue';
 import store from 'products/Store'
provide('store', store);
 const Products = defineAsyncComponent(() => import("products/Products"));
</script>