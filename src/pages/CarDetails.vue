<script setup lang="ts">
import CarsService from '@/services/cars';
import type { ICars } from '@/types/cars';
import { formatPrice, formatTransmission } from '@/utils/carsFunctions';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const car = ref<ICars>()
const carsService = new CarsService()
const route = useRoute()

const fetch = async () => {
  const id = Number(route.params.id)
  try {
    const data = await carsService.getCarById(id)
    car.value = data
  } catch (error) {
    console.log(error)
  } 
}

onMounted(() => {
  fetch()
})

</script>

<template>
  <div class="car">
    <div class="car-details">
      <h1>{{ car?.car_name }}</h1>
      <p><strong>Marca:</strong> {{ car?.car_brand }}</p>
      <p><strong>Velocidade Máxima:</strong> {{ car?.car_top_speed }} km/h</p>
      <p><strong>Motor:</strong> {{ car?.car_engine }}</p>
      <p><strong>Transmissão:</strong> {{ formatTransmission(car?.car_transmission || "") }}</p>
      <p><strong>Preço: </strong>{{ formatPrice(Number(car?.car_price) || 0) }}</p>
    </div>
  </div>
</template>

<style scoped>
.car {
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  max-width: 900px;
  height: 900px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.car-image img {
  width: 300px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.car-details {
  flex: 1; 
  text-align: center;
}

h1 {
  margin-bottom: 10px;
  font-size: 24px;
}

p {
  margin: 5px 0;
  font-size: 16px;
}
</style>