<template>
  <div class="app-wrapper">

    <header class="site-header">
      <div class="header-inner">

        <MobileMenu />

        <NuxtLink to="/" class="logo">LOGO</NuxtLink>

        <SearchBar :products="productsForSearch" />

        <NuxtLink to="/checkout" class="cart-link">
          🛒 ({{ cart.totalCount }})
        </NuxtLink>

      </div>
    </header>

    <nav class="menu-bar">
      <MenuHover text="CAMPAIGNS" />
      <MenuHover text="PERSONAL CARE" />
      <MenuHover text="SKIN CARE" />
      <MenuHover text="MAKE-UP" />
      <MenuHover text="MOTHER & BABY" />
      <MenuHover text="MEN CARE" />
      <MenuHover text="HEALTHY LIFE" />
      <MenuHover text="BRANDS" />
    </nav>

    <main class="page-wrapper">
      <NuxtPage />
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";

import SearchBar from "@/components/SearchBar.vue";
import MenuHover from "@/components/MenuHover.vue";
import MobileMenu from "@/components/MobileMenu.vue";

const cart = useCartStore();

const productsForSearch = ref([
  { id: 1, title: "Herbal Science Boom" },
  { id: 2, title: "Dadmeline Lift + Serum" },
  { id: 3, title: "Ashley Joy Strengthening" },
  { id: 4, title: "Herbal Extract Refreshing" },
]);

onMounted(() => {
  cart.loadFromStorage();
});
</script>

<style scoped>
@media (min-width: 769px) {
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px; 
  }

  .logo,
  .cart-link {
    text-decoration: none; 
    color: #000;         
    font-weight: 600;
  }

  .logo {
    flex-shrink: 0;
  }

  .cart-link {
    flex-shrink: 0;
  }

  .header-inner :deep(input) {
    width: 420px !important;
  }
}

@media (max-width: 768px) {
  .menu-bar {
    display: none;
  }
}
</style>