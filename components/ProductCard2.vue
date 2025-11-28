<template>
  <div class="product-card">
    <img :src="product.image" />
    <button @click="$emit('browse')">Browse</button>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script>