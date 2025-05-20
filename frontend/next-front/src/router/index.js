import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import GameDetails from '../views/GameDetails.vue'
import Login from '../views/LoginView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/details',
    name:'Details',
    component: GameDetails
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/checkout',
    name:'Checkout',
    component:CheckoutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
