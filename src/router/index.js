import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productpage from '../views/ProductpageView.vue'
import Ingredientlist from '../views/IngredientlistView.vue';
import Ingredientview from '../views/IngredientlistSearchView.vue'
import Favoritelist from '../views/FavoritelistView.vue'
import Allergy from '../views/AllergyView.vue'
import Scanner from '../views/Scanner.vue';
import Translation from '../views/TranslationView.vue'
import Scanngeschiedenis from '../views/ScanngeschiedenisView.vue'

//Vue.use(VueRouter);

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
      path: '/ingredientlist',
      name: 'ingredientlist',
      component: Ingredientlist,
    },
    {
      path: '/ingredientview',
      name: 'ingredientview',
      component: Ingredientview
    },
    {
      path: '/favoritelist',
      name: 'favoritelist',
      component: Favoritelist
    },
    {
      path: '/allergy',
      name: 'allergy',
      component: Allergy
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: Scanner
    },
    {
      path: '/translation',
      name: 'translation',
      component: Translation
    },
{
  path: '/Scanngeschiedenis',
      name: 'Scanngeschiedenis',
    component: Scanngeschiedenis
},
]
})

export default router

