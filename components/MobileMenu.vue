<template>
  <div>
    <button class="hamburger-btn" @click="open = !open">
      ☰
    </button>

    <div
      v-if="open"
      class="overlay"
      @click="open = false"
    ></div>
    
    <div class="mobile-menu" :class="{ show: open }">
      <button class="close-btn" @click="open = false">×</button>

      <div class="menu-items">
        <button class="menu-link" @click="go('temp')">CAMPAIGNS</button>
        <button class="menu-link" @click="go('temp')">PERSONAL CARE</button>
        <button class="menu-link" @click="go('temp')">SKIN CARE</button>
        <button class="menu-link" @click="go('temp')">MAKE-UP</button>
        <button class="menu-link" @click="go('temp')">MOTHER & BABY</button>
        <button class="menu-link" @click="go('temp')">MEN CARE</button>
        <button class="menu-link" @click="go('temp')">HEALTHY LIFE</button>
        <button class="menu-link" @click="go('temp')">BRANDS</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
const open = ref(false)

const router = useRouter()
const go = (route) => {
  open.value = false
  router.push("/temp")
}
</script>

<style scoped>
.hamburger-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger-btn {
    display: block;
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
}

.mobile-menu {
  position: fixed;
  left: -260px;
  top: 0;
  width: 240px;
  height: 100vh;
  background: #ffffff;
  z-index: 1100;
  padding: 20px 16px;
  transition: 0.3s ease;
  box-shadow: 2px 0 8px rgba(0,0,0,0.15);
}

.mobile-menu.show {
  left: 0;
}

.menu-items {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-link {
  background: none;
  border: none;
  text-align: left;
  font-size: 16px;
  padding: 8px 0;
  cursor: pointer;
  color: #333;
}

.menu-link:hover {
  color: #ff3399;
}

.close-btn {
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
}
</style>