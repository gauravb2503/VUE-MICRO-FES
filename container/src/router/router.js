// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
