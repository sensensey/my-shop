<template>
  <div class="search-wrapper" @click.stop>
    <input
      type="text"
      v-model="query"
      class="search-input"
      placeholder="Write the product or category you are looking for"
      @focus="dropdownOpen = true"
      @input="onInput"
    />

    <div v-if="dropdownOpen" class="search-dropdown">

      <div v-if="results.length === 0" class="search-empty">
        No results
      </div>

      <div
        v-for="item in results"
        :key="item.id"
        class="search-item"
        @click="selectItem(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const query = ref("");
const dropdownOpen = ref(false);
const results = ref([]);
let timeout = null;

const searchAPI = async () => {
  if (!query.value || query.value.length < 2) {
    results.value = [];
    return;
  }

  const res = await fetch(
    `https://dummyjson.com/products/search?q=${query.value}`
  );

  const data = await res.json();
  results.value = data.products || [];
};

const onInput = () => {
  dropdownOpen.value = true;
  clearTimeout(timeout);
  timeout = setTimeout(searchAPI, 400);
};

const selectItem = (item) => {
  query.value = item.title;
  dropdownOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", () => {
    dropdownOpen.value = false;
  });
});
</script>

<style scoped>
.search-wrapper {
  position: relative;
  width: 420px;
}

.search-input {
  width: 100%;
  padding: 8px 14px;
  border: 1px solid #ddd;
  border-radius: 30px;
  outline: none;
  font-size: 14px;
}

.search-input:focus {
  border-color: #8f60ff;
  box-shadow: 0 0 4px rgba(143, 96, 255, 0.4);
}

.search-dropdown {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  z-index: 50;
  max-height: 250px;
  overflow-y: auto;
}

.search-item {
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
}

.search-item:hover {
  background: #f6f6f6;
}

.search-empty {
  padding: 12px 14px;
  color: #777;
  font-size: 13px;
}
</style>