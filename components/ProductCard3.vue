<template>
  <div class="hero-wrapper">

    <!-- arrow 1 -->
    <button class="hero-arrow left" @click="prevSlide">‹</button>

    <!-- image -->
    <img :src="slides[currentIndex].image" class="hero-image-full" />

    <!-- overlay -->
    <div class="hero-text">
      <h4 class="subtitle">{{ slides[currentIndex].subtitle }}</h4>
      <h1 class="title">{{ slides[currentIndex].title }}</h1>
      <p class="desc">{{ slides[currentIndex].description }}</p>

      <button class="shop-btn" @click="$emit('shop-now')">Shop Now</button>

      <!-- dots -->
      <div class="dots">
        <span
          v-for="(s,i) in slides"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="goToSlide(i)"
        />
      </div>
    </div>

    <!-- arrow 2 -->
    <button class="hero-arrow right" @click="nextSlide">›</button>

  </div>
</template>

<script setup>
import { ref } from "vue"

const currentIndex = ref(0)

const slides = ref([
  {
    image: "/images/hero1.png",
    subtitle: "NATURALS BY WATSONS",
    title: "The new 2021 collection",
    description:
      "Known as “the miracle plant”, Aloe Vera helps to nourish, moisturize and keep the hair looking smooth.",
  },
  {
    image: "/images/hero2.png",
    subtitle: "BEST SKINCARE",
    title: "Glow your beauty",
    description: "Discover the skincare essentials that renew, refresh and brighten your tone.",
  },
  {
    image: "/images/hero3.png",
    subtitle: "BEST SELLERS",
    title: "Top rated products",
    description: "Most loved products chosen by thousands of customers.",
  },
])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) %
    slides.value.length
}

const goToSlide = (i) => (currentIndex.value = i)
</script>

<style scoped>
/* === hero main area === */
.hero-wrapper {
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 420px;
  overflow: hidden;
}

/* === full image === */
.hero-image-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* === write overlay === */
.hero-text {
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translateY(-50%);
  color: #fff;
  max-width: 420px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.35);
}

.subtitle {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  opacity: 0.95;
}

.title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin: 6px 0 10px;
}

.desc {
  margin-top: 8px;
  line-height: 1.4;
  font-size: 14px;
  opacity: 0.9;
}

/* === shop now button === */
.shop-btn {
  margin-top: 18px;
  background: #ff3e90;
  color: white;
  border: none;
  padding: 10px 26px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
}

/* === arrows === */
.hero-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.7);
  border: none;
  font-size: 30px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #444;
  cursor: pointer;
  backdrop-filter: blur(4px);
}

.hero-arrow.left { left: 18px; }
.hero-arrow.right { right: 18px; }

.hero-arrow:hover { background: white; }

/* === dots === */
.dots {
  margin-top: 22px;
}

.dot {
  width: 9px;
  height: 9px;
  background: rgba(255,255,255,0.6);
  border-radius: 20px;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.dot.active {
  width: 22px;
  background: #ff3e90;
}
</style>