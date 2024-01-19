<template>
    <div>
        <div>This is Product page</div>
        <Products />
    </div>
</template>

<script setup lang="ts">
 import {defineAsyncComponent} from "vue";
 const Products = defineAsyncComponent(() => import("products/Products"));
</script>