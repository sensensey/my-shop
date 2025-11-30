<template>
  <button class="nav-item" @click="goTemp">
    {{ text }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const router = useRouter()

const goTemp = () => {
  router.push('/temp')
}
</script>

<style scoped>
.nav-item {
  background: transparent;
  border: none;
  padding: 10px 14px;
  font-size: 13px;
  text-transform: uppercase;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
}

.nav-item:hover {
  color: #00a0c6;
  border-bottom: 2px solid #00a0c6;
}
</style>