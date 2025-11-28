<template>
  <div
    class="product-card"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="image-wrapper">
      <img :src="product.image" alt="" />

      <!-- HOVER BAR -->
      <div class="hover-bar" v-if="hover">
        <button class="hover-btn" @click.stop="onQuickView">
          <span class="icon">👁️</span>
          Quick View
        </button>

        <div class="divider"></div>

        <button class="hover-btn" @click.stop="add">
          <span class="icon">🛒</span>
          Add
        </button>
      </div>
    </div>

    <!-- price -->
    <div class="price">{{ product.price.toFixed(2) }} TL</div>

    <!-- title -->
    <div class="title">{{ product.title }}</div>

    <!-- description -->
    <div class="desc">{{ product.description }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Parent’a event göndermek için
const emit = defineEmits(['quick-view'])

const cart = useCartStore()
const hover = ref(false)

const add = () => {
  cart.addToCart(props.product)
}

const onQuickView = () => {
  emit('quick-view', props.product)
}
</script>

<style scoped>
.product-card {
  width: 230px;
  background: white;
  border-radius: 12px;
  padding-bottom: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-3px);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  max-height: 160px;
  object-fit: contain;
}

/* --- HOVER BAR --- */
.hover-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 45px;
  background: rgba(0, 0, 0, 0.75);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.hover-btn {
  display: flex;
  align-items: center;
  gap: 6px;

  color: white;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.icon {
  font-size: 16px;
}

.divider {
  width: 1px;
  height: 20px;
  background: #bbbbbb;
}

/* write */
.price {
  margin-top: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #1b1b50;
}

.title {
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
}

.desc {
  font-size: 12px;
  color: #777;
  margin-top: 4px;
}
</style>