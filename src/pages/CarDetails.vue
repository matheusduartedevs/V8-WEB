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
      <div class="car-title">
        <h1 class="car-name">{{ car?.car_name }}</h1>
        <p class="car-description">{{ car?.car_description }}</p>
      </div>

      <div class="car-specifications">
        <p>
          <strong>Marca</strong> 
          <span>{{ car?.car_brand }}</span>
        </p>
        <p>
          <strong>Velocidade Máxima</strong> 
          <span>{{ car?.car_top_speed }} km/h</span>
        </p>
        <p>
          <strong>Motor</strong> 
          <span>{{ car?.car_engine }}</span>
        </p>
        <p>
          <strong>Transmissão</strong> 
          <span>{{ formatTransmission(car?.car_transmission || "") }}</span>
        </p>
      </div>

      <div class="car-price">
        <p>
          <span>{{ formatPrice(Number(car?.car_price) || 0) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.car {
  display: flex;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  text-align: center;
}

.car-name {
  font-size: 5rem;
}

.car-description {
  font-size: 1.5rem;
  margin: 20px 0;
}

.car-specifications {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
}

.car-specifications p {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  width: 100%;
}

.car-specifications strong {
  text-align: left;
}

.car-specifications span {
  text-align: right;
}

.car-price {
  margin-top: 5rem;
  text-align: center;
  
  p {
    font-size: 2.5rem;
  }
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