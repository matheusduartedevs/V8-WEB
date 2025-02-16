<script setup lang="ts">
import { computed } from 'vue';
import CarCard from './components/CarCard.vue';

const mockCars = computed(() => [
  { id: 1, carName: "Corolla", carBrand: "Toyota", carPrice: 120000 },
  { id: 2, carName: "Civic", carBrand: "Honda", carPrice: 130000 },
  { id: 3, carName: "Onix", carBrand: "Chevrolet", carPrice: 90000 },
  { id: 4, carName: "HB20", carBrand: "Hyundai", carPrice: 85000 },
  { id: 5, carName: "Compass", carBrand: "Jeep", carPrice: 160000 },
  { id: 6, carName: "Kwid", carBrand: "Renault", carPrice: 70000 }
])

</script>

<template>
  <div class="home">
    <div v-for="cars in mockCars" :key="cars.id">
      <CarCard :car-name="cars.carName" :car-brand="cars.carBrand" :car-price="cars.carPrice" />
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
