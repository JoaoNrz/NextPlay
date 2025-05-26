import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import GameDetails from '../views/GameDetails.vue'
import Login from '../views/LoginView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AdminCreateGame from '../views/AdminCreateGameView.vue'
import WishlistView from '../views/WishlistView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import UserPageView from '../views/UserPageView.vue'
import AllUsersView from '../views/AllUsersView.vue'
import AllGamesView from '../views/AllGamesView.vue'
import LibraryView from '../views/LibraryView.vue'
import RedefiView from '@/views/RedefiView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/details/:id',
    name:'Details',
    component: GameDetails
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path: '/checkout/:id',
    name: 'Checkout',
    component: CheckoutView
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
  },
  {
    path: '/all-users',
    name: 'AllUsers',
    component: AllUsersView
  },
  {
    path: '/all-games',
    name: 'AllGames',
    component: AllGamesView
  },
  {
    path: '/library',
    name: 'Library',
    component: LibraryView
  },{
    path: '/redefinir-senha',
    name: 'Redefi',
    component: RedefiView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const publicPages = ['Login', 'Redefi'];
  if (!publicPages.includes(to.name) && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
