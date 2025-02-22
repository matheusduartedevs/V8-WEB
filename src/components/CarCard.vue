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
    <button>Ver mais</button>
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
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.car-info {
  text-align: center;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #FFD700;
  border: none;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  color: #222222;
  font-weight: bold;
}
</style>
