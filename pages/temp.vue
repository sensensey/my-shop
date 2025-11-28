<template>
  <div style="text-align:center; padding:50px">
    <h1>Temporary Page</h1>    

    <button @click="goBack">
      Go back
    </button>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back()
}
</script>