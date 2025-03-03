import CarsHome from '@/components/CarsHome.vue'
import CarDetails from '@/pages/CarDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CarsHome,
    },
    {
      path: '/cars/:id',
      name: 'cars',
      component: CarDetails,
      props: true
    }
  ],
})

export default router
