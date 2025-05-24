import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import GameDetails from '../views/GameDetails.vue'
import Login from '../views/LoginView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AdminCreateGame from '../views/AdminCreateGameView.vue'
import WishlistView from '../views/WishlistView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import UserPageView from '../views/UserPageView.vue'

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
  },
  {
    path: '/admin/jogos/novo',  
    name: 'AdminCreateGame',
    component: AdminCreateGame
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: WishlistView
  },
  {
    path: '/avaliacoes',
    name: 'Avaliacoes',
    component: AvaliacoesView
  },
  {
    path: '/user-page/:id',
    name: 'UserPage',
    component: UserPageView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
