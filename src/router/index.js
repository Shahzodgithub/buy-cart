import Vue from 'vue';
import VueRouter from 'vue-router';
import AllProducts from '../components/AllProducts';
import AllSmartphones from '../components/AllSmartphones';
import AllNotebooks from '../components/AllNotebooks';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'All Products',
    component: AllProducts,
  },
  {
    path: '/smartphones',
    name: 'Smartphones',
    component: AllSmartphones,
  },
  {
    path: '/notebooks',
    name: 'Notebooks',
    component: AllNotebooks,
  },
  {
    path: '/product-details',
    name: 'Product',
    component: Product,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CartCheckout,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
