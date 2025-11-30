<template>
  <div class="hero-wrapper">

    <button class="hero-arrow left" @click="prevSlide">‹</button>

    <img :src="slides[currentIndex].image" class="hero-image-full" />

    <div class="hero-text">
      <h4 class="subtitle">{{ slides[currentIndex].subtitle }}</h4>
      <h1 class="title">{{ slides[currentIndex].title }}</h1>
      <p class="desc">{{ slides[currentIndex].description }}</p>

      <button class="shop-btn" @click="$emit('shop-now')">Shop Now</button>

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
.hero-wrapper {
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 420px;
  overflow: hidden;
}

.hero-image-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  color: #fff;
  max-width: 420px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.35);
}

.title { font-size: 34px; font-weight: 700; }
.subtitle { font-size: 12px; font-weight: 700; }
.desc { font-size: 14px; opacity: 0.9; }

.shop-btn {
  margin-top: 18px;
  background: #ff3e90;
  color: white;
  padding: 10px 26px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.dots { margin-top: 20px; }
.dot {
  width: 8px;
  height: 8px;
  background: rgba(255,255,255,0.6);
  border-radius: 20px;
  margin-right: 6px;
  display: inline-block;
}
.dot.active {
  width: 20px;
  background: #ff3e90;
}

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
}
.hero-arrow.left { left: 18px; }
.hero-arrow.right { right: 18px; }


@media (max-width: 768px) {

  .hero-wrapper {
    height: auto;
  }

  .hero-image-full {
    height: auto;
    max-height: 350px;
    object-fit: cover;
  }

  .hero-text {
    position: static;
    transform: none;
    margin-top: 10px;
    text-align: center;
    padding: 0 16px;
    max-width: 100%;
  }

  .title {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 6px;
  }

  .subtitle { font-size: 13px; }
  .desc { font-size: 13px; line-height: 18px; }

  .hero-arrow {
    display: none;
  }

  .dots {
    justify-content: center;
    margin-top: 12px;
  }
}
</style>