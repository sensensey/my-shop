<template>
  <div style="padding:40px; text-align:center">
    Redirecting to checkout...
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

if (process.client) {
  router.replace('/checkout')
}
</script>