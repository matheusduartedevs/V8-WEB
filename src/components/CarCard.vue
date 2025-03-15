<script setup lang="ts">
import { formatEngine, formatPrice, formatTransmission } from '@/utils/carsFunctions';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  carId: String,
  carName: String,
  carBrand: String,
  carEngine: String,
  carTransmission: String,
  carTopSpeed: Number,
  CarYear: Number,
  carPrice: Number,
})

const router = useRouter()

const goToCarDetails = (id: string) => {
  router.push(`/cars/${id}`)
}
</script>

<template>
  <div class="card">
    <div class="card-info">
      <h1 class="car-name">{{ carName }}</h1>
      <p>{{ carBrand }}</p>
      <p>{{ formatEngine(carEngine || "") }}</p>
      <p>{{ formatTransmission(carTransmission || '') }}</p>
      <p>{{ carTopSpeed }} km/h</p>
      <p>{{ CarYear }}</p>
      <p>{{ formatPrice(carPrice ?? 0) }}</p>
    </div>
    <button @click="goToCarDetails(carId || '')">Ver mais</button>
  </div>
</template>

<style scoped>
.card {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card:hover {
  border-color: #008bf8;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover button {
  transform: translate(-50%, 50%);
  opacity: 1;
}

button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: #fff;
  font-size: 1rem;
  padding: .5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

h1 {
  font-size: 1.5em;
  font-weight: bold;
}
p {
  color: rgb(134, 134, 134);
}
</style>
