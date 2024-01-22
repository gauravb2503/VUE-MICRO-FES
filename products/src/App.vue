<template>
    <div>From Product Module</div>
    <div>Product Message: {{ productMessage }}</div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';

const store = inject('store');
const productMessage = ref('');

onMounted(() => {
  productMessage.value = store.state.productMessage;
});
</script>