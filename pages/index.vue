<template>
  <div>

    <section class="hero-section">
      <div class="wide-container">
        
        <ProductCard3
          :slide="currentHero"
          @shop-now="goToCart"
        />

        <div class="hero-dots">
          <span
            v-for="(s, i) in heroSlides"
            :key="i"
            class="hero-dot"
            :class="{ 'hero-dot--active': i === heroIndex }"
            @click="goTo(i)"
          />
        </div>

      </div>
    </section>


    <section class="section">
      <div class="wide-container">

        <h2 class="section-title">Featured products</h2>

        <div v-if="pending" class="loading">Ürünler yükleniyor...</div>
        <div v-else-if="error" class="error">Ürünler yüklenirken hata oluştu.</div>

        <div v-else class="product-row">
          <ProductCard1
            v-for="p in products.slice(0, 4)"
            :key="p.id"
            :product="p"
            @quick-view="openQuickView"
          />
        </div>

        <QuickViewModal
          v-if="quickViewProduct"
          :product="quickViewProduct"
          @close="quickViewProduct = null"
        />

      </div>
    </section>


    <section class="newsletter-section">
      <div class="wide-container">
        <div class="newsletter-inner">

          <div>
            <h3>Sign up to our newsletter</h3>
            <p>Be the first to hear about the latest offers.</p>
          </div>

          <form class="newsletter-form" @submit.prevent="submitNewsletter">
            <input
              type="email"
              v-model="newsletterEmail"
              placeholder="Your email address"
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>

        </div>
      </div>
    </section>

  </div>
</template>




<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import ProductCard1 from "@/components/ProductCard1.vue";
import ProductCard3 from "@/components/ProductCard3.vue";
import QuickViewModal from "@/components/QuickViewModal.vue";

const router = useRouter();

const heroSlides = ref([
  {
    id: 1,
    subtitle: "Naturals by Watsons",
    title: "The new 2021 collection",
    description:
      "Known as “the miracle plant”, Aloe Vera helps to nourish, moisturize and keep the hair looking smooth.",
    buttonText: "Shop now",
    image: "/images/hero1.png",
  }
]);

const heroIndex = ref(0);
const currentHero = computed(() => heroSlides.value[heroIndex.value]);

const goTo = (i) => (heroIndex.value = i);

const products = ref([]);
const pending = ref(true);
const error = ref(null);

const loadProducts = async () => {
  try {
    pending.value = true;
    error.value = null;

    const res = await fetch("https://dummyjson.com/products?limit=8");
    const json = await res.json();

    products.value = json.products.map((p) => ({
      id: p.id,
      title: p.title,
      image: p.thumbnail,
      price: p.price,
      description: p.description,
    }));

  } catch (e) {
    error.value = e;
  } finally {
    pending.value = false;
  }
};

await loadProducts();

const quickViewProduct = ref(null);
const openQuickView = (product) => {
  quickViewProduct.value = product;
};

const newsletterEmail = ref("");
const submitNewsletter = () => {
  alert("Thank you for subscribing!");
  newsletterEmail.value = "";
};

const goToCart = () => router.push("/checkout");
</script>




<style scoped>
.hero-section {
  background: white;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.hero-dots {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 6px;
}

.hero-dot {
  width: 8px;
  height: 8px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
}

.hero-dot--active {
  background: #ff007f;
}

.section-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #0196a3;
}

.product-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
}

.loading,
.error {
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
}

.newsletter-inner {   
  display: flex; 
justify-content: space-between; 
align-items: center; }

</style>