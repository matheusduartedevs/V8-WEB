<script setup lang="ts">
import CarsService from '@/services/cars';
import { onMounted, ref } from 'vue';

import CarCard from '@/components/CarCard.vue';
import SearchBar from '@/components/SearchBar.vue';

import type { ICars } from '@/types/cars';

const cars = ref<ICars[]>([]);
const allCars = ref<ICars[]>([]);
const loading = ref(false);

const carsService = new CarsService();

const fetch = async () => {
  try {
    loading.value = true;
    const data = await carsService.getCars();
    allCars.value = data; 
    cars.value = data; 
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const handleSearch = (search: string) => {
  if (search) {
    cars.value = allCars.value.filter((car) =>
      car.car_name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    cars.value = [...allCars.value];
  }
};

onMounted(() => {
  fetch();
});
</script>

<template>
  <SearchBar @search="handleSearch" />
  <div v-if="loading">
    <p>Carregando...</p>
  </div>
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
    <div v-if="cars.length <= 0 && !loading">
      <p>Nenhum carro encontrado</p>
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