<script setup lang="ts">
import CarsService from '@/services/cars';
import { onMounted, ref } from 'vue';

import CarCard from '@/components/CarCard.vue';
import CarsFilters from '@/components/CarsFilters.vue';
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

const handleFilters = (filters: { brand: string; transmission: string }) => {
  cars.value = allCars.value.filter((car) => {
    const matchesBrand = filters.brand === "all" || car.car_brand.toLowerCase() === filters.brand.toLowerCase();
    const matchesTransmission = filters.transmission === "all" || car.car_transmission.toLowerCase() === filters.transmission.toLowerCase();

    return matchesBrand && matchesTransmission;
  });
};

onMounted(() => {
  fetch();
});
</script>

<template>
  <SearchBar @search="handleSearch" />
  <div class="cars-container">
    <aside class="filters">
      <CarsFilters @update-filters="handleFilters"/>
    </aside>

    <div class="cars-list">
      <div v-if="loading">
        <p>Carregando...</p>
      </div>

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
  </div>
</template>

<style scoped>
.cars-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
}

.filters {
  position: sticky;
  top: 10px;
  height: fit-content;
  background: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.cars-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 10px;
}
</style>