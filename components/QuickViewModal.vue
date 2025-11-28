<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-panel">
      <!-- Kapatma butonu -->
      <button class="close-btn" @click="$emit('close')">
        ×
      </button>

      <div class="modal-body">
        <!-- SOL: GÖRSEL -->
        <div class="modal-image">
          <img :src="product.image" :alt="product.title" />
        </div>

        <!-- SAĞ: BİLGİLER -->
        <div class="modal-info">
          <h2 class="modal-title">{{ product.title }}</h2>

          <div class="modal-price">
            {{ product.price.toFixed(2) }} TL
          </div>

          <p class="modal-desc">
            {{ product.description }}
          </p>

          <!-- Quantity -->
          <div class="quantity-row">
            <span>Quantity:</span>
            <div class="quantity-controls">
              <button @click="decrement">-</button>
              <span>{{ quantity }}</span>
              <button @click="increment">+</button>
            </div>
          </div>

          <!-- Tek buton -->
          <div class="buttons-row">
            <button class="btn-primary" @click="handleAddToCart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
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

const emit = defineEmits(['close'])

const cart = useCartStore()
const quantity = ref(1)

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) quantity.value--
}

const handleAddToCart = () => {
  // quantity kadar sepete ekle
  for (let i = 0; i < quantity.value; i++) {
    cart.addToCart(props.product)
  }
  // Sepete ekledikten sonra modalı kapat
  emit('close')
}
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-panel {
  position: relative;
  background: #fff;
  max-width: 900px;
  width: 90%;
  max-height: 80vh;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
}

.modal-body {
  display: flex;
}

/* Sol taraf: görsel */
.modal-image {
  flex: 1;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.modal-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Sağ taraf: bilgiler */
.modal-info {
  flex: 1;
  padding: 24px;
  font-size: 14px;
}

.modal-title {
  margin: 0 0 8px;
  font-size: 22px;
}

.modal-price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.modal-desc {
  font-size: 13px;
  color: #555;
  margin-bottom: 18px;
}

/* Quantity alanı */
.quantity-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
}

.quantity-controls button {
  border: none;
  background: #f3f3f3;
  width: 28px;
  height: 28px;
  cursor: pointer;
}

.quantity-controls span {
  width: 34px;
  text-align: center;
}

/* Butonlar */
.buttons-row {
  display: flex;
  gap: 10px;
}

.btn-primary {
  background: #333;
  color: #fff;
  border: none;
  padding: 8px 18px;
  cursor: pointer;
}
</style>