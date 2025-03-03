<script setup lang="ts">
import CarsService from '@/services/cars';
import { onMounted, ref } from 'vue';
import CarCard from './CarCard.vue';

import type { ICars } from '@/types/cars';

const cars = ref<ICars[]>([])
const carsService = new CarsService()

const fetch = async () => {
  try {
    const data = await carsService.getCars()
    cars.value = data
  } catch (error) {
    console.log(error)
  } 
}

onMounted(() => {
  fetch()
})
</script>

<template>
  <div class="home">
    <div v-for="car in cars" :key="car.car_id">
      <CarCard 
        :car-id="car.car_id"
        :car-name="car.car_name" 
        :car-brand="car.car_brand" 
        :car-top-speed="car.car_top_speed" 
        :car-engine="car.car_engine" 
        :car-transmission="car.car_transmission" 
        :car-price="parseInt(car.car_price)" />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 10px;
}
</style>
