<template>
    <div>
        <div>This is Cart page</div>
        <Cart />
    </div>
</template>

<script setup lang="ts">
 import {defineAsyncComponent} from "vue";
 const Cart = defineAsyncComponent(() => import("cart/Cart"));
</script>