import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productpage from '../views/ProductpageView.vue'
import Favoritelist from '../views/FavoritelistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productpage',
      name: 'productpage',
      component: Productpage
    },
    {
      path: '/favoritelist',
      name: 'favoritelist',
      component: Favoritelist
    }
  ]
})

export default router
