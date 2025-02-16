<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  carName: String,
  carBrand: String,
  carPrice: Number
})
</script>

<template>
  <div class="car-card">
    <div class="car-info">
      <h1>{{ carName }}</h1>
      <p>{{ carBrand }}</p>
      <p>R$ {{ carPrice }}</p>
    </div>
  </div>
</template>

<style scoped>
.car-card {
  width: 200px;
  border: 2px solid #FFD700;
  border-radius: 8px;  height: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  color: #222222;
}

.car-info {
  text-align: center;
}
</style>
